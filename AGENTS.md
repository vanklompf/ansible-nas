# AGENTS.md

## Cursor Cloud specific instructions

### Project overview

Ansible-NAS is an Ansible project that deploys ~280 Docker-based applications to a home server. The main playbook is `nas.yml`; roles live under `roles/`. A Docusaurus documentation site lives in `website/`.

### Python virtual environment

A Python 3.13 venv is located at `/workspace/.venv`. Always activate it before running any commands:

```
source /workspace/.venv/bin/activate
```

### Key commands

| Task | Command |
|---|---|
| Syntax check | `ansible-playbook -i inventory nas.yml --syntax-check` |
| Ansible lint | `ansible-lint nas.yml` |
| YAML lint | `yamllint .` |
| Run a Molecule test | `cd roles/<role> && molecule -c ../../tests/molecule/base.yml test` |
| Docs dev server | `cd website && npm start` |
| Docs build | `cd website && npm run build` |

### Docker-in-Docker workarounds for Molecule tests

The Cloud Agent VM is itself a container inside a Firecracker VM. Running Docker
inside it (needed for Molecule's Docker driver) requires several workarounds.

#### 1. Install Docker with nested-container patches

```bash
# Install Docker CE
sudo install -m 0755 -d /etc/apt/keyrings
curl --retry 3 --retry-delay 5 -fsSL https://download.docker.com/linux/ubuntu/gpg \
  | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] \
  https://download.docker.com/linux/ubuntu $(. /etc/os-release && echo "$VERSION_CODENAME") stable" \
  | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
sudo apt-get install -y \
  docker-ce=5:28.5.2-1~ubuntu.24.04~noble \
  docker-ce-cli=5:28.5.2-1~ubuntu.24.04~noble \
  containerd.io docker-buildx-plugin docker-compose-plugin
```

#### 2. Use fuse-overlayfs storage driver

The kernel does not support all overlay2 features inside the nested environment.
`fuse-overlayfs` is required as the Docker storage driver.

```bash
sudo apt-get install -y fuse-overlayfs
sudo mkdir -p /etc/docker
printf '%s\n' '{' '  "storage-driver": "fuse-overlayfs"' '}' \
  | sudo tee /etc/docker/daemon.json
```

#### 3. Switch to iptables-legacy

The kernel does not support all nftables features. Docker networking requires
the legacy iptables backend.

```bash
sudo apt-get install -y iptables
sudo update-alternatives --set iptables /usr/sbin/iptables-legacy
sudo update-alternatives --set ip6tables /usr/sbin/ip6tables-legacy
```

#### 4. Start the Docker daemon manually

There is no systemd running in the VM, so Docker must be started as a
background process.

```bash
sudo dockerd &>/tmp/dockerd.log &
sleep 3
sudo chmod 666 /var/run/docker.sock   # allow non-root access
```

Verify with `docker run --rm hello-world`.

#### 5. cgroup v2 "domain threaded" limitation

The VM's root cgroup is in **domain threaded** mode. Any Docker container that
sets a **memory limit** (`-m` / `--memory` / the `memory:` key in
`community.docker.docker_container`) will fail at start with:

```
unable to apply cgroup configuration: cannot enter cgroupv2
"/sys/fs/cgroup/docker" with domain controllers -- it is in threaded mode
```

**Impact on Molecule tests:** Molecule tests that converge a role deploy
containers on the *host* Docker daemon (the socket is bind-mounted into the
Molecule test container). If the role's task sets `memory:` on a container, the
converge step will fail. Roles that do **not** set memory limits pass without
issues — all 22 core roles with Molecule tests pass today because their
converge playbooks do not trigger this path.

**Workaround when running a role directly (not via Molecule):** Override the
`memory` variable to `"0"` (disables the limit) and remove any stale
containers from a previous failed attempt before re-running:

```bash
docker rm -f <container_name>
ANSIBLE_ROLES_PATH=/workspace/roles ansible-playbook -i localhost, -c local \
  -e "<role>_memory=0" playbook.yml
```

There is no workaround that preserves the memory limit inside this VM.

### Pre-existing lint issues

The repository has pre-existing `yamllint` and `ansible-lint` findings (trailing spaces, missing newlines at end of file, var naming, etc.). These are not regressions from agent changes — they exist in the upstream codebase.

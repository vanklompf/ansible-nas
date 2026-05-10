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

### Docker and Molecule limitations in Cloud Agent VMs

- Docker containers that set **memory limits** (`-m` / `memory:`) will fail with a cgroup v2 "domain threaded" error. This is a known limitation of the nested container environment (Docker inside a container inside Firecracker VM).
- Molecule tests use the Docker driver and may encounter this cgroup limitation when the role under test sets `memory:` on its containers.
- Docker must be started manually: `sudo dockerd &>/tmp/dockerd.log &` followed by `sudo chmod 666 /var/run/docker.sock`. The `fuse-overlayfs` storage driver and `iptables-legacy` are required (already configured in `/etc/docker/daemon.json` and via `update-alternatives`).

### Pre-existing lint issues

The repository has pre-existing `yamllint` and `ansible-lint` findings (trailing spaces, missing newlines at end of file, var naming, etc.). These are not regressions from agent changes — they exist in the upstream codebase.

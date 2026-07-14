# Steam

Deploys [Steam Headless](https://github.com/Steam-Headless/docker-steam-headless) as a GPU-accelerated Steam and Sunshine game-streaming host intended only for trusted networks.

The role is opt-in, is not part of the `core` deployment set, and requires an exact image digest before it can be enabled. It uses host networking and the broad capabilities required by the upstream container, so it must be treated as host-trusted software rather than as a security boundary. Host networking exposes listeners on every host interface; credentials alone do not make those listeners private.

## Pre-deployment checks

1. Identify the GPU and exact device nodes on the target host.
2. Map the correct `/dev/dri/card*` and `/dev/dri/renderD*` nodes.
3. Confirm `/dev/fuse` and `/dev/uinput` exist.
4. Select and test an image, then store its `sha256:` manifest digest.
5. Put the noVNC/Sunshine password in an Ansible Vault-backed variable.
6. Review host firewall policy and set `steam_host_network_acknowledged: true` only after the service is restricted to trusted LAN/Tailscale clients.
7. Ensure these listeners are unused and allowed only on trusted interfaces:

   - noVNC: TCP `9083` (selected to avoid the existing Traefik dashboard on `8083`)
   - Sunshine: TCP `47984`, `47989`, `47990`, `48010`; UDP `47998`, `47999`, `48000`, `48002`, `48010`
   - Steam Remote Play: UDP `27031-27036`; TCP `27036-27037`

The role checks the union of these ports with `ss` before the first container start. This detects conflicts but does not configure a firewall. Because the container uses host networking, firewall enforcement must happen on the host or upstream network.

## Minimum configuration

```yaml
steam_enabled: true
steam_host_network_acknowledged: true
steam_image_digest: "sha256:<tested-manifest-digest>"
steam_password: "{{ vault_steam_password }}"
steam_gpu_vendor: intel
steam_gpu_devices:
  - /dev/dri/card0:/dev/dri/card0
  - /dev/dri/renderD128:/dev/dri/renderD128
```

`steam_password` is used for both the noVNC web UI (`USER_PASSWORD`) and Sunshine administration (`SUNSHINE_PASS`).

## Deployment

After reviewing host-specific values and explicitly approving deployment, use only the narrow role tag:

```bash
ansible-playbook -i <inventory> nas.yml --tags steam --check
ansible-playbook -i <inventory> nas.yml --tags steam
```

Do not add this role to `core` until it has been proven stable on the target GPU and driver combination.

## Persistent paths

All persistent data lives under `steam_data_directory` (`{{ docker_home }}/steam` by default):

- `home/` backs `/home/default` and stores the Steam profile, Sunshine configuration, pairing state, Proton prefixes, and caches.
- `games/` backs `/mnt/games` and should be added as a Steam library.
- `sockets/` keeps X11 and PulseAudio sockets.

## Updating safely

Never track a rolling image in an enabled deployment. Pull and test a candidate image separately, update `steam_image_digest`, run check mode, deploy the narrow tag, and retain the previous digest for rollback.

## Security and stability notes

The upstream template requires host networking, host IPC, `NET_ADMIN`, `SYS_ADMIN`, `SYS_NICE`, unconfined seccomp/AppArmor, GPU access, `/dev/fuse`, `/dev/uinput`, and input-device cgroup access. Keep noVNC and Sunshine administration restricted by host/network firewall policy. Do not store Steam credentials in Ansible; enter Steam credentials and 2FA interactively through the trusted-network UI.

The container creation task uses `no_log: true` because the noVNC/Sunshine password is passed as environment variables. That value remains visible through `docker inspect` to users with Docker-daemon access, so Docker access must be treated as root- and secret-equivalent.

Automatic image updates are not recommended. Driver, Xorg, Steam, Sunshine, and input changes can cause hardware-specific regressions; pinning the tested digest is mandatory in this role.

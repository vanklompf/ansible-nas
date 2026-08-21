# Steam

Homepage: [https://github.com/Steam-Headless/docker-steam-headless](https://github.com/Steam-Headless/docker-steam-headless)

GPU-accelerated Steam and Sunshine (Moonlight) host. Opt-in, not in `core`. Uses host networking, host IPC, and broad capabilities — treat it as host-trusted software, not a security boundary. Restrict listeners to trusted LAN/Tailscale.

## Usage

Requires a tested image digest, GPU device nodes, a Vault-backed password, and `steam_host_network_acknowledged: true` after a firewall review.

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

`steam_password` is both noVNC (`USER_PASSWORD`) and Sunshine admin (`SUNSHINE_PASS`). Log into Steam (including 2FA) in the UI; do not store Steam credentials in Ansible.

Confirm `/dev/fuse`, `/dev/uinput`, and the mapped DRI nodes exist. The role checks required ports with `ss` before first start (conflicts only — it does not configure a firewall). Host networking exposes listeners on every interface; firewall enforcement must happen on the host or upstream network.

| Service | Ports |
| --- | --- |
| noVNC | TCP `9083` (avoids Traefik on `8083`) |
| Sunshine | TCP `47984`, `47989`, `47990`, `48010`; UDP `47998`–`48000`, `48002`, `48010` |
| Steam Remote Play | UDP `27031`–`27036`; TCP `27036`–`27037` |

```bash
ansible-playbook -i <inventory> nas.yml --tags steam --check
ansible-playbook -i <inventory> nas.yml --tags steam
```

Do not add this role to `core` until it has been proven stable on the target GPU and driver combination.

Data lives under `steam_data_directory` (`{{ docker_home }}/steam`): `home/` → `/home/default` (profile, Sunshine, Proton), `games/` → `/mnt/games` (add as a Steam library), `sockets/` (X11, PulseAudio).

## Updates

Never track a rolling tag. Pull and test a candidate, pin `steam_image_digest`, check-mode, then deploy `--tags steam`. Keep the previous digest for rollback. Driver, Xorg, Steam, and Sunshine changes are hardware-specific.

## Host IPC `/dev/shm` cleanup

Host IPC can leave orphaned `/dev/shm/u<uid>-Shm_*` and Valve IPC files after crashes or OOM. With `steam_shm_cleanup_enabled` (default `true`), the role installs `/usr/local/sbin/steam-shm-cleanup`, runs it around start/stop, and schedules a daily 02:00 cron. Set `false` to remove the script and cron.

## Sunshine udev overlay

Upstream `start-dumb-udev.sh` restarts Xorg when Sunshine virtual inputs appear. Sunshine creates those devices at start, so Xorg/desktop/Sunshine crash-loop. With `steam_udev_xorg_restart_enabled` (default `false`), the role bind-mounts `/usr/local/sbin/steam-start-dumb-udev` over the image script: input-node sync stays, the Xorg restart does not. Set `true` only to restore the upstream script after a fix.

## Security

The container needs `NET_ADMIN`, `SYS_ADMIN`, `SYS_NICE`, unconfined seccomp/AppArmor, GPU, `/dev/fuse`, `/dev/uinput`, and input cgroup access. The create task uses `no_log: true` because the password is in env vars; `docker inspect` still shows it, so Docker access is root-equivalent.

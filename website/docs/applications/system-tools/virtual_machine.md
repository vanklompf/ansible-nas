---
title: "Virtual Machine"
---

Provisions a single headless KVM/QEMU virtual machine on your NAS via libvirt. The guest boots an Ubuntu Server cloud image bootstrapped with cloud-init: SSH keys, timezone, mounts, and (optionally) Tailscale come up automatically on first boot.

Host directories can optionally be exposed to the guest with **virtiofs** via `vm_mounts`. By default no host paths are mounted.

## Usage

Set `vm_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` and supply at least one SSH public key:

```yaml
vm_enabled: true
vm_name: jezyk-vm
vm_vcpus: 4
vm_memory_mb: 8192
vm_disk_gb: 60
vm_ssh_authorized_keys:
  - "ssh-ed25519 AAAA... me@laptop"
```

If `tailscale_enabled` and `tailscale_authkey` are already set on the host, the guest will join the same tailnet automatically. Override the `vm_tailscale_*` variables to use a different account or extra `tailscale up` flags.

## Specific Configuration

* **Spec** – `vm_vcpus` (default 2), `vm_memory_mb` (default 4096), `vm_disk_gb` (default 40), `vm_cpu_mode` (default `host-passthrough`).
* **Guest image** – `vm_image_url` and `vm_image_checksum`. Defaults to the latest Ubuntu 26.04 LTS (Resolute Raccoon) **released** cloud image with checksum from the upstream `SHA256SUMS` file.
* **Storage** – per-VM qcow2 at `/var/lib/libvirt/images/<vm_name>/disk.qcow2`, backed by a shared cache copy of the cloud image. Growing `vm_disk_gb` resizes the disk on the next apply (the VM is rebooted to pick up the change).
* **Networking** – attaches to the libvirt `default` NAT network. Set `vm_mac_address` to a stable locally-administered MAC for a deterministic DHCP lease.
* **Mounts (`vm_mounts`)** – empty by default (no host directories mounted). Each entry has `tag`, `host_path`, `guest_path`, `readonly`. Example:
  ```yaml
  vm_mounts:
    - { tag: code, host_path: "{{ code_root }}", guest_path: /mnt/code, readonly: false }
    - { tag: backup, host_path: "{{ backup_root }}", guest_path: /mnt/backup, readonly: true }
  ```
* **Tailscale in the guest** – `vm_tailscale_enabled` defaults to the host's `tailscale_enabled`. `vm_tailscale_authkey` defaults to the host `tailscale_authkey`. `vm_tailscale_args` accepts e.g. `"--ssh"` or `"--advertise-routes=..."`.
* **Disabling** – set `vm_enabled: false` to destroy and undefine the libvirt domain. The qcow2 and seed iso are preserved so the VM can be re-enabled with its state intact.

## Connecting

Once booted you have several options:

* `virsh console <vm_name>` from the host for the serial console.
* `ssh <vm_user>@<guest-ip>` — find the IP with `virsh domifaddr <vm_name>` or `virsh net-dhcp-leases default`.
* If Tailscale is enabled in the guest, SSH to its tailnet hostname.

## Requirements

* The NAS host must support hardware virtualization (`/dev/kvm` available, `egrep -c '(vmx|svm)' /proc/cpuinfo` non-zero).
* The role installs `qemu-kvm`, `libvirt-daemon-system`, `virtinst`, `virtiofsd`, `cloud-image-utils`, `python3-libvirt`, and `python3-lxml`.
* Make sure to run `ansible-galaxy collection install -r requirements.yml` so `community.libvirt` is available.

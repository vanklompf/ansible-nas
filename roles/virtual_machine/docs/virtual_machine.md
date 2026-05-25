# Virtual Machine

Provisions a single headless KVM/QEMU virtual machine on the NAS via libvirt. The guest boots from the official Ubuntu Server cloud image and is configured with cloud-init: SSH keys, timezone, mounts, and (optionally) Tailscale come up on first boot.

Host directories are exposed to the guest with **virtiofs**. By default every entry in `samba_shares` is mapped one-to-one into the guest under `/mnt/<share-name>` as **read-only**. Override `vm_mounts` to allow writes on specific paths.

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

If `tailscale_enabled` and `tailscale_authkey` are already set on the host, the guest will join the same tailnet automatically. Override with `vm_tailscale_*` if you want different settings inside the VM.

## Specific Configuration

* **Spec**: `vm_vcpus`, `vm_memory_mb`, `vm_disk_gb` and `vm_cpu_mode` (defaults to `host-passthrough`).
* **Guest image**: `vm_image_url` plus `vm_image_checksum`. Defaults to the latest Ubuntu 26.04 LTS (Resolute Raccoon) **released** cloud image; checksum points at the upstream `SHA256SUMS` file so signed releases verify automatically.
* **Storage**: per-VM qcow2 lives at `/var/lib/libvirt/images/<vm_name>/disk.qcow2` and is backed by a shared cache copy of the cloud image. Growing `vm_disk_gb` resizes the disk on the next apply.
* **Networking**: attaches to the libvirt `default` NAT network. Set `vm_mac_address` to a stable locally-administered MAC if you want a deterministic DHCP lease (also enables the post-boot SSH wait).
* **Mounts (`vm_mounts`)**: defaults to `samba_shares`, mounted read-only at `/mnt/<share-name>`. Each entry has `tag`, `host_path`, `guest_path`, and `readonly`. Override the variable to provide an arbitrary list, e.g.:
  ```yaml
  vm_mounts:
    - tag: code
      host_path: "{{ code_root }}"
      guest_path: /mnt/code
      readonly: false
  ```
* **Tailscale in the guest**: `vm_tailscale_enabled` defaults to the host's `tailscale_enabled`. Provide `vm_tailscale_authkey` (defaults to the host `tailscale_authkey`), optionally `vm_tailscale_args` (e.g. `"--ssh"`).
* **Disable**: set `vm_enabled: false` to destroy and undefine the domain. The qcow2 and seed iso are kept on disk so you can re-enable without losing state.

## Connecting

Once booted, you have several options:

* `virsh console <vm_name>` from the host to attach to the serial console.
* `ssh <vm_user>@<guest-ip>` (find the IP with `virsh domifaddr <vm_name>` or `virsh net-dhcp-leases default`).
* If Tailscale is enabled in the guest, just SSH to its tailnet hostname.

## Requirements

* The NAS host must support hardware virtualization (`/dev/kvm` available, `egrep -c '(vmx|svm)' /proc/cpuinfo` non-zero).
* Ansible collection `community.libvirt` is added to `requirements.yml`; install with `ansible-galaxy collection install -r requirements.yml`.
* Apt packages `qemu-kvm`, `libvirt-daemon-system`, `virtinst`, `virtiofsd`, `cloud-image-utils`, `python3-libvirt`, and `python3-lxml` are installed by the role.

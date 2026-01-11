---
title: "Pocket ID (11notes)"
description: "A simple OIDC provider by 11notes"
---

Homepage: [https://github.com/11notes/docker-pocket-id](https://github.com/11notes/docker-pocket-id)

A simple OIDC (OpenID Connect) provider that allows users to authenticate with their passkeys to your services. This version by 11notes runs rootless and distroless for maximum security and includes a PostgreSQL backend.

## Features

- OIDC (OpenID Connect) provider
- Passkey authentication support
- Secure rootless and distroless container
- PostgreSQL backend for data persistence

## Usage

Set `pocket_id_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file.

Pocket ID web interface can be found at [https://pocket-id.ansible_nas_domain](https://pocket-id.ansible_nas_domain) if available externally, or at [http://ansible_nas_host_or_ip:8175](http://ansible_nas_host_or_ip:8175) otherwise.

## Configuration

The following variables can be configured in your inventory file:

### Basic Settings

- `pocket_id_enabled`: Enable/disable the service (default: `false`)
- `pocket_id_available_externally`: Make the service available from outside your network (default: `false`)

### Port Configuration

- `pocket_id_port`: External port for the service (default: `"8175"`)
- `pocket_id_container_port`: Internal container port (default: `"1411"`)

### Database Configuration

- `pocket_id_postgres_password`: Password for PostgreSQL (default: `"change_me_please"`)

### Other Settings

- `pocket_id_timezone`: Timezone for the service (default: `"UTC"`)
- `pocket_id_app_url`: Full URL for the application (default: `"https://{{ pocket_id_hostname }}.{{ ansible_nas_domain }}"`)

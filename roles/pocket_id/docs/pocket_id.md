# Pocket ID

Pocket ID is a simple OIDC (OpenID Connect) provider that allows users to authenticate with their passkeys to your services. It's designed to run rootless and distroless for maximum security.

## Features

- OIDC (OpenID Connect) provider
- Passkey authentication support
- Secure rootless and distroless container
- PostgreSQL backend for data persistence

## Requirements

- Docker and Docker Compose
- Traefik reverse proxy (for external access)

## Configuration

The following variables can be configured in your inventory file:

### Basic Settings
- `pocket_id_enabled`: Enable/disable the service (default: `false`)
- `pocket_id_available_externally`: Make the service available from outside your network (default: `false`)

### Port Configuration
- `pocket_id_port`: External port for the service (default: `"8175"`)
- `pocket_id_container_port`: Internal container port (default: `"1411"`)

### Hostname
- `pocket_id_hostname`: Hostname for the service (default: `"pocket-id"`)

### Database Configuration
- `pocket_id_postgres_password`: Password for PostgreSQL (default: `"change_me_please"`)

### Other Settings
- `pocket_id_timezone`: Timezone for the service (default: `"UTC"`)
- `pocket_id_app_url`: Full URL for the application (default: `"https://{{ pocket_id_hostname }}.{{ ansible_nas_domain }}"`)

## Accessing the Service

Once enabled, the service will be available at `https://pocket-id.{{ ansible_nas_domain }}` if `pocket_id_available_externally` is set to `true`.

## Security Notes

- The container runs rootless as UID/GID 1000:1000 for security
- The image is distroless with no shell available
- All security best practices are implemented (read-only filesystem, no-new-privileges, etc.)
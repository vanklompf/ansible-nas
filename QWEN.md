# Ansible-NAS Project Context

## Project Overview

Ansible-NAS is an Ansible-based project designed to transform a stock Ubuntu installation into a fully-featured Network Attached Storage (NAS) solution using Docker containers. It provides an alternative to traditional NAS systems like FreeNAS by leveraging Ansible automation to deploy and configure various self-hosted applications.

The project allows users to configure and deploy over 200 different applications and services on their home server, ranging from media servers, automation tools, and productivity applications to development tools and monitoring solutions. Applications can be made accessible externally via hostname configuration and DNS updates.

## Architecture & Structure

- **Main Playbook**: `nas.yml` - The primary Ansible playbook that orchestrates all roles
- **Roles Directory**: Contains over 200 individual application roles in the `/roles` directory
- **Configuration Management**: Uses Ansible variables, group_vars, and default variables per role
- **Docker Focus**: All applications run in Docker containers managed via Ansible
- **Requirements**: Uses external Ansible roles and collections defined in `requirements.yml`

## Key Components

### Core Functionality

- User management (ansible-nas-users role)
- Samba server configuration
- NFS sharing
- Docker installation and management
- General NAS configuration (ansible-nas-general role)
- Docker-specific NAS configuration (ansible-nas-docker role)

### Application Stacks

- Preconfigured application stacks for common use cases (e.g., logging stack with Grafana Loki)

### External Dependencies

- Uses several external Ansible Galaxy roles:
  - geerlingguy.docker
  - geerlingguy.nfs
  - vladgh.samba
  - And others as defined in requirements.yml

## Development Environment

### Prerequisites

- Python 3 environment
- Docker (for running tests)
- Ansible (managed via pyproject.toml dependencies)
- pre-commit hooks

### Dependencies Management

- Python dependencies via `pyproject.toml`
- Ansible roles and collections via `requirements.yml`
- Development dependencies include molecule for testing, ansible-lint, yamllint, etc.

## Building and Running

### Setup

1. Install Python dependencies: `pip install -r requirements-dev.txt` or use the pyproject.toml
2. Install Ansible Galaxy roles: `ansible-galaxy install -r requirements.yml`
3. Configure your inventory file with target host information
4. Customize variables in group_vars or host_vars as needed

### Execution

```bash
# Run the full NAS setup
ansible-playbook nas.yml

# Run specific roles using tags
ansible-playbook nas.yml --tags "nextcloud,traefik"

# Target specific hosts
ansible-playbook nas.yml -i inventory_file
```

### Testing

- Uses Molecule for role testing
- Individual roles have molecule/default configuration
- GitHub Actions for CI/CD integration

## Development Conventions

### Adding New Applications

- Follow the `hello_world` example as a template
- Each application has its own role in the `/roles` directory
- Include default variables, main tasks, documentation, and testing
- Update README.md to include the new application in the list
- Each role should have enable/disable functionality with boolean variables

### Role Structure

Each application role typically includes:

- `defaults/main.yml` - Default configuration variables
- `tasks/main.yml` - Main tasks to deploy the application
- `docs/` - Documentation files
- `molecule/` - Testing configuration
- Requirements for Docker containers and network configuration

### Variable Naming Convention

- Variables follow the pattern: `{app_name}_{setting}` (e.g., `hello_world_enabled`)
- Common variables include `{app}_enabled`, `{app}_port`, `{app}_hostname`, etc.

### Tagging System

- Each role has associated tags for selective execution (e.g., `--tags nextcloud`)
- Core NAS functionality has dedicated tags (`ansible-nas-users`, `docker`, etc.)

## Key Features

- **Extensible**: Easy to add new applications by creating new roles
- **Configurable**: Applications can be individually enabled/disabled via variables
- **External Access**: Support for exposing applications externally with Traefik proxy
- **Automated**: Handles Docker container lifecycle, updates, and configuration
- **Modular**: Each application is an independent role that can be run separately
- **Community Driven**: Over 200 supported applications with active community contributions

## Documentation and Support

- Official documentation: <https://ansible-nas.io>
- GitHub repository: <https://github.com/davestephens/ansible-nas>
- Community chat: Gitter
- Requirements: Targeted at Ubuntu 22.04 LTS with recommended hardware specifications

## Project Files

- `nas.yml` - Main Ansible playbook
- `ansible.cfg` - Ansible configuration
- `pyproject.toml` - Python project and dependency management
- `requirements.yml` - Ansible role/collection dependencies
- `roles/` - Directory containing all application roles
- `group_vars/` - Host/group specific variables
- `README.md` - Main project documentation
- `CONTRIBUTING.md` - Contribution guidelines

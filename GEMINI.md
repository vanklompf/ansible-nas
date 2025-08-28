# Ansible-NAS Project Context

## Project Overview

Ansible-NAS is an Ansible-based automation project designed to transform a standard Ubuntu server into a powerful, customizable Network Attached Storage (NAS) system. It leverages Docker to deploy a wide variety of self-hosted applications, ranging from media servers (like Plex, Jellyfin) and download clients (like Transmission, Sabnzbd) to productivity tools (like Nextcloud, Paperless-ng) and home automation platforms (like Home Assistant).

The core philosophy is to provide a stable, maintainable, and flexible NAS solution that avoids the pitfalls of monolithic NAS operating systems by using standard Ubuntu LTS and containerized applications.

## Key Technologies

* **Ansible:** The primary automation tool used for configuring the Ubuntu server and managing Docker containers.
* **Docker:** Used to run almost all applications, providing isolation and ease of deployment.
* **Ubuntu LTS:** The target operating system (currently 22.04 LTS).
* **Samba/NFS:** For file sharing over the network.
* **Portainer:** Included for easy management of Docker containers.

## Project Structure

* `nas.yml`: The main Ansible playbook that defines the roles to be executed.
* `group_vars/all.yml`: Contains default configuration variables for the NAS.
* `roles/`: Directory containing individual Ansible roles. Each role typically corresponds to a specific application or service (e.g., `plex`, `nextcloud`, `traefik`).
* `roles/<application>/`: Standard Ansible role structure including `tasks/`, `defaults/`, `templates/`, etc.
* `roles/<application>/defaults/main.yml`: Defines default variables for the specific application (e.g., enabled status, ports, directories).
* `roles/<application>/tasks/main.yml`: Contains the Ansible tasks to deploy and configure the application, often involving Docker container management.
* `roles/<application>/docs/`: Documentation for the specific application.
* `website/docs/`: Documentation for the specific application.
* `roles/<application>/molecule/`: Contains tests for the role using Molecule.

## Building, Running, and Testing

* **Setup:** Requires an Ubuntu 22.04 LTS server.
* **Installation:** Follow the official documentation for initial setup, which involves installing Ansible, cloning the repository, and configuring your inventory file (usually based on the example in `inventories/`).
* **Configuration:** Customize your NAS by editing `inventories/<your_inventory>/group_vars/nas.yml`. Enable/disable applications and adjust settings.
* **Deployment:** Run the main playbook using `ansible-playbook nas.yml -i inventories/<your_inventory>`.
* **Testing:** Individual roles can be tested using Molecule. Tests are located in `roles/<application>/molecule/`.

## Development Conventions

* **Adding Applications:** Follow the `hello_world` example role as a template. This includes providing `defaults`, `tasks`, `docs`, and `molecule` tests.
* **Variables:** Use clear, prefixed variable names (e.g., `application_name_enabled`, `application_name_port`).
* **Defaults:** Place sensible defaults in `roles/<application>/defaults/main.yml`. User-specific overrides go in inventory files.
* **Documentation:** Add documentation for new applications in `roles/<application>/docs/` and in `website/docs/` and update the main `README.md` list.
* **Testing:** Include Molecule tests for new roles.
* **PRs:** Focus on one piece of functionality or bugfix per pull request.


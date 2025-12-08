# TinyAuth

Homepage: [https://github.com/steveiliop56/tinyauth](https://github.com/steveiliop56/tinyauth)

A lightweight authentication service that works with Traefik to provide authentication for your containers.

## Usage

Set `tinyauth_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file.

TinyAuth web interface can be found at [https://tinyauth.ansible_nas_domain](https://tinyauth.ansible_nas_domain).

The default user and password are user:password. For security reasons, change these in your inventory file.

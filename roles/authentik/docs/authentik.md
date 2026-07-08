# Authentik

Homepage: [https://goauthentik.io](https://goauthentik.io)

authentik is an open-source Identity Provider focused on flexibility and versatility. You can use authentik in an existing environment to add support for new protocols, implement sign-up/recovery/etc. in your application so you don't have to deal with it, and many other things.

## Usage

Set `authentik_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file.

Set all `authentik_*` variables in `inventories/<your_inventory>/group_vars/all.yml`.

The Authentik web interface can be found at [http://ansible_nas_host_or_ip:9002](http://ansible_nas_host_or_ip:9002).

To start the initial setup, navigate to [http://ansible_nas_host_or_ip:9002/if/flow/initial-setup/](http://ansible_nas_host_or_ip:9002/if/flow/initial-setup/). There you will be prompted to set a password for the akadmin user.

## Blueprints

The worker container mounts `{{ authentik_data_directory }}/blueprints` at
`/blueprints/managed`. YAML files placed there are discovered and applied
automatically by authentik.

### SSO admin user and group

Set `authentik_blueprint_sso_admin_enabled: true` together with the shared
`sso_admin_*` variables in `group_vars/all.yml`. This creates the
`sso_admin_group` (default `nas-admins`, with authentik superuser) and a user
(`sso_admin_username`, defaulting to `ansible_nas_user`). The password is taken
from `sso_admin_password` when set, otherwise generated and persisted on the
host at `{{ authentik_data_directory }}/.sso_admin_password`.

### Arcane OIDC

Set `authentik_blueprint_arcane_enabled: true` together with the Arcane OIDC
inventory variables (`arcane_oidc_client_id`, `arcane_oidc_client_secret`, etc.).
The role templates an OAuth2 provider and application (slug `arcane`). Map the
shared `sso_admin_group` to the Arcane admin role via
`arcane_oidc_role_mappings` on the arcane role.

### Homepage API token

Set `authentik_blueprint_homepage_api_enabled: true` (default) to provision a dedicated
service account and API token for the Homepage widget via blueprint. The token key is
generated and persisted on the host at `{{ authentik_homepage_api_key_file }}`. Set
`authentik_homepage_api_key` in inventory only to seed an existing key once when
migrating.

## Homepage widget

When `homepage_enabled` is true, the server container is labelled for Homepage under
**Networking**. With `authentik_blueprint_homepage_api_enabled`, the widget key is wired
automatically. For authentik 2025.8.0+, set `authentik_homepage_widget_version: "2"`.

## Specific Configuration

Check [https://goauthentik.io/docs/installation/configuration](https://goauthentik.io/docs/installation/configuration) for full list of configuration options.

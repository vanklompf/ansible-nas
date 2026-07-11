# Arcane

Homepage: [https://github.com/getarcaneapp/arcane](https://github.com/getarcaneapp/arcane)

Arcane is a self-hosted platform for managing and deploying applications with Docker.

## Usage

Set `arcane_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file.

Arcane's web interface can be found at [http://ansible_nas_host_or_ip:3552](http://ansible_nas_host_or_ip:3552).

## Single Sign-On (OIDC)

Arcane can delegate authentication to any OpenID Connect provider (for example
the bundled [authentik](../../authentik/docs/authentik.md) role).

1. In your identity provider, create an OAuth2/OpenID provider and application
   for Arcane. Register the redirect URI:

   ```
   {{ arcane_app_url }}/auth/oidc/callback
   ```

   With authentik, enable `arcane_oidc_enabled: true` — the arcane role templates
   the OAuth2 provider and application; the authentik role applies the blueprint.

2. In your inventory, enable OIDC:

   ```yaml
   arcane_oidc_enabled: true
   ```

   With authentik, application slug and OAuth client ID match `arcane_hostname`,
   and `arcane_oidc_issuer_url` defaults from the shared `authentik_oidc_issuer_base`.
   The client secret is auto-generated and persisted at
   `arcane_oidc_client_secret_file`. The shared SSO admin group (`sso_admin_group`)
   and authentik's built-in `authentik Admins` group are mapped to Arcane's admin
   role automatically.

   The provider name and logo shown on the login screen come from the shared
   `oidc_provider_name` / `oidc_provider_logo_url` variables (see
   `group_vars/all.yml`), so they can be reused across apps.

   Set `arcane_oidc_auto_login: true` to send users straight to the provider
   instead of showing Arcane's local login form. All available variables are
   listed in `roles/arcane/defaults/main.yml`.

`APP_URL` (derived from `arcane_available_externally`/`arcane_hostname`) must
match the exact URL the browser uses, otherwise Arcane returns
`403 Cross-origin request blocked` on login.

## Remote environments (agent)

To manage another Docker host from the same Arcane UI, run a headless edge
agent on that remote host. The agent is part of this same role and is
independent of the manager, so a host can run the manager, the agent, or both.

1. On the **manager**, open `Environments > Add Environment`, choose the **Edge**
   tab, generate the agent configuration and copy the `AGENT_TOKEN`.
2. On the **remote host's** inventory, set:

   ```yaml
   arcane_agent_enabled: true
   arcane_agent_token: "arc_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
   ```

3. Deploy the remote host. The agent dials out to the manager and auto-pairs on
   startup.

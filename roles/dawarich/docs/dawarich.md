# Dawarich

Homepage: [https://github.com/Freika/dawarich](https://github.com/Freika/dawarich)

Dawarich is a self-hosted location history and analytics application.

## Usage

Set `dawarich_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file.

Dawarich's web interface can be found at [http://ansible_nas_host_or_ip:3888](http://ansible_nas_host_or_ip:3888).

## Single Sign-On (OIDC)

Dawarich can delegate authentication to any OpenID Connect provider (for example
the bundled [authentik](../../authentik/docs/authentik.md) role).

1. In your identity provider, create an OAuth2/OpenID provider and application
   for Dawarich. Register the redirect URI:

   ```
   {{ dawarich_app_url }}/users/auth/openid_connect/callback
   ```

   With authentik, enable `dawarich_oidc_enabled: true` — the dawarich role
   templates the OAuth2 provider and application; the authentik role applies
   the blueprint.

2. In your inventory, enable OIDC:

   ```yaml
   dawarich_oidc_enabled: true
   ```

   With authentik, application slug and OAuth client ID match `dawarich_hostname`,
   and `dawarich_oidc_issuer_url` defaults from the shared `authentik_oidc_issuer_base`.
   The client secret is auto-generated and persisted at
   `dawarich_oidc_client_secret_file`.

   The provider name shown on the login screen comes from the shared
   `oidc_provider_name` variable (see `group_vars/all.yml`), so it can be
   reused across apps.

   Set `dawarich_oidc_auto_login: true` to hide the local email/password form and
   require OIDC sign-in. All available variables are listed in
   `roles/dawarich/defaults/main.yml`.

OIDC environment variables must be set on both the `dawarich_app` and
`dawarich_sidekiq` containers; the role handles this automatically.

`dawarich_app_url` (derived from `dawarich_available_externally`/`dawarich_hostname`)
must match the exact URL the browser uses, otherwise OIDC callback validation
will fail.

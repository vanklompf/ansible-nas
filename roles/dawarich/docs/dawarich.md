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

   With authentik, enable `authentik_blueprint_dawarich_enabled: true` on the
   authentik role instead — it creates the provider and application
   declaratively from the same `dawarich_oidc_*` inventory variables.

   Otherwise, note the generated client ID and client secret from the UI.

2. In your inventory, enable and configure OIDC:

   ```yaml
   dawarich_oidc_enabled: true
   dawarich_oidc_client_id: "<client id from provider>"
   dawarich_oidc_client_secret: "<client secret from provider>"
   # For authentik use the application issuer URL with a trailing slash:
   dawarich_oidc_issuer_url: "https://authentik.example.com/application/o/dawarich/"
   ```

   The provider name shown on the login screen comes from the shared
   `oidc_provider_name` variable (see `group_vars/all.yml`), so it can be
   reused across apps.

   Set `dawarich_oidc_allow_email_password_login: false` to hide the local
   email/password form and require OIDC sign-in. All available variables are
   listed in `roles/dawarich/defaults/main.yml`.

OIDC environment variables must be set on both the `dawarich_app` and
`dawarich_sidekiq` containers; the role handles this automatically.

`dawarich_app_url` (derived from `dawarich_available_externally`/`dawarich_hostname`)
must match the exact URL the browser uses, otherwise OIDC callback validation
will fail.

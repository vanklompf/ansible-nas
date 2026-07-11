# Immich

## Single Sign-On (OIDC)

Immich can use an OpenID Connect provider such as the bundled authentik role.
Set the following inventory variables:

```yaml
immich_hostname: immich
immich_oidc_enabled: true
immich_oidc_auto_login: false
```

Authentik application slug, OAuth client ID, and issuer path all use
`immich_hostname` (override the hostname when the public URL differs, e.g.
`photo`). `immich_oidc_issuer_url` defaults from the shared
`authentik_oidc_issuer_base` and `immich_hostname`.

The Immich role templates an OAuth2 provider and application into authentik when
`immich_oidc_enabled` is true. The authentik role applies the blueprint after the
worker starts. Redirect URIs registered:

- `https://<immich-host>/auth/login`
- `https://<immich-host>/user-settings`
- `app.immich:///oauth-callback`

The client secret is auto-generated once and persisted at
`immich_oidc_client_secret_file`. The OAuth settings are written to
`immich_config_file` and mounted read-only into the server via
`IMMICH_CONFIG_FILE`, so the OAuth section becomes read-only in the Immich
Administration UI while all other settings stay editable.

Password login remains enabled as a recovery path. Set
`immich_oidc_auto_login: true` to send users straight to the provider (skip the
Immich login page) only after web and mobile login have both been verified.
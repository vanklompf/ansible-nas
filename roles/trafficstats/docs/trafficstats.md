# Jeż Security (TrafficStats)

Homepage: [https://github.com/vanklompf/TrafficStats](https://github.com/vanklompf/TrafficStats)

Jeż Security counts vehicles via a Dahua camera's IVS events and shows an
intrusion gallery with optional local LLM video analysis. Ansible role and
variable names keep the `trafficstats_*` prefix; the product name is Jeż Security.

## Usage

Set `trafficstats_enabled: true` in your inventory. The web UI is at
[http://ansible_nas_host_or_ip:3896](http://ansible_nas_host_or_ip:3896), or at
`https://{{ trafficstats_hostname }}.{{ ansible_nas_domain }}` when
`trafficstats_available_externally` is true.

The Homepage dashboard tile uses the Jeż Security icon from
`roles/trafficstats/files/jez-security.png` (installed under Homepage's
`/images/` directory).

## Single Sign-On (OIDC)

Jeż Security can require OpenID Connect login (for example the bundled
[authentik](../../authentik/docs/authentik.md) role).

1. In your identity provider, create an OAuth2/OpenID provider and application.
   Register the redirect URI:

   ```
   {{ trafficstats_app_url }}/auth/oidc/callback
   ```

   With authentik, enable `trafficstats_oidc_enabled: true` — the trafficstats
   role templates the OAuth2 provider and application blueprint and applies it
   to the running authentik worker. The authentik application display name
   defaults to `trafficstats_oidc_display_name` ("Jeż Security"); the slug and
   OAuth client ID still match `trafficstats_hostname`.

2. In your inventory, enable OIDC:

   ```yaml
   trafficstats_oidc_enabled: true
   trafficstats_oidc_auto_login: true
   ```

   With authentik, application slug and OAuth client ID match
   `trafficstats_hostname`, and `trafficstats_oidc_issuer_url` defaults from
   the shared `authentik_oidc_issuer_base`. The client secret and session
   signing key are auto-generated and persisted at
   `trafficstats_oidc_client_secret_file` and
   `trafficstats_session_secret_file`.

   Set `trafficstats_oidc_auto_login: true` to send unauthenticated browsers
   straight to Authentik. `/api/health` remains public for container health
   checks. All available variables are listed in
   `roles/trafficstats/defaults/main.yml`.

## LLM video analysis

Intrusion events are analyzed by a local Ollama vision model unless
`trafficstats_analysis_enabled` is `false`. When disabled, the container
still starts; the analysis worker, startup backfill, and on-demand
triggers are skipped. Existing stored analyses remain visible in the UI.

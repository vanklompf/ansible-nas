# Honcho

Self-hosted Honcho memory backend for Hermes Agent.

The role runs three containers:

- `honcho_api` from `ghcr.io/plastic-labs/honcho`
- `honcho_postgres` from `pgvector/pgvector:pg15`
- `honcho_redis` from `redis:8.2`

## Configuration

Base settings are rendered into a `config.toml` (`templates/config.toml.j2`) that is
mounted read-only at `/app/config.toml`. Only secrets are passed as environment
variables (they take precedence over the file): `DB_CONNECTION_URI`,
`LLM_OPENAI_API_KEY`, and `AUTH_JWT_SECRET`.

All text-generation features (deriver, every dialectic level, summary, dream) share
one model/base URL via `honcho_llm_model` + `honcho_llm_base_url`, looped over
`honcho_dialectic_levels` in the template. Override per feature only if needed.

The API publishes port `8000` on all interfaces and is exposed through Traefik when
`honcho_available_externally: true`. Authentication is on by default
(`honcho_auth_use_auth: "true"`); supply a strong `honcho_auth_jwt_secret`.

### Embeddings (bge-m3 via Ollama)

`honcho_embed_messages: "true"` enables embeddings using `bge-m3` served by the local
Ollama OpenAI-compatible endpoint (`honcho_embedding_base_url`). bge-m3 is **1024-dim**,
so `honcho_embedding_vector_dimensions: "1024"` and `honcho_embedding_dimensions_mode:
"never"` (Ollama rejects the `dimensions=` request param). Ensure `bge-m3` is in
`ollama_models_pull`.

The API entrypoint runs `configure_embeddings.py --yes`, which pins the pgvector
schema to the configured dimension at bootstrap. This only works on an **empty**
deployment — `configure_embeddings.py` refuses to ALTER tables that already contain
embeddings. If Honcho was previously bootstrapped at a different dimension, destroy the
`honcho_postgres` data directory (or stand up a fresh deployment) before switching.

## Enable in inventory

```yaml
honcho_enabled: true
honcho_available_externally: true
honcho_llm_openai_api_key: "sk-or-v1-..."   # OpenRouter key, stored like other secrets
honcho_auth_jwt_secret: "<random secret>"   # python scripts/generate_jwt_secret.py
honcho_embedding_base_url: "http://{{ ansible_nas_tailscale_ip }}:11434/v1"
```

With auth enabled, clients (Hermes) must present a JWT signed with
`honcho_auth_jwt_secret`.

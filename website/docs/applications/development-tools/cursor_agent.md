---
title: "Cursor Agent"
---

Homepage: [https://cursor.com/docs/cloud-agent](https://cursor.com/docs/cloud-agent)

Runs one or more [Cursor self-hosted Cloud Agent workers](https://cursor.com/docs/cloud-agent/self-hosted-pool) on your NAS. Each worker holds an outbound HTTPS connection to Cursor's cloud and executes tool calls (terminal commands, file edits, browser actions) locally against a git checkout mounted into the container. No inbound ports are required.

Two modes are supported:

* **My Machines** (`cursor_agent_pool: false`) – each worker registers itself by name and can be targeted from the Cursor dashboard or Slack/GitHub/Linear with `worker=` / `machine=`. Works with a personal user API key.
* **Self-Hosted Pool** (`cursor_agent_pool: true`) – workers join a pool and are assigned to sessions automatically. Requires an Enterprise plan and a service account API key.

## Usage

Set `cursor_agent_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` and supply at least an API key plus one worker:

```yaml
cursor_agent_enabled: true
cursor_agent_api_key: "key_..."
cursor_agent_workers:
  - name: ansible-nas
    repo_directory: "{{ code_root }}/ansible-nas"
```

Workers appear under the *Self-hosted* selector at [cursor.com/agents](https://cursor.com/agents) once the play has finished.

## Specific Configuration

* Each worker becomes a container named `cursor_agent_<worker name>` that mounts `repo_directory` into `/workspace/repo`. The path must be an existing git checkout.
* Containers run as `cursor_agent_user_id`:`cursor_agent_group_id` (default `1000:1000`). Match this to the owner of your repos so the agent can write back.
* A small Ubuntu image is built locally from the role's `templates/Dockerfile.j2` and includes `git`, Python 3, Node.js, and `build-essential`. Add anything else your agents need to `cursor_agent_extra_packages`.
* Use `cursor_agent_labels` (or per-worker `labels`) and `cursor_agent_pool_name` to route pool sessions. `cursor_agent_idle_release_timeout` (seconds) keeps a worker alive briefly after each session to handle follow-up messages.
* Set `cursor_agent_image_force_rebuild: true` once when you want to refresh the bundled Cursor CLI version.
* Outbound HTTPS access is required to `api2.cursor.sh`, `api2direct.cursor.sh`, and `cloud-agent-artifacts.s3.us-east-1.amazonaws.com`.

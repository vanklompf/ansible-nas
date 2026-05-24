# Cursor Agent

Homepage: [https://cursor.com/docs/cloud-agent](https://cursor.com/docs/cloud-agent)

Runs one or more [Cursor self-hosted Cloud Agent workers](https://cursor.com/docs/cloud-agent/self-hosted-pool) on the NAS. Each worker holds a long-lived outbound HTTPS connection to Cursor's cloud and executes tool calls (terminal commands, file edits, browser actions) locally against a git checkout you mount into the container. No inbound ports are required.

Two modes are supported:

* **My Machines** (`cursor_agent_pool: false`) – each worker registers itself by name and can be targeted from Slack/GitHub/Linear with `worker=` / `machine=`. Works with a personal user API key.
* **Self-Hosted Pool** (`cursor_agent_pool: true`) – workers join a pool and are assigned to sessions automatically. Requires an Enterprise plan and a service account API key. Optional `cursor_agent_pool_name` routes sessions to a named pool.

## Usage

Set `cursor_agent_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file and provide at least an API key plus one worker:

```yaml
cursor_agent_enabled: true
cursor_agent_api_key: "key_..."   # personal API key, or service account key for pool mode
cursor_agent_workers:
  - name: ansible-nas
    repo_directory: "{{ code_root }}/ansible-nas"
  - name: configs
    repo_directory: "{{ code_root }}/AnsibleNasConfigs"
```

After the play runs, the workers show up under the *Self-hosted* selector at [cursor.com/agents](https://cursor.com/agents).

## Specific Configuration

* Each worker container is named `cursor_agent_<worker name>` and mounts `repo_directory` into `/workspace/repo`. The directory **must** be an existing git checkout.
* Containers run as `cursor_agent_user_id`:`cursor_agent_group_id` (default `1000:1000`). Adjust to match the owner of your repo checkouts so the agent can write to them.
* A small Ubuntu-based image is built locally from `roles/cursor_agent/templates/Dockerfile.j2`. Add apt packages your agents need to `cursor_agent_extra_packages` (the image installs `git`, Python 3, Node.js, and `build-essential` by default).
* Pool mode flags are applied automatically when `cursor_agent_pool: true`. Use `cursor_agent_pool_name` (or per-worker `pool_name`) to route sessions, and `cursor_agent_labels` (or per-worker `labels`) for additional routing labels.
* `cursor_agent_idle_release_timeout` (seconds) keeps a worker connected after a session ends to handle follow-ups, then exits cleanly so the container restarts. Useful with orchestrators; set to `0` for long-lived workers.
* Set `cursor_agent_image_force_rebuild: true` for one apply if you need to refresh the bundled Cursor CLI version.
* Outbound HTTPS access is required to `api2.cursor.sh`, `api2direct.cursor.sh`, and `cloud-agent-artifacts.s3.us-east-1.amazonaws.com`. If you go through a proxy, set `cursor_agent_https_proxy`.

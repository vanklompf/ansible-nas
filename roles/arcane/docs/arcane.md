# Arcane

Homepage: [https://github.com/getarcaneapp/arcane](https://github.com/getarcaneapp/arcane)

Arcane is a self-hosted platform for managing and deploying applications with Docker.

## Usage

Set `arcane_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file.

Arcane's web interface can be found at [http://ansible_nas_host_or_ip:3552](http://ansible_nas_host_or_ip:3552).

## Remote environments (agent)

To manage another Docker host from the same Arcane UI, run a headless edge
agent on that remote host. The agent is part of this same role and is
independent of the manager, so a host can run the manager, the agent, or both.

1. On the **manager**, open `Environments > Add Environment`, choose the **Edge**
   tab, generate the agent configuration and copy the `AGENT_TOKEN`.
2. On the **remote host's** inventory, set:

   ```yaml
   arcane_agent_enabled: true
   arcane_agent_manager_url: "http://<manager-tailscale-ip>:3552"
   arcane_agent_token: "arc_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
   ```

3. Deploy the remote host. The agent dials out to the manager and auto-pairs on
   startup.

Use the manager's Tailscale IP (not MagicDNS): the agent runs in a container
and uses the host's LAN resolver, which cannot resolve `*.ts.net` names.

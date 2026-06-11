# Gatus

Homepage: [https://github.com/TwiN/gatus](https://github.com/TwiN/gatus)

Gatus is an automated service health dashboard. Monitor HTTP, ICMP, TCP, and DNS endpoints, evaluate responses with configurable conditions, and send alerts via Slack, Discord, email, and more.

## Usage

Set `gatus_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file.

The Gatus web interface can be found at [http://ansible_nas_host_or_ip:8115](http://ansible_nas_host_or_ip:8115).

## Specific Configuration

Gatus is configured through a single YAML file at `gatus/config.yaml` in your inventory directory. The default configuration uses SQLite storage and no monitored endpoints.

Home Assistant alerting uses the shared `homeassistant_access_token` inventory variable.

Configuration and database files are stored under `{{ docker_home }}/gatus`.

---
title: "DDNS Updater"
---

Homepage: <https://github.com/qdm12/ddns-updater>


If you want your Ansible-NAS accessible externally then you'll need a domain name. You'll also need to set a wildcard
host A record to point to your static IP, or enable this container to automatically update your DNS provider with your dynamic IP address.

## Usage

Set `ddns_updater: true` in your `inventories/<your_inventory>/nas.yml` file.
Set `ddns_updater_provider` to specific provider. Set `ddns_updater_password` to password, secret or API key for selected provider.
Both "@" and "*" records are updated.

---
title: "Graylog"
description: "Free and open source log management"
---

Homepage: [https://www.graylog.org/](https://www.graylog.org/)

Graylog is a free and open source log management platform for collecting, indexing, and analyzing log data. It uses MongoDB for configuration storage and the Graylog DataNode (built on OpenSearch) for log indexing and search.

## Usage

Set `graylog_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file.

The Graylog web interface can be found at [http://ansible_nas_host_or_ip:9003](http://ansible_nas_host_or_ip:9003) after initialization.

On first startup, Graylog presents a preflight/configuration UI. Check the Graylog container logs for the initial password to access it. After configuration, login with `admin` and the password matching your `graylog_root_password_sha2` value.

## Specific Configuration

The default `graylog_root_password_sha2` corresponds to the password `admin`. Generate a new SHA-256 hash for production use:

```bash
echo -n "your_password" | sha256sum
```

You must also set `graylog_password_secret` to a random string of at least 16 characters. This secret is used for encryption and must be the same across Graylog server and DataNode:

```bash
pwgen -N 1 -s 96
```

### Syslog Input

Graylog listens for syslog on port `1514` (mapped to container port `5140`) by default. Configure your devices to send syslog to `ansible_nas_host_or_ip:1514`.

### GELF Input

GELF (Graylog Extended Log Format) is available on port `12201` (TCP and UDP). Use this for Docker container logging or applications that support GELF output.

### Email Notifications

Set the `graylog_email_*` variables in your inventory to enable email alerts. Refer to the [Graylog documentation](https://go2docs.graylog.org/current/what_more_can_graylog_do_for_me/alerts_and_notifications.html) for configuration details.

### Host Requirements

The DataNode requires `vm.max_map_count` to be set to at least `262144` on the host:

```bash
echo "vm.max_map_count=262144" | sudo tee -a /etc/sysctl.conf
sudo sysctl -p
```

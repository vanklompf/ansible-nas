---
title: "Glance"
description: "A self-hosted dashboard that puts all your feeds in one place"
---

Homepage: [https://github.com/glanceapp/glance](https://github.com/glanceapp/glance)

A self-hosted dashboard that puts all your feeds in one place

## Usage

Set `glance_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file. Especially set `glance_config_file_contents` to the expected content of target config file.

Glance web interface can be found at [http://ansible_nas_host_or_ip:8178](http://ansible_nas_host_or_ip:8178).

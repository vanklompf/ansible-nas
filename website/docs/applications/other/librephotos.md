---
title: "Librephotos"
description: "A self-hosted open source photo management service"
---

Homepage: <https://github.com/LibrePhotos/librephotos>

A self-hosted open source photo management service. This is the repository of the backend.

## Usage

Set `librephotos_enabled: true` in your `inventories/<your_inventory>/nas.yml` file.

Set all `librephotos_*` variables in `inventories/<your_inventory>/group_vars/all.yml`.

The librephotos web interface can be found at <http://ansible_nas_host_or_ip:3005>.

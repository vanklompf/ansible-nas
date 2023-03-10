---
title: "SearxNG"
description: "Free internet metasearch engine"
---

Homepage: <https://github.com/searxng/searxng>

SearXNG is a free internet metasearch engine which aggregates results from various search services and databases. Users are neither tracked nor profiled.

## Usage

Set `searxng_enabled: true` in your `inventories/<your_inventory>/nas.yml` file. Set all relevant `searxng_*` variables to suit your needs. For more advenced needs, edit the `templates\settings.yml.j2` file directly.

SearxNG web interface can be found at <http://ansible_nas_host_or_ip:8109>.

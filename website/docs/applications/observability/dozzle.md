---
title: "Dozzle"
description: "Realtime log viewer for docker containers"
---

Homepage: [https://github.com/ajnart/homarr](https://github.com/ajnart/homarr)

Dozzle is a small lightweight application with a web based interface to monitor Docker logs. It doesn’t store any log files. It is for live monitoring of your container logs only.

## Usage

Set `dozzle_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file. Set `dozzle_agent_mode` to `true` if you want to install dozzle as an agent.

Dozzle web interface can be found at [http://ansible_nas_host_or_ip:8179](http://ansible_nas_host_or_ip:8179).

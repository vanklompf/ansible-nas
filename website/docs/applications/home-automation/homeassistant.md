---
title: "Home Assistant"
---

Homepage: [https://www.home-assistant.io/](https://www.home-assistant.io/)

Open source home automation that puts local control and privacy first. Powered by a worldwide community of tinkerers and DIY enthusiasts.

## Usage

Set `homeassistant_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file.

If you want to access Home Assistant externally, don't forget to set `homeassistant_available_externally: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file.

The Home Assistant web interface can be found at [http://ansible_nas_host_or_ip:8123](http://ansible_nas_host_or_ip:8123).

## Piper (local TTS)

When Home Assistant is enabled, a [Wyoming Piper](https://github.com/rhasspy/wyoming-piper) container is deployed by default (`homeassistant_piper_enabled: true`). It listens on port `10200` for the Wyoming protocol.

After deploy, add the integration in Home Assistant: **Settings → Devices & services → Add integration → Wyoming** → host `127.0.0.1`, port `10200`.

Set `homeassistant_piper_enabled: false` to skip the container. Override the voice with `piper_voice` (see [Piper voices](https://github.com/rhasspy/piper/blob/master/VOICES.md)); default is `pl_PL-gosia-medium`.

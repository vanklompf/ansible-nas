---
title: "NetAlertX"
---

Homepage: [https://github.com/jokob-sk/NetAlertX](https://github.com/jokob-sk/NetAlertX)

NetAlertX (formerly known as Pi.Alert) is a network monitoring tool that scans your network for connected devices and alerts you when new or unknown devices are detected. It provides a web interface to view all devices on your network, their connection status, and history.

## Usage

Set `netalertx_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file.

The NetAlertX web interface can be found at [http://ansible_nas_host_or_ip:3895](http://ansible_nas_host_or_ip:3895).

## Specific Configuration

NetAlertX requires host network mode to perform network scanning (ARP scanning). This allows it to see all devices on your local network.

The configuration and database are stored in the data directory, which defaults to `{{ docker_home }}/netalertx`.

### Key Features

- Network device discovery using ARP scanning
- New device notifications (email, webhooks, etc.)
- Device presence monitoring
- Historical data and reporting
- Web-based UI for device management

### Environment Variables

You can configure the following variables:

- `netalertx_data_directory`: Where to store configuration and database files
- `netalertx_timezone`: Timezone for the application (defaults to `ansible_nas_timezone`)

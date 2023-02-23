---
title: "Stats"
---

The stats role uses Prometheus (or Influxdb), Grafana, Telegraf and a number of metrics exporters to collect and record lots of metrics about your NAS.

Telegraf also exposes an InfluxDB endpoint for applications that require it.

## Usage

Set `stats_enabled: true` in your `inventories/<your_inventory>/nas.yml` file. If you want to gather metrics on your internet connection, enable `stats_internet_speed_test_enabled` too.
Set `stats_prometheus_enabled: true` and/or `stats_influxdb_enabled: true` depending on which time series db you want to use.

If you want to access Grafana externally, set `stats_grafana_available_externally: true` in your `inventories/<your_inventory>/nas.yml` file. If you want to access Promethehus externally, set `stats_prometheus_available_externally: true` in your `inventories/<your_inventory>/nas.yml` file.

The Grafana web interface can be found at <http://ansible_nas_host_or_ip:3003>, Prometheus can be found at <http://ansible_nas_host_or_ip:9090>

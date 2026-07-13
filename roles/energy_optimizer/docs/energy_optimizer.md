# Energy Optimizer

Deploys `ghcr.io/vanklompf/energy-optimizer` as a dry-run solar/battery optimisation service.

The role persists SQLite state under `energy_optimizer_data_directory`, exposes the web UI on
`energy_optimizer_port`, reads Home Assistant and Pstryk using inventory-provided credentials, and
publishes recommendations through MQTT. It does not enable battery control.

Required host configuration:

```yaml
energy_optimizer_enabled: true
energy_optimizer_ha_token: "{{ homeassistant_access_token }}"
energy_optimizer_pstryk_api_key: "{{ pstryk_api_key }}"
```

MQTT uses the homeassistant Docker network and connects to the Mosquitto container
(`mosquitto_container_name`) with `mqtt_user` / `mqtt_password` from the homeassistant role.

## Local build (skip GHCR)

By default the role pulls `ghcr.io/vanklompf/energy-optimizer`. To iterate without the
tag → CI → push cycle, build the image on the NAS from the PvOpti source tree instead:

```yaml
energy_optimizer_build_locally: true
energy_optimizer_source_directory: "{{ code_root }}/PvOpti"  # must contain the Dockerfile
energy_optimizer_image_force_rebuild: false  # set true to rebuild every run
```

When enabled, the role builds the `runtime` stage of `energy_optimizer_source_directory/Dockerfile`
into `energy-optimizer:local` and runs the container from that image with `pull: false`.
The source checkout (including its `Dockerfile`) must be present on the target host, and
`force_source`/`energy_optimizer_image_force_rebuild` controls whether the image is rebuilt
when it already exists.

Review the PV plane geometry and site/inverter limits before relying on forecasts or financial
recommendations. Defaults target a **Sigen Hybrid 6.0 TP2** (6 kW / 6.6 kVA AC, 12 kWp max DC)
with a ~18 kWh SigenStor stack and a 7 kWp PV plane on the south-east roof slope at Kraszewskiego
5 in Lancut. The configured true-north bearing of about 142.7 degrees is expressed as `-37.3` in
Forecast.Solar's convention, where south is 0, east is negative, and west is positive.

# Energy Optimizer

Homepage: [https://github.com/vanklompf/PvOpti](https://github.com/vanklompf/PvOpti)

Dry-run solar/battery optimisation for a Sigen + Pstryk site, with optional EV/PHEV
charger relay control. Recommendations go to Home Assistant over MQTT. Sigen battery
control stays off; EV relay control is opt-in.

## Usage

```yaml
energy_optimizer_enabled: true
energy_optimizer_ha_token: "{{ homeassistant_access_token }}"
energy_optimizer_pstryk_api_key: "{{ pstryk_api_key }}"
```

UI: [http://ansible_nas_host_or_ip:8320](http://ansible_nas_host_or_ip:8320), or
`https://{{ energy_optimizer_hostname }}.{{ ansible_nas_domain }}` when
`energy_optimizer_available_externally` is true.

MQTT uses the homeassistant Docker network (`mosquitto_container_name`) with
`mqtt_user` / `mqtt_password`. Battery and site/inverter limits use image defaults
(Sigen Hybrid 6.0 TP2). Set PV lat/lon/planes in inventory; Forecast.Solar azimuth is
degrees from south (east negative, west positive).

## EV control (optional)

Enable only after verifying entities and the fixed-socket installation. The optimiser
meets `energy_optimizer_ev_minimum_target_soc_pct` by the next departure hour, then
fills remaining charge from forecast solar or cheap grid slots. Fail-safe OFF on
unplugged/unavailable/fault/no-power; ON actuations are verified in HA.

```yaml
energy_optimizer_ev_control_enabled: true
energy_optimizer_ev_switch_entity: switch.ev_charger
energy_optimizer_ev_power_entity: sensor.ev_charger_power
energy_optimizer_ev_soc_entity: sensor.ev_state_of_charge
energy_optimizer_ev_charging_status_entity: sensor.ev_charging_status
energy_optimizer_ev_charging_active_entity: binary_sensor.ev_charging_active
energy_optimizer_ev_charge_to_100_entity: input_boolean.ev_charge_to_100_once
energy_optimizer_ev_fault_entities: '["binary_sensor.ev_charger_overheating"]'
energy_optimizer_ev_minimum_target_soc_pct: "50"
energy_optimizer_ev_departure_hour: "9"
```

Undefined `energy_optimizer_ev_*` vars are omitted from the container env.

## Local build

Default image is `ghcr.io/vanklompf/energy-optimizer`. To build from the PvOpti tree on
the NAS:

```yaml
energy_optimizer_build_locally: true
energy_optimizer_source_directory: "{{ code_root }}/PvOpti"
energy_optimizer_image_force_rebuild: false  # true = rebuild every run
energy_optimizer_build_pull: true            # false if Docker Hub throttles
```

Builds the Dockerfile `runtime` stage as `energy-optimizer:local` (`pull: false`).
The source tree (including `Dockerfile`) must exist on the target host.

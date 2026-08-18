# Energy Optimizer

Homepage: [https://github.com/vanklompf/PvOpti](https://github.com/vanklompf/PvOpti)

Solar/battery optimisation for a Sigen + Pstryk site, with optional EV/PHEV charger
relay control. Recommendations go to Home Assistant over MQTT. Battery and EV
actuation are independently opt-in; image defaults cover Sigen Hybrid 6.0 TP2
limits, entity IDs, and control timings.

## Usage

```yaml
energy_optimizer_enabled: true
energy_optimizer_ha_token: "{{ homeassistant_access_token }}"
energy_optimizer_pstryk_api_key: "{{ pstryk_api_key }}"
energy_optimizer_battery_soc_min_pct: "15"       # protected operating reserve
energy_optimizer_battery_hard_soc_min_pct: "0"  # Sigen/BMS usable-empty point
```

UI: [http://ansible_nas_host_or_ip:8320](http://ansible_nas_host_or_ip:8320), or
`https://{{ energy_optimizer_hostname }}.{{ ansible_nas_domain }}` when
`energy_optimizer_available_externally` is true.

## Stationary battery control

Live inverter writes require both `energy_optimizer_mode: control` and
`energy_optimizer_battery_control_enabled: true`. Direction flags are separate
feature switches and stay off by default:

```yaml
energy_optimizer_mode: control
energy_optimizer_battery_control_enabled: true
energy_optimizer_battery_control_grid_charge_enabled: true   # grid-import charge
energy_optimizer_battery_control_authorize_discharge: true   # discharge to house
energy_optimizer_battery_export_enabled: true                # export to grid
energy_optimizer_battery_control_supported_directions: '["FALLBACK","IDLE","CHARGE","DISCHARGE"]'
energy_optimizer_battery_control_watchdog_health_entity: binary_sensor.pvopti_battery_control_watchdog_ready
energy_optimizer_battery_control_watchdog_ack_entity: input_datetime.pvopti_battery_control_last_heartbeat
```

Ansible rejects `mode: control` unless the independent enable gate is on and the
HA watchdog entities are set. Sigen entity IDs, restore limits, and timings use
image defaults and are not re-declared by this role. Do not enable discharge or
export until those directions have been physically verified.

`energy_optimizer_battery_control_min_soc_pct` sets the control-side operating reserve
that PvOpti writes into the inverter discharge cut-off during a discharge command. Empty
keeps the image default (15%). It must stay at or above the planner reserve
(`energy_optimizer_battery_soc_min_pct`); lower it toward that reserve to give attended
discharge/export commissioning room, and raise it back for unattended operation.

Planner flags inside PvOpti (`EO_ALLOW_GRID_CHARGING`, `EO_ALLOW_BATTERY_EXPORT`)
are not actuation gates and are not set by this role.

## OIDC / SSO (authentik)

With authentik, enable `energy_optimizer_oidc_enabled: true` — the role
templates an OAuth2 provider/application blueprint (slug/client_id =
`energy_optimizer_hostname`, default `pv`) and injects OIDC env into the
container. Redirect URI is
`https://{{ energy_optimizer_hostname }}.{{ ansible_nas_domain }}/auth/oidc/callback`.
The authentik role applies the blueprint after the worker starts.

```yaml
energy_optimizer_oidc_enabled: true
energy_optimizer_oidc_auto_login: true
```

MQTT uses the homeassistant Docker network (`mosquitto_container_name`) with
`mqtt_user` / `mqtt_password`. Set PV lat/lon/planes in inventory; Forecast.Solar
azimuth is degrees from south (east negative, west positive).

## EV control (optional)

Enable only after verifying entities and the fixed-socket installation. The optimiser
meets `energy_optimizer_ev_minimum_target_soc_pct` by the next departure hour; that
guaranteed minimum may use the grid when necessary. Above the minimum, it prioritises
the Mercedes over additional stationary-battery charging and may start before live
surplus arrives when conservative same-day PV surplus is forecast. Guaranteed departure
charging may consume the stationary-battery operating reserve down to the configured hard
floor; ordinary household discharge, opportunistic charging, and economic export preserve
that reserve. Normal opportunistic charging never adds grid demand.

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

Undefined `energy_optimizer_ev_*` vars (other than `ev_control_enabled`) are omitted
from the container env so image defaults apply.

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

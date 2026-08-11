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
energy_optimizer_battery_soc_min_pct: "15"       # protected operating reserve
energy_optimizer_battery_hard_soc_min_pct: "0"  # Sigen/BMS usable-empty point
```

## Stationary battery control rollout

The role exposes PvOpti's complete stationary-battery control contract, but defaults and the
current site inventory remain in `dry_run` shadow mode. Battery actuation, grid charging, and
export are independently disabled, the arm token is empty, and unreliable Sigenergy number
register acknowledgement remains a hard blocker. The disabled Home Assistant watchdog draft
must pass physical failure-mode validation before control mode is permitted.

Ansible rejects `energy_optimizer_mode: control` unless the enable and exact arm-token gates,
reliable number-register acknowledgement, entity/watchdog mappings, and verified Remote-EMS-off
fallback are all configured.
Do not enable export during a charge-only rollout stage.

UI: [http://ansible_nas_host_or_ip:8320](http://ansible_nas_host_or_ip:8320), or
`https://{{ energy_optimizer_hostname }}.{{ ansible_nas_domain }}` when
`energy_optimizer_available_externally` is true.

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
`mqtt_user` / `mqtt_password`. Battery and site/inverter limits use image defaults
(Sigen Hybrid 6.0 TP2). Set PV lat/lon/planes in inventory; Forecast.Solar azimuth is
degrees from south (east negative, west positive).

## EV control (optional)

Enable only after verifying entities and the fixed-socket installation. The optimiser
meets `energy_optimizer_ev_minimum_target_soc_pct` by the next departure hour; that
guaranteed minimum may use the grid when necessary. Above the minimum, it prioritises
the Mercedes over additional stationary-battery charging and may start before live
surplus arrives when conservative same-day PV surplus is forecast. Guaranteed departure
charging may consume the stationary-battery operating reserve down to the configured hard
floor; ordinary household discharge, opportunistic charging, and economic export preserve
that reserve. Normal opportunistic charging never adds grid demand. Relay commands wait for
the configured settle period and are then polled until
the verification timeout; an ambiguous ON is forced OFF and enters a retry backoff.

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

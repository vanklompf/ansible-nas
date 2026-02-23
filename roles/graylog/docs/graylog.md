# Graylog

Homepage: [https://www.graylog.org/](https://www.graylog.org/)

Free and open source log management.

## Usage

Set `graylog_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file.
Set all the `graylog_*` environment variables in your inventory, especially `graylog_password_secret` and `graylog_root_password_sha2`. Refer to [Graylog documentation](https://go2docs.graylog.org/current/what_more_can_graylog_do_for_me/alerts_and_notifications.html) for configuration details.

Graylog web interface can be found at [http://ansible_nas_host_or_ip:9003](http://ansible_nas_host_or_ip:9003) after initialization.

On first startup, check the Graylog container logs for the initial password to access the preflight UI. After configuration, login with `admin` and the password matching your `graylog_root_password_sha2`.

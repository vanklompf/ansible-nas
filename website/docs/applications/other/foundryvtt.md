# Foundry Virtual Table Top

Homepage: [https://foundryvtt.com/](https://foundryvtt.com/)

Foundry Virtual Tabletop is software that provides an innovative online role-playing experience. The software supports Windows, Mac, and Linux and allows you to self-host a game server that players connect to for free directly through a web browser.

## Usage

Set `foundryvtt_enabled: true` in your `inventories/<your_inventory>/nas.yml` file.

To make FoundryVTT available externally via Traefik set `foundryvtt_available_externally: "true"` in your `inventories/<your_inventory>/nas.yml` file.

FoundryVTT can be found at http://ansible_nas_host_or_ip:30000.

## Specific Configuration

FoundryVTT has a number of configuration parameters. For more details, check out the [felddy/foundryvtt-docker](https://github.com/felddy/foundryvtt-docker) project.

### Data and Network

| Parameter                 | Description                      | Status    |
|---------------------------|----------------------------------|-----------|
| foundryvtt_data_directory | Host directory to store data     |           |
| foundryvtt_port           | Host port for internal access    |           |
| foundryvtt_hostname       | Subdomain for external access    |           |

### Authentication and License Keys

| Parameter                | Description                      | Status    |
|--------------------------|----------------------------------|-----------|
| foundryvtt_username      | FoundryVTT account username      | mandatory |
| foundryvtt_password      | FoundryVTT account password      | mandatory |
| foundryvtt_admin_key     | Server admin password            |           |
| foundryvtt_license_key   | Server license key               |           |
| foundryvtt_password_salt | Password salt for user passwords |           |

### Server Configuration

| Parameter                 | Description                           | Status    |
|---------------------------|---------------------------------------|-----------|
| foundryvtt_image_name     | Image name to use                     | `felddy/foundryvtt` |
| foundryvtt_image_version  | Image version to use                  | `release` |
| foundryvtt_release_url    | FoundryVTT server software direct URL |           |
| foundryvtt_minify_files   | Server flag to minify scripts         | `true`    |
| foundryvtt_compress_websocket | Server flag to compress websocket data | `true` |
| foundryvtt_world          | Server world to load on startup       |           |
| foundryvtt_css_theme      | Server theme                          |           |
| foundryvtt_language       | Server language                       |           |
| foundryvtt_hot_reload     | Server flag for hot reload of modules |           |
| foundryvtt_telemetry      | Server flag for usage telemetry       |           |
| foundryvtt_node_debug     | NodeJS debug details                  |           |
| foundryvtt_node_options   | NodeJS runtime options                |           |

### AWS Configuration

| Parameter                 | Description                           | Status    |
|---------------------------|---------------------------------------|-----------|
| foundryvtt_aws_key_id     | AWS access key ID for S3 access       |           |
| foundryvtt_aws_secret_key | AWS secret key for S3 access          |           |
| foundryvtt_aws_buckets    | AWS S3 buckets to load                |           |
| foundryvtt_aws_region     | AWS region                            |           |
| foundryvtt_aws_options    | AWS endpoint options                  |           |

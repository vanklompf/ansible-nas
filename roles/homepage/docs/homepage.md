# Homepage

Homepage: [https://gethomepage.dev](https://gethomepage.dev)

A modern, fully static, fast, secure fully proxied, highly customizable application dashboard with integrations for over 100 services and translations into multiple languages. Easily configured via YAML files or through docker label discovery.

## Usage

Set `homepage_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file.
Edit all the necessary config files in `files/config` folder according to [Homepage configuration guide](https://gethomepage.dev/v0.7.2/configs/) and run the playbook.

Homepage web interface can be found at [http://ansible_nas_host_or_ip:3010](http://ansible_nas_host_or_ip:3010).

## Custom logo

Place a PNG (or other image) in your inventory directory and point `homepage_logo_file`
at it. The role copies it into the container at `/app/public/images/<filename>`.

In `homepage_settings_yaml`, set the browser tab icon:

```yaml
favicon: /images/jezyk.png
```

When `homepage_logo_file` is set, a logo widget is added automatically at the top
of `homepage_widgets_yaml`.

After deploy, click the refresh icon in the bottom-right of Homepage to regenerate
static HTML. The same public URL can be reused for `oidc_provider_logo_url`.

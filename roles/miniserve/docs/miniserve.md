# Miniserve

Homepage: <https://github.com/svenstaro/miniserve>

miniserve is a small, self-contained cross-platform CLI tool that allows you to just grab the binary and serve some file(s) via HTTP. Sometimes this is just a more practical and quick way than doing things properly.

## Usage

Set `miniserve_enabled: true` in your `inventories/<your_inventory>/nas.yml` file. Optionally, edit `miniserve_options` to set the needed miniserve options.

miniserve web interface can be found at <http://ansible_nas_host_or_ip:8117>.

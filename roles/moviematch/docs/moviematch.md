# Moviematch

Homepage: <https://github.com/LukeChannings/moviematch>

MovieMatch for Plex. Have you ever spent longer deciding on a movie than it'd take to just watch a random movie? This is an app that helps you and your friends pick a movie to watch from a Plex server.

## Usage

Set `moviematch_enabled: true` in your `inventories/<your_inventory>/nas.yml` file.
set appropriate `moviematch_*` environment variables, especially `moviematch_plex_url`, `moviematch_plex_token` and `moviematch_library_filter`.

Moviematch web interface can be found at <http://ansible_nas_host_or_ip:8003>.

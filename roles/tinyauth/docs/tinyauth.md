# TinyAuth

TinyAuth is a lightweight authentication service that works with Traefik to provide authentication for your containers.

## Configuration

| Variable                        | Default                                                                | Description                                                               |
| :------------------------------ | :--------------------------------------------------------------------- | :------------------------------------------------------------------------ |
| `tinyauth_enabled`              | `false`                                                                | Enable TinyAuth                                                           |
| `tinyauth_available_externally` | `false`                                                                | Make TinyAuth available from outside your Docker host                     |
| `tinyauth_port`                 | `9004`                                                                 | Port to access Traefik                                                    |
| `tinyauth_hostname`             | `tinyauth`                                                             | Hostname to access TinyAuth                                               |
| `tinyauth_users`                | `user:$$2a$$10$$UdLYoJ5lgPsC0RKqYH/jMua7zIn0g9kPqWmhYayJYLaZQ/FTmH2/u` | User credentials in format username:hash (default password is "password") |
| `tinyauth_app_url`              | `https://{{ tinyauth_hostname }}.{{ ansible_nas_domain }}`             | The URL where TinyAuth is accessible                                      |


---
title: "Super Productivity"
description: "A free and open source to-do list and time tracker"
---

Homepage: [https://github.com/johannesjo/super-productivity](https://github.com/johannesjo/super-productivity)

Super Productivity is a free and open source to-do list and time tracker that helps you to organize your tasks and track time spent on them. It includes features like task management, time tracking, to-do lists, calendar, notes, and more.

## Usage

Set `superproductivity_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file.

The Super Productivity web interface can be found at [http://ansible_nas_host_or_ip:8188](http://ansible_nas_host_or_ip:8188).

## Specific Configuration

Super Productivity includes a WebDAV sync server for synchronizing your data across multiple devices. The WebDAV server runs on port 8189 and can be accessed at `http://ansible_nas_host_or_ip:8189` with the default credentials (admin/admin).

To use the sync functionality from the Super Productivity desktop application:

1. Go to Settings > Sync
2. Enter the WebDAV URL: `http://ansible_nas_host_or_ip:8189`
3. Use the default username: `admin`
4. Use the default password: `admin`
5. Set the sync folder path to `/`
6. Configure sync interval and other settings as needed

For best security, change the default WebDAV credentials in the Ansible-NAS configuration.

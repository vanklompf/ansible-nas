---
title: "Firefly III"
---

Homepage: [https://firefly-iii.org/](https://firefly-iii.org/)

Firefly III is a self-hosted financial manager. It can help you keep track of expenses, income, budgets and everything in between. It supports credit cards, shared household accounts and savings accounts. It's pretty fancy. You should use it to save and organize money.

## Usage

Set `firefly_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file.

The Firefly III web interface can be found at [http://ansible_nas_host_or_ip:8066](http://ansible_nas_host_or_ip:8066).

Optionally, you can install [Firefly Data Importer](https://github.com/firefly-iii/data-importer) by creating a Personal Access Token in Firefly, copying it into `firefly_access_token` variable, setting `firefly_importer_enabled` to `true` and re-running the playbook.

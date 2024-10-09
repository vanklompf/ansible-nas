---
title: "Glpi"
description: "An open-source UI-first Identity and Access Management (IAM) / Single-Sign-On (SSO) platform"
---

Homepage: [https://github.com/glpi-project/glpi](https://github.com/glpi-project/glpi)

GLPI is a Free Asset and IT Management Software package, Data center management, ITIL Service Desk, licenses tracking and software auditing.

## Usage

Set `glpi_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml`. Run the playbook.

Glpi web interface can be found at [http://ansible_nas_host_or_ip:8177](http://ansible_nas_host_or_ip:8177). Go to that page and perform initial setup - provide the db docker container name and MySQL credentials. Then wait a loooong time for the DB to be initialized.

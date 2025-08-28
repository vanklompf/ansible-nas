---
title: "Sparky Fitness"
description: "Self-hosted workout tracking application"
---

Homepage: [https://github.com/CodeWithCJ/SparkyFitness](https://github.com/CodeWithCJ/SparkyFitness)

SparkyFitness is a self-hosted workout tracking application.

## Usage

Set `sparkyfitness_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file.

The SparkyFitness web interface can be found at [http://ansible_nas_host_or_ip:3004](http://ansible_nas_host_or_ip:3004).

## Specific Configuration

Important: Before enabling the service, you should review and update the following default variables in your inventory:

- `sparkyfitness_db_password`
- `sparkyfitness_api_encryption_key`
- `sparkyfitness_jwt_secret`
- `sparkyfitness_admin_email`

These values should be changed from their defaults for security reasons.

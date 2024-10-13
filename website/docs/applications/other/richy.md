---
title: "Richy"
description: "Application that helps you to manage your investing portfolio"
---

Homepage: [https://richy.de/](https://richy.de/)

### What Richy is

- a (passive) portfolio manager
- market news hub
- a tool that aggregates information that helps you form ideas
- much better than your excel sheets
- quite documented

### What Richy is not

- an investing platform like RobinHood
- an app that gives you investing advice
- a trading bot
- a smart app with some kind of AI that tries to predict market

## Usage

Set `richy_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file. Set all relevant `richy_*` env variables as defined in `defaults\main.yml`.

Richy web interface can be found at [http://ansible_nas_host_or_ip:8176](http://ansible_nas_host_or_ip:8176). Wait for the application to initialize and then log in as: `admin@test.com`, password `test`.

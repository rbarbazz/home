---
title: 'Cron Local Mail'
date: 2021-02-16T21:46:29-08:00
draft: false
tags:
  - cron
  - unix
---

To see the output from cron you need to have a Mail Transfer Agent (MTA) installed.

<!--truncate-->

```bash
sudo apt install postfix
```

Select the "Local" option during the installation process.

You can now debug cron jobs with the output:

```bash
sudo tail -f /var/mail/$USER
```

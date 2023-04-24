---
title: 'Automated DB Backups on B2'
date: 2021-02-12T23:19:00-08:00
draft: false
tags:
  - b2
  - cron
  - postgres
authors: rbarbazz
---

Setup a cron job to export and upload a Postgres DB backup to a B2 bucket.

<!--truncate-->

## Setup B2

Install the B2 cli tool.

```bash
sudo apt install python3 python3-pip -y
pip3 install setuptools
pip3 install b2
b2 authorize-account $APPLICATION_KEY_ID $APPLICATION_KEY
```

Then paste the following into a `.sh` file.

```bash
#!/bin/bash

DB_NAME=mydb
FILENAME=${DB_NAME}_$(date +'%Y_%m_%d').sql
BUCKET_NAME=mybucket
USER=bob

pg_dump $DB_NAME > ~/$FILENAME
/home/$USER/.local/bin/b2 upload-file $BUCKET_NAME ~/$FILENAME $FILENAME
rm ~/$FILENAME
```

Then `chmod +x` the script, `crontab -e` and paste the following:

```bash
0 1 * * * /absolute/path/to/the/script
```

The script will run everyday at 01:00.
You can then set custom lifecycle rules on Backblaze to retain backups for X number of days.

---
title: 'Postgres Quickstart'
date: 2021-02-15T08:48:17-08:00
draft: false
tags:
  - postgres
---

Here is how to get started with Postgres on Ubuntu.

<!--truncate-->

```bash
# Install the packages
sudo apt update && sudo apt install postgresql postgresql-contrib -y

# Create a new user
sudo -u postgres createuser --pwprompt username

# Create a new DB
sudo -u postgres createdb -O username db_name
```

The connection URL will be:

```bash
postgresql://username:password@localhost:5432/db_name
```

If your password contains a `%` sign it needs to be replaced by `%25`.

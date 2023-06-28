---
title: 'Cron Environment'
date: 2021-02-14T15:28:30-08:00
draft: false
tags:
  - cron
  - unix
---

Cron often runs in an almost empty environment.

<!--truncate-->

The default path is very minimal. Therefore you should either use absolute paths or explicitly set the `PATH` variable when using binaries.

Solutions:

```bash
PATH=/bin:/usr/bin:/usr/local/bin

# or

5 4 * * sun /absolute/path/to/the/binary
```

If you decide to set the `PATH` variable, you can’t append `:$PATH`:

```bash
PATH="$HOME/bin:$PATH" # does not work
```

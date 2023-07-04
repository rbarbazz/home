---
title: 'Uptime monitor with Github Actions'
date: 2023-07-03
draft: false
tags:
  - github actions
---

In this post, I will explain how you can use Github Actions with the Github API to implement a simple uptime monitor.

<!--truncate-->

## Code Breakdown

### Health Check

First, we need to define our workflow with the CURL command that will act as a health check.

```yaml
name: Health Check

on:
  schedule:
    - cron: "*/5 * * * *"

jobs:
  check:
    name: check
    runs-on: ubuntu-latest
    steps:
      - name: Check URL
        run: curl -sSf raphaelbarbazza.com -m 30 > /dev/null
```

We schedule our action to run every 5 minute and send a request to the website we want to monitor. The `-sSf` options tell curl to be silent while still failing when the server returns an error code.
Finally, we set a timeout of 30 seconds to prevent the action from hanging.

The website URL can be hardcoded like in the example or stored in secrets or as [an environment variable](https://docs.github.com/en/actions/learn-github-actions/variables).

### Check Failure

When the check fails, we will send a message to a Discord channel:

```yaml
  notify-failure:
    name: notify-failure
    runs-on: ubuntu-latest
    needs: [check] # Only run after the health check
    if: ${{ failure() }} # Only run when the health check fails
    steps:
      - name: Send Discord notification
        uses: appleboy/discord-action@master
        with:
          webhook_id: ${{ secrets.WEBHOOK_ID }}
          webhook_token: ${{ secrets.WEBHOOK_TOKEN }}
          message: '🔴 ${{ secrets.SITE_URL }} is offline'
```

Sending the notification is facilitated by the `appleboy/discord-action` action. See [the documentation](https://github.com/appleboy/discord-action) for instructions on how to set it up.

### Check Success

Finally, we'll handle a successful health check:

```yaml
  notify-success:
    name: notify-success
    runs-on: ubuntu-latest
    needs: [check] # Only run after the health check
    steps:
      - name: Get previous Health Check run status
        id: get_prev_status
        run: >
          echo "::set-output name=previous_status::$(
            curl -sSf 'https://api.github.com/repos/${{ github.repository }}/actions/runs' | 
            jq -r '[.workflow_runs[] | select(.name=="${{ github.workflow }}")][1].conclusion'
          )"
      - name: Send Discord notification
        if: ${{ steps.get_prev_status.outputs.previous_status != 'success' }}
        uses: appleboy/discord-action@master
        with:
          webhook_id: ${{ secrets.WEBHOOK_ID }}
          webhook_token: ${{ secrets.WEBHOOK_TOKEN }}
          message: '🟢 ${{ secrets.SITE_URL }} is back online'
```

This step will only run when the health check succeeds.

Using the Github API and the [`jq`](https://jqlang.github.io/jq/) command, we can retrieve the status of the previous run. This is used as a persistance layer to check the status of the previous run.

If the previous failed, then we want to send an update on Discord so that we know our website is back online. Otherwise, our website is still down. On Discord, we can assume that the last status update reflects the current status of our website.

## Conclusion

This is a very simple implementation of an uptime monitor, I would probably not use it in production. It was a great way for me to learn more about Github Actions though, especially dependencies and conditional steps.

[`upptime`](https://github.com/upptime/upptime) is a great alternative that uses Github Actions and comes with many features including graphs and incident reports.

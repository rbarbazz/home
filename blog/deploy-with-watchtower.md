---
title: 'Automated Deployment with Watchtower'
date: 2021-02-21T15:46:40-08:00
draft: false
tags:
  - docker
  - ci/cd
---

You can use [Watchtower](https://github.com/containrrr/watchtower/) to automate the deployment of a dockerized app on a VPS.

<!--truncate-->

The Watchtower container will pull new images from Docker Hub or another registry and restart the container with updated images.

Start it with:

```bash
docker run -d \
  --name watchtower \
  -e REPO_USER=dockerhub_username \
  -e REPO_PASS=dockerhub_access_token \
  -v /var/run/docker.sock:/var/run/docker.sock \
  containrrr/watchtower
```

You can then take advantage of the Docker Hub automated builds to build and deploy on push.

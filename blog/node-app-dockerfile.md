---
title: 'Basic Dockerfile for a Node App'
date: 2021-02-18T23:18:16-08:00
draft: false
tags:
  - docker
  - node
---

This is a simple Dockerfile that builds a full stack Javascript project.

<!--truncate-->

```dockerfile
FROM node:14-alpine

EXPOSE 8080

RUN mkdir -p /home/node/app && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY --chown=node:node . .

USER node

RUN cd /home/node/app/client && npm ci && npm run build
RUN cd /home/node/app/server && npm ci && npm run build

WORKDIR /home/node/app/server

CMD ["npm", "start"]
```

To start the container and expose a `.env` file:

```bash
docker run --name app-name \
    -p 8080:8080 \
    -v /absolute/path/to/.env:/home/node/app/server/.env \
    --restart unless-stopped -d image-name
```

---
title: 'Wordpress Theme Deployment'
date: 2021-03-28T22:57:46-07:00
draft: false
tags:
  - wordpress
  - ci/cd
authors: rbarbazz
---

Deploy a custom Wordpress theme with zero downtime using Github Actions.

<!--truncate-->

Build the project, `scp` the theme folder to the host. Link the new version and remove the old one.

Example workflow:

```yaml
name: Deployment
on:
  push:
    branches:
      - master
jobs:
  deploy:
    name: Deploy
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v1
        with:
          node-version: 12
      - run: npm ci
      - run: npm run build
      - name: Copy theme to host
        uses: appleboy/scp-action@v0.1.1
        with:
          host: ${{ secrets.HOST }}
          username: ${{ secrets.USERNAME }}
          key: ${{ secrets.SSH_KEY }}
          source: '.'
          target: '${{ secrets.THEME_ABS_PATH }}-new'
  link:
    name: Link
    needs: [deploy]
    runs-on: ubuntu-latest
    steps:
      - name: Symlink the current release
        uses: appleboy/ssh-action@v0.1.3
        with:
          host: ${{ secrets.HOST }}
          username: ${{ secrets.USERNAME }}
          key: ${{ secrets.SSH_KEY }}
          script: |
            ln -fsn ${{ secrets.THEME_ABS_PATH }}-new ${{ secrets.THEME_ABS_PATH }}
            rm -rf ${{ secrets.THEME_ABS_PATH }}-old
            cp -r ${{ secrets.THEME_ABS_PATH }}-new ${{ secrets.THEME_ABS_PATH }}-old
            ln -fsn ${{ secrets.THEME_ABS_PATH }}-old ${{ secrets.THEME_ABS_PATH }}
            rm -rf ${{ secrets.THEME_ABS_PATH }}-new
```

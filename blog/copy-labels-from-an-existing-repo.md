---
title: 'Copy labels from an existing repository'
date: 2023-05-14T15:38:00-08:00
draft: false
tags:
  - github
---

I recently learned how to copy labels from one repository to another.

<!--truncate-->

As far as I know it's the easiest way to bring existing Github labels to a new or existing repository. Creating a new repository from a template doesn't seem to include labels at this time.

## Install Github CLI

Start by installing the [Github CLI](https://cli.github.com/) if you haven't done so already.

Next, you'll have to login with [`gh auth login`](https://cli.github.com/manual/gh_auth_login).

## Clone your labels

Github CLI provides [a very convenient label cloning command](https://cli.github.com/manual/gh_label_clone) that lets you copy all of your labels at once:

```shell
gh label clone username/source-repo --repo username/destination-repo
```

The above command will copy all the labels but won't delete existing labels in the destination repository.

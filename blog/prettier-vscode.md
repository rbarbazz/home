---
title: 'Use Prettier with VSCode'
date: 2021-10-21T19:22:19-07:00
draft: false
tags:
  - javascript
  - vscode
---

Forget about manually running Prettier.

<!--truncate-->

First you need to install the [VSCode Prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).

Open the command palette and type "Preferences: Open Settings (JSON)". Then enable the "format on save" setting globally:

```json
{
  "editor.formatOnSave": true
}
```

You can also set it for a specific language:

```json
{
  "[javascript]": {
    "editor.formatOnSave": true
  }
}
```

You might also want to set Prettier as your default formatter for Javascript(or any language you want to use it for). If you don't, you'll see a prompt the first time you try to format your code.

```json
{
  "[javascript]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

Now everytime you save a Javascript file, Prettier will format it. The extension will pick up local configuration files. If there is none, it will use the default global config.

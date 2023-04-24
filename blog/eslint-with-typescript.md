---
title: 'ESLint with Typescript'
date: 2021-02-13T11:25:42-08:00
draft: false
tags:
  - typescript
  - eslint
authors: rbarbazz
---

ESLint can be used alongside Typescript to enforce coding standards.

<!--truncate-->

## With Typescript

To use ESLint in a Typescript project:

```bash
npm i -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

Paste the following configuration in a `.eslintrc.js` file:

```javascript
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
}
```

You can also add a `.eslintignore` file:

```bash
node_modules
dist
build
coverage
```

For further configuration (Prettier, Airbnb, Standard JS, plugins) see the [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/README.md#next-steps) repo.

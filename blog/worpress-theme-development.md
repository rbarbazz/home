---
title: 'Worpress Theme Development'
date: 2021-03-03T22:14:23-08:00
draft: false
tags:
  - wordpress
authors: rbarbazz
---

The easiest way I have found to work on a custom Wordpress theme is to use Local.

<!--truncate-->

### Requirements

- If the site is already live, get a SQL dump
- Get your `wp-config.php` file and add the following lines:

  ```php
  define('WP_HOME','http://mysite.local');
  define('WP_SITEURL','http://mysite.local');
  ```

- In the same file, you might also need to update the table prefix, look for `$table_prefix`
- Get a copy of the `wp-content` directory of your site

### Setup

- Download and install [Local](https://localwp.com/)
- Create a zip archive that contains the SQL dump, the copy of the `wp-content` directory and the `wp-config.php` file
- Drag and drop the archive in Local and follow the setup assistant
- Create a symbolic link to your theme:

  ```bash
  ln -s /absolute/path/to/theme /absolute/path/to/Local/site/location
  ```

When you need a fresh version of the DB or the content, you just have to put together the zip archive again.
Just delete the existing site and create a new one.

An alternative way to do local theme development is to use Docker: [github.com/nezhar/wordpress-docker-compose](https://github.com/nezhar/wordpress-docker-compose).

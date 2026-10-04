---
title: Backups
titleTemplate: Guides
description: Backups helps you prevent losing your library if something happens.
---

# Backups

Backups in **YTDLnis** are compatible between different versions of the app as long as some major database changes haven't been made.

::: tip How to create a backup
1. Go to <nav to="backup">
:::

## General backup details

### What's included in a backup?
- **Settings** including app settings and source-specific settings
- **Search Results** currently shown in the home screen
- **Download History**
- **Downloads in Queue**
- **Scheduled Downloads**
- **Cancelled Downloads**
- **Errored Downloads**
- **Saved Downloads**
- **Cookies**
- **Command Templates**
- **Shortcuts**
- **Search History**
- **Observe Sources**

You can also choose which of them to exclude from a backup!

The backup is a single file that you can save anywhere, and move to another phone.

::: warning
If you include cookies, the backup file can be used to log in to your accounts. Keep it somewhere safe.
:::

## Restoring a backup
Restoring a backup can be done through the "Restore" settings. Select the backup file and the app will show you what is inside it, so you can pick the categories to restore.

You have two choices:

- **Restore** merges the saved data with your current data.
- **Reset** erases your current data and only uses the saved data from the file.

After it is done, the app lists what has been restored.

## Automatic backup

Enable `Automatic backup` and the app will make a backup of everything whenever it finds that a new version of the app is installed. Choose where they go with `Backup path`.

## Suggestions for backups

Its recommended to make a backup every time you try to update the app in case of an update failure, or when re-installing the app!

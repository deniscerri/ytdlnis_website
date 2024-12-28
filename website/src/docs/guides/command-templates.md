---
title: Command Templates
titleTemplate: Guides
description: How to setup Command Templates in YTDLnis.
---

# How to run yt-dlp commands from the app

::: tip How to create a command template
1. Go to <nav to="commandtemplates">
:::

## Preferred Command Template

With this enabled, this command template will be chosen by default when you open the download card in the command tab.

## Extra Command

With this enabled, each download will append this command along with its own configuration.

## Data Fetching Extra Command (Advanced)

This is not visible by default, but you can enable it in the advanced settings. Essentially the app appends this command template during the data fetching process. Useful in some cases for advanced users since data fetching is done by the app and cant be user configured.

## Shortcuts

Shortcuts are meant to be small pieces of code that you can use to build a command template.

When creating a command template / shortcut, you can access them when:
- trying to change the template in the command tab in the download card
- trying to add an extra command to a video/audio download
- trying to write a terminal command

## Export to clipboard / Import Templates

You can use this function to export all of your command templates to your clipboard as a json object.
You can share this object with anyone who has YTDLnis installed. They just need to copy it to their clipboard and hit import templates. Easy.

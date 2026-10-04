---
title: Download Logs
titleTemplate: Guides
description: How to read and share download logs.
---

# Download Logs

A log is the full output of yt-dlp for a download. When something goes wrong, the log is the best way to find out why.

::: tip How to open the logs
Go to <nav to="logs">
:::

## When logs are created

- Always when a download **fails**, even if logging is off.
- For every download when `Log downloads` is enabled in <nav to="downloads">.
- Never for downloads in [incognito mode](/docs/guides/settings/downloads#incognito).

## Reading a log

Tap a log to open it. The log shows each step: fetching the data, the formats chosen, the downloaded fragments, post processing and then the error, if there is one. In the toolbar you can:

- `Wrap text` to make long lines fit the screen
- `Scroll to the bottom` to jump to the end, where the error usually is
- Change the `Text size`
- `Export file` or copy the log to share it

You can also open the log of an errored item from the [Download Queue](/docs/guides/download-queue#errored) with its file icon.

## Managing logs

Select logs by pressing and holding to delete a few of them, or use `Remove all` from the menu.

## Reporting a problem

When you [report an issue](https://github.com/deniscerri/ytdlnis/issues/new/choose), attach the log. Remove any private information such as personal links or tokens before posting.

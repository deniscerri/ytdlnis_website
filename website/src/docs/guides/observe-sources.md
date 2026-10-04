---
title: Observe Sources
titleTemplate: Guides
description: How to setup Observe Sources in YTDLnis.
---

# Observe Sources
How to setup Observe Sources in YTDLnis.

Observe Sources are a way of making the app periodically check for changes in a source like a playlist or channel and download newly uploaded videos from it.

::: tip How to create a source
1. Go to <nav to="observe-sources">
2. Tap `New source`
:::

- You can configure a set schedule based on hours, days, days of week or monthly.
- How often to check
- Stop after a certain number of checks

The download configuration shares the same settings as your normal download. Learn more [here.](/docs/guides/download-card)

## Creating a source

1. Paste the link of the playlist, channel or any other page that lists videos.
2. Configure the download like you would in the [Download Card](/docs/guides/download-card): audio or video, container, format, folder, filename template and so on. Every new item will be downloaded with this configuration.
3. Set the schedule (see below).
4. Press `Create`.

## Schedule

| Option | Meaning |
| --- | --- |
| **Every** | Check every N hours, days, weeks or months. |
| **Time** | The time of the day for the check. |
| **Days of the week** | When checking weekly, choose which days of the week it runs. |
| **Day of the month** | When checking monthly, choose the day of the month. |
| **Starts** | The date it starts checking. |
| **Ends** | `Never`, on a specific date, or `After` a number of occurrences. |

The next scheduled check is shown on the source card.

## Settings

`Get New Uploads Only`

When activated, the first run won't download anything. It will record all the available items and store them as processed, so next time they will be ignored

`Sync With Source`

If the source has deleted an item from the playlist / channel, the app will delete it from your download history as well, along with the file

`Retry Missing Downloads`

This checks your download history. If you have had deleted an item from the history, the app will try to download it again so both your history and the source are synced.

## Managing sources

Each source card shows the next scheduled run or that it is paused. Tap a source to open its details, where you see how many runs it has made and how many items it has processed and skipped (tap the chips to see the links). From there you can:

- **Pause** or resume it
- **Check now** to run it immediately instead of waiting for the next schedule
- **Edit** its configuration or schedule
- **Delete** it
- Open its **settings** for the options below

The settings have a few options for when you want to change what the source considers processed:

| Action | What it does |
| --- | --- |
| **Re-scan from scratch** | Forgets the processed items and downloads everything that is not already saved. |
| **Skip current backlog** | Marks everything currently in the source as done. Only future uploads are downloaded. |
| **Un-skip ignored uploads** | Downloads the existing uploads that the first run skipped because of `Get New Uploads Only`. |

You can delete all sources from the overflow menu.

## Making it reliable

Observe sources run in the background. Android is aggressive about stopping background apps, so:

- Disable battery optimization for the app (<nav to="general"> `Ignore battery optimization`).
- If runs are not happening at the exact time, enable `Use AlarmManager instead of WorkManager for scheduling` in <nav to="downloads"> and grant the exact alarm permission when asked.
- Sources are restored after a device reboot.

Observe sources are included in [backups](/docs/guides/backups).

---
title: Download Queue
titleTemplate: Guides
description: Download Queue Screen in YTDLnis.
---

# Download Queue

Open it from the **Queue** tab of the navigation bar, or from <nav to="download-queue">. The sections are tabs on top. Each tab can show the number of items in it, which you can turn off with `Show counts in the download queue screen` in <nav to="general">.

## Running

Here will be all the active downloads. You can individually pause / cancel a download. You can also bulk pause all items that are running and in the queue, and resume them later.
Pause and Cancel essentially do the same thing to the download process, but the cancel button transfers the download the Cancelled Downloads Section.

Each item shows its progress, speed, and the output of yt-dlp. How many items run at the same time is set with `Concurrent downloads` in <nav to="downloads">.

## In Queue

All items waiting in queue will be here. You are able to reorder items by dragging and dropping. Also you can multi select items and put them to the top of the queue or at the bottom. You can remove items from the queue.

Items stay here and wait if you have disabled `Download over metered networks` and are not on an unmetered connection, or if you have set a [download schedule](/docs/guides/settings/downloads#scheduling) and it is outside the allowed period.

## Scheduled

Each download where you have configured a scheduled time will be here. You can choose to download them immediately if you want, or even do this in bulk. You can also reschedule or edit them.

## Cancelled

All items that have been cancelled by the user. You can choose to redownload them or even do this in bulk. Swipe to redownload or remove them if swipe gestures are on.

Unfinished files of cancelled items are kept so the download can continue where it left off. You can have the app clean them up automatically with `Clean-up leftover downloads` in <nav to="downloads">.

## Errored

All items that failed to download will be here. You can easily press the file icon and it will send you to the log file showing you the whole download process and the error that caused it to fail. In most cases there might be something wrong with yt-dlp extractors, or a user error. You can choose to redownload the item or do this in bulk.
Also you can reconfigure a download and change things around to fix the error you were facing.

Not sure what the error means? See [Troubleshooting](/docs/guides/troubleshooting/).

## Saved

All items you saved for later. Long press the download button in the [Download Card](/docs/guides/download-card) to save an item here. You can download them later one by one or all at once.

## Common actions

In every tab, long press an item to select multiple, then you can:

- `Select all`, `Invert selected` or `Select items between`
- `Copy URLs`
- Move to the top or bottom (In Queue)
- Remove or clear the selection

The toolbar menu also has `Cancel downloads` and `Remove all`.

## Notifications

Running downloads show a notification with progress, and with `Pause` and `Cancel` buttons. When a download finishes you get a notification where you can open or share the file straight from it. Failed downloads notify you too.

::: tip Notifications are missing
Make sure the app has notification permission and that battery optimization is disabled for it. See [Troubleshooting](/docs/guides/troubleshooting/common-issues).
:::

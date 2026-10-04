---
title: Playlists & Multiple Items
titleTemplate: Guides
description: How to download playlists and many items at once.
---

# Playlists & Multiple Items

## Downloading a playlist

Paste a playlist link or share it to the app. YTDLnis lists every item in the playlist so you can pick which ones to download.

In the selection screen you can:

- Tap items to select or unselect them
- `Select items between` two items
- `Invert selected`
- `Reverse` the order of the list
- Press `Download` when you are ready

::: tip Playlist metadata
When downloading a playlist, the playlist name is used as the **album** metadata for audio if the item doesn't have one. You can turn this off with `Use playlist name as album metadata` in <nav to="processing">.
:::

## Multiple Download Card

When you download more than one item, you get the multiple download card. Here every item is listed and you can edit them one by one, just like a normal [Download Card](/docs/guides/download-card), or change settings for all of them at once from the toolbar:

| Option | What it does |
| --- | --- |
| **Preferred download type** | Switch all items to audio, video or command in one click. |
| **Format** | Pick a common format for all items. Works when all items are of the same type. For video you can select multiple audio formats too in case you are downloading them as a video. |
| **Folders** | Choose a common download path for every item. |
| **Container** | Choose a common container for every item. |
| **Incognito** | Don't save the items in the history. |
| **More** | Filename template and other shared options. |

You can also schedule the whole batch for later, or save it for later.

## Format filtering

When selecting a common format for many items, the app can filter the list:

- **All**: every format
- **Suggested**: formats the app suggests
- **Smallest format (per resolution)**

See [Formats](/docs/guides/formats) for more.

## Processing in the background

If the items are still being loaded when you press download, the app asks if you want to continue processing them in the background and start downloading afterwards.

## Duplicate downloads

If you try to download an item that already exists according to your [duplicate prevention](/docs/guides/settings/downloads#prevent-duplicate-downloads) setting, you will see a list of the items that already exist. For each one you can edit it, remove it from the list or copy its URL, and then `Continue anyway`.

## Following a playlist or channel automatically

If you want new uploads from a playlist or channel to be downloaded without doing anything, use [Observe Sources](/docs/guides/observe-sources).

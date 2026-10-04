---
title: Share Menu
titleTemplate: Guides
description: Download straight from the share menu of other apps.
---

# Share Menu

The fastest way to download something is to share it to YTDLnis from another app. Share a link from your browser, YouTube, TikTok, Instagram, Reddit or any other app and pick **YTDLnis** in the share sheet.

A bottom card opens right on top of the app you were using, so you don't have to switch to YTDLnis. You can configure the download using the [Download Card](/docs/guides/download-card) and press **Download**, and then go back to what you were doing.

::: tip The card closes the app I'm in
Some devices close the app underneath when the card shows up. Enable `Display over apps` in <nav to="general"> to make the card always display on top.
:::

## What you can share

- A link to a video or audio
- A playlist or channel link
- Multiple links, separated by new lines
- A `.txt` file filled with links, playlists or search queries, one per line. The app processes every line. See [Home](/docs/guides/home#importing-a-list-from-a-txt-file).
- Plain text with a search query

## Download immediately

If you don't want to configure anything, you can skip the card:

- Disable `Show download card` in <nav to="downloads"> to start the download as soon as you share the link, using your preferred settings.
- Enable `Don't fetch data` (quick download) in the same section to also skip fetching the video information. The download begins instantly.
- Enable `Show option to download immediately in the share menu` in <nav to="general"> to get a separate entry in the share sheet that downloads right away, while keeping the normal card for the usual one.

## Terminal in the share menu

Enable `Show terminal in share menu` in <nav to="general"> to get the [Terminal](/docs/guides/terminal) as another share option. The link will already be written in it.

## Opening links directly

YTDLnis can also handle `http` and `https` links opened from other apps, and it can be used from apps that support external downloaders by using the package name `com.deniscerri.ytdl`. See [Revanced Integration](/docs/faq/revanced).

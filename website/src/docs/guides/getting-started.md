---
title: Getting started
titleTemplate: Guides
description: Essential information to help you get set up with YTDLnis.
---

<script setup lang="ts">
import { data as release } from "@theme/data/release.data"
</script>

# Getting started

Essential information to help you get set up with YTDLnis.

**YTDLnis** is a free and open source video and audio downloader for Android 7.0 and above. It is a graphical interface for [yt-dlp](/yt-dlp/), so it can download from [more than 1000 websites](https://github.com/yt-dlp/yt-dlp/blob/master/supportedsites.md).

## Installation guide

### Downloading YTDLnis

1. Visit our [download](/download) page to get the latest version of **YTDLnis**.
2. After the download is complete, open the `.apk` file.
3. Proceed with the installation process.

- The download page suggests the right version for your device (arm64-v8a, or armeabi-v7a for older 32-bit devices). If you are on a PC, it suggests arm64. For an emulator or [WSA](https://learn.microsoft.com/en-us/windows/android/wsa/) use the `Other architectures` button to pick the x86_64 version.
- The app is also available on [F-Droid](https://f-droid.org/en/packages/com.deniscerri.ytdl), the [IzzyOnDroid repository](https://apt.izzysoft.de/packages/com.deniscerri.ytdl) and [Uptodown](https://ytdlnis.en.uptodown.com/android/download).

::: warning Only trust official sources
The only trusted sources of YTDLnis are the links above, the [GitHub repository](https://github.com/deniscerri/ytdlnis) and this website. Apps claiming to be "YTDLnis for iOS" or hosted somewhere else are not from us.
:::

### Permissions

On the first launch the app will ask for permission to write files to your device so it can save the downloads. If you want to download to folders Android restricts by default, enable `Allow access to all directories` in <nav to="folders">.

If your downloads get stopped when the screen is off, disable battery optimization for the app. You can do it from <nav to="general"> by tapping `Ignore battery optimization`.

## Your first download

There are three easy ways to start a download:

1. **From the home screen**: type a search term or paste a link in the search bar and press enter.
2. **From the share menu**: in another app (browser, YouTube, TikTok, etc.) share the link to **YTDLnis**. A card shows up right on top of the app you are in. [Learn more](/docs/guides/share-menu).
3. **From the clipboard**: copy a link and open the app. A button will appear on the home screen to process it. [Learn more](/docs/guides/home).

After the link is processed you get a card where you pick between **Audio**, **Video** or **Command**, adjust whatever you need, and press **Download**. See the [Download Card](/docs/guides/download-card) guide for everything it can do.

You can watch the progress in the [Download Queue](/docs/guides/download-queue) screen or from the notification. When a download finishes it ends up in your [Downloads](/docs/guides/downloads) list, where you can open, share or delete the file.

## Where is everything?

The bottom navigation bar has four sections:

| Section | What it is |
| --- | --- |
| **Home** | Search, paste links and see results. [Guide](/docs/guides/home) |
| **Downloads** | The history of everything you have downloaded. [Guide](/docs/guides/downloads) |
| **Queue** | Running, queued, scheduled, cancelled, errored and saved downloads. [Guide](/docs/guides/download-queue) |
| **More** | Terminal, logs, command templates, cookies, observe sources and settings. |

You can reorder these, change their labels and pick which screen the app opens on in <nav to="general">.

## Keep yt-dlp updated

Websites change all the time and yt-dlp has to follow them. It is a good idea to look at the updating settings, update yt-dlp and keep auto-update enabled. In some countries yt-dlp doesn't automatically update so the app might not be able to download properly right away. Update yt-dlp, then try again. [Learn more](/docs/guides/settings/updating).

## What next?

- Learn how to configure a download in the [Download Card](/docs/guides/download-card).
- Download a whole playlist in [Playlists & Multiple Items](/docs/guides/playlists).
- Automate downloading new uploads with [Observe Sources](/docs/guides/observe-sources).
- Something not working? Check [Troubleshooting](/docs/guides/troubleshooting/).
- Tune the app to your liking in [Settings](/docs/guides/settings/).

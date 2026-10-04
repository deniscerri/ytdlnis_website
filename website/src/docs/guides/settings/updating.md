---
title: Updating Settings
titleTemplate: Settings - Guides
description: Updating Settings for YTDLnis.
---

# Updating Settings

<nav to="update">

## yt-dlp

yt-dlp has to be updated often to keep up with websites. This screen shows the installed version and lets you check and install updates.

### yt-dlp update channel
- **Stable** (default), choose this if you don't rely on the app a lot or if you don't download from many sites.
- **Nightly**, has a balanced stability and is recommended for most users. Contains most of the fixes that the stable release doesn't have most of the time.
- **Master**, the least stable but comes with the very latest fixes and/or additions compared to the nightly release. Only recommended for advanced users or if necessary.

Read more [here](https://github.com/yt-dlp/yt-dlp#:~:text=There%20are%20currently,master-builds.).

### Custom channels
Update from your own yt-dlp release repositories, for example a fork. Add one by giving it a name and the GitHub repository, then pick it as the channel.

### Auto-update yt-dlp
It's recommended to keep this enabled as yt-dlp needs to be updated pretty often to stay working!

### Update yt-dlp while downloading
Add `-U` to the yt-dlp command to update it to the latest before downloading.

## App

### App update channel
`Stable`, or `Beta` to enroll in the beta program. Beta releases may contain bugs.

### Check for updates
Announce new versions of the app when it is opened. The data is extracted from the official GitHub Repository. Updates are downloaded with a progress bar, and installed using the method you chose below.

### Changelog
Shows the changes of every release.

## Packages

Manage Python, FFmpeg, JS runtimes and aria2c without updating the app. See [Packages](/docs/guides/packages).

## APK installation method
`System`, `Shizuku` or `External` (choose an installer app).

## Format

### Format order
How the formats are sorted in the format list: `File size`, `Container`, `Codec` or `ID`.

### Format filter
`All`, `Suggested` or the `Smallest format (per resolution)`.

### Update formats
Fetch the formats as soon as the download card appears.

See [Formats](/docs/guides/formats).

## Reset
Resets every preference in this screen.

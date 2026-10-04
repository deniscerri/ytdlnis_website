---
title: Packages
titleTemplate: Guides
description: Upgrade and downgrade Python, FFmpeg, JS runtimes and aria2c without updating the app.
---

# Packages

Packages are helper applications YTDLnis uses to help with yt-dlp commands. Some of them are already bundled in the app, but you can install newer (or older) versions that are published, without the need to update the app.

::: tip How to open it
Go to <nav to="packages">
:::

## Available packages

| Package | What it is used for |
| --- | --- |
| **Python** | Runs yt-dlp. |
| **FFmpeg** | Merging, converting, embedding, cutting, cropping and everything that processes media after download. |
| **JS runtimes** (NodeJS, Deno, QuickJS) | Needed by yt-dlp to solve some JavaScript challenges, for example on YouTube. Also used by the [PO token](/docs/guides/youtube#po-tokens) provider. |
| **aria2c** | The alternative downloader, enabled with `aria2c` in the download settings. |

Each package shows if it is `Bundled`, `Installed` or `Not installed`, and which version is in use.

## Installing a package

Open a package to see the published releases and their changes. Pick a version and tap to install it. The package is downloaded and installed by the app. It replaces the bundled one while it is installed, and you can remove it to go back to the bundled version.

If you already have the package zip on your device, you can import it from there.

The packages are published in the [ytdlnis-packages](https://github.com/deniscerri/ytdlnis-packages/) repository. For more information refer to that repository's README.

::: tip When to upgrade
- Cropping VP9 and AV1 videos might need a higher FFmpeg, such as 7.1.1.
- If FFmpeg crashes or doesn't run on your device, try an older version.
- If YouTube asks for a JS runtime, install one of the JS runtimes.
:::

## APK installation method

Some packages, as well as the app itself, are delivered as APK files. How they are installed is set with `APK Installation method` in <nav to="update">: `System` (the normal Android installer), `Shizuku`, or an `External` installer app you choose. If the system install fails, choose another method.

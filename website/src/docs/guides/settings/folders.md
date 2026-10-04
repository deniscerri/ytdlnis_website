---
title: Folder Settings
titleTemplate: Settings - Guides
description: Folder Settings for YTDLnis.
---

# Folder Settings

<nav to="folders">

## Audio folder / Video folder / Custom command folder
Where finished downloads of each type are saved. The custom command folder is used by the Command download type and the [Terminal](/docs/guides/terminal).

## Allow access to all directories
Let the app download on directories that are restricted by default. Grant it if you can't choose a folder, or if downloads to your chosen folder fail.

## Check for available storage
Before a download starts, check if there is enough free space on the device for it. If not, a warning is shown.

## Cache Folder
Not recommended to modify. Set custom folder where temporary download files stay. If the app cant write to the set destination it will fall back to the internal cache folder

## Cache downloads first
Useful to have when the app cant write directly to the download path and instead writes to cache folder then moves the file.

## Dont download as fragments
Disable using .part files in the download process

## Keep fragments
Usually you should use this with cache disabled. Otherwise those leftover fragments will be useless as future downloads will have their own new folder

## Filename template
The default template for new downloads, separate for video and audio. The default is `%(uploader).30B - %(title).170B`. See [Filename Templates](/docs/guides/filename-templates).

## Save to subdirectory
Automatically sort downloads in folders based on metadata. Choose any of `Website`, `Playlist` and `Media Type` and the app creates the folders inside your download folder.

## Trim filenames
Shorten long file names so they don't go over the limits of the file system.

## Restrict Filenames
Restrict filenames to only ASCII characters, and avoid "&" and spaces in filenames. Useful if for some reason the download cant finish if the title has weird characters that android doesn't support. Either enable this or modify the title in the download card

## Temporary files
Shows how much space the working files of the app take, and lets you manage them:

| Item | What it is |
| --- | --- |
| Unfinished downloads | Partial files of stopped or failed downloads, kept so they can be resumed. |
| Info-JSONs | Saved video metadata so yt-dlp doesn't have to fetch it again. |
| yt-dlp cache | Data yt-dlp reuses between runs, like YouTube player signatures. |
| Temporary configurations | Command configs, URL lists and other short-lived files. |
| Downloaded APKs | APKs downloaded for app and package updates. |

- `Move temporary files` transfers cached download files to the downloads folder.
- `Clear everything` deletes all of the above. It can't be undone, and unfinished downloads can't be resumed after.

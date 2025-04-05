---
title: Folder Settings
titleTemplate: Settings - Guides
description: Folder Settings for YTDLnis.
---

# Folder Settings

## Cache Folder
Not recommended to modify. Set custom folder where temporary download files stay. If the app cant write to the set destination it will fall back to the internal cache folder

## Cache downloads first
Useful to have when the app cant write directly to the download path and instead writes to cache folder then moves the file.

## Dont download as fragments
Disable using .part files in the download process

## Keep fragments
Usually you should use this with cache disabled. Otherwise those leftover fragments will be useless as future downloads will have their own new folder

## Restrict Filenames
Useful if for some reason the download cant finish if the title has weird characters that android doesn't support. Either enable this or modify the title in the download card


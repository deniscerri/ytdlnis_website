---
title: Filename Templates
titleTemplate: Guides
description: How to create custom Filename Templates.
---

# What are Filename Templates?

Filename templates are a way of sending arguments to yt-dlp to configure how a download item's file name is written.

Example Template:

`%(uploader).30B - %(title).170B`

Example Output:

`Eminem - Rap God`

This template tells yt-dlp to use the video uploader not longer than 30 bytes and the title not longer than 170 bytes.

Command templates are created through metadata tags which can look like:

`%(tagname)s`

The suggested section gives you all the possible tags that yt-dlp supports. This doesn't mean that your download item will be able to translate them if it doesn't have the metadata. e.g. using a playlist tag on a single item download

## Downloading in a Sub-Folder

Example template:

`mysubfoldername/%(title)s`

This will download your file in your preferred download location, create the `mysubfoldername` folder and then put the downloaded file named after the title.

You can take this a step further by using tags. Such as using Playlist name as subfoldername:

`%(playlist)s/%(...`

::: tip Extension Tag
The tag %(ext)s which represents the file extension format is automatically inserted by the application and you don't need to write it down in your filename template
:::

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

Filename templates are created through metadata tags which can look like:

`%(tagname)s`

The suggested section gives you all the possible tags that yt-dlp supports. This doesn't mean that your download item will be able to translate them if it doesn't have the metadata. e.g. using a playlist tag on a single item download

## Where to set them

- **Default for all downloads**: <nav to="folders"> `Filename template`. There is one for video and one for audio.
- **For a single download**: the `Filename Template` option in the [Download Card](/docs/guides/download-card).
- **For several items at once**: in the [Multiple Download Card](/docs/guides/playlists#multiple-download-card).
- In the [Terminal](/docs/guides/terminal), from the toolbar menu.

While editing, a `Preview filename` shows you what the result will look like for the current item. Templates you use can be saved under `My filename templates` so you can pick them again later.

## Common tags

| Tag | Meaning |
| --- | --- |
| `%(title)s` | Video title |
| `%(uploader)s` | Full name of the uploader |
| `%(channel)s` | Name of the channel |
| `%(id)s` | Video identifier |
| `%(upload_date)s` | Upload date, `YYYYMMDD` |
| `%(duration_string)s` | Length, `HH:mm:ss` |
| `%(playlist)s` | Playlist id or title |
| `%(playlist_title)s` | Name of the playlist |
| `%(playlist_index)s` | Index of the item in the playlist |
| `%(playlist_autonumber)s` | Position of the item in the download queue |
| `%(autonumber)s` | Number that increases with each download |
| `%(rownumber)s` | Row number of the item when downloading multiple items |
| `%(artist)s`, `%(album)s`, `%(track)s` | Music metadata, when the website has it |
| `%(webpage_url_domain)s` | The domain of the website |
| `%(resolution)s` | Resolution of the format |
| `%(extractor)s` | Name of the extractor |
| `%(playlist_index,playlist_autonumber&{}. |)s%(title)s` | Title with playlist index in front, if available |

The app lists every tag yt-dlp supports with their type, in the suggestions below the text field. Tap a tag to insert it.

## Trimming and formatting

You can limit the length of a tag. `%(title).170B` limits the title to 170 bytes, and is useful because Android has a limit on how long a file name can be. The default template `%(uploader).30B - %(title).170B` keeps names inside that limit. Also see `Trim filenames` in <nav to="folders">.

Other yt-dlp output template features such as default values (`%(uploader|Unknown)s`) and alternates (`%(artist,uploader)s`) also work. See the [yt-dlp documentation](https://github.com/yt-dlp/yt-dlp#output-template).

## Downloading in a Sub-Folder

Example template:

`mysubfoldername/%(title)s`

This will download your file in your preferred download location, create the `mysubfoldername` folder and then put the downloaded file named after the title.

You can take this a step further by using tags. Such as using Playlist name as subfoldername:

`%(playlist)s/%(playlist_index)s - %(title)s`

::: tip No template needed
If you only need a simple structure, you don't have to write a template. Use `Save to subdirectory` in <nav to="folders"> to automatically put downloads in folders named after the **website**, the **playlist** or the **media type**.
:::

::: tip Extension Tag
The tag %(ext)s which represents the file extension format is automatically inserted by the application and you don't need to write it down in your filename template
:::

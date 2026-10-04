---
title: Advanced Settings
titleTemplate: Settings - Guides
description: Advanced Settings for YTDLnis.
---

# Advanced Settings

<nav to="advanced">

These settings are for people who know what they are changing. The defaults work for most users.

## YouTube

### Player client
Choose which YouTube clients yt-dlp should act as and set PO tokens for them. See [YouTube](/docs/guides/youtube#player-client).

### Generate PO tokens
Create tokens manually, or use the automatic provider. See [PO tokens](/docs/guides/youtube#po-tokens).

### Use app language for metadata
If enabled, metadata fields will follow your app language and even affect format selection by preferring dubbed versions instead of original.

### Other YouTube extractor arguments
Extra arguments passed to the YouTube extractor of yt-dlp, such as `player_skip=webpage`.

## Command templates

### Data fetching extra command
Enable [command templates](/docs/guides/command-templates) to be used for data fetching as extra commands. Once enabled, each template gets a data fetching option.

## Format

### Use format importance ordering
Weigh the properties of formats in the order you choose, instead of the standard selection. Set the order for video and audio in the two `Format importance order` entries. See [Formats](/docs/guides/formats#format-importance-order).

## Downloading

### Disable write info json
Every time you restart / resume the download, yt-dlp will re-download json data from the servers. Not recommended.

### Suppress HTTPS certificate validation
Ignore certificate errors. Use it only if a website has an invalid certificate and you trust it.

### User-Agent header
Use the user agent of the web view when you created your cookies. See [Cookies](/docs/guides/cookies#user-agent-header).

## Miscellaneous

### Disable flat playlist
Don't use `--flat-playlist`. Data fetching of playlists is slower, but the items come with more data.

### Use original url for playlist url
Use the playlist URL given by you instead of the `playlist_webpage_url` tag from the json dump.

## Reset
Resets every preference in this screen.

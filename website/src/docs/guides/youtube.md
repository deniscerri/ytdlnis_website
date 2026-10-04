---
title: YouTube
titleTemplate: Guides
description: Settings that help when downloading from YouTube.
---

# YouTube

YouTube changes its systems often, which is the most common reason downloads fail. This page explains the settings that exist for it.

First of all, make sure [yt-dlp is up to date](/docs/guides/settings/updating). Most of the time that is enough.

## Data fetching

In <nav to="general"> under **YouTube**:

- **Data fetching extractor (YouTube)**: `yt-dlp` or `NewPipe`. NewPipe is faster for searching, and yt-dlp is more compatible. If the app crashes while searching, choose yt-dlp.
- **Formats source**: where the formats of a video come from, `yt-dlp` or `NewPipe`.
- **Use item URL instead of playlist URL**: downloads the item directly instead of through the playlist. The playlist metadata won't be embedded.

## Player client

<nav to="advanced"> ➔ `Player client`

yt-dlp talks to YouTube pretending to be a certain client (`web`, `android`, `ios`, `tv`, `mweb` and others). Each client offers different formats and has different restrictions. You can add the clients you want yt-dlp to use, and for each you can attach PO tokens (GVS, Player and Subs), limit it to URLs that match a regular expression, and turn on `Use only PO token` to ignore the player client and only send the token.

If one client stops working, try changing to another. Videos that need a login work best with cookies and a `web` client.

You can pass any other YouTube extractor arguments in `Other YouTube extractor arguments`, for example `player_skip=webpage`.

## PO tokens

A PO (proof of origin) token is something YouTube asks from clients to prove they are a real app. Without it some formats may be missing or return an error.

There are two ways to deal with it:

### Manual PO tokens

<nav to="advanced"> ➔ `Generate PO tokens`

The app opens a web view where you sign in to your Google account and play a video with auto-translated subtitles. The app picks up the **Visitor Data**, and the **PO Token** for GVS (the video stream), the player and subtitles. They are then provided to yt-dlp for the clients you set them for. You can regenerate them if they expire.

::: warning
Manual PO tokens are for use without cookies. Turn off cookies when using them.
:::

### Automatic provider (BgUtils)

The app can host a PO token generator for yt-dlp using the [bgutil provider](https://github.com/Brainicism/bgutil-ytdlp-pot-provider). It needs a JS runtime from [Packages](/docs/guides/packages) and installs the yt-dlp plugin by itself. You can choose how tokens are generated:

- **HTTP Server**: a small JavaScript server runs on port `4416`. The app starts it when the download queue begins or an observe source runs, and it stays on until you shut it down from its notification. Best if you download a lot.
- **Generation script**: a new process is started on every yt-dlp call. Simpler, but slower and not recommended for many concurrent downloads.

## Cookies on YouTube

Cookies unlock members only videos, age restricted content and the better audio of YouTube Music. See [Cookies](/docs/guides/cookies).

## Language and dubbed audio

`Use app language for metadata` in <nav to="advanced"> makes the titles and descriptions follow your app language and prefers the dubbed audio track in that language when available. Otherwise the original is used. You can also set `Preferred audio language` in the [processing settings](/docs/guides/settings/processing).

## Live streams and premieres

In the video tab of the [Download Card](/docs/guides/download-card) you can record a live stream from the start, or wait until a scheduled stream goes live.

## Related questions

See the [FAQ](/docs/faq/general) about YouTube Music audio quality (`128kbps`, `256kbps`) and why there is no mp3 on YouTube.

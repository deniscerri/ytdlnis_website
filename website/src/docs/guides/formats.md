---
title: Formats
titleTemplate: Guides
description: How YTDLnis chooses and lets you pick download formats.
---

# Formats

When you open the [Download Card](/docs/guides/download-card) the app fetches the formats available for that item and automatically selects one based on your preferences. You can tap the format card in the **Audio** or **Video** tab to choose a different one.

## Reading a format card

Each format shows:

- **Container** such as `mp4`, `webm`, `m4a` or `opus`
- **Quality / resolution** such as `1080p` or `128kbps`
- **Codec** and **file size** as chips
- **Format ID**, the number yt-dlp uses to identify it

## Selecting a format

The format selection sheet lists every format, with a few ways to organize them.

- **Format order** sorts the list by `File size`, `Container`, `Codec` or `ID`.
- **Format filter** shows `All` formats, only the `Suggested` ones, or the `Smallest format (per resolution)`.

These are set in <nav to="update"> under the **Format** category.

## Generic formats

If the app can't fetch the formats, or when you use `Don't fetch data`, it falls back to generic formats that are not tied to a site:

- Video: Best quality, ~2160p, ~1440p, ~1080p, ~720p, ~480p, ~360p, ~240p, Worst quality
- Audio: Best quality, ~192kbps, ~160kbps, ~128kbps, ~96kbps, ~64kbps, Worst quality

The app translates these to a yt-dlp format selector, so the actual quality will be the closest one available for the website.

## How the app auto-selects a format

The default format is picked using these preferences in <nav to="processing">:

| Setting | Effect |
| --- | --- |
| **Video quality** | The target resolution, from best to worst. |
| **Preferred video codec** | AV1, VP9, AVC (H264) or HEVC (H265). |
| **Preferred audio codec** | M4A or OPUS. |
| **Preferred audio language** | Picks the audio track in that language when the item has several. |
| **Preferred format ID** | If the item has a format with this ID, it is selected. Separate for audio and video. |
| **Preferred Format Size** | Prefer the `Smallest` or the `Largest` format. Separate for video and audio. |
| **Prefer DRC audio** | Prefer audio with dynamic range compression. |

### Format importance order

In <nav to="advanced"> you can enable `Use format importance ordering` and decide in what order the app weighs the properties of a format. This order is only used when the app fetches formats in the download card and auto-selects one.

- **Video**: Preferred format ID, Video quality, Codec, Video with no audio, Container, File size
- **Audio**: Preferred format ID, Language, Codec, Container, File size

Drag the elements around to change what matters most to you.

## Formats source

For YouTube, the formats can be fetched with `yt-dlp` or with `NewPipe`. Change it with `Formats source` in <nav to="general">.

## Update formats

`Update formats` in <nav to="update"> fetches the formats as soon as the download card appears. If you open the card for an item with no format data you can also tap the update button in the card to fetch it.

## Audio-only items

Some items only contain audio formats. The app tells you this in the card and only lets you pick audio formats.

## Container vs. format

The **container** setting is not the same as choosing a format. A format is what exists on the website. The container converts the downloaded format into another file type after the download is complete. Converting a low quality format into another container does not improve the quality.

---
title: Subtitle Languages
titleTemplate: Guides
description: How to configure preferred subtitle languages.
---

# How to configure preferred Subtitle Languages

Example:

`en.*,.*-orig`

Apart from selecting the language through the suggested chips, you can write down the language codes yourself. To write multiple languages, separate the codes by `,`.
Each suggested chip represents a certain language code that yt-dlp can understand.

Languages of the subtitles to download can be regex. e.g. "en.*" is a regex pattern that matches "en" followed by 0 or more of any character. You can prefix the language code with a "-" to exclude it from the requested languages, e.g. -live_chat

## Where to set it

- Default: <nav to="processing"> `Subtitle languages` (the default value is `.*-orig`, which means the original language of the video)
- Per download: the `Subtitles` option in the video tab of the [Download Card](/docs/guides/download-card)

## Useful values

| Value | Meaning |
| --- | --- |
| `en` | English |
| `en.*` | English and all its variants such as `en-US`, `en-GB` |
| `.*-orig` | The original language of the video, when automatic subtitles exist |
| `all` | Every available language |
| `all,-live_chat` | Everything except the live chat |
| `es,pt.*` | Spanish and every Portuguese variant |

## Subtitle options

In <nav to="processing"> under **Video**:

| Setting | Meaning |
| --- | --- |
| `Embed subtitles` | Put the subtitle stream into the video file. |
| `Save subtitles` | Write the subtitle as a separate file next to the video. |
| `Save automatic subtitles` | Same, for automatically generated or translated subtitles. |
| `Delete subtitle files after embedding` | When saving and embedding together, delete the files after they are embedded. |
| `Subtitle format` | Convert the subtitles to `srt`, `ass`, `lrc` or `vtt`. |

Embedding subtitles doesn't embed automatic subtitles by default. Enable `Save automatic subtitles` and `Embed subtitles` together.

You can also **burn** subtitles into the picture of the video from the download card. This re-encodes the video, and the speed depends on `Internal Plugin FFmpeg Preset` in the processing settings (slower presets give smaller files).

::: tip Note
Subtitles are saved or embedded only when the website has them. For automatic subtitles, YouTube generates a lot of translated languages, so choose only what you need or the download might get slow or fail due to rate limiting.
:::

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

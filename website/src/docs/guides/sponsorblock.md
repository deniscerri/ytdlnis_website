---
title: SponsorBlock
titleTemplate: Guides
description: How SponsorBlock works.
---

# SponsorBlock

[SponsorBlock](https://sponsor.ajay.app/) is a community database of the segments inside YouTube videos that are not part of the content. With the SponsorBlock API you can remove unnecessary portions from the file. These include:
- Non-music and off-topic portions
- Sponsors
- Intro
- Outro
- Self-Promos
- Previews
- Fillers
- Subscription Reminders
- Hook / Greetings

SponsorBlock is useful especially when downloading music, so you don't get the fluff.

## Using it

- **Globally**: in <nav to="processing"> keep `Use SponsorBlock` on and choose the categories under `SponsorBlock`.
- **Per download**: in the `SponsorBlock` option of the Adjust section of the [Download Card](/docs/guides/download-card), for both audio and video.

The segments are cut out from the final file. The sections are found by yt-dlp, which asks the SponsorBlock API for the segments of the video. Videos with no submissions in the database won't have anything removed.

## Marking instead of removing

With `Chapters in videos` enabled in the processing settings (or `Add Chapters` in the card), the SponsorBlock segments are added as chapters in the video instead of being removed.

## Custom API

If you host your own SponsorBlock server or mirror, set it with `SponsorBlock API URL` in <nav to="processing">.

::: tip Note
Cutting segments requires the video to be processed with FFmpeg, so it makes the download take longer.
:::

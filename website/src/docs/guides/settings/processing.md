---
title: Processing Settings
titleTemplate: Settings - Guides
description: Processing Settings for YTDLnis.
---

# Processing Settings

<nav to="processing">

These settings are the defaults for what is applied to the media. Each of them can be changed for a single download in the [Download Card](/docs/guides/download-card). They don't apply to the Command download type.

## General

### Use SponsorBlock
Remove unwanted portions from videos. Choose the categories in `SponsorBlock` and a custom server with `SponsorBlock API URL`. See [SponsorBlock](/docs/guides/sponsorblock).

### Enable mtime
Set the file's last modified time to the HTTP `Last-Modified` header of the website, instead of the time the download finished.

### Save description
Write the description of the video to a file.

### Add extra commands
For audio / video downloads. Add extra commands along with the GUI configuration. See [Extra Commands](/docs/guides/extra-commands).

### Force keyframes at cuts
Slower process, but more accurate cuts.

### Embed metadata
Parse and embed metadata (title, author and more) into the file.

## Audio

### Bitrate
The bitrate to convert the audio to, from 64 kbps to 320 kbps. Default keeps the original.

### Thumbnail covers
Use the thumbnail as cover art.

### Crop thumbnail
Crop the thumbnail into a square for audio downloads.

### Use playlist name as album metadata
If album metadata is not present, use the playlist name instead.

### Preferred audio language
For videos with multiple audio tracks, select this language.

### Preferred audio codec
`M4A` or `OPUS`.

### Prefer container over codec for audio downloads
With this enabled, the preferred audio codec preference will be ignored and only the container will change.

### Audio format
The container the audio is converted to: `mp3`, `m4a`, `aac`, `alac`, `flac`, `opus`, `wav` or `vorbis`.

### Preferred audio format ID
Select the format with this ID in the download card.

### Prefer DRC Audio
Prefer audio that has dynamic range compression applied.

## Video

### Embed subtitles
Add subtitles in the video.

### Save subtitles / Save automatic subtitles
Write the subtitle as a file next to the video.

### Delete subtitle files after embedding
When using both Embed Subtitles and Write Subtitles, don't keep the subtitle files after embedding.

### Subtitle languages
See [Subtitle Languages](/docs/guides/subtitle-languages).

### Subtitle format
`srt`, `ass`, `lrc` or `vtt`.

### Save thumbnail
Save the thumbnail in the download folder, as `PNG` or `JPG` (`Thumbnail format`).

### Thumbnail covers (video)
Use the thumbnail as the cover art of the video file.

### Chapters in videos
Mark YouTube / SponsorBlock segments as chapters for the video.

### Video format
The container: `mp4`, `webm`, `mkv`, `mov`, `avi`, `flv` or `gif`.

### Recode video
Recodes the video file to the specified video format.

### Compatible video
Recodes the video making it compatible with other apps and devices.

### Preferred video codec
`AV1`, `VP9`, `AVC (H264)` or `HEVC (H265)`.

### Video quality
From best quality to ~2160p, ~1440p, ~1080p, ~720p, ~480p, ~360p, ~240p, or worst quality.

### Preferred video format ID
Select the format with this ID in the download card.

### Internal Plugin FFmpeg Preset
The preset FFmpeg uses for things the app does itself, like burning subtitles. Slower presets make smaller files, faster presets finish sooner. Adjusting this affects the final file size.

### Remove audio
Download videos without sound.

### Also download as audio
Every video download also creates an audio download.

## Format

### Preferred Format Size / Preferred Audio Format Size
When several formats match, prefer the `Smallest` or `Largest` one.

See [Formats](/docs/guides/formats) to understand how these work together.

## Reset
Resets every preference in this screen.

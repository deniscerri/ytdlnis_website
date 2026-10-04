---
title: Download Card
titleTemplate: Guides
description: How to configure a download.
---

# Download Card

The Download Card is a bottom sheet dialog where you can customize everything (almost) YTDLnis has to offer in functionality. It opens when you press the audio or video button of a result in [Home](/docs/guides/home), or when you share a link from another app through the [Share Menu](/docs/guides/share-menu).

You can download in 3 ways: **Audio**, **Video** and **Command**.

::: tip Disabling the card
If you don't need to configure anything, you can disable it with `Show download card` in <nav to="downloads">. The app will then start downloading right away with your preferred settings. You can still open the card by pressing and holding the audio or video button of a result.
:::

## Main Layout

### Download Button

Short press to download.
Long press to save your download in the Saved Downloads list where you can download later.

### Schedule Button

Select the preferred time and date of the download and it will be saved to your Scheduled Downloads list.

### URL Button

Short press to be redirected to the URL.
Long press to copy the URL.

### Incognito Button

When enabled, the current download wont be added to your download history

### Update Button

This button is not shown by default, but if your download item lacks info you are able to use this to fetch data for this item. Cases when a download lacks data is when you have enabled Quick Download, and you are navigated immediately to the download card and skipped the data fetching process.

### Customizing the card

You can hide parts of the card you never use (Schedule, Title, Author, Container, Adjust audio, Adjust video, Adjust templates, URL) with `Modify download card` in <nav to="general">. In the same section, you can turn on swipe gestures in the card to switch between the three tabs.

----

## Audio

- Title and Author fields are automatically filled by the data extractor process. If you leave them empty, the download will not override the metadata and keep them as they are.

### Container

The container converts the format to the chosen format. Many people are lied to about those 320kpbs youtube to mp3 converters. In reality YouTube doesn't provide mp3 formats but only m4a or opus formats. Even with Cookies enabled the maximum you will receive is 256kbps with format id `141`.

You might use this function if you are planning to play your audio in a device that cant run the original container. For anything else, i suggest to leave the container as it is for the best possible audio quality.

Available containers: `mp3`, `m4a`, `aac`, `alac`, `flac`, `opus`, `wav` and `vorbis`.

### Audio Quality

This section shows the chosen format for download. This format is chosen by your preferences that you have configured in the settings. To the left you have the original container. The bottom chips represent the codec and the filesize. To the right you have format id. Tap it to select another one. [Learn more about formats](/docs/guides/formats).

### Adjust Audio

`Thumbnail Covers`

This puts the video thumbnail as the music cover

`Crop Thumbnail`

This crops the thumbnail in a square shape just like a normal music cover instead of the usual 16/9

`Split By Chapters`

This chops up your audio file into multiple files if the content you are downloading has chapters set up. This is useful if you are trying to download one of those compilation videos, or an album video but you want each song separately.

`SponsorBlock`

[Learn more about SponsorBlock](/docs/guides/sponsorblock)

Useful especially when downloading music and you don't want the fluff

`Filename Template`

[Learn more about Filename Templates](/docs/guides/filename-templates)

`Add Extra Commands`

[Learn more about Extra Commands](/docs/guides/extra-commands)

`Cut`

[Learn more about Cutting](#cutting)

----

## Video

- Title and Author fields are automatically filled by the data extractor process. If you leave them empty, the download will not override the metadata and keep them as they are.

### Video Container

The container converts the format to the chosen format.
Available containers: `mp4`, `webm`, `mkv`, `mov`, `avi`, `flv` and `gif`.
You might use this function if you are planning to play your video in a device that cant run the original container. For anything else, i suggest to leave the container as it is for the best possible quality.

### Video Quality

This section shows the chosen format for download. This format is chosen by your preferences that you have configured in the settings. To the left you have the original container. The bottom chips represent the codec and the filesize. To the right you have format id. You can also pick an audio format to be merged with the video, and even multiple audio formats. [Learn more about formats](/docs/guides/formats).

### Adjust Video

`Save Thumbnail`

Additionally downloads the video thumbnail and stores it next the video. You can configure the thumbnail format in the settings.

`Add Chapters`

If the original video has chapters set up, add them in the metadata. Also if you have SponsorBlock enabled it will also include the sponsorblock chapters too.

`Split By Chapters`

This chops up your video file into multiple files if the content you are downloading has chapters set up.

`Subtitles`

You are able to:
- Embed Subtitles (Put subtitles stream into the video)
- Save Subtitles (Download the subtitles as a file next to the video. The sub format can be configured in the settings)
- Save Automatic Subtitles (Download automatically translated subtitles as a file next to the video)
- Burn Subtitles (Hardcode the subtitles into the picture of the video. This re-encodes the video, so it takes longer)

Embedding subtitles by default doesn't embed automatic subtitles. You need to enable Save Automatic Subtitles + Embed Subtitles to also embed them in the video itself.

[Learn more how to configure subtitle languages](/docs/guides/subtitle-languages)

`Audio`

You are able to:
- Remove Audio (Silence the video, remove the audio stream from it)
- Also Download as audio (Creates a 2nd download item the moment you hit download with your preferred audio related settings)

`Recode Video`

Re-encode the video into another format if necessary. This can be used when you are trying to change the container. Enable `Compatible Video` in the processing settings if the result needs to play on other apps and devices that are picky about codecs.

`Live Stream`

For live streams and upcoming premieres you can choose:
- **Live from start**: record the stream from the beginning instead of from the moment you started the download
- **Wait for video**: if the video is not available yet, retry every set number of minutes until it goes live

`SponsorBlock`

[Learn more about SponsorBlock](/docs/guides/sponsorblock)

Useful especially when downloading music and you don't want the fluff

`Filename Template`

[Learn more about Filename Templates](/docs/guides/filename-templates)

`Add Extra Commands`

[Learn more about Extra Commands](/docs/guides/extra-commands)

`Cut`

[Learn more about Cutting](#cutting)

`Crop`

[Learn more about Cropping](#cropping)

----

## Command

This option is disabled by default as there are no created command templates on a fresh install. The app will suggest you to create one. [Learn how to create one!](/docs/guides/command-templates)

The command textfield will automatically choose you preferred command template or your most recent creation. You can select a command template and even multi-select and the code will be appended.

::: tip Note
Apart from main settings such as download settings, cookies and similar, the other processing settings won't be applied in this download type as you have control using personalized commands.
:::

### Adjust templates

`New Template`

Quickly create a new template and select it

`Edit Selected`

Modify the chosen template

`Shortcuts`

Take advantage of shortcuts to build the command

----

# Cutting

You can easily select the timespan you want to download. Also you can create multiple cuts for a single download. Cuts can be set with the slider, by typing the exact start and end time, or based on the chapters of the video.

Each cut is downloaded as a separate section. Tap `New cut` to add as many as you need.

`Force Keyframes At Cuts`

This option allows for more accurate cuts but it can get really slow during the cutting process, especially when dealing with long videos. It can also be set globally in <nav to="processing">.

::: tip Note
According to yt-dlp this feature is experimental and could not work properly in some cases, so bear that in mind.
:::

If the item was added without data (for example with Quick Download) the app will tell you to update the item first, since it needs to know the duration of the video in order to cut it.

# Cropping

In the video tab you can crop the picture of the video however you like. You can choose a free ratio, a fixed aspect ratio, or enter the dimensions and the X / Y offsets by hand. A reset button puts the crop back to the original.

The app applies the crop with an FFmpeg post processor, so the video is re-encoded.

::: tip Note
When cropping VP9 and AV1 videos you might need a higher version of FFmpeg. Upgrade to FFmpeg 7.1.1 from the [Packages](/docs/guides/packages) section.
:::

---
title: General
titleTemplate: Frequently Asked Questions
description: Frequently Asked Questions
---

# General
Frequently Asked Questions

## Why isn't YTDLnis on the Google Play Store?
**YTDLnis** won't be on the **Google Play Store**.

yt-dlp and similar tools conflict with [Google Play's content policy](https://play.google.com/about/developer-content-policy/).
**Google** might take down the app due to certain content, which the developers wishes to avoid.

## Is YTDLnis available for iOS/iPadOS?
There is no iOS or iPadOS version and neither are there plans for one.
Porting is difficult due to the separate codebases of iOS and Android apps. Also there isn't a library that implements yt-dlp for IOS.
You might look into [SW-DLT](https://routinehub.co/shortcut/7284/) which is a basic tool for downloading in IOS.

Any app proclaiming to be "**YTDLnis for iOS**" is not by us and should be treated as a scam.

## Can I download from Netflix / Amazon Prime etc?
Nope, and I mean yt-dlp won't support that. This is because Spotify is one of many services that is DRM protected, and DRM bypassing attempt is **illegal**. Not only Spotify, many platforms also do this. Which means, you'd need to find the other way to download from these DRM protected platforms.

## Can I watch YouTube from the app?
**YTDLnis** isn't designed for video streaming, but for downloading video/audio streams.

## Where should I report issues or suggest features?
The most preferred method is to report from GitHub, but before reporting anything, take a look at the [existing ones](https://github.com/deniscerri/ytdlnis/issues?q=is%3Aissue) first, one (or more) of them might be similar to what's on your mind. And therefore, we want to prevent duplicate issues. If you're sure that you understand and want to proceed, follow this [link](https://github.com/deniscerri/ytdlnis/issues/new/choose).

The second method is to report in the [Telegram Group](https://t.me/ytdlnis/1). Including `#bug_report`<C/> or `#suggestion tag`<C/> is preferred for easier tracking for the Dev, Maintainer, and Admin.

## Which yt-dlp release should I choose?
<i>More ➔ Settings ➔ Updating ➔ yt-dlp Source</i>

- Stable (default), choose this if you don't rely on the app a lot or if you don't download from many sites.
- Nightly, has a balanced stability and is recommended for most users. Contains most of the fixes that the stable release doesn't have most of the time.
- Master, the least stable but comes with the very latest fixes and/or additions compared to the nightly release. Only recommended for advanced users or if necessary.

Read more [here](https://github.com/yt-dlp/yt-dlp#:~:text=There%20are%20currently,master-builds.).

- You can also set your own custom source that represents a yt-dlp fork


## Is it possible to get higher YouTube Music audio quality (higher than 128 Kbps)?

Yes, but you need YouTube Premium subscription, and the app would need it to make a cookie for it. If you don't have the subscription, then it won't be possible to get higher audio quality.

  This higher audio is usually 256 KBps which the quality is twice the best quality without Premium. But remember, if you're trying to convert it to another container and/or set to higher audio quality for the sake of better quality again, then it won't work. Simply put, it's impossible, it just either won't make any difference or decrease its quality even. This has been done by many apps to trick users to think that the app can give users good or even best audio quality, which is really, really false
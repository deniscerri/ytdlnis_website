---
title: Common issues
titleTemplate: Troubleshooting - Guides
description: Facing issues with a source or the app? Here's how to tackle common challenges.
---

# Common issues

Facing issues with a source or the app?
Here's how to tackle common challenges.

## Downloads

### Every download fails with an extractor error / "Unable to extract"
yt-dlp is outdated. Go to <nav to="update"> and update yt-dlp. If it is still failing, switch the channel to `Nightly` or `Master`. In some countries yt-dlp doesn't update automatically, so do it manually.

### "Sign in to confirm you're not a bot" or HTTP 403 on YouTube
YouTube blocked the request. Try, in this order:
1. Update yt-dlp.
2. Use [cookies](/docs/guides/cookies) from a logged in account.
3. Change the [player client](/docs/guides/youtube#player-client) or set up [PO tokens](/docs/guides/youtube#po-tokens).
4. Install a JS runtime from [Packages](/docs/guides/packages).
5. Change your network, or turn off your VPN.

### The download is stuck in the queue and doesn't start
- If `Download over metered networks` is off and you are on mobile data, the download waits for an unmetered connection.
- If `Download on schedule` is on, it will wait for the allowed time.
- If `Download delay` is set, there is a wait between downloads.
- Check that the number of `Concurrent downloads` is not taken by other items.

### Downloads stop when I close the app or turn the screen off
Disable battery optimization for the app, using `Ignore battery optimization` in <nav to="general">. Some manufacturers (Xiaomi, Huawei, Samsung, OnePlus and others) have extra aggressive background restrictions. Look for your device on [dontkillmyapp.com](https://dontkillmyapp.com/) to see how to allow the app to stay running.

### The download fails at the end, or the file is missing
- The app might not be able to write to the chosen folder. Choose another folder, or enable `Cache downloads first` in <nav to="folders">.
- Enable `Restrict filenames` if the title has strange characters.
- Check there is enough free space on the device.

### "ffmpeg" errors, merging or converting fails
Try the other FFmpeg version in [Packages](/docs/guides/packages). Very new versions might not run on some devices, and very old ones don't support some codecs.

### The video downloaded has no audio, or the audio is in the wrong language
Select the audio format yourself in the format sheet of the [Download Card](/docs/guides/formats). Check that `Remove audio` is off, and set `Preferred audio language` in <nav to="processing">.

### Subtitles are not embedded
Embedding automatic subtitles needs `Save automatic subtitles` and `Embed subtitles` together. Also check that the languages you chose actually exist for the video. See [Subtitle Languages](/docs/guides/subtitle-languages).

### I can't get more than 128kbps audio on YouTube Music
You need a YouTube Premium account with [cookies](/docs/guides/cookies). See the [FAQ](/docs/faq/general#is-it-possible-to-get-higher-youtube-music-audio-quality-higher-than-128-kbps).

### Cutting / cropping is greyed out or doesn't work
The item has to have its data fetched first. If you used `Don't fetch data` tap the update button in the card. Cutting is not available for all kinds of items such as some live streams. Cropping VP9 and AV1 needs FFmpeg 7.1.1 or higher from [Packages](/docs/guides/packages).

### The download is too slow
- Increase `Concurrent fragments` in <nav to="downloads">.
- Try `aria2c` as the downloader.
- Check that `Limit rate` isn't set.
- Some websites throttle downloads. Update yt-dlp, it often has fixes for that.

### Duplicate warnings for something I want to download again
Change or disable `Prevent duplicate downloads` in <nav to="downloads">, or tap `Continue anyway`.

## App

### The app crashes when I search
Change the `Data fetching extractor (YouTube)` to `yt-dlp` in <nav to="general">.

### The download card doesn't show up when sharing a link
Enable `Display over apps` in <nav to="general">. Also check that `Show download card` is enabled.

### The share sheet doesn't list YTDLnis
Some apps only share text, some share links as files. Copy the link and paste it in the app, or use the clipboard button in Home.

### Notifications are not showing
Allow notifications for the app in the Android settings. On some devices you also have to allow the app in the battery manager.

### Observe sources don't run at the right time
See [Making it reliable](/docs/guides/observe-sources#making-it-reliable).

### Cookies don't work
- Turn on `Use cookies`.
- Create the cookie again, and enable `User-Agent header` in <nav to="advanced">.
- On YouTube, accounts logged in from a browser rotate their cookies. Log in with a [secondary account](/docs/guides/cookies) if it keeps expiring.

### I lost my history / settings after reinstalling
Backups are not automatic unless you enabled `Automatic backup`. Restore your last one in the settings. See [Backups](/docs/guides/backups).

### The app takes a lot of storage
Open <nav to="folders"> ➔ `Temporary files` to see how much space is used and clear it. Also enable `Clean-up leftover downloads` in <nav to="downloads">.

### I installed an update and now the app doesn't open
Reinstalling the app might help. Only do it after you have made a [backup](/docs/guides/backups), as uninstalling removes the app data. Install the new version over the existing one and don't uninstall it first, as long as the signature is the same.

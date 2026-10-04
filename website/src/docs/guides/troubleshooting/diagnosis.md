---
title: Diagnosis
titleTemplate: Troubleshooting - Guides
description: Facing issues with a source or the app? Follow these steps to troubleshoot and find solutions.
---

# Diagnosis

Facing issues with a source or the app?
Follow these steps to troubleshoot and find solutions.

## Primary diagnosis

1. **Update App**: Go to <nav to="update"> and tap **Check for updates**.
2. **Update yt-dlp**: Go to <nav to="update"> ➔ yt-dlp and update it. If that doesn't help, try the `Nightly` or `Master` channel. Then try again.
3. **Update packages**: In <nav to="packages"> check if there is a newer version of FFmpeg, Python or the JS runtime. If you updated one recently and the problem began after it, go back to the bundled version.
4. **Try another download type or format**: Download as audio instead of video, or choose a different format in the [Download Card](/docs/guides/download-card).
5. **Clear temporary files**: Go to <nav to="folders"> ➔ `Temporary files` and tap `Clear everything`. Old cached data can break things.
6. **Read the log**: Open the [log](/docs/guides/logs) and look at the end of it.

## Secondary diagnosis

1. **Disable your changes**: Turn off the [extra commands](/docs/guides/extra-commands), proxy, `Force IPv4`, rate limits, `Aria2` and the custom player clients. Try again, then turn them back on one by one to find the culprit.
2. **Reset the settings**: Each [settings](/docs/guides/settings/) screen has a `Reset` button. Try it on the Processing and Downloads screens.
3. **Try with cookies**: If the content needs a login, create [cookies](/docs/guides/cookies) and make sure `Use cookies` is on. If cookies are on and the problem began, try without them.
4. **Test in the Terminal**: Run a simple command in the [Terminal](/docs/guides/terminal), for example `-F <link>` to list the formats. If this fails too, the issue is with yt-dlp or the website, not your configuration.
5. **Try another network**: Switch between Wi-Fi and mobile data, or disable your VPN. Some websites block certain IP addresses.

## Reporting an issue

If nothing worked, open an issue on [GitHub](https://github.com/deniscerri/ytdlnis/issues/new/choose) and include:

- The app version, your Android version and device
- The yt-dlp version and the update channel you use
- The link that fails (if it is not private)
- The [log](/docs/guides/logs) of the download
- The steps you followed to cause the problem

Please search the [existing issues](https://github.com/deniscerri/ytdlnis/issues?q=is%3Aissue) first.

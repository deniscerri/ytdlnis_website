---
title: Troubleshooting
titleTemplate: Guides
description: Facing source or app issues? Here's how to troubleshoot.
---

# Troubleshooting

Facing source or app issues? Here's how to troubleshoot.

Be sure to check the [Frequently Asked Questions](/docs/faq/general) for how to address common issues too.

## Where to start

1. Follow the steps in [Diagnosis](/docs/guides/troubleshooting/diagnosis). They solve most problems.
2. Look for your problem in [Common issues](/docs/guides/troubleshooting/common-issues).
3. Open the [log](/docs/guides/logs) of the failed download and read the last lines. The error message usually tells you what is wrong.
4. Still stuck? Search the [existing issues](https://github.com/deniscerri/ytdlnis/issues?q=is%3Aissue) on GitHub, or ask in the [Telegram group](https://t.me/ytdlnis) or [Discord](https://discord.gg/WW3KYWxAPm).

## Is it the app or yt-dlp?

YTDLnis uses yt-dlp for everything related to websites. If a download fails with an error that mentions an extractor, a `Sign in`, `HTTP Error`, `Unable to extract` or `This video is not available`, the problem is most likely in yt-dlp or in the website, not in the app. Update yt-dlp first. If it still fails, report it to [yt-dlp](https://github.com/yt-dlp/yt-dlp/issues).

If the app crashes, freezes, shows wrong information, or a setting doesn't do what it should, then it is an app issue and should be reported to [YTDLnis](https://github.com/deniscerri/ytdlnis/issues/new/choose).

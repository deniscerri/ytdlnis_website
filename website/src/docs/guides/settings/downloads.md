---
title: Download Settings
titleTemplate: Settings - Guides
description: Download Settings for YTDLnis.
---

# Download Settings

<nav to="downloads">

## Incognito
App won't save your downloads in the download history. You can also set this for individual items in the download card

## Show Download Card
Enabled by default, but if disabled it wont show the download configuration and start downloading immediately from your config

## Quick Download
Called `Don't fetch data` in the app. Prevent data fetching when loading an url in the download card. U can still try to data fetch in the download card

## Prevent Duplicate Downloads
- Disabled
- Download Archive (With this the app stores a txt file of all links that were processed and compares against it when you try to download the same link again and stops you. It uses yt-dlp's own download archive)
- URL & Download Type (compares against url and download type)
- Full Configuration (compares whether the same yt-dlp command is used)

When a duplicate is found you get to decide if you want to continue anyway. Use `Download archive folder` to pick where the archive file is stored.

## Download delay
Wait the configured seconds between each download, as a minimum and maximum delay so the wait is random. Useful against websites that block fast repeated requests. This feature disables concurrent downloads.

## Download over Metered Networks
If disabled the downloads will stay in queue until you connect to a wifi network

## Force IPv4
Might be useful on some downloads to use ipv4 only connections

## Use cookies
Pass your saved [cookies](/docs/guides/cookies) to yt-dlp.

## Socks5 Proxy URL
Set a proxy url to use to download with. HTTP, HTTPS and SOCKS proxies are supported.

## Preferred Download Type
If you have download card enabled, it will select the type and if its disabled it will immediately download in that preferred download type. If preferred download type is command, it will use the last used command template or ur preferred command template

If the type is set to Auto the app will select audio format for certain kinds of urls like Youtube Music or Soundcloud.

## Remember Download Type
Ignore preferred download type but instead keep using the last used download type

## Concurrent Fragments
Number of fragments in a dash/hls video to download concurrently

## Concurrent Downloads
Set how many downloads to download at the same time

## Limit Rate
Limit the download speed, in bytes per second. e.g. `50K` or `4.2M`

## Buffer Size
Set size of download buffer, e.g. `1024` or `16K`. The default is 1024.

## Socket Timeout
Set how long the app should wait in seconds before considering a download as failed if its not responding

## Aria2
Alternative downloader from yt-dlp u can use. Might be buggy sometimes. Needs the aria2c [package](/docs/guides/packages).

## Log Downloads
Create a log file for each download. Good for debugging. The app will create a download log always if the download errors even if log downloads failed. See [Download Logs](/docs/guides/logs).

## Clean up leftover downloads
Set a background job to clean up downloads in cancelled, errored sections. Choose `Disabled`, `Daily`, `Weekly` or `Monthly`.

## Retries and Fragment Retries
Related to socket timeout. After a download is considered to failed, set the amount of times to retry before giving up

# Scheduling
You can set the time period when the app should download

## Download on schedule
When enabled, downloads only run between the `Start` and `End` times. Outside of this window they wait in the queue. Handy to download at night, or when your connection is free.

## Use AlarmManager
A more strict method to wake up the app to start downloading in time, since WorkManager respects your device restrictions it could be delayed. Needs the exact alarm permission, which the app will ask for.

## Reset
Resets every preference in this screen.

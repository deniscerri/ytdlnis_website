---
title: Home
titleTemplate: Guides
description: How to use the Home screen in YTDLnis.
---

# Home

The Home screen is where you search for videos, paste links and see results.

## Searching and pasting links

The search bar at the top accepts three kinds of input:

- **A link** to a video, a playlist, a channel or any other page yt-dlp supports.
- **A search query**. The app searches the website set in <nav to="general"> `Preferred search engine`. Supported are YouTube, YouTube Music, SoundCloud, Bilibili, PRX Series, PRX Stories, Rokfin and Netverse.
- **Multiple links / queries**, each on its own line.

Search suggestions from Google can be enabled in the general settings. Your previous searches are kept in the search history, which you can clear from the overflow menu.

### Stacking searches

If you search for something while there are already results shown, the new results are added to the list instead of replacing them. This allows you to build up a list of items from different searches and download them all at the same time. Use `Clear results` in the overflow menu to start over.

### Importing a list from a txt file

Create a `.txt` file and fill it with links, playlists or search queries, separated by a new line. Share the file to **YTDLnis** and the app will process every line.

## The clipboard button

When you copy a link and open the app, a floating button shows up so you can process the link in one tap. If the clipboard contains more than one link, the app opens the search page, lists them all and lets you remove the ones you don't want before pressing the search icon to process them.

This can be turned off with `Check clipboard in the home screen` in the general settings.

## Result cards

Each result has a thumbnail, title, author and duration, and two buttons to download it as **audio** or as **video**.

- **Tap** the audio or video button to open the [Download Card](/docs/guides/download-card) on that tab. If the download card is disabled in the settings, it starts downloading right away.
- **Press and hold** the audio or video button to open the download card even if you have disabled it.
- **Tap the card** to see the details of the item, such as the formats it has.
- **Press and hold a card** to start selecting multiple items.

### Selecting multiple items

After you start a selection, the context bar shows on top where you can download all selected items or remove them from the list. You can also:

- `Select all` and `Invert selected`
- `Select items between` two selected cards, so you don't have to tap each one

When you download multiple items, the [Multiple Download Card](/docs/guides/playlists#multiple-download-card) opens.

## Playlists

When a link is a playlist, the app lists out the items and lets you pick which ones you want. Read [Playlists & Multiple Items](/docs/guides/playlists).

## Video recommendations

You can fill the empty home screen with recommended videos. Go to <nav to="recommnedations"> and choose a source:

| Source | Notes |
| --- | --- |
| Disabled | Default. Nothing is shown. |
| NewPipe | Trending videos through the NewPipe extractor. |
| YouTube API | Uses your own API key, which you enter in the same settings section. |
| yt-dlp YouTube watch later | Needs [cookies](/docs/guides/cookies). |
| yt-dlp YouTube recommendations | Needs [cookies](/docs/guides/cookies). |
| yt-dlp YouTube liked videos | Needs [cookies](/docs/guides/cookies). |
| yt-dlp YouTube watch history | Needs [cookies](/docs/guides/cookies). |
| Custom | Provide your own URL to be loaded as the recommendation source. |

## Failed fetches

If some items could not be fetched while processing, a `Failed to fetch` button appears in the toolbar. There you can `Retry` or `Retry all` of them, or `Download anyway` without the fetched data.

## Frequently Asked Questions

### How do I download multiple items at the same time?
Tap and hold a card and then you can press the rest of the cards. The context bar will show up on top where you can download all selected items, or delete them.
You can also select two cards and then tap the option to select all items between them, or invert selections or select everything.

### I have many urls that i need to download
You can copy them in your clipboard and the app will show you the clipboard floating action button. If there are more than 1, the app will open the search page and list out all the urls. You can then remove them and press the search icon to start querying them.

### I have configured the app to not show the download card but i want it to open up sometimes
You can press and hold the video/audio button in a result item and the download card will open.

### I want to have video recommendations in the home screen
Go to <nav to="recommnedations"> and select the video recommendation method.

### How do I manage what's downloading?
Navigate to <nav to="download-queue"> to interact with queued downloads or double tap the downloads icon in the navigation bar.

Cancel all items by clicking the **Overflow** button beside a series chapter or the top right corner.

To reorder the queue, long-press and drag the `=` icon next to a queue item.

### The app crashes when I search for something
Change the `Data fetching extractor (YouTube)` to `yt-dlp` in <nav to="general">. This works around a bug in the NewPipe extractor.

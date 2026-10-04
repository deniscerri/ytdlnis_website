---
title: Command Templates
titleTemplate: Guides
description: How to setup Command Templates in YTDLnis.
---

# How to run yt-dlp commands from the app

Command templates let you save your own [yt-dlp options](https://github.com/yt-dlp/yt-dlp#usage-and-options) and reuse them for any download. You pick them in the **Command** tab of the [Download Card](/docs/guides/download-card).

::: tip How to create a command template
1. Go to <nav to="commandtemplates">
2. Tap the `+` button
3. Give it a title and write the yt-dlp arguments, for example `-x --audio-format mp3 --embed-thumbnail`
4. Press `Create template`
:::

You don't write the URL or the word `yt-dlp` in a template. The app adds the link and handles the output location itself.

## Using a template

- In the **Command** tab of the download card choose one or more templates from the list. If you select several, their arguments are appended together.
- In the [Terminal](/docs/guides/terminal), pick one from the menu to insert it.
- As an [Extra Command](/docs/guides/extra-commands) in an audio or video download.

::: tip Note
In the Command download type, the processing settings (embed thumbnail, SponsorBlock, containers, and so on) are not applied, because you control everything with your command. Main settings such as download, cookies and network settings still apply.
:::

The default folder for these downloads is the `Custom command folder` set in <nav to="folders">.

## Managing templates

- **Edit** or **delete** a template by tapping it. If swipe gestures are on for templates you can swipe to act on them.
- **Search** your templates from the toolbar.

### Template options

When you create or edit a template you can set:

| Option | What it does |
| --- | --- |
| **Title** and **Content** | The name of the template and the yt-dlp arguments. |
| **Preferred command template** | Selected by default in the Command tab of the download card. |
| **Extra command** | Appends the template to every audio and / or video download. You can choose `Audio`, `Video` or both. |
| **Data fetching** | Appends the template when the app fetches data. Needs `Data fetching extra command` enabled in <nav to="advanced">. |
| **URL regex** | Only use the template (as an extra command) for links that match one of these regular expressions. For example `youtube\.com` limits it to YouTube links. |
| **Shortcuts** | Quickly insert your shortcuts into the content. |

## Preferred Command Template

With this enabled, this command template will be chosen by default when you open the download card in the command tab. Set it from the template's options.

Also set `Preferred download type` to `Command` in <nav to="downloads"> if you want the card to open on that tab.

## Extra Command

With this enabled, each download will append this command along with its own configuration. See [Extra Commands](/docs/guides/extra-commands).

## Data Fetching Extra Command (Advanced)

This is not visible by default, but you can enable it in the advanced settings. Essentially the app appends this command template during the data fetching process. Useful in some cases for advanced users since data fetching is done by the app and cant be user configured.

## Shortcuts

Shortcuts are meant to be small pieces of code that you can use to build a command template.

Create them from the shortcuts button wherever it is shown, for example `--embed-metadata` or `--sponsorblock-remove all`. Then you can tap them to insert them in the command text field instead of typing the whole thing again.

When creating a command template / shortcut, you can access them when:
- trying to change the template in the command tab in the download card
- trying to add an extra command to a video/audio download
- trying to write a terminal command

## Export to clipboard / Import Templates

You can use this function to export all of your command templates to your clipboard as a json object.
You can share this object with anyone who has YTDLnis installed. They just need to copy it to their clipboard and hit import templates. Easy.

Templates and shortcuts are also part of [backups](/docs/guides/backups).

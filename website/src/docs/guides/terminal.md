---
title: Terminal
titleTemplate: Guides
description: How to use the built-in terminal emulator.
---

# Terminal
How to use the built-in terminal emulator.

The Terminal in **YTDLnis** is a real terminal emulator, built on the same terminal view as Termux. It gives you a shell that already knows about the yt-dlp, Python, FFmpeg and JS runtimes the app uses, so you can run any yt-dlp command, and also manage the tools behind it.

::: tip How to open it
Go to <nav to="terminal">
:::

## Running yt-dlp

Type your command like you would on a computer and press enter:

`yt-dlp -f bestaudio -x --audio-format mp3 "https://www.youtube.com/watch?v=..."`

The `yt-dlp` command is set up by the app. It runs the same yt-dlp that the app downloads with, and automatically points it to the app's FFmpeg and JS runtimes, and to your [cookies](/docs/guides/cookies) if `Use cookies` is on. You don't have to configure anything.

Useful things to try:

| Command | What it does |
| --- | --- |
| `yt-dlp -F "<link>"` | List all the formats of a link. |
| `yt-dlp --version` | Show the installed yt-dlp version. |
| `yt-dlp -U` | Update yt-dlp. |
| `yt-dlp -J "<link>"` | Print all the metadata of a link as JSON. |
| `yt-dlp --list-extractors` | List every website yt-dlp supports. |

## Available commands

These are available in every session, when they are installed:

| Command | Tool |
| --- | --- |
| `yt-dlp` | yt-dlp |
| `python` | Python, the one yt-dlp runs on |
| `pip` | Python package manager (same as `python -m pip`) |
| `ffmpeg` | FFmpeg |
| `node`, `npm` | NodeJS and its package manager |
| `deno` | Deno |
| `qjs` | QuickJS |
| `aria2` | aria2c |

Which of these exist depends on the [Packages](/docs/guides/packages) you have. Besides these you get the normal Android shell commands such as `ls`, `cd`, `cat`, `cp`, `mv` and `rm`.

The shell starts in your device's shared storage, so `ls` shows your usual folders, like `Download`, `Movies` and `Music`.

## Advanced usage

Because you have a real shell with Python in it, you can maintain the environment yt-dlp runs in.

### Update yt-dlp

```sh
yt-dlp -U
```

You can also update it from <nav to="update"> or let the app do it automatically. See [Updating](/docs/guides/settings/updating).

### Update or install pip packages

```sh
pip install -U pip
pip list
pip install -U <package>
pip install <package>
```

Use this to install Python packages that are not installed, for example optional dependencies that yt-dlp can use or plugins you want. After installing, yt-dlp (which runs on the same Python) can use them.

::: tip Note
Packages that need to be compiled, or that depend on system libraries that Android doesn't have, may fail to install. Pure Python packages work best. Pip needs an internet connection.
:::

### Node and other tools

If you installed the NodeJS package, `node` and `npm` work too, and the same for `deno` and `qjs`. They are also what yt-dlp uses for the JavaScript challenges of some websites.

### Run anything else you need

Test a command here before turning it into a [Command Template](/docs/guides/command-templates), explore the files that are downloaded with `ls`, or convert a file with `ffmpeg -i input.mp4 output.mp3`.

## Sessions

Every terminal is a session. Start more with the `Add` button in the toolbar and switch between them from the session list. The terminal keeps running in the background with a notification, so a long command doesn't stop when you leave the screen. Use `Exit` to end a session. The notification also lets you close it.

## Typing on a phone

Below the terminal there is a row of extra keys that a phone keyboard doesn't have, such as `ESC`, `TAB`, `CTRL`, `ALT` and the arrow keys. Tap `CTRL` and then a letter to send a combination, for example `CTRL` then `C` to stop a running command. If you use a hardware keyboard, the usual shortcuts work too.

## Options

The bottom bar has shortcuts that write into the terminal for you:

- **Command templates**: pick one or more of your [command templates](/docs/guides/command-templates) and their contents are written in the terminal. Disabled if you have none.
- **Shortcuts**: insert one of your saved shortcuts.
- **Filename template**: choose a [filename template](/docs/guides/filename-templates) and it gets written as text.
- **Custom command folder**: choose a folder and its path is written, for example to use as the output path.
- **Text size**: make the text bigger or smaller.

In the top bar you can wrap the long lines of the output and copy everything shown in the terminal to your clipboard.

## Terminal in Share Menu

In General Settings enable `Show terminal in share menu` to have the terminal as an option in the share menu when sharing an url. A new session opens with `yt-dlp "<the link>"` already written in it, ready for you to add options and press enter.

## Terminal vs. Command download

| | Terminal | Command download type |
| --- | --- | --- |
| Where | More ➔ Terminal | Command tab of the [Download Card](/docs/guides/download-card) |
| What it is | A full shell, you control everything | Runs a command template for a link |
| Result | Output is shown live | Shows up in the queue and your history like a normal download |
| Best for | Experimenting, updating tools, installing packages, one-off commands | Reusing templates, many items |

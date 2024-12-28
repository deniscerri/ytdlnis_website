---
title: Cookies
titleTemplate: Guides
description: How to access media with cookies.
---

# Cookies

You might need cookies in cases where the content you are trying to access is behind authentication, or simply the website is strict enough to not allow you to freely access it without cookies.

Cookies allow you to:
- access private videos
- access videos only available behind a subscription / members only videos
- access additional formats for a certain download, like Format id `141` which represents HIGH quality audio on YouTube Music.

To create one, hit `New Cookie` and write out the website domain name. For example `https://youtube.com`.
A browser window will open up and you can log in to your account as usual. After you are done, hit the OK button on top and you are finished. The app has stored the cookie record in its internal database and generated internally a cookies.txt file for yt-dlp to work with.

## Importing Cookies

If you have generated cookies from somewhere else. U can simply copy off the cookies content to your clipboard and use `Import from clipboard` function in the top menu.

## Exporting Cookies

You can export your cookies to your clipboard, or as a .txt file in the downloads folder.

## User-Agent header

With this enabled, when you are generating your cookies, the webview grabs the user agent header used to show the website and store it in the device preferences. This will then be later used when you are downloading with the command:
`--add-header "User-Agent:<header that was copied>"`

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
- access age restricted content
- access additional formats for a certain download, like Format id `141` which represents HIGH quality audio on YouTube Music.
- get personalized [video recommendations](/docs/guides/home#video-recommendations) such as your watch later, liked videos or history.

::: tip How to open the Cookies screen
Go to <nav to="cookies">
:::

## Creating a cookie

To create one, hit `New Cookie` and write out the website domain name. For example `https://youtube.com`.
A browser window will open up and you can log in to your account as usual. After you are done, hit the OK button on top and you are finished. The app has stored the cookie record in its internal database and generated internally a cookies.txt file for yt-dlp to work with.

The browser window has a menu where you can switch to the desktop version of the website, which some websites need in order to log in properly.

## Using cookies

Cookies are only used when `Use cookies` is turned on. The switch is at the top of the Cookies screen, and also in <nav to="downloads">. When it is on, yt-dlp is given the saved cookies for every download. You can see and remove each saved cookie from the list.

If you open the download card or search for something and a website tells you to log in, the app suggests turning on cookies.

## Importing Cookies

If you have generated cookies from somewhere else. U can simply copy off the cookies content to your clipboard and use `Import from clipboard` function in the top menu. The content has to be in the Netscape cookies.txt format that yt-dlp uses.

## Exporting Cookies

You can export your cookies to your clipboard, or as a .txt file in the downloads folder.

## Deleting cookies

Remove a single cookie from the list, or use `Delete all cookies` from the menu.

## User-Agent header

With this enabled, when you are generating your cookies, the webview grabs the user agent header used to show the website and store it in the device preferences. This will then be later used when you are downloading with the command:
`--add-header "User-Agent:<header that was copied>"`

Some websites tie the cookies to the browser used to log in. If your cookies stop working, try enabling this and create the cookie again. It is in <nav to="advanced">.

::: warning Keep your cookies private
Cookies give access to your account. Don't share exported cookies or [backups](/docs/guides/backups) that include them with anyone. Some websites might flag accounts that download a lot, so consider using a secondary account.
:::

::: tip YouTube
YouTube rotates cookies for accounts used in a browser. If cookies expire quickly, see the [YouTube](/docs/guides/youtube) guide.
:::

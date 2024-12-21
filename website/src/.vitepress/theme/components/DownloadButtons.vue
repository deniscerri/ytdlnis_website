<script setup lang="ts">
/// <reference types="@types/gtag.js" />

import { computed, onMounted, ref } from 'vue'
import { data as release } from '../data/release.data'

const downloadInformation = computed(() => ({
  stable: {
    tagName: release.stable.tag_name ?? 'v0.00.0',
    assets: release.stable.assets,
    asset: getAppropriateAsset(release.stable.assets),
  },
}))

function getAppropriateAsset(assets) {
  switch (getDeviceArchitecture()) {
    case 'arm64':
      return (assets ?? []).find(a => /^YTDLnis-.*arm64-v8a-release.apk/.test(a.name))
    case 'armeabi-v7a':
    case 'armeabi':
      return (assets ?? []).find(a => /^YTDLnis-.*armeabi-v7a-release.apk/.test(a.name))
    case 'x86_64':
      return (assets ?? []).find(a => /^YTDLnis-.*x86_64-release.apk/.test(a.name))
    case 'x86':
      return (assets ?? []).find(a => /^YTDLnis-.*x86-release.apk/.test(a.name))
    default:
      return (assets ?? []).find(a => /^YTDLnis-.*arm64-v8a-release.apk/.test(a.name))
  }
}

const navigatorValue = ref(null)

function getDeviceArchitecture() {
  const userAgent = navigatorValue.value?.userAgent?.toLowerCase() ?? ''
  const platform = navigatorValue.value?.platform?.toLowerCase() ?? ''

  if (userAgent.includes('arm64') || platform.includes('arm64')) {
    return 'arm64'
  }
  else if (userAgent.includes('armv7') || platform.includes('armv7')) {
    return 'armeabi-v7a'
  }
  else if (userAgent.includes('x86_64') || platform.includes('x86_64') || userAgent.includes('x64') || platform.includes('x64')) {
    return 'x86_64'
  }
  else if (userAgent.includes('x86') || platform.includes('x86')) {
    return 'x86'
  }
  else if (userAgent.includes('arm')) {
    return 'armeabi'
  }

  return 'unknown'
}

const isAndroid = ref(true)
const isPC = ref(true)

onMounted(() => {
  isAndroid.value = !!navigator.userAgent.match(/android/i)
  isPC.value = !navigator.userAgent.match(/Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i)
  if (typeof navigator !== 'undefined') {
    navigatorValue.value = navigator
  }
})

function handleAnalytics(type: 'preview' | 'stable') {
  window.gtag?.('event', 'Download', {
    event_category: 'App',
    event_label: type === 'stable' ? 'Stable' : 'Preview',
    version: type === 'stable'
      ? release.stable.tag_name
      : release.preview.tag_name,
  })
}
</script>

<template>
  <div>
    <div v-if="!isAndroid && !isPC" class="custom-block danger">
      <p class="custom-block-title">
        Unsupported operating system
      </p>
      <p>
        <strong>YTDLnis</strong> is an <strong>Android app</strong> only.
        Use an <strong>Android device</strong> to download and install the app.
      </p>
    </div>
    <div v-if="!isAndroid" class="custom-block warning">
      <p class="custom-block-title">
        Caution
      </p>
      <p>
        Any app for any operating systems other than Android called
        <strong>YTDLnis</strong> is not affiliated with this project.
      </p>
      <blockquote>
        For more information, read the
        <a href="/docs/faq/general">General FAQ</a>.
      </blockquote>
    </div>
    <div class="download-buttons">
      <a
        class="download-button primary"
        :download="downloadInformation.stable.asset?.name"
        :href="downloadInformation.stable.asset?.browser_download_url"
        @click="handleAnalytics('stable')"
      >
        <IconDownload />
        <span class="text">Stable</span>
        <span class="version">{{ downloadInformation.stable.tagName }}  ({{ downloadInformation.stable.asset?.name.match(/(arm64-v8a|armeabi-v7a|x86_64|x86|armeabi)/g)[0] }}) </span>
      </a>
    </div>
    <span class="version-disclaimer">
      Requires <strong>Android 7.0</strong> or higher.
    </span>
  </div>
</template>

<style lang="stylus">
.download-buttons {
  display: flex
  gap: 0.75em
  justify-content: center
  align-items: center
  margin: 0.75em auto
}

.download-button {
  display: inline-block
  border: 1px solid transparent
  text-align: center
  font-weight: 600
  white-space: nowrap
  transition: color 0.25s, border-color 0.25s, background-color 0.25s
  cursor: pointer
  transition: all 0.3s ease
  border-radius: 20px
  padding: 0 20px
  line-height: 38px
  font-size: 14px

  &:hover {
    text-decoration: none !important
  }

  &.primary {
    border-color: var(--vp-button-brand-border)
    color: var(--vp-button-brand-text)
    background-color: var(--vp-button-brand-bg)

    &:hover {
      border-color: var(--vp-button-brand-hover-border)
      color: var(--vp-button-brand-hover-text)
      background-color: var(--vp-button-brand-hover-bg)
    }

    &:active {
      border-color: var(--vp-button-brand-active-border)
      color: var(--vp-button-brand-active-text)
      background-color: var(--vp-button-brand-active-bg)
    }
  }

  &.secondary {
    border-color: var(--vp-button-alt-border)
    color: var(--vp-button-alt-text)
    background-color: var(--vp-button-alt-bg)

    &:hover {
      border-color: var(--vp-button-alt-hover-border)
      color: var(--vp-button-alt-hover-text)
      background-color: var(--vp-button-alt-hover-bg)
    }

    &:active {
      border-color: var(--vp-button-alt-active-border)
      color: var(--vp-button-alt-active-text)
      background-color: var(--vp-button-alt-active-bg)
    }
  }

  svg {
    display: inline-block
    vertical-align: middle
    margin-right: 0.5em
    font-size: 1.25em
  }

  .text {
    margin-right: 10px
  }

  .version {
    font-size: 0.8em
  }
}

.version-disclaimer {
  display: block
  text-align: center
  margin: 0.75em auto
  font-size: 0.75rem
}
</style>

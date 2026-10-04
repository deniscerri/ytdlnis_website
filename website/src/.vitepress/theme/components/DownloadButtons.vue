<script setup lang="ts">
/// <reference types="@types/gtag.js" />

import { computed, onMounted, ref } from 'vue'
import { data as release } from '../data/release.data'

const architectures = [
  { id: 'arm64-v8a', label: 'arm64-v8a (64-bit ARM)' },
  { id: 'armeabi-v7a', label: 'armeabi-v7a (32-bit ARM)' },
  { id: 'x86_64', label: 'x86_64' },
  { id: 'x86', label: 'x86' },
  { id: 'universal', label: 'Universal' },
]

// Only the regular builds. The foss and izzy variants are for F-Droid and IzzyOnDroid.
function getBuildAssets(assets) {
  return (assets ?? []).filter(a => /\.apk$/.test(a.name) && !/foss|izzy/i.test(a.name))
}

function findAsset(assets, arch: string) {
  return getBuildAssets(assets).find(a => a.name.includes(`-${arch}-`))
}

const navigatorValue = ref(null)

// Only 32-bit ARM devices get armeabi-v7a. Everything else (including PCs) gets arm64.
function getDeviceArchitecture() {
  const userAgent = navigatorValue.value?.userAgent?.toLowerCase() ?? ''
  const platform = navigatorValue.value?.platform?.toLowerCase() ?? ''
  const isAndroidDevice = userAgent.includes('android')

  if (isAndroidDevice && (platform.includes('armv7') || platform.includes('armv8l') || userAgent.includes('armv7') || userAgent.includes('armv8l'))) {
    return 'armeabi-v7a'
  }

  return 'arm64-v8a'
}

const showOthers = ref(false)

const downloadInformation = computed(() => ({
  stable: {
    tagName: release.stable.tag_name ?? 'v0.00.0',
    assets: release.stable.assets,
    asset: findAsset(release.stable.assets, getDeviceArchitecture()),
    others: architectures
      .map(arch => ({ ...arch, asset: findAsset(release.stable.assets, arch.id) }))
      .filter(arch => arch.asset),
  },
}))

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
        <span class="version">{{ downloadInformation.stable.tagName }}  ({{ getDeviceArchitecture() }})</span>
      </a>
    </div>
    <div class="other-architectures">
      <button class="other-toggle" type="button" @click="showOthers = !showOthers">
        {{ showOthers ? 'Hide other architectures' : 'Other architectures' }}
      </button>
      <ul v-if="showOthers">
        <li v-for="arch in downloadInformation.stable.others" :key="arch.id">
          <a :href="arch.asset.browser_download_url" :download="arch.asset.name">{{ arch.label }}</a>
        </li>
      </ul>
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

.other-architectures {
  text-align: center
  margin: 0.5em auto

  .other-toggle {
    font-size: 0.8rem
    color: var(--vp-c-text-2)
    text-decoration: underline
    cursor: pointer
    background: none
    border: none

    &:hover {
      color: var(--vp-c-brand-1)
    }
  }

  ul {
    list-style: none
    padding: 0
    margin: 0.5em 0 0
    font-size: 0.85rem
  }
}

.version-disclaimer {
  display: block
  text-align: center
  margin: 0.75em auto
  font-size: 0.75rem
}
</style>

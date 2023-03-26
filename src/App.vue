<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import { darkTheme, dateEnUS, enUS, NConfigProvider } from 'naive-ui'
</script>

<template>
  <n-config-provider preflight-style-disabled :locale="enUS" :date-locale="dateEnUS">
    <main-layout />
  </n-config-provider>
</template>

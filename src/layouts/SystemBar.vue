<script lang="ts" setup>
import { useDateFormat, useNow } from '@vueuse/core'

const formattedTime = useDateFormat(useNow(), 'HH:mm a')
</script>
<template>
  <v-system-bar color="grey-darken-3">
    <v-icon class="ms-2" icon="wifi"></v-icon>
    <v-icon class="ms-2" icon="signal_cellular_alt"></v-icon>
    <v-icon class="ms-2" icon="battery_full"></v-icon>

    <span class="ms-2">{{ formattedTime }}</span>
  </v-system-bar>
</template>

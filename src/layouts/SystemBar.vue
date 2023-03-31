<script lang="ts" setup>
import { ref } from 'vue'
import { useNow, useDateFormat } from '@vueuse/core'

const formatted = useDateFormat(useNow(), 'HH:mm:ss a')
const time = ref(new Date().toLocaleTimeString())
setInterval(() => {
  time.value = new Date().toLocaleTimeString()
}, 100)
</script>
<template>
  <v-system-bar color="grey-darken-3">
    <v-icon class="ms-2" icon="wifi"></v-icon>
    <v-icon class="ms-2" icon="signal_cellular_alt"></v-icon>
    <v-icon class="ms-2" icon="battery_full"></v-icon>

    <span class="ms-2">{{ formatted }}</span>
  </v-system-bar>
</template>

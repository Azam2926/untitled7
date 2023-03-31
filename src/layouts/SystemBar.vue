<script lang="ts" setup>
import { ref } from 'vue'

const time = ref(new Date().toLocaleTimeString())
setInterval(() => {
  time.value = new Date().toLocaleTimeString()
})
</script>
<template>
  <v-system-bar color="grey-darken-3">
    <v-icon class="ms-2" icon="wifi"></v-icon>
    <v-icon class="ms-2" icon="signal_cellular_alt"></v-icon>
    <v-icon class="ms-2" icon="battery_full"></v-icon>

    <span class="ms-2">{{ time }}</span>
  </v-system-bar>
</template>

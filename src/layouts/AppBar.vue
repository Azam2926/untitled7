<template>
  <v-app-bar color="surface-variant" title="Application bar">
    <template v-slot:prepend>
      <v-app-bar-nav-icon @click="layout." icon="menu" />
    </template>
  </v-app-bar>
</template>

<script setup lang="ts">
import { useLayoutStore } from '@/stores/layout'

const layout = useLayoutStore()
</script>

<style scoped></style>

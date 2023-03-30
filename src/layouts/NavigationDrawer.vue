<template>
  <v-navigation-drawer :rail="rail" color="surface">
    <v-list>
      <v-list-item title="Navigation drawer"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const rail = ref(true)
</script>

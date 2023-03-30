<template>
  <SystemBar />
  <NavigationDrawer />
  <AppBar />
  <v-main>
    <v-container>
      <router-view />
    </v-container>
  </v-main>
</template>
<script setup lang="ts">
import SystemBar from '@/layouts/SystemBar.vue'
import AppBar from '@/layouts/AppBar.vue'
import NavigationDrawer from '@/layouts/NavigationDrawer.vue'
</script>

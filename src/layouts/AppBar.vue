<script lang="ts" setup>
import { useLayoutStore } from '@/stores/layout'

const { toggleDrawer } = useLayoutStore()
</script>
<template>
  <v-app-bar color="teal-darken-4">
    <v-app-bar-title>
      <router-link to="/">My template</router-link>
    </v-app-bar-title>
    <template v-slot:prepend>
      <v-app-bar-nav-icon icon="menu" @click.stop="toggleDrawer" />
    </template>
    <template v-slot:append>
      <v-btn icon="favorite"></v-btn>
      <v-btn icon="search"></v-btn>
      <v-btn icon="more_vert"></v-btn>
    </template>
  </v-app-bar>
</template>

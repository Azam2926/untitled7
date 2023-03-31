<template>
  <v-app-bar color="teal-darken-4" image="https://picsum.photos/1920/1080?random">
    <v-app-bar-title>
      <router-link to="/">Application bar</router-link>
    </v-app-bar-title>
    <template v-slot:prepend>
      <v-app-bar-nav-icon icon="menu" @click.stop="toggleDrawer" />
    </template>
    <template v-slot:image>
      <v-img gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"></v-img>
    </template>
    <template v-slot:append>
      <v-btn icon="favorite"></v-btn>

      <v-btn icon="search"></v-btn>

      <v-btn icon="more_vert"></v-btn>
    </template>
  </v-app-bar>
</template>

<script lang="ts" setup>
import { useLayoutStore } from '@/stores/layout'

const { toggleDrawer } = useLayoutStore()
</script>

<style scoped></style>

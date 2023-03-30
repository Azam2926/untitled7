<script lang="ts">
export default {
  mounted() {
    console.log(this.$vuetify.display.mobile)
  }
}
</script>

<template>
  <v-app>
    <router-view />
  </v-app>
</template>

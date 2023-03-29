<script lang="ts">
export default {
  mounted() {
    console.log(this.$vuetify.display.mobile)
  }
}
</script>

<template>
  <v-app>
    <v-system-bar color="grey-darken-3"></v-system-bar>
    <v-navigation-drawer color="surface">
      <v-list>
        <v-list-item title="Navigation drawer"></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar color="surface-variant" title="Application bar">
      <template v-slot:prepend>
        <v-app-bar-nav-icon icon="menu" />
      </template>
    </v-app-bar>
    <v-app-bar
      color="grey-lighten-2"
      title="Bottom Navigation"
      flat
      height="48"
      location="bottom"
    ></v-app-bar>
    <v-main>
      <v-container>
        <v-btn color="primary">button 22</v-btn>
        <v-icon icon="logout" />
      </v-container>
    </v-main>
  </v-app>
</template>

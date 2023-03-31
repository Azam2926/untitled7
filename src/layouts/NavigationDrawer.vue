<script lang="ts" setup>
import { ref } from 'vue'
import { useLayoutStore } from '@/stores/layout'
import { useTheme } from 'vuetify'

const rail = ref(true)
const { layout, setDrawer } = useLayoutStore()

const theme = useTheme()
const toggleTheme = () => {
  console.log('toggled')
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>

<template>
  <v-navigation-drawer
    v-model:rail="rail"
    :model-value="layout.drawer"
    app
    color="surface"
    expand-on-hover
    rail-width="60"
    @update:model-value="setDrawer($event)"
  >
    <v-list>
      <v-list-group value="User">
        <template #activator="{ props }">
          <v-list-item
            prepend-avatar="https://cdn.vuetifyjs.com/images/john.png"
            subtitle="john@google.com"
            title="John Leider"
            v-bind="props"
          />
        </template>
        <v-list density="compact" nav>
          <v-list-item prepend-icon="dark_mode" title="theme" @click="toggleTheme" />
        </v-list>
      </v-list-group>
    </v-list>
    <v-divider />

    <v-list nav>
      <v-list-item color="primary" prepend-icon="home" title="Home" to="/home"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

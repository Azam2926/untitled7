<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'
import { useLayoutStore } from '@/stores/layout'
import { useTheme } from 'vuetify'

const { layout, setDrawer, toggleTheme, vuetifyTheme } = useLayoutStore()

const rail = ref(true)

const theme = useTheme()
onMounted(() => setVuetifyTheme())
const setVuetifyTheme = () => (theme.global.name.value = vuetifyTheme())
const toggle = () => {
  toggleTheme()
  setVuetifyTheme()
}
const currentThemeIcon = computed(() => (layout.dark ? 'light_mode' : 'dark_mode'))

const routes = [
  { title: 'Home', url: '/home', icon: 'home' },
  { title: 'Date', url: '/date', icon: 'date_range' },
  { title: 'Login', url: '/login', icon: 'login' },
  { title: 'Register', url: '/register', icon: 'how_to_reg' }
]
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
          <v-list-item :prepend-icon="currentThemeIcon" title="Change theme" @click="toggle" />
        </v-list>
      </v-list-group>
    </v-list>
    <v-divider />

    <v-list nav>
      <v-list-item
        v-for="(route, index) in routes"
        :key="index"
        :prepend-icon="route.icon"
        :title="route.title"
        :to="route.url"
        color="primary"
      />
    </v-list>
  </v-navigation-drawer>
</template>

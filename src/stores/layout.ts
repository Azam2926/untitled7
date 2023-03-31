import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import { usePreferredDark } from '@vueuse/core'

export const useLayoutStore = defineStore('layout', () => {
  const drawer = ref(true)
  const layout = reactive({
    dark: usePreferredDark()
  })

  //region Drawer
  const setDrawer = (value: boolean) => (drawer.value = value)
  const toggleDrawer = () => (drawer.value = !drawer.value)
  //endregion

  //region Vuetify theme

  const vuetifyTheme = () => {
    const localTheme = localStorage.getItem('theme')
    return localTheme ? localTheme : layout.dark ? 'dark' : 'light'
  }
  const toggleTheme = () => {
    console.log('toggled')
    const localeTheme = localStorage.getItem('theme')

    // if (localeTheme === 'dark' || layout.dark) layout.dark = false
    // else layout.dark = true

    if (localeTheme) {
      layout.dark = !(localeTheme === 'dark' && usePreferredDark())
    } else layout.dark = !layout.dark

    const theme = layout.dark ? 'dark' : 'light'

    console.log(theme)
    localStorage.setItem('theme', theme)
  }
  //endregion

  return {
    drawer,
    setDrawer,
    toggleDrawer,

    toggleTheme,
    vuetifyTheme
  }
})

import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import { usePreferredDark } from '@vueuse/core'

export const useLayoutStore = defineStore('layout', () => {
  const drawer = ref(true)
  const layout = reactive({
    drawer: true,
    dark: usePreferredDark().value
  })

  //region Drawer
  const setDrawer = (value: boolean) => {
    console.log(value)
    return (layout.drawer = value)
  }
  const toggleDrawer = () => {
    console.log(layout.dark)
    return (layout.drawer = !layout.drawer)
  }
  //endregion

  //region Vuetify theme

  const vuetifyTheme = () => {
    const localTheme = localStorage.getItem('theme')
    return localTheme ? localTheme : layout.dark ? 'dark' : 'light'
  }
  const toggleTheme = () => {
    const localeTheme = localStorage.getItem('theme')

    if (localeTheme) {
      layout.dark = !(localeTheme === 'dark' && usePreferredDark().value)
    } else layout.dark = !layout.dark

    const theme = layout.dark ? 'dark' : 'light'
    localStorage.setItem('theme', theme)
  }
  //endregion

  return {
    layout,
    setDrawer,
    toggleDrawer,

    toggleTheme,
    vuetifyTheme
  }
})

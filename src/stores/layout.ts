import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { usePreferredDark } from '@vueuse/core'

export const useLayoutStore = defineStore('layout', () => {
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
    if (localTheme) {
      layout.dark = localTheme === 'dark'
      setTailwindTheme()
      return localTheme
    } else return layout.dark ? 'dark' : 'light'
  }
  const toggleTheme = () => {
    const localeTheme = localStorage.getItem('theme')

    if (localeTheme) {
      layout.dark = !(localeTheme === 'dark' && usePreferredDark().value)
    } else layout.dark = !layout.dark

    const theme = layout.dark ? 'dark' : 'light'

    setTailwindTheme()
    localStorage.setItem('theme', theme)
  }

  const setTailwindTheme = () => {
    if (layout.dark) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
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

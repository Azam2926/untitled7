import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useLayoutStore = defineStore('layout', () => {
  const layout = reactive({
    drawer: true
  })

  const setDrawer = function (drawer: boolean) {
    layout.drawer = drawer
  }
  const toggleDrawer = () => {
    layout.drawer = !layout.drawer
  }

  return { layout, setDrawer, toggleDrawer }
})

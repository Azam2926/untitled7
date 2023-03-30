import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useLayoutStore = defineStore('layout', () => {
  const layout = reactive({
    drawer: false
  })

  const setDrawer = function (drawer: boolean) {
    layout.drawer = drawer
  }
})

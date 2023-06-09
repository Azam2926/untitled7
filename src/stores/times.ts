import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useTimeStore = defineStore('times', () => {
  const times = reactive({
    fajr: '04:44',
    sunrise: '06:02',
    dhuhr: '12:26',
    asr: '16:58',
    sunset: '18:51',
    maghrib: '20:09',
    isha: '22:02',
    imsak: '03:47'
  })

  return { times }
})

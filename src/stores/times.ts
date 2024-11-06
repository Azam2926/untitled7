import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useTimeStore = defineStore('times', () => {
  const times = reactive({
    fajr: {
      time: '04:44',
      title: 'Tong'
    },
    sunrise: {
      time: '06:02',
      title: 'Quyosh'
    },
    dhuhr: {
      time: '12:26',
      title: 'Peshin'
    },
    asr: {
      time: '16:58',
      title: 'Asr'
    },
    sunset: {
      time: '18:51',
      title: 'Shom'
    },
    maghrib: {
      time: '20:09',
      title: 'Hufton'
    },
    isha: {
      time: '22:02',
      title: 'isha'
    },
    imsak: {
      time: '03:47',
      title: 'imsak'
    }
  })

  return { times }
})

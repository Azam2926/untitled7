<template>
  <v-parallax src="https://islom.uz/img/header_hufton.jpg">
    <v-row no-gutters>
      <v-col>
        <prayer-time :time="times.fajr" title="Tong" />
      </v-col>
      <v-col>
        <prayer-time :time="times.sunrise" title="Tong" />
      </v-col>
      <v-col>
        <prayer-time :time="times.dhuhr" title="Tong" />
      </v-col>
      <v-col>
        <prayer-time :time="times.asr" title="Tong" />
      </v-col>
      <v-col>
        <prayer-time :time="times.sunset" title="Tong" />
      </v-col>
      <v-col>
        <prayer-time :time="times.maghrib" title="Tong" />
      </v-col>
    </v-row>
  </v-parallax>
</template>

<script setup lang="ts">
import PrayerTime from '@/components/PrayerTime.vue'
import { useTimeStore } from '@/stores/times'
import { onMounted } from 'vue'

const { times, fajr, sunrise } = useTimeStore()
onMounted(() => console.log(fajr))
</script>

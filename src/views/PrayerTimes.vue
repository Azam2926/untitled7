<template>
  <v-row class="h-full p-4 align-center bg-[url('https://islom.uz/img/header_asr.jpg')]" no-gutters>
    <v-col>
      <PrayerTime :time="times.fajr.time" :title="times.fajr.title" />
    </v-col>
    <v-col>
      <PrayerTime :time="times.sunrise.time" :title="times.sunrise.title" />
    </v-col>
    <v-col>
      <PrayerTime :time="times.dhuhr.time" :title="times.dhuhr.title" />
    </v-col>
    <v-col>
      <PrayerTime :time="times.asr.time" :title="times.asr.title" />
    </v-col>
    <v-col>
      <PrayerTime :time="times.sunset.time" :title="times.sunset.title" />
    </v-col>
    <v-col>
      <PrayerTime :time="times.maghrib.time" :title="times.maghrib.title" />
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
import PrayerTime from '@/components/PrayerTime.vue'
import { useTimeStore } from '@/stores/times'

const { times } = useTimeStore()
</script>

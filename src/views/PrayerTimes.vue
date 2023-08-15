<template>
  <v-parallax src="https://islom.uz/img/header_hufton.jpg">
    <v-row no-gutters>
      <v-col>
        <PrayerTime :time="times.fajr" title="Tong" />
      </v-col>
      <v-col>
        <PrayerTime :time="times.sunrise" title="Tong" />
      </v-col>
      <v-col>
        <PrayerTime :time="times.dhuhr" title="Tong" />
      </v-col>
      <v-col>
        <PrayerTime :time="times.asr" title="Tong" />
      </v-col>
      <v-col>
        <PrayerTime :time="times.sunset" title="Tong" />
      </v-col>
      <v-col>
        <PrayerTime :time="times.maghrib" title="Tong" />
      </v-col>
    </v-row>
  </v-parallax>
</template>

<script lang="ts" setup>
import PrayerTime from '@/components/PrayerTime.vue'
import { useTimeStore } from '@/stores/times'

const { times } = useTimeStore()
</script>

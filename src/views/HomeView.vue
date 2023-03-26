<script setup lang="ts">
import { NDatePicker } from 'naive-ui'
import { ref } from 'vue'

const timestamp = ref<number>(1183135260000)
</script>

<template>
  <div class="flex flex-col gap-4 items-center">
    <h1 class="text-3xl text-blue-500 text-center bg-amber-200 font-bold underline">
      {{ timestamp }}
    </h1>

    <h1 class="text-3xl text-blue-500 text-center bg-amber-200 font-bold underline">
      uz: {{ new Date(timestamp[0]).toLocaleString('uz') }}
    </h1>

    <h1 class="text-3xl text-blue-500 text-center bg-amber-200 font-bold underline">
      uz: {{ new Date(timestamp[1]).toLocaleString('uz') }}
    </h1>

    <n-date-picker v-model:value="timestamp" type="quarterrange" clearable />
  </div>
</template>

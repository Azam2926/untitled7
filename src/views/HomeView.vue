<script lang="ts" setup>
import { NDatePicker } from 'naive-ui'
import { ref } from 'vue'

const timestamp = ref<number[]>([0, 0])

function handleChange(timestamps: number[]) {
  console.log(timestamps)
}
</script>

<template>
  <div class="flex flex-col gap-4 items-center">
    <div class="rounded-full w-32 h-32 bg-green-500/75"></div>
    <div class="rounded-full w-32 h-32 bg-green-500"></div>
    <h1 class="text-3xl text-blue-500 text-center bg-amber-200 font-bold underline">
      {{ timestamp }}
    </h1>

    <h1 class="text-3xl text-blue-500 text-center bg-amber-200 font-bold underline">
      uz: {{ new Date(timestamp[0]).toLocaleString('uz') }}
    </h1>

    <h1 class="text-3xl text-blue-500 text-center bg-amber-200 font-bold underline">
      uz: {{ new Date(timestamp[1]).toLocaleString('uz') }}
    </h1>

    <n-date-picker
      v-model:value="timestamp"
      clearable
      type="datetimerange"
      @change="handleChange"
    />
  </div>
</template>

<script lang="ts" setup>
import { NDatePicker } from 'naive-ui'
import { computed, ref } from 'vue'

const timestamp = ref<number[]>([0, 0])

const timeBegin = computed(() => (timestamp.value?.length > 0 ? timestamp.value[0] : 0))
const timeEnd = computed(() => (timestamp.value?.length > 1 ? timestamp.value[1] : 0))

function handleChange(timestamps: number[]) {
  console.log(timestamps)
}
</script>

<template>
  <div class="flex flex-col gap-4 items-center">
    <div class="rounded-full w-32 h-32 bg-green-500/75"></div>
    <div class="rounded-full w-32 h-32 bg-green-500"></div>

    <h1 class="text-3xl text-blue-500 text-center bg-amber-200 font-bold underline">
      uz: {{ new Date(timeBegin).toLocaleString('uz') }} | {{ timeBegin }}
    </h1>

    <h1 class="text-3xl text-blue-500 text-center bg-amber-200 font-bold underline">
      uz: {{ new Date(timeEnd).toLocaleString('uz') }} | {{ timeEnd }}
    </h1>

    <n-date-picker
      v-model:value="timestamp"
      clearable
      type="datetimerange"
      @update:value="handleChange"
    />
  </div>
</template>

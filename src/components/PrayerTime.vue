<template>
  <div class="flex justify-center w-[80px] h-[80px] bg-white text-green-600 text-center">
    <div
      class="flex flex-col align-center rounded-full w-[60px] h-[60px] border-[1px] border-green-600"
    >
      <span class="text-[11px]">{{ timer }}</span>
      <span>{{ time }}</span>
      <span>{{ title }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useNow } from '@vueuse/core'

export interface Props {
  time?: string
  title?: string
}

const props = withDefaults(defineProps<Props>(), {
  time: '00:00',
  title: 'Tong'
})

const timer = computed(() => useNow().value.toLocaleTimeString('uz'))

onMounted(() => console.log(props.title + ' vaqti:', props.time))
</script>

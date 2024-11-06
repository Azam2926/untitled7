<template>
  <div
    class="grid place-content-center rounded-full w-[80px] h-[80px] bg-white text-center my-auto"
  >
    <div
      class="grid place-content-center bg-green-600 rounded-full w-[75px] h-[75px] border-[1px] border-green-400 border-solid shadow-2xl"
    >
      <span v-if="false" class="text-[11px]">{{ timer }}</span>
      <span class="font-bold text-white">{{ time }}</span>
      <span class="text-black text-">{{ title }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
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

const timer = computed(() => {
  return useNow().value.toLocaleTimeString('uz')
})

onMounted(() => console.log(props.title + ' vaqti:', props.time))
</script>

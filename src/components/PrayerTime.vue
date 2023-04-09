<template>
  <div
    class="grid place-content-center rounded-full w-[80px] h-[80px] bg-white text-center my-auto"
  >
    <div
      class="flex flex-col align-center rounded-full w-[60px] h-[60px] border-[1px] border-green-600"
    >
      <span v-if="false" class="text-[11px]">{{ timer }}</span>
      <span class="font-bold text-green-600">{{ time }}</span>
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

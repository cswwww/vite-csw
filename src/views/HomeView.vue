<script setup>
import { mainStore } from '../store/index.js'

onMounted(() => {
  console.error('Say', mainStore().sayMyName)
  console.warn(import.meta.env.VITE_MORNING)
  console.log('Current Mode:', import.meta.env.MODE)
})
</script>

<template>
  <div class="w-full h-full flex-center flex-col">
    <h1 class="text-zx-5 text-3xl font-bold underline">
      Hey there, {{ mainStore().sayMyName }}
    </h1>
    <meme />
  </div>
</template>

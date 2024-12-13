<script setup>
import { mainStore } from '../store/index.js'

onMounted(() => {
  console.error('Say', mainStore().sayMyName)
})
</script>

<template>
  <h1 class="text-3xl font-bold underline">
    Hey there, {{ mainStore().sayMyName }}
  </h1>
  <meme />
</template>

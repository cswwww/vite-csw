<script setup>
import { mainStore } from '../store/index.js'

onMounted(() => {
  console.err('Say', mainStore().sayMyName)
})
</script>

<template>
  <h1 class="text-3xl font-bold underline">
    My {{ mainStore().sayMyName }}
  </h1>
</template>

<script setup>
import { mainStore } from '../store/index.js'
</script>

<template>
  <h1 class="text-3xl font-bold underline">
    My {{ mainStore().sayMyName }}
  </h1>
</template>

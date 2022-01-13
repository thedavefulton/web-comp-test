<template>
  <h2>I'm a kid, and my parent's name is: {{name}}</h2>
</template>

<script setup lang="ts">
defineProps({
  name: String
})
</script>

<style scoped>
h2 {
  font-size: var(--h2-font-size, 1.5rem);
}
</style>
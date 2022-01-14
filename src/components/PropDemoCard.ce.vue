<template>
  <ark-title-card>
    <h3 slot="title">I'm Gonna Demo a Prop Thing!</h3>
    <p>{{ count }} is a {{ typeof count }}</p>
    <p>{{ count }} x 2 is {{ doubleCount }}</p>
  </ark-title-card>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  count: Number,
});

const doubleCount = computed(() => props.count * 2);
</script>

<style></style>

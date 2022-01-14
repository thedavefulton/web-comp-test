<template>
  <ark-title-card>
    <h3 slot="title">I'm Card Two! Excited Yet?</h3>
    <p>See this 👉 {{ sharedStore.input }}?</p>
    <p>Look familiar?</p>
  </ark-title-card>
</template>

<script setup lang="ts">
import { useSharedStore } from "../stores";

const sharedStore = useSharedStore();
</script>

<style></style>

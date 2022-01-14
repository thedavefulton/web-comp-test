<template>
  <ark-title-card>
    <h3 slot="title" :class="{ upper }">I'm Card One! Start Here!</h3>
    <p>👇 Type Something Below</p>
    <input type="text" v-model="input" />
    <p>Look 👉 {{ input }}</p>
  </ark-title-card>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useSharedStore } from "../stores";

defineProps({
  upper: Boolean,
});

const sharedStore = useSharedStore();

const input = computed({
  get: () => sharedStore.input,
  set: (val: string) => {
    sharedStore.input = val;
  },
});
</script>

<style>
.upper {
  text-transform: uppercase;
}
</style>

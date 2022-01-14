<template>
  <ark-title-card>
    <h3 slot="title">I'm Card Three! Just You Wait!</h3>
    <p>Check that out 👇</p>
    <input type="text" v-model="input" />
    <p>
      Neat, right?! The three of us are great at sharing! Even though we've
      never met!
    </p>
  </ark-title-card>
</template>

<script setup lang="ts">
import { useSharedStore } from "../stores";
import { computed } from "vue";

const sharedStore = useSharedStore();
const input = computed({
  get: () => sharedStore.input,
  set: (val: string) => {
    sharedStore.input = val;
  },
});
</script>

<style></style>

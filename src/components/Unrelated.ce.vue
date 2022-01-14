<template>
  <ark-base-card>
    <h2>I'm My Own Thing!</h2>
    <input type="text" v-model="name" />

    <ark-banner-child :name="name"></ark-banner-child>
  </ark-base-card>
</template>

<script setup lang="ts">
import { userStore as useUserStore } from "../stores";
import { computed } from "vue";

const userStore = useUserStore();
const name = computed({
  get: () => userStore.name,
  set: (val) => {
    userStore.name = val;
  },
});
</script>

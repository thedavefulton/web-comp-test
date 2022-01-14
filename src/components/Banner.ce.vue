<template>
  <ark-base-card>
    <h1><slot>Well Hello There</slot> {{ formattedName }}!</h1>
    <input type="text" v-model="name" />

    <ark-banner-child :name="formattedName"></ark-banner-child>
  </ark-base-card>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { userStore as useUserStore } from "../stores";

const props = defineProps({
  upper: Boolean,
});

const userStore = useUserStore();
console.log(userStore.name);

const name = computed({
  get: () => userStore.name,
  set: (val) => {
    userStore.name = val;
  },
});

const formattedName = computed(() =>
  props.upper ? name.value.toLocaleUpperCase() : name.value
);
</script>

<style>
h1 {
  font-size: 2rem;
}
</style>

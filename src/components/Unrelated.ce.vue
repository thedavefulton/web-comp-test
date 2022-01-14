<template>
  <h2>I'm My Own Thing!</h2>
  <input type="text" v-model="name" />

  <my-banner-child :name="name"></my-banner-child>
</template>

<script setup lang="ts">
import {userStore as useUserStore} from "../stores";
import {computed} from "vue";

const userStore = useUserStore();
const name = computed({
  get: () => userStore.name,
  set: (val) => {
    userStore.name = val
  }
})
</script>

<style scoped>

</style>
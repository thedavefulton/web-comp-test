<template>
  <h1><slot>Well Hello There</slot> {{formattedName}}!</h1>
  <input type="text" v-model="name" />

  <my-banner-child :name="formattedName"></my-banner-child>
</template>

<script setup lang="ts">
import {computed, ref} from "vue";

const props = defineProps({
  upper: Boolean
})

const name = ref('Name')

const formattedName = computed(() => props.upper ? name.value.toLocaleUpperCase() : name.value)
</script>

<style scoped>
h1 {
  font-size: 2rem;
}
</style>
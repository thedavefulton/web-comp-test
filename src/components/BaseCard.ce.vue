<template>
  <div class="base-card">
    <slot></slot>
  </div>
</template>

<style>
:host(.base-card) {
  color: var(--gray-0);
}
.base-card {
  border-radius: var(--radius-3);
  border: var(--border-size-2) solid var(--gray-7);
  padding: var(--size-5);
  background-color: var(--blue-5);
  color: var(--gray-0);
}
</style>

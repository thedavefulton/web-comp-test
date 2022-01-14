<template>
  <ark-base-card>
    <div class="title">
      <slot name="title"></slot>
    </div>
    <slot></slot>
  </ark-base-card>
</template>

<style>
.title {
  margin-bottom: var(--size-3);
}
</style>

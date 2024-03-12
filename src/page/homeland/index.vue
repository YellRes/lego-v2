<script setup lang="ts">
import Container from './components/Container.vue'
</script>

<template>
  <div class="flex justify-center">
    <Container
      :title="'我的应用'"
      :linkText="'查看所有的应用'"
      class="w-[1000px]"
    />
  </div>
</template>

<template>
<div class="bg-gray-200 min-h-screen h-full">
    <navbar></navbar>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup>
import Navbar from './Navbar.vue';

</script>

<style lang="scss" scoped>

</style>
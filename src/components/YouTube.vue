<template>
    <a
      :href="href"
      target="_blank"
      class="my-3 rounded-xl border-2 bg-red-500 p-2 hover:bg-red-600 text-white transition-colors"
      >YouTube</a
    >
</template>

<script setup>
const props = defineProps({
  href: String,
});
</script>

<template>
  <div class="flex flex-col p-8 items-center">
    <h1 class="text-5xl mb-3">Hello, You can Search Meals Here</h1>
    <p>I created this web page for learning.</p>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import store from "../store";
import axiosClient from "../axiosClient.js";
import { onMounted } from "vue";

const meals = computed(() => store.state.meals);

const ingredients = ref([]);
onMounted(async () => {
  const response = await axiosClient.get(`list.php?i=list`);
  ingredients.value = response.data;
  console.log("Meals=>", JSON.stringify(response.data));
});
</script>

<style lang="scss" scoped></style>

<template>
  <div class="w-[800px] mx-auto p-8">
    <h1 class="text-5xl font-bold mb-5">{{ meal.strMeal }}</h1>
    <img :src="meal.strMealThumb" :alt="meal.strMeal" />
    <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
      <div>
        <strong class="font-bold">Category:</strong>{{ meal.strCategory }}
      </div>
      <div><strong class="font-bold">Area:</strong>{{ meal.strArea }}</div>
      <div><strong class="font-bold">Tags:</strong>{{ meal.strTags }}</div>
    </div>
    <div class="my-3">
      {{ meal.strInstructions }}
    </div>
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-2 w-[800px] mx-auto p-8">
    <div>
      <h2 class="text-2xl font-semibold mb-2">Ingedients</h2>
      <ul>
        <template v-for="(el, ind) of new Array(20)" :key="ind">
          <li v-if="meal[`strIngredient${ind + 1}`]">
            {{ ind + 1 }} {{ meal[`strIngredient${ind + 1}`] }}
          </li>
        </template>
      </ul>
    </div>
    <div>
      <h2 class="text-2xl font-semibold mb-2">Measures</h2>
      <ul>
        <template v-for="(el, ind) of new Array(20)" :key="ind">
          <li v-if="meal[`strMeasure${ind + 1}`]">
            {{ meal[`strMeasure${ind + 1}`] }}
          </li>
        </template>
      </ul>
    </div>
    <div class="flex items-center space-between mt-4">
      <YouTube :href="meal.strYoutube" />
      <a
        :href="meal.strSource"
        target="_blank"
        class="my-3 rounded-xl border-2 bg-blue-500 p-2 hover:bg-blue-600 text-white transition-colors"
        >See Original Source</a
      >
    </div>
  </div>
</template>

<script setup>
import YouTube from "../components/YouTube.vue";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axiosClient from "../axiosClient";
const route = useRoute();
const meal = ref({});

onMounted(() => {
  axiosClient.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
    meal.value = data.meals[0] || {};
  });
});
</script>

<style lang="scss" scoped></style>

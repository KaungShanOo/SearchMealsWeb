<template>
  <div class="gb-white shadow rounded-xl" v-for="meal of meals" :key="meal.idMeal">
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="rounded-t-xl w-full h-48 object-cover"
      />
    </router-link>
    <div class="p-3">
      <h3 class="font-bold">{{ meal.strMeal }}</h3>
      <p class="mb-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius quos
        eaque, laboriosam ratione alias inventore ea fugit facilis tenetur
        nesciunt.
      </p>
      <YouTube :href="meal.strYoutube" />
      <!-- <router-link
            to="/"
            class="my-3 rounded-xl border-2 bg-blue-500 p-2 hover:bg-blue-600 text-white transition-colors"
            >View</router-link
          > -->
    </div>
  </div>
</template>
<script setup>
import YouTube from "../components/YouTube.vue";
const { meals } = defineProps({
  meals: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="flex justify-center gap-2 mt-2">
    <router-link
      v-for="letter of letters"
      :key="letter"
      :to="{ name: 'byLetters', params: { letter } }"
    >
      {{ letter }}
    </router-link>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <MealItem :meals="meals" />
  </div>
</template>

<script setup>
import MealItem from "../components/MealItem.vue";
import { computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import store from "../store";

const route = useRoute();
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const meals = computed(() => store.state.mealsByLetter);

// function searchMealsByLetter() {
//   store.dispatch(`searchMealsByLetter`, route.params.letter);
// }
watch(route, () => {
  store.dispatch(`searchMealsByLetter`, route.params.letter);
});
onMounted(() => {
  store.dispatch(`searchMealsByLetter`, route.params.letter);
});
</script>

<style lang="scss" scoped></style>

<template>
  <Meals v-for="meal of meals" :key="meal.idMeal" :meals="meals" />
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import Meals from "../components/Meals.vue";

const route = useRoute();
const meals = computed(() => store.state.mealsByIngredient);

console.log("meal by ingredients", meals);
onMounted(() => {
  store.dispatch(`searchMealsByIngredient`, route.params.ingredients);

});
</script>

<style lang="scss" scoped></style>

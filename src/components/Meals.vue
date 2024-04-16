<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <MealItem v-for="meal of meals" :key="meal.idMeal" :meals="meals" />
  </div>
</template>

<script setup>
import MealItem from "./MealItem.vue";

const { meals } = defineProps({
  meals: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped></style>

<template>
  <div class="p-8">
    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 border-gray-300 p-2 w-full"
      placeholder="Search for a Meal"
      @change="searchMeals"
    />
  </div>
  <Meals v-for="meal of meals" :key="meal.idMeal" :meals="meals" />
</template>

<script setup>
import Meals from "../components/Meals.vue";
import { computed, onMounted, ref } from "vue";
import store from "../store";
import { useRoute } from "vue-router";

const route = useRoute()
const keyword = ref("")
const meals = computed(() => store.state.searchedMeals);

function searchMeals() {
  if (keyword.value) {
    store.dispatch(`searchMeals`, keyword.value);
  } else {
    store.commit(`setSearchedMeals`, []);

  }
  onMounted(() => {
    keyword.value = route.params.name;
    if (keyword.value) {
      searchMeals();
    }
  });
}
</script>

<style lang="scss" scoped></style>

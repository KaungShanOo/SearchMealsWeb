import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../Views/Home.vue";
import MealByName from "../Views/MealByName.vue";
import MealByLetters from "../Views/MealByLetters.vue";
import MealByIngredients from "../Views/MealByIngredients.vue";
import MealDetails from "../Views/MealDetails.vue";
import Ingredients from "../Views/Ingredients.vue";
import DefaultLayout from "../components/DefaultLayout.vue";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
      {
        path: "/by-name/:name?",
        name: "byName",
        component: MealByName,
      },
      {
        path: "/by-letters/:letter?",
        name: "byLetters",
        component: MealByLetters,
      },
      {
        path: "/ingredients",
        name: "ingredients",
        component: Ingredients,
      },
      {
        path: "/by-ingredients/:ingredients?",
        name: "byIngredients",
        component: MealByIngredients,
      },
      {
        path: "/meal/:id?",
        name: "mealDetails",
        component: MealDetails,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

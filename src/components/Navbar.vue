<template>
    <header class="bg-white shadow-md h-16 justify-between flex items-stretch">
      <router-link
        :to="{ name: 'home' }"
        class="inline-flex px-10 h-full transition-colors hover:bg-purple-100 items-center"
      >
        Home
      </router-link>
      <div class="flex gap-1 item-center">
        <router-link
          :to="{ name: 'byName' }"
          class="inline-flex px-2 h-full transition-colors hover:bg-purple-100 items-center"
          >Meal by Name</router-link
        >
        <router-link
          :to="{ name: 'byLetters' }"
          class="inline-flex px-2 h-full transition-colors hover:bg-purple-100 items-center"
          >Meals by Letters</router-link
        >
        <router-link
          :to="{ name: 'ingredients' }"
          class="inline-flex px-2 h-full transition-colors hover:bg-purple-100 items-center"
          >Meals by Ingredients</router-link
        >
      </div>
    </header>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>
<script setup lang="ts">
import ProductCard from "~/components/cards/ProductCard.vue";

const items = [{
  description: "Game Pass - 1 mês",
  icon: 'xbox',
  price: 28
}, {
  description: "Game Pass - 2 meses",
  icon: 'xbox',
  price: 50
}, {
  description: "Steam - 50 reais",
  icon: 'steam',
  price: 120
}]
</script>

<template>
  <div class="container mx-auto">
    <div class="text-center mt-72 dark:text-gray-200 align-middle justify-center">
      <div class="px-4 mb-24">
        <h1 class="text-6xl font-extrabold p-3 bg-gradient-to-r from-blue-700 via-purple-600 to-purple-400 text-transparent bg-clip-text">
          Polygon Store</h1>
        <p class="text-2xl mt-4 font-semibold bg-gradient-to-r from-blue-700 via-purple-600 to-purple-400 text-transparent bg-clip-text">
          Compre gift cards das suas plataformas preferidas</p>

      </div>
    </div>
    <div class="grid justify-center mx-auto text-center dark:text-white gap-6 mt-12 mr-12 ml-12">
      <button type="button"
              class="dark:hover:ring-purple-400 hover:ring-purple-700 hover:ring-1 font-semibold bg-gradient-to-r from-blue-700 via-purple-600 to-purple-400 text-white rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
        <NuxtLink to="/signin">
          Saiba mais
        </NuxtLink>
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>

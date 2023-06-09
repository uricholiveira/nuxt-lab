<script setup lang="ts">

import SubNavbar from "~/components/navigation/SubNavbar.vue";
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
  description: "Game Pass - 3 meses",
  icon: 'xbox',
  price: 70
}, {
  description: "Steam - 50 reais",
  icon: 'steam',
  price: 120
}]
</script>

<template>
  <div class="h-screen mt-24">
    <div class="container mx-auto">
      <form class="pb-5">
        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </div>
          <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500" placeholder="Pesquisa" required>
          <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">Pesquisar</button>
        </div>
      </form>

      <div class="grid grid-cols-2 gap-6 align-middle justify-center">
        <ProductCard v-for="item in items" :price="item.price" :description="item.description" :icon="item.icon"/>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>

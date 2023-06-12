<script setup lang="ts">

import SubNavbar from "~/components/navigation/SubNavbar.vue";
import ProductCard from "~/components/cards/ProductCard.vue";
import ProductFilter from "~/components/navigation/ProductFilter.vue";

const searchInput = ref('')
const filteredItems = () => {
  return items.filter((x) => {
    return x.icon.toLowerCase().includes(searchInput.value.toLowerCase())
  })
}

const items = [{
  description: "Game Pass - 1 mês",
  icon: 'xbox',
  type: 'games',
  price: 28
}, {
  description: "Game Pass - 2 meses",
  icon: 'steam',
  type: 'games',
  price: 50
}, {
  description: "Game Pass - 3 meses",
  icon: 'valorant',
  type: 'games',
  price: 70
}, {
  description: "Steam - 50 reais",
  icon: 'lol',
  type: 'games',
  price: 120
}, {
  description: "Netflix",
  icon: 'netflix',
  type: 'services',
  price: 120
}, {
  description: "Airbnb",
  icon: 'airbnb',
  type: 'services',
  price: 120
}, {
  description: "Uber",
  icon: 'uber',
  type: 'services',
  price: 120
}, {
  description: "Spotify",
  icon: 'spotify',
  type: 'services',
  price: 120
}, {
  description: "Crunchyroll",
  icon: 'crunchyroll',
  type: 'services',
  price: 120
}]
</script>

<template>
  <div class="sm:h-full xl:h-screen px-4 pt-24 dark:text-white">
    <div class="container w-full mx-auto">
      <div class="flex gap-4  justify-center align-middle place-items-center">
        <div>
          <label for="default-search"
                 class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor"
                   viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            <input type="search" id="default-search"
                   v-model="searchInput"
                   class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                   placeholder="Pesquisa" required>
          </div>
        </div>
<!--        <ProductFilter :filter.sync="filter"/>-->
      </div>
      <div class="w-full flex flex-wrap justify-center gap-4 mt-12">
        <div class="" v-for="item in filteredItems()">
          <div class="relative bg-white w-48 rounded-lg shadow-md border-transparent">
            <img :src="'/img/'+item.icon+'.png'" alt="Produto" class="object-cover border-transparent rounded-lg transition ease-in-out hover:-translate-y-1 hover:scale-105">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>

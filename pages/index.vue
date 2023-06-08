<script setup lang="ts">

import Navbar from "~/components/navigation/Navbar.vue";
import GiftCard from "~/components/cards/GiftCard.vue";

const giftCards = [{
  title: "Microsoft",
  description: "Game Pass - 1 mês",
  price: 28
}, {
  title: "Microsoft",
  description: "Game Pass - 2 meses",
  price: 50
}, {
  title: "Microsoft",
  description: "Game Pass - 3 meses",
  price: 70
}, {
  title: "Microsoft",
  description: "Game Pass - 6 meses",
  price: 120
}]
</script>

<template>
  <div class="h-screen">
    <div class="container mx-auto text-center mt-24 dark:text-gray-200 align-middle justify-center">
      <div class="px-4 mb-24">
        <h1 class="text-5xl font-extrabold">Planos</h1>
        <p class="text-2xl mt-2">Compre gift cards das suas plataformas preferidas</p>
      </div>
    </div>
    <div class="grid grid-cols-2 align-middle justify-center mx-auto text-center dark:text-white gap-6 mr-12 ml-12">
      <GiftCard v-for="item in giftCards" :title="item.title" :description="item.description" :price="item.price"/>
    </div>
    <div class="grid align-middle justify-center mx-auto text-center dark:text-white gap-6 mt-6 mr-12 ml-12">
      <button type="button"
              class="text-purple-500 hover:text-white border border-purple-500 hover:bg-purple-500 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">
        Saiba mais
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>

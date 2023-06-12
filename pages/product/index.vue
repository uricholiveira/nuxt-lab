<script setup lang="ts">
let price = ref(0);
</script>

<template>
  <div class="container lg:mx-auto pt-24 dark:text-white">
    <div class="flex flex-wrap justify-center lg:justify-start gap-6">
      <div class="">
        <img class="rounded-lg w-96 h-auto" src="/img/valorant.png" alt="product image"/>
      </div>
      <div>
        <div class="font-semibold text-3xl">Valorant</div>
        <div class="font-medium text-lg">Resgatável apenas no <strong>brasil</strong></div>
        <div class="pt-4">
          <ul class="flex w-full gap-6">
            <li>
              <input type="radio" id="valorant-20" name="hosting" value="20" class="hidden peer" v-model="price">
              <label for="valorant-20"
                     class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-purple-500 peer-checked:border-purple-600 peer-checked:text-purple-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <div class="block">
                  <div class="w-full text-lg font-semibold">R$20</div>
                  <div class="w-full">575 VP</div>
                </div>
              </label>
            </li>
            <li>
              <input type="radio" id="valorant-50" name="hosting" value="50" class="hidden peer" v-model="price">
              <label for="valorant-50"
                     class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-purple-500 peer-checked:border-purple-600 peer-checked:text-purple-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <div class="block">
                  <div class="w-full text-lg font-semibold">R$50</div>
                  <div class="w-full">1535 VP</div>
                </div>
              </label>
            </li>
            <li>
              <input type="radio" id="valorant-100" name="hosting" value="100" class="hidden peer" v-model="price">
              <label for="valorant-100"
                     class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-purple-500 peer-checked:border-purple-600 peer-checked:text-purple-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                <div class="block">
                  <div class="w-full text-lg font-semibold">R$100</div>
                  <div class="w-full">3130 VP</div>
                </div>
              </label>
            </li>
          </ul>
        </div>
        <div class="pt-4 font-semibold text-2xl">
          Preço: BRL {{ price }},00
        </div>
        <hr class="mt-4">
        <div class="pt-4">
          <div class="font-semibold text-2xl pt-1">
            Quantidade
            <div class="py-2">
              <input type="number" id="first_name"
                     class="w-32 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                     placeholder="1" required>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-start pt-4">
          <a href="#" class="w-full   text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">Adicionar ao carrinho</a>
        </div>
        <div class="flex items-center justify-start pt-2 pb-2">
          <a href="#" class="w-full   text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Comprar agora</a>
        </div>
        <span class="text-gray-500">Entrega imediata dependendo da forma de pagamento</span>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>

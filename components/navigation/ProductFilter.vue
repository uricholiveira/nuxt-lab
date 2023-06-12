<script setup lang="ts">

const props = defineProps(['filter'])

const filter = {
  all: true,
  games: false,
  services: false
};
const handleGames = () => {
  filter.all = false;
  filter.games = !filter.games;
  console.log(filter)
}
const handleServices = () => {
  filter.all = false;
  filter.services = !filter.services;
  console.log(filter)
}
const handleAll = () => {
  filter.games = false;
  filter.services = false;
  filter.all = !filter.all;
  console.log(filter)
}

</script>

<script lang="ts">
</script>

<template>
  <div class="">
    <button type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            data-dropdown-toggle="dropdownDefaultCheckbox">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
           class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round"
              d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"/>
      </svg>

    </button>

    <!-- Dropdown menu -->
    <div id="dropdownDefaultCheckbox"
         class="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
      <ul class="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownCheckboxButton">
        <li>
          <div class="flex items-center">
            <input id="checkbox-item-1" type="checkbox" value="" :checked="filter.games"
                   @change="handleGames"
                   class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
            <label for="checkbox-item-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Jogos</label>
          </div>
        </li>
        <li>
          <div class="flex items-center">
            <input id="checkbox-item-2" type="checkbox" value="" :checked="filter.services"
                   @change="handleServices"
                   class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
            <label for="checkbox-item-2" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Serviços</label>
          </div>
        </li>
        <hr>
        <li>
          <div class="flex items-center">
            <input id="checkbox-item-3" type="checkbox" value="" :checked="filter.all" @change="handleAll"
                   class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
            <label for="checkbox-item-3" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Todos</label>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>

</style>

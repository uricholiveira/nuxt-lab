<script setup lang="ts">
const route = useRoute();

const items = [
  {description: "Gift cards", to: "/signup"},
  {description: "Categoria", to: "/signup"},
  {description: "Subcategoria", to: "/signup"}
]
</script>

<template>
  <nav class="bg-gray-50 border-gray-200 dark:bg-gray-950">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-gray-50 dark:bg-gray-950 md:dark:bg-gray-950 dark:border-gray-700">
          <li v-for="item in items">
            <NuxtLink :to="item.to"
                      class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-700 md:p-0 dark:text-white md:dark:hover:text-purple-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
              {{ item.description }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>

</style>

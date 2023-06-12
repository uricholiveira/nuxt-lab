<script setup lang="ts">

</script>


<template>
  <div>
    <button type="button"
            class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom">
      <span class="sr-only">Open user menu</span>
      <img class="w-10 h-10 rounded-full object-cover border-transparent transition ease-in-out hover:scale-105" src="/img/profile.png" alt="user photo">
    </button>
    <!-- Dropdown menu -->
    <div
        class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
        id="user-dropdown">
      <div class="px-4 py-3">
        <span class="block text-sm text-gray-900 dark:text-white">Urich Oliveira</span>
        <span class="block text-sm  text-gray-500 truncate dark:text-gray-400">oliveira.urich@gmail.com</span>
      </div>
      <ul class="py-2" aria-labelledby="user-menu-button">
        <li>
          <NuxtLink to="/profile">
            <a href="#"
               class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Meu
              perfil</a>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/order">
            <a href="#"
               class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Meus
              pedidos</a>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/notifications">
            <a href="#"
               class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Notificações</a>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/">
            <a href="#"
               class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sair</a>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>

</style>

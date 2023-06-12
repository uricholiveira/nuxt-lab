<script setup lang="ts">
import CartDrawer from "~/components/navigation/CartDrawer.vue";
import UserAvatar from "~/components/navigation/UserAvatar.vue";
import {RouteLocation} from "vue-router";


const route = useRoute()

const menu = reactive({
  showUser: false,
  showStore: false,
  showCart: false,
});

const setupNavbar = (route: RouteLocation) => {
  console.log(route.path)
  switch (route.path) {
    case "/signin":
      menu.showCart = false;
      menu.showUser = false;
      menu.showStore = false;
      break
    case "/signup":
      menu.showCart = false;
      menu.showUser = false;
      menu.showStore = false;
      break
    case "/store":
      menu.showCart = true;
      menu.showUser = true;
      menu.showStore = false;
      break
    case "/profile":
      menu.showCart = true;
      menu.showUser = true;
      menu.showStore = true;
      break
    case "/order":
      menu.showCart = true;
      menu.showUser = true;
      menu.showStore = true;
      break
    case "/notifications":
      menu.showCart = true;
      menu.showUser = true;
      menu.showStore = true;
      break
    case "/":
      menu.showCart = false;
      menu.showUser = false;
      menu.showStore = false;
      break
    default:
      menu.showCart = false;
      menu.showUser = false;
      menu.showStore = false;
      break
  }
}

watch(route, value => {
  setupNavbar(route)
})

onMounted(() => {
  setupNavbar(route)
})

</script>

<template>
  <nav class="bg-gray-50 border-gray-200 dark:bg-gray-950">
    <div class="max-w-screen-xl h-24 flex flex-wrap items-center justify-between mx-auto p-4">
      <NuxtLink to="/" class="flex items-center">
        <img src="/img/logo.svg" class="h-8 mr-3" alt="Logo"/>
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
      </NuxtLink>
      <div class="flex items-center md:order-2">
        <NuxtLink to="/store" v-if="menu.showStore">
          <button
              class="block py-2 pl-3 pr-4 mr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-700 md:p-0 dark:text-white md:dark:hover:text-purple-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              data-drawer-target="drawer-right-example" data-drawer-show="drawer-right-example"
              data-drawer-placement="right"
              aria-controls="drawer-right-example">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
            </svg>
          </button>
        </NuxtLink>
        <CartDrawer v-show="menu.showCart"/>
        <button id="theme-toggle" type="button"
                class="block py-2 pl-3 pr-4 mr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-700 md:p-0 dark:text-white md:dark:hover:text-purple-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
          <svg id="theme-toggle-dark-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
               xmlns="http://www.w3.org/2000/svg">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
          </svg>
          <svg id="theme-toggle-light-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
               xmlns="http://www.w3.org/2000/svg">
            <path
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                fill-rule="evenodd" clip-rule="evenodd"></path>
          </svg>
        </button>
        <UserAvatar v-show="menu.showUser"/>
      </div>
    </div>
  </nav>
</template>

<style scoped>

</style>

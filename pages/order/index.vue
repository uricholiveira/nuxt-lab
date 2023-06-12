<script setup lang="ts">

</script>

<template>
  <div class="container mx-auto pt-24 pb-24 dark:text-white">
    <div class="font-bold text-4xl">Seus pedidos</div>
    <div class="font-medium text-lg">Verifique o status de pedidos recentes, gerencie devoluções e descubra produtos
      semelhantes.
    </div>
    <div
        class="w-full mt-12 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div class="flex justify-around font-medium text-lg">
        <div>
          <div>Número do pedido:</div>
          <div class="text-center font-light">3</div>
        </div>
        <div>
          <div>Realizado em:</div>
          <div class="text-center font-light">12/06/2023</div>
        </div>
        <div class="pr-2">
          <div>Valor total:</div>
          <div class="text-center font-light">R$ 200,00</div>
        </div>
        <div>
          <button id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots"
                  class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  type="button">
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
            </svg>
          </button>
          <!-- Dropdown menu -->
          <div id="dropdownDots"
               class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconButton">
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Visualizar</a>
              </li>
            </ul>
            <div class="py-2">
              <a href="#"
                 class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Cancelar
                pedido</a>
            </div>
          </div>
        </div>
      </div>
      <hr class="mt-4 -mb-2 mx6">
      <div class="flex-row">
        <div>
          <div class="flex align-middle -mb-12">
            <div class="py-8">
              <img class="h-36 w-72 object-cover rounded-lg" src="/img/xbox.png" alt="image description">
            </div>
            <div class="pt-10 pl-6 w-full pr-6">
              <div class="flex justify-between font-bold text-xl">
                <div>Xbox Game Pass</div>
                <div>R$100</div>
              </div>
              <div class="font-medium text-lg">Pacote mensal</div>
            </div>
          </div>
          <div class="flex flex-nowrap justify-between pt-8">
            <div
                class="flex items-center bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-yellow-300 border border-yellow-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                   stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"/>
              </svg>
              <span class="pl-1">Em processamento</span>
            </div>
            <div>
              <div class="inline-flex rounded-md shadow-sm" role="group">
                <button type="button"
                        class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                  Ver produto
                </button>
                <button type="button"
                        class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                  Comprar novamente
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="flex align-middle -mb-12">
            <div class="py-8">
              <img class="h-36 w-72 object-cover rounded-lg" src="/img/valorant.png" alt="image description">
            </div>
            <div class="pt-10 pl-6 w-full pr-6">
              <div class="flex justify-between font-bold text-xl">
                <div>Valorant</div>
                <div>R$100</div>
              </div>
              <div class="font-medium text-lg">RP: 999999</div>
            </div>
          </div>
          <div class="flex flex-nowrap justify-between pt-8">

            <div
                class="flex items-center bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-yellow-300 border border-yellow-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                   stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"/>
              </svg>
              <span class="pl-1">Em processamento</span>
            </div>
            <div>
              <div class="inline-flex rounded-md shadow-sm" role="group">
                <button type="button"
                        class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                  Ver produto
                </button>
                <button type="button"
                        class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                  Comprar novamente
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
        class="w-full mt-12 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div class="flex justify-around font-medium text-lg">
        <div>
          <div>Número do pedido:</div>
          <div class="text-center font-light">2</div>
        </div>
        <div>
          <div>Realizado em:</div>
          <div class="text-center font-light">12/06/2023</div>
        </div>
        <div class="pr-2">
          <div>Valor total:</div>
          <div class="text-center font-light">R$ 200,00</div>
        </div>
        <div>
          <button id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots"
                  class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  type="button">
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
            </svg>
          </button>
          <!-- Dropdown menu -->
          <div id="dropdownDots"
               class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconButton">
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Visualizar</a>
              </li>
            </ul>
            <div class="py-2">
              <a href="#"
                 class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Cancelar
                pedido</a>
            </div>
          </div>
        </div>
      </div>
      <hr class="mt-4 -mb-2 mx6">
      <div class="flex-row">
        <div>
          <div class="flex align-middle -mb-12">
            <div class="py-8">
              <img class="h-36 w-72 object-cover rounded-lg" src="/img/steam.png" alt="image description">
            </div>
            <div class="pt-10 pl-6 w-full pr-6">
              <div class="flex justify-between font-bold text-xl">
                <div>Steam</div>
                <div>R$200</div>
              </div>
              <div class="font-medium text-lg">Crédito em carteira</div>
            </div>
          </div>
          <div class="flex flex-nowrap justify-between pt-8">
            <div
                class="flex items-center bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span class="pl-1">Entregue</span>
            </div>
            <div>
              <div class="inline-flex rounded-md shadow-sm" role="group">
                <button type="button"
                        class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                  Ver produto
                </button>
                <button type="button"
                        class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                  Comprar novamente
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
        class="w-full mt-12 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div class="flex justify-around font-medium text-lg">
        <div>
          <div>Número do pedido:</div>
          <div class="text-center font-light">1</div>
        </div>
        <div>
          <div>Realizado em:</div>
          <div class="text-center font-light">12/06/2023</div>
        </div>
        <div class="pr-2">
          <div>Valor total:</div>
          <div class="text-center font-light">R$ 200,00</div>
        </div>
        <div>
          <button id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots"
                  class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  type="button">
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
            </svg>
          </button>
          <!-- Dropdown menu -->
          <div id="dropdownDots"
               class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconButton">
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Visualizar</a>
              </li>
            </ul>
            <div class="py-2">
              <a href="#"
                 class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Cancelar
                pedido</a>
            </div>
          </div>
        </div>
      </div>
      <hr class="mt-4 -mb-2 mx6">
      <div class="flex-row">
        <div>
          <div class="flex align-middle -mb-12">
            <div class="py-8">
              <img class="h-36 w-72 object-cover rounded-lg" src="/img/steam.png" alt="image description">
            </div>
            <div class="pt-10 pl-6 w-full pr-6">
              <div class="flex justify-between font-bold text-xl">
                <div>Steam</div>
                <div>R$200</div>
              </div>
              <div class="font-medium text-lg">Crédito em carteira</div>
            </div>
          </div>
          <div class="flex flex-nowrap justify-between pt-8">
            <div
                class="flex items-center bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span class="pl-1">Cancelado</span>
            </div>
            <div>
              <div class="inline-flex rounded-md shadow-sm" role="group">
                <button type="button"
                        class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                  Ver produto
                </button>
                <button type="button"
                        class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                  Comprar novamente
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>

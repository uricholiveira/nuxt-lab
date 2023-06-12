<script setup lang="ts">

</script>

<template>
  <div class="dark:text-white">
    <div
        class="bg-gradient-to-b from-gray-50 dark:from-gray-950 via-purple-300 dark:via-purple-800 to-purple-400 dark:to-purple-600 w-full h-48"></div>
    <div class="flex justify-start">
      <div class="pl-6 -mt-16">
        <img class="shadow-xl w-52 h-52 rounded-full border-gray-50 dark:border-gray-950 border-8"
             src="/img/profile.png" alt="Rounded avatar">
      </div>
      <div class="pl-3 mt-4">
        <div class="font-bold text-3xl">Urich Oliveira</div>
        <div class="text-xl py-2">oliveira.urich@polygonstore.io</div>
      </div>
    </div>
    <div class="mb-4 border-b border-gray-200 dark:border-gray-700 px-6">
      <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
        <li class="mr-2" role="presentation">
          <button class="inline-block p-4 border-b-2 rounded-t-lg" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Perfil</button>
        </li>
        <li class="mr-2" role="presentation">
          <button class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Senha</button>
        </li>
        <li class="mr-2" role="presentation">
          <button class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Configurações</button>
        </li>
        <li role="presentation">
          <button class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="contacts-tab" data-tabs-target="#contacts" type="button" role="tab" aria-controls="contacts" aria-selected="false">Notificações</button>
        </li>
      </ul>
    </div>
    <div id="myTabContent" class="px-6">
      <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="profile" role="tabpanel" aria-labelledby="profile-tab">
        <div class="font-bold text-2xl">Detalhes da conta</div>

        <form class="py-8">
          <div class="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nome completo</label>
              <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Urich Oliveira" required>
            </div>
            <div>
              <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Número de celular</label>
              <input type="tel" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="(14) 91235-1203" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required>
            </div>
            <div>
              <label for="website" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">GitHub</label>
              <input type="url" id="website" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="github.com/uricholiveira" required>
            </div>
          </div>
          <div class="mb-6">
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
            <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="oliveira.urich@polygonstore.io" required>
          </div>

<!--          <div class="flex items-start mb-6">-->
<!--            <div class="flex items-center h-5">-->
<!--              <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required>-->
<!--            </div>-->
<!--            <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>-->
<!--          </div>-->
<!--          <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>-->
        </form>

      </div>
      <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
        <div class="font-semibold text-2xl">Senha</div>
        <div class="text-lg">Para trocar de senha, é necessário informar a senha atual, e confirmar o token recebido por SMS/Email</div>
        <form class="py-8">
          <div class="grid gap-6 mb-6">
            <div>
              <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Senha antiga</label>
              <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required>
            </div>
            <div>
              <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nova senha</label>
              <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required>
            </div>
            <div>
              <label for="website" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirmação da nova senha</label>
              <input type="password" id="password-confirmation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required>
            </div>
            <div class="text-center">
              <button type="button"
                      class="dark:hover:ring-purple-400 hover:ring-purple-700 hover:ring-1 font-semibold bg-gradient-to-r from-blue-700 via-purple-600 to-purple-400 text-white rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                <NuxtLink to="/signin">
                  Solicitar alteração
                </NuxtLink>
              </button>
            </div>
          </div>
          <div class="mb-6">
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Token de confirmação (SMS/Email)</label>
            <input type="email" id="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="R30XA2" required>
            <p id="helper-text-explanation" class="mt-2 text-sm text-gray-500 dark:text-gray-400">We’ll never share your details. Read our <a href="#" class="font-medium text-blue-600 hover:underline dark:text-blue-500">Privacy Policy</a>.</p>
          </div>
          <div class="text-center">
            <button type="button"
                    class="dark:hover:ring-purple-400 hover:ring-purple-700 hover:ring-1 font-semibold bg-gradient-to-r from-blue-700 via-purple-600 to-purple-400 text-white rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
              <NuxtLink to="/signin">
                Confirmar
              </NuxtLink>
            </button>
          </div>

          <!--          <div class="flex items-start mb-6">-->
          <!--            <div class="flex items-center h-5">-->
          <!--              <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required>-->
          <!--            </div>-->
          <!--            <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>-->
          <!--          </div>-->
          <!--          <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>-->
        </form>

      </div>
      <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="settings" role="tabpanel" aria-labelledby="settings-tab">
        <p class="text-sm text-gray-500 dark:text-gray-400">Página em manutenção</p>
      </div>
      <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="contacts" role="tabpanel" aria-labelledby="contacts-tab">
        <div class="font-semibold text-2xl">Notificações</div>
        <div class="text-lg">...</div>
        <ul class="w-full divide-y divide-gray-200 dark:divide-gray-700 pt-8">
          <li class="pb-3 sm:pb-4">
            <div class="flex items-center space-x-4">
              <div class="flex-shrink-0 text-yellow-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"/>
                </svg>
              </div>
              <div class="flex-1 flex-wrap">
                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Pedido: #3
                </p>
                <div class="text-sm text-gray-500 truncate dark:text-gray-400">
                  <p>Item #1: Em processamento...</p>
                  <p>Item #2: Em processamento...</p>
                </div>
              </div>
              <div class="pt-4 items-center text-base font-semibold text-gray-900 dark:text-white">
                <button type="button"
                        class="dark:hover:ring-purple-400 hover:ring-purple-700 hover:ring-1 font-semibold bg-gradient-to-r from-blue-700 via-purple-600 to-purple-400 text-white rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                  Marcar como lido
                </button>
              </div>
            </div>
          </li>
          <li class="pb-3 sm:pb-4">
            <div class="flex items-center space-x-4">
              <div class="flex-shrink-0 text-green-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div class="flex-1">
                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Pedido: #2
                </p>
                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                  Item #1: Entregue com sucesso!
                </p>
              </div>
              <div class="pt-4 items-center text-base font-semibold text-gray-900 dark:text-white">
                <button type="button"
                        class="dark:hover:ring-purple-400 hover:ring-purple-700 hover:ring-1 font-semibold bg-gradient-to-r from-blue-700 via-purple-600 to-purple-400 text-white rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                  Marcar como lido
                </button>
              </div>
            </div>
          </li>
          <li class="pb-3 sm:pb-4">
            <div class="flex items-center space-x-4">
              <div class="flex-shrink-0 text-red-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div class="flex-1">
                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Pedido: #1
                </p>
                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                  Item #1: Cancelado
                </p>
              </div>
              <div class="pt-4 items-center text-base font-semibold text-gray-900 dark:text-white">
                <button type="button"
                        class="dark:hover:ring-purple-400 hover:ring-purple-700 hover:ring-1 font-semibold bg-gradient-to-r from-blue-700 via-purple-600 to-purple-400 text-white rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                    Marcar como lido
                </button>
              </div>
            </div>
          </li>
          <li class="pb-3 sm:pb-4">
            <div class="flex items-center space-x-4">
              <div class="flex-shrink-0 text-yellow-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"/>
                </svg>
              </div>
              <div class="flex-1">
                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Pedido: #1
                </p>
                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                  Item #1: Em processamento...
                </p>
              </div>
              <div class="pt-4 items-center text-base font-semibold text-gray-900 dark:text-white">
                <button type="button"
                        class="dark:hover:ring-purple-400 hover:ring-purple-700 hover:ring-1 font-semibold bg-gradient-to-r from-blue-700 via-purple-600 to-purple-400 text-white rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                    Marcar como lido
                </button>
              </div>
            </div>
          </li>
        </ul>

      </div>
    </div>

  </div>
</template>

<style scoped>

</style>

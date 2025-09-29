<script setup>
import logo from '@/assets/images/default-logo.png'
import { ref } from 'vue'

// Accès à la route courante
import { useRoute } from 'vue-router'
const route = useRoute()

// Variable d'état pour le controle du menu mobile
const isActive = ref(false)

// Fonction pour ouvrir et fermer le menu mobile
function toggleMenu() {
  isActive.value = !isActive.value
}
</script>

<template>

  <div class="border-b-[2px] border-app-gray fixed top-0 w-full !z-50 bg-app-principal">
    <div class="px-4 md:px-10 lg:px-16 max-w-7xl mx-auto py-2">
      <div class="flex flex-col lg:flex-row lg:justify-between lg:items-center py-2 lg:py-4">

        <div class="flex items-center justify-between lg:pb-0">

          <router-link :to="{ name: 'frontend.welcome' }">
            <img :src="logo" alt="App Logo" class="h-6 md:h-8 w-auto object-contain object-center translate-x-2">
          </router-link>

          <div class="flex lg:hidden">
            <button class="flex items-center bg-app-secondary p-2 rounded-[10px]" @click="toggleMenu">
              <Icon v-if="!isActive" icon="heroicons-solid:menu-alt-3" class="size-6 text-white" />
              <Icon v-else icon="mingcute:close-fill" class="size-6 text-white" />
            </button>
          </div>

        </div>

        <div :class="[isActive ? 'block pt-5' : 'hidden', 'lg:block']" class="lg:w-full">

          <div class="relative flex flex-col h-screen lg:h-auto  lg:flex-row lg:items-center  space-y-4 lg:space-y-0 space-x-0 lg:space-x-6  border-t-4 lg:border-t-0 pt-5 lg:pt-0  text-white">

            <div class="flex flex-col lg:flex-row lg:items-center lg:justify-center space-y-4 lg:space-y-0 lg:space-x-6 lg:w-full">

              <div>
                <router-link
                  :to="{ name: 'frontend.welcome' }"
                  :class=" route.name === 'frontend.welcome' ? 'font-semibold' : '' "
                  class=" flex items-center space-x-2 text-white text-sm hover:font-semibold transition-all duration-500 ease-in-out p-2.5 text-nowrap"
                >
                  <span>Products</span>
                  <Icon icon="heroicons-solid:chevron-down" class="size-4" />
                </router-link>
              </div>

              <div>
                <router-link
                  :to="{ name: 'frontend.welcome' }"
                  :class=" route.name === 'frontend.welcome' ? 'font-semibold' : '' "
                  class=" text-white text-sm hover:font-semibold transition-all duration-500 ease-in-out p-2.5 text-nowrap"
                >
                  Beneficts
                </router-link>
              </div>

              <div>
                <router-link
                  :to="{ name: 'frontend.welcome' }"
                  :class=" route.name === 'frontend.welcome' ? 'font-semibold' : '' "
                  class=" text-sm hover:font-semibold transition-all duration-500 ease-in-out p-2.5 text-nowrap"
                >
                  How it Works
                </router-link>
              </div>

              <div>
                <router-link
                  :to="{ name: 'frontend.welcome' }"
                  :class=" route.name === 'frontend.welcome' ? 'font-semibold' : '' "
                  class=" text-sm hover:font-semibold transition-all duration-500 ease-in-out p-2.5 text-nowrap"
                >
                  Pricing
                </router-link>
              </div>

              <div>
                <router-link
                  :to="{ name: 'frontend.welcome' }"
                  :class=" route.name === 'frontend.welcome' ? 'font-semibold' : '' "
                  class=" flex space-x-2 items-center text-sm hover:font-semibold transition-all duration-500 ease-in-out p-2.5 text-nowrap"
                >
                  <span>Company</span>
                  <Icon icon="heroicons-solid:chevron-down" class="size-4" />
                </router-link>
              </div>

            </div>

            <div class="flex flex-col lg:flex-row lg:items-center lg:justify-end space-y-4 lg:space-y-0 lg:space-x-4">
              <div>
                <router-link
                    :to="{ name: 'frontend.welcome' }"
                    :class=" route.name === 'frontend.welcome' ? 'font-semibold' : '' "
                    class=" text-white text-sm hover:font-semibold transition-all duration-500 ease-in-out p-2.5 text-nowrap"
                >
                  Login
                </router-link>
              </div>

              <div>
                <a href="#" class=" text-sm hover:font-semibold transition-all duration-500 ease-in-out p-3 text-nowrap bg-app-secondary rounded-full font-semibold">
                  Get Demo
                </a>
              </div>
            </div>

          </div>

        </div>


      </div>
    </div>
  </div>
</template>

<script>
</script>

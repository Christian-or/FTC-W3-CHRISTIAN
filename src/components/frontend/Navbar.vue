<script setup>
import logo from '@/assets/images/default-logo.png'
import {computed, ref} from 'vue'

// Accès à la route courante
import { useRoute } from 'vue-router'
const route = useRoute()

// Variable d'état pour le controle du menu mobile
const isActive = ref(false)

// Fonction pour ouvrir et fermer le menu mobile
function toggleMenu() {
  isActive.value = !isActive.value
}

const country = ref({ label: 'BEN', value: 'BEN', flag: 'https://flagcdn.com/w40/bj.png' }); // code sélectionné: 'BEN' ou null

const countryOptions = [
  { label: 'BEN', value: 'BEN', flag: 'https://flagcdn.com/w40/bj.png' },
  { label: 'USA', value: 'USA', flag: 'https://flagcdn.com/w40/us.png' },
  { label: 'VNM', value: 'VNM', flag: 'https://flagcdn.com/w40/vn.png' },
  { label: 'FRA', value: 'FRA', flag: 'https://flagcdn.com/w40/fr.png' },
  { label: 'AUS', value: 'AUS', flag: 'https://flagcdn.com/w40/au.png' }
];

const selectedCountry = computed(() =>
    countryOptions.find(c => c.value === country.value) || null
);


</script>

<template>

  <div class="fixed top-0 w-full !z-50 bg-app-secondaryLight">
    <div class="px-4 md:px-10 lg:px-16 max-w-7xl mx-auto py-2">
      <div class="flex flex-col lg:flex-row lg:justify-between lg:items-center py-2 lg:py-4">

        <div class="flex items-center justify-between lg:pb-0">

          <router-link :to="{ name: 'frontend.welcome' }">
            <img src="@/assets/images/logo.png" alt="App Logo" class="h-8 md:h-8 w-auto object-contain object-center ">
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

            <div class="flex flex-col lg:flex-row lg:items-center lg:justify-center space-y-4 lg:space-y-0 lg:space-x-4 lg:w-full text-app-principal">

              <div>
                <router-link
                  :to="{ name: 'frontend.welcome' }"
                  :class=" route.name === 'frontend.welcome' ? 'font-semibold' : '' "
                  class=" flex items-center space-x-2 text-sm hover:font-semibold transition-all duration-500 ease-in-out p-2.5 text-nowrap"
                >
                  <span>Home</span>
                </router-link>
              </div>

              <div>
                <router-link
                  :to="{ name: 'frontend.welcome' }"
                  :class=" route.name === 'frontend.welcome' ? 'font-semibold' : '' "
                  class="text-sm hover:font-semibold transition-all duration-500 ease-in-out p-2.5 text-nowrap"
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
                  Category
                </router-link>
              </div>

              <div>
                <router-link
                  :to="{ name: 'frontend.welcome' }"
                  :class=" route.name === 'frontend.welcome' ? 'font-semibold' : '' "
                  class=" text-sm hover:font-semibold transition-all duration-500 ease-in-out p-2.5 text-nowrap"
                >
                  About
                </router-link>
              </div>

              <div>
                <router-link
                  :to="{ name: 'frontend.welcome' }"
                  :class=" route.name === 'frontend.welcome' ? 'font-semibold' : '' "
                  class=" flex space-x-2 items-center text-sm hover:font-semibold transition-all duration-500 ease-in-out p-2.5 text-nowrap"
                >
                  <span>Contact</span>
                </router-link>
              </div>

              <div class="flex items-center space-x-2 relative">
                <Icon icon="mynaui:search" class="size-6 text-app-principal absolute left-4 "/>
                <input type="search" placeholder="Search something here!" class="px-4 py-2.5 ps-10 bg-white rounded-full w-64 text-sm">
              </div>

              <div>
                <a href="#" class="px-4 py-2.5 text-sm hover:font-semibold transition-all text-white duration-500 ease-in-out text-nowrap bg-app-principal hover:bg-app-principalLight rounded-full font-bold">
                  Join the community
                </a>
              </div>

              <Select
                  v-model="country"
                  :options="countryOptions"
                  optionLabel="label"
                  optionValue="value"
                  placeholder="pays"
                  class="!w-32 !rounded-none !border-none !bg-transparent !shadow-none !py-1"
              >

                <!-- Template personnalisé pour la valeur sélectionnée -->
                <template #value="slotProps">
                  <div v-if="selectedCountry" class="flex items-center  gap-2">
                    <img :src="selectedCountry.flag" class="w-4 h-4 rounded-full object-cover" />
                    <div class="">{{ selectedCountry.label }}</div>
                  </div>
                  <span v-else>{{ slotProps.placeholder }}</span>
                </template>

                <!-- Template personnalisé pour les options -->
                <template #option="slotProps">
                  <div class="flex items-center gap-2">
                    <img
                        :src="slotProps.option.flag"
                        alt=""
                        class="w-4 h-4 rounded-full object-cover object-center"
                    />
                    <span>{{ slotProps.option.label }}</span>
                  </div>
                </template>

                <!-- Template personnalisé pour l'icône de la liste déroulante -->
                <template #dropdownicon>
                  <Icon icon="heroicons-solid:chevron-down" class="size-4" />
                </template>

              </Select>

            </div>

          </div>

        </div>



      </div>
    </div>
  </div>
</template>

<script>
</script>


<!-- Old
<div class="flex flex-col lg:flex-row lg:items-center lg:justify-end space-y-4 lg:space-y-0 lg:space-x-4 hidden">
  <div class="flex items-center space-x-2 relative">
    <Icon icon="mynaui:search" class="size-6 text-app-principal absolute left-4"/>
    <input type="search" placeholder="Search something here!" class="p-2 ps-10 bg-white rounded-full">
  </div>

  <div>
    <a href="#" class="px-4 py-3 text-sm hover:font-semibold transition-all duration-500 ease-in-out text-nowrap bg-app-principal hover:bg-app-principalLight rounded-full font-bold">
      Join the community
    </a>
  </div>
</div>

<Select
    v-model="country"
    :options="countryOptions"
    optionLabel="label"
    optionValue="value"
    placeholder="pays"
    class="!w-full !rounded-none !border-none !bg-transparent !shadow-none !py-1 !hidden"
>

  <template #value="slotProps">
    <div v-if="selectedCountry" class="flex items-center  gap-2">
      <img :src="selectedCountry.flag" class="w-4 h-4 rounded-full object-cover" />
      <div class="">{{ selectedCountry.label }}</div>
    </div>
    <span v-else>{{ slotProps.placeholder }}</span>
  </template>

  <template #option="slotProps">
    <div class="flex items-center gap-2">
      <img
          :src="slotProps.option.flag"
          alt=""
          class="w-4 h-4 rounded-full object-cover object-center"
      />
      <span>{{ slotProps.option.label }}</span>
    </div>
  </template>

  <template #dropdownicon>
    <Icon icon="heroicons-solid:chevron-down" class="size-4" />
  </template>

</Select>
-->
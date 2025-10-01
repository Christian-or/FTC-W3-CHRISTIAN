<script setup>

import {Icon} from "@iconify/vue";
</script>

<template>

  <div class="bg-app-secondaryLight rounded-t-[40px] py-10 lg:py-20">

    <div class="px-4 md:px-10 lg:px-16 max-w-7xl mx-auto py-2 w-full">

      <div class="pb-10">

        <div class="bg-app-principal p-5 lg:p-10 rounded-[16px] flex flex-col lg:flex-row space-y-4 lg:space-y-0 justify-between items-center">

          <div class="">
            <h2 class="text-white font-bold text-xl capitalize leading-[1.4]">Register now so you don't miss our programs</h2>
          </div>

          <div class="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0 lg:space-x-4 bg-white rounded-[14px] p-5 lg:p-5 h-full w-full lg:w-2/3">
            <input type="email" placeholder="Enter your email" class="px-4 py-4 bg-white border-[1px] rounded-[8px] w-full focus:outline-none border-gray-300">
            <input type="submit" value="Subscribe Now" class="w-full lg:w-auto px-4 py-4 font-bold  text-sm bg-app-principal text-white rounded-[8px] cursor-pointer hover:bg-app-principalLight duration-300 transition-all ease-in-out">
          </div>

        </div>

      </div>

      <div class="flex flex-col lg:flex-row justify-between items-center w-full pb-10 space-y-8 lg:space-y-0">

        <div class="flex flex-row justify-between items-center space-x-8 md:space-x-24 lg:space-x-16 font-medium text-black text-sm">
          <a href="#" class="hover:underline transition-all duration-300 ease-in-out">Home </a>
          <a href="#" class="hover:underline transition-all duration-300 ease-in-out">Category</a>
          <a href="#" class="hover:underline transition-all duration-300 ease-in-out">About</a>
          <a href="#" class="hover:underline transition-all duration-300 ease-in-out">Contact</a>
        </div>

        <div class="flex flex-row justify-between items-center space-x-6">
          <a href="#"> <Icon icon="fa6-brands:facebook" class="size-8 lg:size-5 text-black "/> </a>
          <a href="#"> <Icon icon="grommet-icons:twitter" class="size-8 lg:size-5 text-black "/> </a>
          <a href="#"> <Icon icon="formkit:instagram" class="size-8 lg:size-5 text-black"/> </a>
          <a href="#"> <Icon icon="tdesign:logo-youtube-filled" class="size-8 lg:size-5 text-black"/> </a>
        </div>

      </div>

      <div class="bg-[#CCD1D2] w-full h-[2px]"></div>

      <div class="flex flex-col lg:flex-row justify-between items-center w-full lg:pt-10 space-y-10 lg:space-y-0">

        <p class="text-sm hidden lg:block">© 2022 Monito. All rights reserved.</p>

        <img src="@/assets/images/logo.png" alt="Logo" class="h-10 w-auto">

        <div class="flex flex-row justify-between items-center font-medium text-sm space-x-6 ">
          <a href="#" class="hover:underline transition-all duration-300 ease-in-out"> Terms of Service </a>
          <a href="#" class="hover:underline transition-all duration-300 ease-in-out"> Privacy Policy </a>
        </div>

        <p class="text-sm lg:hidden">© 2022 Monito. All rights reserved.</p>

      </div>

    </div>

  </div>

</template>

<style>

</style>

<script setup>

</script>

<template>

  <div class="px-4 md:px-10 lg:px-16 max-w-7xl mx-auto py-2">

    <div class="py-10 lg:py-20">

      <div class="bg-[#FFB775] p-5 lg:p-10 rounded-[20px] flex flex-col lg:flex-row justify-between items-center ">

        <div>

          <div class="flex items-center space-x-2 ">
            <h2 class="font-extrabold text-app-principal text-4xl"> Adoption </h2>
            <img src="@/assets/images/icon_adoption.png" alt="" class="h-8">
          </div>

          <h2 class="font-bold text-app-principal text-4xl"> We need help. so do they. </h2>

          <p class="text-app-neutral80 text-xs">
            Adopt a pet and give it a home, <br>
            it will be love you back unconditionally.
          </p>

        </div>

        </div>

    </div>

    <div class="py-10 lg:py-20">

      <div class="flex justify-between items-center pb-10">

        <div class="flex flex-col space-y-2">
          <h3 class="text-base font-medium text-black"> You already know ?  </h3>
          <h2 class="text-xl font-bold text-app-principal"> Useful pet knowledge </h2>
        </div>

        <div class="hidden lg:block">
          <a href="#" class="flex items-center text-base space-x-3 px-6 py-3 rounded-full border border-app-principal text-app-principal hover:bg-app-principal hover:!text-white transition-all duration-300 ease-in-out hover:border-none">
            <span class="font-medium"> View more </span>
            <Icon icon="heroicons-solid:chevron-right" class="size-5" />
          </a>
        </div>

      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

        <div class="bg-white shadow-xl p-2.5 rounded-[12px] flex flex-col justify-between gap-2.5 cursor-pointer w-full hover:shadow-xl hover:scale-[1.01] transition-all duration-300 ease-in-out ">
          <img src="@/assets/images/img_chat1.png" alt="Image" class="object-cover object-center rounded-[10px]">
          <div>
            <span class="bg-app-blue px-2.5 py-2 rounded-full text-white text-xs font-bold"> Pet knowledge </span>
          </div>
          <h2 class="text-base font-bold text-app-neutral80"> What is a Pomeranian? How to Identify Pomeranian Dogs </h2>
          <p class="text-base pb-2.5">
            The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circu...
          </p>
        </div>

        <div class="bg-white shadow-xl p-2.5 rounded-[12px] flex flex-col justify-between gap-2.5 cursor-pointer w-full hover:shadow-xl hover:scale-[1.01] transition-all duration-300 ease-in-out ">
          <img src="@/assets/images/img_chat2.png" alt="Image" class="object-cover object-center rounded-[10px]">
          <div>
            <span class="bg-app-blue px-2.5 py-2 rounded-full text-white text-xs font-bold"> Pet knowledge </span>
          </div>
          <h2 class="text-base font-bold text-app-neutral80"> Dog Diet You Need To Know </h2>
          <p class="text-base pb-2.5">
            Dividing a dog's diet may seem simple at first, but there are some rules you should know so that your dog can easily absorb the nutrients in the diet. For those who are just starting to raise dogs, especially...
          </p>
        </div>

        <div class="bg-white shadow-xl p-2.5 rounded-[12px] flex flex-col justify-between gap-2.5 cursor-pointer w-full hover:shadow-xl hover:scale-[1.01] transition-all duration-300 ease-in-out ">
          <img src="@/assets/images/img_chat3.png" alt="Image" class="object-cover object-center rounded-[10px]">
          <div>
            <span class="bg-app-blue px-2.5 py-2 rounded-full text-white text-xs font-bold"> Pet knowledge </span>
          </div>
          <h2 class="text-base font-bold text-app-neutral80"> Why Dogs Bite and Destroy Furniture and How to Prevent It Effectively </h2>
          <p class="text-base pb-2.5">
            Dog bites are common during development. However, no one wants to see their furniture or important items being bitten by a dog.
          </p>
        </div>

      </div>

      <div class="lg:hidden">
        <a href="#" class="mt-10 flex justify-center items-center text-base space-x-3 px-6 py-3 rounded-full border border-app-principal text-app-principal hover:bg-app-principal hover:!text-white transition-all duration-300 ease-in-out hover:border-none">
          <span class="font-medium"> View more </span>
          <Icon icon="heroicons-solid:chevron-right" class="size-5" />
        </a>
      </div>

    </div>

  </div>

</template>

<style>

</style>

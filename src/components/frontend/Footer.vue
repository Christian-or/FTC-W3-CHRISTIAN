<script setup>
import logo from '@/assets/images/img_logo_footer.png'
</script>

<template>

  <footer>
    <section class="py-8 md:py-10 sm:pt-16 lg:pt-24 bg-white text-app-grayText">
      <div data-aos="fade-up" class="px-4 md:px-10 lg:px-16 max-w-7xl mx-auto">

        <div class="grid grid-cols-2 lg:grid-cols-6 gap-5 md:gap-x-10 md:mb-10">

          <div class="col-span-2">
            <img :src="logo" alt="" class="h-8 w-auto mb-2.5">
            <div class="w-1/2 text-sm">
              Data visualization, and expense management for your business.
            </div>
          </div>

          <div class="col-span-1">
            <h2 class="text-base font-semibold text-black mb-4">Product</h2>
            <div class="flex flex-col space-y-4 opacity-80  text-sm">
              <a href="#"> Digital Invoice </a>
              <a href="#"> Insight </a>
              <a href="#"> Reimbursements </a>
              <a href="#"> Virtual Assistant </a>
              <a href="#"> Artificial Intelligence </a>
            </div>
          </div>

          <div class="col-span-1">
            <h2 class="text-base font-semibold text-black mb-4">Company</h2>
            <div class="flex flex-col space-y-4 opacity-80  text-sm">
              <a href="#"> About Us </a>
              <a href="#"> Newsletters </a>
              <a href="#"> Our Partners </a>
              <a href="#"> Career </a>
              <a href="#"> Contact Us </a>
            </div>
          </div>

          <div class="col-span-1">
            <h2 class="text-base font-semibold text-black mb-4">Ressources</h2>
            <div class="flex flex-col space-y-4 opacity-80  text-sm">
              <a href="#"> Blog </a>
              <a href="#"> Pricing </a>
              <a href="#"> FAQ </a>
              <a href="#"> Events </a>
              <a href="#"> Ebook & Guide </a>
            </div>
          </div>

          <div class="col-span-1">
            <h2 class="text-base font-semibold text-black mb-4">Follow Us</h2>
            <div class="flex flex-col space-y-4 opacity-80  text-sm">
              <a href="#"> LinkedIn </a>
              <a href="#"> Twitter </a>
              <a href="#"> Instagram </a>
              <a href="#"> Facebook </a>
              <a href="#"> YouTube </a>
            </div>
          </div>

        </div>

        <div class=" h-[1px] my-10 text-[#CEBEFE] bg-[#CEBEFE]"></div>

        <div class="flex flex-col md:flex-row md:justify-between md:items-center space-y-6 md:space-y-0">
          <div class="flex flex-col md:flex-row md:items-center text-sm text-black md:divide-x-4 md:divide-black md:space-x-8  space-y-6 md:space-y-0 font-semibold">
            <a class="" href="#">Privacy Policy </a>
            <a class="md:pl-8" href="#">Terms & Conditions </a>
            <a class="md:pl-8" href="#">Cookies Policy </a>
          </div>

          <div>
            <div class="text-sm opacity-50 order-2 md:order-1 md:mt-0 mt-4 font-semibold">© Picko Lab {{ new Date().getFullYear() - 3 }} </div>
          </div>
        </div>

        <div class="text-xs mt-10 flex flex-col text-center md:text-left">
          <h3>#Figmatocodechallenge3 by Christian K. ASSOGBA</h3>
        </div>

      </div>
    </section>

  </footer>
</template>

<script>
</script>

<template>
  <div
    class="w-full h-screen flex flex-col items-center justify-center gap-y-16"
  >
    <div class="flex justify-center">
      <img src="/images/logo.png" class="w-3/6" />
    </div>
    <div class="flex flex-col gap-y-4">
      <NuxtLink
        to="/Auth/login?type=shipper"
        class="inline-block text-center px-16 md:px-28 py-3 md:py-4 md:text-base text-sm bg-primary text-white rounded-xl"
      >
        صاحب بار هستم
      </NuxtLink>

      <NuxtLink
        to="/Auth/login?type=driver"
        class="inline-block text-center px-16 md:px-28 py-3 md:py-4 md:text-base text-sm bg-primary text-white rounded-xl"
      >
        راننده هستم
      </NuxtLink>
    </div>
  </div>
</template>

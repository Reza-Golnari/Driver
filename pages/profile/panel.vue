<template>
  <div class="relative md:w-2/3 max-h-screen rtl">
    <div
      class="flex flex-col items-center justify-center h-screen overflow-y-scroll"
    >
      <div class="md:px-4 py-4 pb-24 w-full rounded-lg overflow-y-scroll">
        <div class="flex justify-between items-center mb-4">
          <NuxtLink
            to="/profile"
            class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"
          >
            <img
              class="aspect-square h-full w-full"
              alt="Profile picture"
              src="/images/profile.jpg"
            />
          </NuxtLink>
          <div class="text-3xl flex items-center gap-x-2">
            <NuxtLink to="/">
              <IconsAlert />
            </NuxtLink>
            <NuxtLink to="/">
              <IconsWindow />
            </NuxtLink>
          </div>
        </div>
        <div class="mb-4 space-y-2">
          <h1 class="text-lg font-semibold text-gray-900 rtl text-right">
            سلام مجتبی غریب رضا یزدی خوش آمدید
          </h1>
          <p class="text-gray-600 text-right">امروز بار کجا میخای؟</p>
        </div>
        <div>
          <div class="relative">
            <img
              alt="Desert landscape"
              class="w-full h-48 object-cover rounded-lg"
              height="200"
              src="/images/truck.png"
              width="350"
              style="aspect-ratio: 350 / 200; object-fit: cover"
            />
            <div
              class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent rounded-b-lg"
            >
              <h2 class="text-white font-semibold text-right">
                اولین اکوسیستم حمل و نقلی برتر کشور !
              </h2>
              <p class="text-right">ما با واسطه ها میانه ای نداریم!</p>
            </div>
            <div
              class="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1"
            >
              <div class="h-2 w-2 bg-white rounded-full"></div>
              <div class="h-2 w-2 bg-white rounded-full"></div>
              <div class="h-2 w-2 bg-white rounded-full"></div>
              <div class="h-2 w-2 bg-red-500 rounded-full"></div>
            </div>
          </div>
        </div>
        <div
          v-if="isAuth"
          class="bg-secondary text-white text-xl flex items-center justify-center flex-col my-3 px-3 py-5 rounded-lg"
        >
          <p class="" dir="rtl">
            <span>167</span>
            بار
          </p>
          <p>نزدیک شماست</p>
          <NuxtLink
            to="/"
            class="mt-3 py-3 px-20 rounded-lg bg-white text-base text-secondary font-bold"
            >شروع به کار</NuxtLink
          >
        </div>
        <p
          class="p-4 my-3 rounded-md text-xs bg-primary text-white"
          dir="rtl"
          v-else
        >
          پیام سیستم : احراز هویت شما در دست تایید می‌باشد!
        </p>
        <div>
          <div data-v0-t="card" class="space-y-3">
            <NuxtLink
              :to="isAuth ? '/' : ''"
              class="flex items-center justify-between w-full p-4 bg-white rounded-md shadow"
              :class="{ 'bg-gray-300': !isAuth }"
              dir="rtl"
            >
              <img src="~/assets/icons/nearbyIcon.svg" class="w-10" />
              <div>
                <h6 class="font-bold text-black/90">اطراف من</h6>
                <p class="text-sm">بارهای اطراف خود را مشاهده کنید</p>
              </div>
              <IconsForwardArrow />
            </NuxtLink>
            <NuxtLink
              :to="isAuth ? '/' : ''"
              class="flex items-center justify-between w-full p-4 bg-white rounded-md shadow"
              :class="{ 'bg-gray-300': !isAuth }"
              dir="rtl"
            >
              <img src="~/assets/icons/search-advertiesment.svg" class="w-10" />
              <div>
                <h6 class="font-bold text-black/90">جستجوی بار</h6>
                <p class="text-sm">بارهای اطراف خود را مشاهده کنید</p>
              </div>
              <IconsForwardArrow />
            </NuxtLink>
            <NuxtLink
              :to="isAuth ? '/' : ''"
              class="flex items-center justify-between w-full p-4 bg-white rounded-md shadow"
              :class="{ 'bg-gray-300': !isAuth }"
              dir="rtl"
            >
              <img src="~/assets/icons/driver-history.svg" class="w-10" />
              <div>
                <h6 class="font-bold text-black/90">تاریخچه بارهای من</h6>
                <p class="text-sm">بارهای اطراف خود را مشاهده کنید</p>
              </div>
              <IconsForwardArrow />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <div
      class="absolute bottom-2 left-0 md:left-4 md:right-4 right-0 bg-white py-2 shadow-md rounded-md"
    >
      <nav
        class="flex items-center justify-between text-black/40 text-3xl max-h-14 px-4 py-6"
      >
        <NuxtLink to="/" class="text-black p-2 md:p-3">
          <IconsHome />
        </NuxtLink>
        <NuxtLink to="/" class="p-2 md:p-3">
          <IconsHistory />
        </NuxtLink>
        <NuxtLink to="/" class="navLink-active p-2 md:p-3">
          <IconsLocation />
        </NuxtLink>
        <NuxtLink to="/" class="p-2 md:p-3">
          <IconsPerson />
        </NuxtLink>
        <NuxtLink to="/" class="p-2 md:p-3">
          <IconsHeadphone />
        </NuxtLink>
      </nav>
    </div>
  </div>
</template>

<script setup>
const isAuth = ref(true);
</script>

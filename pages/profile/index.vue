<template>
  <div class="relative md:w-2/3  overflow-x-hidden">
    <div
      class="fixed top-0 left-0 w-screen h-screen bg-black/30 z-40"
      v-if="showMenu"
      @click="showMenu = false"
    />
    <KeepAlive>
      <transition name="menu">
        <SectionsMenu v-if="showMenu" />
      </transition>
    </KeepAlive>
    <div
      class="flex flex-col items-center justify-center h-screen overflow-y-scroll"
    >
      <div class="md:px-4 py-4 pb-24 w-full rounded-lg overflow-y-scroll">
        <div class="flex justify-between items-center mb-4">
          <NuxtLink
            to="/profile/panel"
            class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"
          >
            <img
              class="aspect-square h-full w-full"
              alt="Profile picture"
              v-if="authStore.user && authStore.user.profile_image"
              :src="authStore.user.profile_image"
            />
            <img
              class="aspect-square h-full w-full"
              alt="Profile picture"
              src="/images/profile.jpg"
              v-if="authStore.user && !authStore.user.profile_image"
            />
          </NuxtLink>
          <div class="text-3xl flex items-center gap-x-2">
            <NuxtLink to="/">
              <IconsAlert />
            </NuxtLink>
            <NuxtLink class="cursor-pointer" @click="showMenu = true">
              <IconsWindow />
            </NuxtLink>
          </div>
        </div>
        <div class="mb-4 space-y-2">
          <h1
            class="text-lg font-semibold text-gray-900 rtl text-right"
            dir="rtl"
          >
            سلام {{ authStore.user?.full_name }} خوش آمدید
          </h1>
          <p class="text-gray-600 text-right">{{authStore.userRole === 'driver' ? "امروز بار کجا میخای؟" : 'برای اعلام باری آماده ای؟'}}</p>
        </div>
        <div>
          <div class="relative w-full">
            <swiper class="w-full" :modules="[SwiperAutoplay]" :slides-per-view="1" :autoplay="{
      delay: 2000,
      disableOnInteraction: true,
    }">
              <swiper-slide>
                <img src="/images/profile-slider/truck.png" class="rounded-lg">
              </swiper-slide>
              <swiper-slide>
                <img src="/images/profile-slider/slide-2.jpg" class="rounded-lg">
              </swiper-slide>
              <swiper-slide>
                <img src="/images/profile-slider/slide-3.jpg" class="rounded-lg">
              </swiper-slide>
            <div
              class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent rounded-b-lg z-20 text-white"
            >
              <h2 class="font-semibold text-right" dir="rtl">
                اولین اکوسیستم حمل و نقلی برتر کشور !
              </h2>
              <p class="text-right" dir="rtl">ما با واسطه ها میانه ای نداریم!</p>
            </div>
            </swiper>
          </div>
        </div>
        <div
          v-if="isAuth && authStore.userRole === 'driver'"
          class="bg-secondary text-white text-xl flex items-center justify-center flex-col my-3 px-3 py-5 rounded-lg"
        >
          <p class="" dir="rtl">
            <span>{{authStore.barNumber}}</span>
            بار
          </p>
          <p>نزدیک شماست</p>
          <NuxtLink
            to="/profile/map"
            class="mt-3 py-3 px-20 rounded-lg bg-white text-base text-secondary font-bold"
            >شروع به کار</NuxtLink
          >
        </div>
        <div
            v-else-if="isAuth && authStore.userRole === 'shipper'"
            class="bg-secondary text-white text-xl flex items-center justify-center flex-col my-3 px-3 py-5 rounded-lg"
        >
          <p class="" dir="rtl">
            <span>{{authStore.barNumber}}</span>
            بار
          </p>
          <p>اعلام کرده اید</p>
        </div>
        <p
          class="p-4 my-3 rounded-md text-xs bg-primary text-white"
          dir="rtl"
          v-else
        >
          پیام سیستم : احراز هویت شما در دست تایید می‌باشد!
        </p>
        <div v-if="authStore.userRole !== 'driver'">
          <div data-v0-t="card" class="space-y-3">
            <NuxtLink
              :to="isAuth ? '/profile/map' : ''"
              class="flex items-center justify-between w-full p-4 pl-2 rounded-md shadow gap-x-3"
              :class="[{ 'bg-gray-300': !isAuth }, { 'bg-white': isAuth }]"
              dir="rtl"
            >
              <img src="~/assets/icons/nearby-icon.svg" class="w-10" />
              <div class="w-3/4">
                <h6 class="font-bold text-black/90">اطراف من</h6>
                <p class="md:text-sm text-xs">
                  بارهای اطراف خود را مشاهده کنید
                </p>
              </div>
              <IconsForwardArrow />
            </NuxtLink>
            <NuxtLink
              :to="isAuth ? '/profile/search' : ''"
              class="flex items-center justify-between w-full p-4 pl-2 rounded-md shadow gap-x-3"
              :class="[{ 'bg-gray-300': !isAuth }, { 'bg-white': isAuth }]"
              dir="rtl"
            >
              <img src="~/assets/icons/search-advertiesment.svg" class="w-10" />
              <div class="w-3/4">
                <h6 class="font-bold text-black/90">جستجوی بار</h6>
                <p class="md:text-sm text-xs">
                  بر اساس مبدا و مقصد بار ها را جستجو کنید
                </p>
              </div>
              <IconsForwardArrow />
            </NuxtLink>
            <NuxtLink
              :to="isAuth ? '/profile/history' : ''"
              class="flex items-center justify-between w-full p-4 pl-2 rounded-md shadow gap-x-3"
              :class="[{ 'bg-gray-300': !isAuth }, { 'bg-white': isAuth }]"
              dir="rtl"
            >
              <img src="~/assets/icons/driver-history.svg" class="w-10" />
              <div class="w-3/4">
                <h6 class="font-bold text-black/90">تاریخچه بارهای من</h6>
                <p class="md:text-sm text-xs">
                  در خواست های حمل خود را اینجا ببینید
                </p>
              </div>
              <IconsForwardArrow />
            </NuxtLink>
          </div>
        </div>
        <div v-else>
          <div data-v0-t="card" class="space-y-3">
            <NuxtLink
              :to="isAuth ? '/profile/define-bar' : ''"
              class="flex items-center justify-between w-full p-4 pl-2 rounded-md shadow gap-x-3"
              :class="[{ 'bg-gray-300': !isAuth }, { 'bg-white': isAuth }]"
              dir="rtl"
            >
              <img src="~/assets/icons/bar.png" class="w-10" />
              <div class="w-3/4">
                <h6 class="font-bold text-black/90">اعلام باری کنید</h6>
                <p class="md:text-sm text-xs">
                  مناسب ترین رانندگان با شما تماس خواهند گرفت
                </p>
              </div>
              <IconsForwardArrow />
            </NuxtLink>
            <NuxtLink
              :to="isAuth ? '/profile/history' : ''"
              class="flex items-center justify-between w-full p-4 pl-2 rounded-md shadow gap-x-3"
              :class="[{ 'bg-gray-300': !isAuth }, { 'bg-white': isAuth }]"
              dir="rtl"
            >
              <img src="~/assets/icons/bar-histofy.png" class="w-10" />
              <div class="w-3/4">
                <h6 class="font-bold text-black/90">فهرست اعلام باری</h6>
                <p class="md:text-sm text-xs">
                بارهایی که اعلام کرده اید را مشاهده کنید
                </p>
              </div>
              <IconsForwardArrow />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <div
      class="absolute bottom-2 left-0 md:left-4 md:right-4 right-0 bg-white py-2 shadow-md rounded-md z-30"
    >
      <nav
        class="flex items-center justify-between text-black/40 text-3xl max-h-14 px-4 py-6"
      >
        <NuxtLink
          to="/profile"
          active-class="navLink-active"
          class="text-black p-2 md:p-3"
        >
          <IconsHome />
        </NuxtLink>
        <NuxtLink
          to="/profile/history"
          active-class="navLink-active"
          class="p-2 md:p-3"
        >
          <IconsHistory />
        </NuxtLink>
        <NuxtLink
          to="/profile/map"
          active-class="navLink-active"
          class="p-2 md:p-3"
        >
          <IconsLocation />
        </NuxtLink>
        <NuxtLink
          to="/profile/panel"
          active-class="navLink-active"
          class="p-2 md:p-3"
        >
          <IconsPerson />
        </NuxtLink>
        <NuxtLink to="/team" active-class="navLink-active" class="p-2 md:p-3">
          <IconsHeadphone />
        </NuxtLink>
      </nav>
    </div>
  </div>
</template>

<script setup>
import locationHandler from "~/composables/location";
const authStore = useAuthStore();

const showMenu = ref(false);

const isAuth = computed(() => authStore.user.isActive);

onMounted( () => {
  locationHandler();
});
</script>

<style scoped>
.menu-enter-active,
.menu-leave-active {
  transition: opacity 0.2s, right 0.2s;
}
.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  right: -100vw;
}
.menu-enter-to,
.menu-leave-from {
  opacity: 1;
  right: 0;
}
</style>

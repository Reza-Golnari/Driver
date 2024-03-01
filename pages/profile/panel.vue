<template>
  <div class="md:py-0 py-2 space-y-3 md:w-3/5 md:space-y-5">
    <SectionsBackButton class="left-10 md:left-4" />
    <h2 class="text-end md:text-center text-xl md:text-3xl font-bold">
      حساب کاربری
    </h2>
    <div
      class="bg-white flex items-center justify-between px-2 py-3 rounded-lg shadow-md gap-x-3"
    >
      <div class="flex flex-col items-end justify-center w-8/12 gap-y-1">
        <p
          class="inline py-1 px-4 border border-primary text-primary rounded-xl text-sm"
        >
          {{ authStore.user?.role === "driver" ? "راننده" : "صاحب بار" }}
        </p>
        <p>{{ authStore.user?.full_name }}</p>
        <p>{{ authStore.user?.mobile }}</p>
      </div>
      <div class="w-24 h-24 rounded-full overflow-hidden border">
        <img
          :src="authStore.user.profile_image"
          class="object-cover"
          v-if="authStore.user && authStore.user.profile_image"
        />
        <img
          src="/images/profile.jpg"
          class="object-cover"
          v-if="authStore.user && !authStore.user.profile_image"
        />
      </div>
    </div>
    <div
      class="bg-secondary shadow-md text-white text-xl flex items-center justify-center flex-col my-3 px-3 py-5 rounded-lg"
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
    <div
      class="py-6 px-4 flex items-center justify-center flex-row-reverse gap-x-5 shadow-md bg-white rounded-lg"
    >
      <p
        v-if="isAuth"
        class="py-2 px-4 border rounded-xl shadow-md border-green text-green"
      >
        تایید شده
      </p>
      <p
        v-if="!isAuth"
        class="py-2 px-4 border rounded-xl shadow-md text-red-500 border-red-500"
      >
        تایید نشده
      </p>
      <p dir="rtl">شماره موبایل:</p>
      <p>{{ authStore.user?.mobile }}</p>
    </div>
    <div class="bg-white p-3 rounded-lg shadow-md">
      <div
        class="text-red-500 text-xs font-bold flex items-center justify-between"
      >
        <NuxtLink to="/" class="flex items-center gap-x-1" dir="rtl"
          >ویرایش <IconsBackFlash
        /></NuxtLink>
        <p>بارگیر</p>
      </div>
      <p class="flex items-center text-lg gap-x-2 justify-center">
        {{ authStore.user?.driver.loader.name }}
      </p>
    </div>
  </div>
</template>

<script setup>
import locationHandler from "~/composables/location";
const authStore = useAuthStore();

const isAuth = computed(() => {
  if (authStore.user) return authStore.user.isActive;
  else return false;
});

onMounted(async () => {
  locationHandler();
});
</script>

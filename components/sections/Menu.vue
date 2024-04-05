<template>
  <nav
    class="fixed right-0 top-0 h-full w-72 md:w-96 bg-mainBg ml-auto flex flex-col md:p-8 p-4 z-50"
  >
    <div class="flex items-center justify-center">
      <img src="/images/line-logo.png" class="w-4/5" />
    </div>
    <div class="flex items-center justify-end mt-10 gap-x-4">
      <div class="text-end space-y-2">
        <p>{{ authStore.user?.full_name }}</p>
        <p>{{ authStore.user?.mobile }}</p>
      </div>
      <div class="w-14 rounded-full overflow-hidden">
        <img
            class="w-14 h-14 ob rounded-full oject-cover"
          :src="authStore.user?.profile_image"
          v-if="authStore.user?.profile_image"
        />
        <img src="/images/profile.jpg" class="w-14 h-14 object-cover rounded-full o" v-else />
      </div>
    </div>
    <ul class="mt-5 pr-3 space-y-5">
      <li>
        <NuxtLink
          to="/"
          class="flex items-center justify-end gap-x-3 font-bold"
        >
          اطراف من
          <img class="w-8 md:w-10" src="~/assets/icons/nearby-icon.svg" />
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/profile/search"
          class="flex items-center justify-end gap-x-3 font-bold"
        >
          جستوجوی بار
          <img
            class="w-8 md:w-10"
            src="~/assets/icons/search-advertiesment.svg"
          />
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/profile/history"
          class="flex items-center justify-end gap-x-3 font-bold"
        >
          تاریخچه بارهای من
          <IconsHistory class="md:text-[40px] text-[32px] opacity-80" />
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/"
          class="flex items-center justify-end gap-x-3 font-bold"
        >
          تغییر رمز عبور
          <IconsPassword class="md:text-[40px] text-[32px] opacity-80" />
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/"
          class="flex items-center justify-end gap-x-3 font-bold"
        >
          تنظیمات
          <IconsSetting class="md:text-[40px] text-[32px] opacity-80" />
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/"
          class="flex items-center justify-end gap-x-3 font-bold"
        >
          راهنمای اپلیکیشن
          <IconsQuestion class="md:text-[40px] text-[32px] opacity-80" />
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/"
          class="flex items-center justify-end gap-x-3 font-bold"
        >
          دعوت از دوستان
          <IconsFriend class="md:text-[40px] text-[32px] opacity-80" />
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          class="flex items-center justify-end gap-x-3 font-bold text-red-600 cursor-pointer"
          @click="logout"
        >
          خروج از حساب
          <IconsLogout class="md:text-[40px] text-[32px] opacity-80" />
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import useAxios from "~/composables/useAxios";
const { sendRequest } = useAxios();

const authStore = useAuthStore();

async function logout() {
  const res = await sendRequest({
    method: "POST",
    url: "/logout",
  });
  if (res.status === 200) authStore.logout();
}
</script>

<template>
  <div class="h-screen p-2 flex items-center justify-center min-w-72">
    <div class="text-center">
      <div
        class="w-48 h-48 mx-auto p-12 rounded-full flex items-center justify-center bg-primary cursor-pointer mb-2 shadow-md"
      >
        <img src="/images/picture.png" />
      </div>
      <p class="text-lg">عکس پروفایل</p>
      <form class="flex flex-col items-center justify-center mt-12 gap-y-5">
        <input
          type="text"
          class="p-4 outline-none w-80 shadow rounded-md"
          dir="rtl"
          placeholder="نام و نام خانوادگی"
        />
        <input
          type="text"
          class="p-4 outline-none w-80 shadow rounded-md"
          dir="rtl"
          placeholder="کد ملی"
        />
        <input
          type="submit"
          value="ادامه"
          class="p-4 outline-none w-80 shadow rounded-md bg-primary disabled:bg-[#C6C6C6] text-white disabled:text-black/50 transition-colors"
          disabled
        />
      </form>
    </div>
  </div>
</template>

<script setup></script>

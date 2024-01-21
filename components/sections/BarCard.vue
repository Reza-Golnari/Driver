<template>
  <div class="min-w-80 rounded-lg overflow-hidden bg-white shadow-md pb-1">
    <!-- Start of Card Header -->
    <div class="flex items-center justify-between bg-gray-300 w-full px-3 py-2">
      <NuxtLink to="/" class="flex items-center text-xs gap-x-1 text-red-600">
        <IconsBackFlash />
        <p>گزارش تخلف</p>
      </NuxtLink>

      <div class="flex items-center gap-x-3">
        <div class="flex items-center gap-x-1">
          <p class="text-xs mt-1">238</p>
          <IconsEye />
        </div>
        <div class="text-xs">دقایقی پیش</div>
      </div>
    </div>
    <!-- End of Card Header -->
    <!-- Start of Card Body -->
    <div class="px-2">
      <div class="flex items-center justify-between p-2 gap-x-3">
        <div class="flex flex-col items-center gap-y-1">
          <IconsLocation class="md:text-4xl text-3xl text-primary" />
          <h5 class="font-bold md:text-2xl text-xl">تهران</h5>
          <p class="text-xs">استان تهران</p>
        </div>
        <div
          class="w-1/2 flex flex-col items-center justify-between gap-y-4 md:pt-8 pt-9"
        >
          <img src="~/assets/icons/truck.svg" />
          <p class="font-bold md:text-3xl text-xl">14.600.000</p>
        </div>
        <div class="flex flex-col items-center gap-y-1">
          <IconsCircle class="md:text-4xl text-3xl" />
          <h5 class="font-bold md:text-2xl text-xl">میبد</h5>
          <p class="text-xs">استان یزد</p>
        </div>
      </div>
      <div>
        <div
          class="border-t border-black/50 md:text-sm text-xs text-center md:p-3 py-2 px-1"
        >
          <p>
            باربر :
            <span> تریلی کفی - تریلی بغلدار - تریلی چادری</span>
          </p>
        </div>
        <div
          class="border-t border-black/50 md:text-sm text-xs text-center md:p-3 py-2 px-1"
        >
          <p>
            کالا :
            <span>پالت کاشی</span>
          </p>
        </div>
        <div
          class="border-t border-black/50 md:text-sm text-xs text-center md:p-3 py-2 px-1"
        >
          <p>
            توضیحات :
            <span> کرایه توافقی - هماهنگی خانم لیلا زمانی</span>
          </p>
        </div>
        <div
          class="border-t border-black/50 md:text-sm text-xs text-center md:p-3 py-2 px-1"
        >
          <p>
            تلفن جهت هماهنگی :
            <span>09135997140</span>
          </p>
        </div>
      </div>
    </div>
    <!-- End of Card Body -->
  </div>
</template>

<script setup lang="ts"></script>

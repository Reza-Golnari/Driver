<template>
  <div class="p-4 min-w-80">
    <SectionsBackButton />
    <h2 class="text-end md:text-center md:text-3xl text-xl font-bold mb-5">
      تاریخچه بارهای من
    </h2>
    <div class="flex items-center justify-center flex-col gap-y-5">
      <LazySectionsBarCard
        v-for="(card, index) in 4"
        :key="index"
        :data="{ callBtn: true }"
      />
    </div>
  </div>
</template>

<script setup></script>

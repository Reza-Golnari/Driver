<template>
  <div class="p-4 min-w-80">
    <SectionsBackButton />
    <h2 class="text-end md:text-center md:text-3xl text-xl font-bold mb-5">
      تاریخچه بارهای من
    </h2>
    <div class="flex items-center justify-center flex-col gap-y-5">
      <LazySectionsBarCard
        v-if="data.length"
        v-for="(card, index) in data"
        :key="card.id"
        :data="{ callBtn: true, data: card }"
      />
      <p v-else dir="rtl">سابقه‌ای برای شما یافت نشد!</p>
    </div>
  </div>
</template>

<script setup>
import useAxios from "~/composables/useAxios";

const { sendRequest } = useAxios();
const data = ref([]);

onMounted(async () => {
  const res = await sendRequest({
    method: "GET",
    url: "/panel/driver/getDriverCargoHistory",
  });
  data.value = res.data.data;
});
</script>

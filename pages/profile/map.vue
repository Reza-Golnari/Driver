<template>
  <ClientOnly>
    <div
      class="w-full md:max-w-[500px] flex flex-col items-center justify-between py-4 pb-24 px-4 md:mx-0"
    >
      <SectionsBackButton />
      <NeshanMap
        mapSetting="false"
        mapKey="web.6ec8e70dc16b441ab69604328db2df28"
        serviceKey="service.90f18a9ef8ab47d0a983042d07f49e64"
        mapType="dreamy"
        :center="{ latitude: 35.8668, longitude: 47.60506 }"
        :origin="{ latitude: 45.703111, longitude: 5.428056 }"
        :destination="{ latitude: 3.693778, longitude: 57.380412 }"
        :scale="0.5"
        poi="false"
        class="w-full h-72 shadow-md rounded-md"
      />

      <div class="w-5/6 my-5 space-y-3">
        <div
          class="relative flex flex-row-reverse items-center justify-between bg-white p-4 rounded-lg shadow-md cursor-pointer"
        >
          <div class="flex items-center gap-x-2 flex-row-reverse">
            <IconsCircle class="text-primary text-2xl" />
            <p class="text-black/70" ref="originTitle">
              {{ advStore.originName }}
            </p>
          </div>
        </div>
        <div
          class="relative flex flex-row-reverse items-center justify-between bg-white p-4 rounded-lg shadow-md cursor-pointer"
        >
          <div class="flex items-center gap-x-2 flex-row-reverse">
            <IconsLocation class="text-primary text-2xl" />
            <p class="text-black/70" ref="destTitle">{{ advStore.destName }}</p>
          </div>
        </div>
      </div>

      <SectionsBarCard
        class="my-3 box-card"
        v-if="data.length"
        v-for="card in data"
        :key="data.id"
        :data="{ callBtn: true, data: card }"
        :id="card.id"
      />
      <p class="text-center" v-else>هیچ باری یافت نشد</p>
      <div
        class="fixed bottom-2 w-11/12 md:w-[500px] bg-white py-2 shadow-md rounded-md"
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
  </ClientOnly>
</template>
<script setup>
import NeshanMap from "@neshan-maps-platform/vue3-openlayers";
import useAxios from "~/composables/useAxios";
import {colorToGlsl} from "ol/expr/gpu.js";

const { sendRequest } = useAxios();
const advStore = useAdvStore();

const isMenu1Open = ref(false);
const isMenu2Open = ref(false);
const originTitle = ref();
const destTitle = ref();

const data = ref([]);

function isElementVisible(element){
  const {top , left , bottom , right} = element.getBoundingClientRect();

  return (top >= 0 && left >= 0 && bottom <= window.innerHeight && right <= window.innerWidth);
}

async function seenCard(id){
  const res = await sendRequest({
    method: 'POST',
    url: '/panel/driver/advertisers/addview',
    data: {
      id,
    }
  });

  console.log(res);
}

function openMenu(menu) {
  if (menu === "menu1") {
    isMenu1Open.value = !isMenu1Open.value;
    isMenu2Open.value = false;
    return;
  }
  isMenu2Open.value = !isMenu2Open.value;
  isMenu1Open.value = false;
}

function setOrigin(data) {
  originTitle.value.textContent = data.title;
}
function setDest(data) {
  destTitle.value.textContent = data.title;
}

onMounted(async () => {
  window.addEventListener('scroll' , ()=>{
    const cards = document.querySelectorAll(".box-card");
    cards.forEach(card=>{
      if(isElementVisible(card)){
        seenCard(card.id);
      }
    });
  });

  if (
    !advStore.originName ||
    !advStore.destName ||
    !advStore.originID ||
    !advStore.destID
  )
    navigateTo("/profile/search");



  const res = await sendRequest({
    method: "POST",
    url: "/panel/driver/advertisers/search-cargo",
    data: {
      destination_id: advStore.destID,
      origin_id: advStore.originID,
    },
  });
  if (res.status === 200) data.value = res.data.data;




});

const origin = [advStore.originLat, advStore.originLon];
const destination = [advStore.destLat, advStore.destLon];
</script>

<style>
.map-settings,
.map-search-box,
.map-drawer--desktop,
.map-drawer,
.map a {
  display: none !important;
}

.invisible {
  transition: visibility 0.1s 0.1s;
}

ul {
  transition: bottom 0.3s;
}
</style>

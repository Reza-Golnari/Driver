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
        :scale="0.5"
        poi="false"
        class="w-full h-72 shadow-md rounded-md"
      />

      <div class="w-5/6 my-5 space-y-3">
        <div
          class="relative flex flex-row-reverse items-center justify-between bg-white p-4 rounded-lg shadow-md cursor-pointer"
          @click="openMenu('menu1')"
        >
          <div class="flex items-center gap-x-2 flex-row-reverse">
            <IconsCircle class="text-primary text-2xl" />
            <p class="text-black/70" ref="originTitle">
              {{ advStore.originName }}
            </p>
          </div>
          <IconsDownArrow class="text-primary text-lg" />
          <div
            class="fixed left-0 top-0 h-screen w-screen bg-black/50 z-50"
            :class="[{ invisible: !isMenu1Open }]"
            @click="isMenu1Open = true"
          >
            <ul
              class="fixed left-1/2 -translate-x-1/2 right-0 z-50 w-screen max-w-[800px] bg-white text-center space-y-2 divide-y-2 overflow-scroll rounded-lg pb-2 h-96 divide-primary border-2 border-primary"
              :class="[
                { '-bottom-0': isMenu1Open },
                { '-bottom-full': !isMenu1Open },
              ]"
            >
              <li
                v-for="(city, index) in cities"
                :key="index"
                class="p-3 pb-1"
                @click="setOrigin(city)"
              >
                {{ city.title }}
              </li>
            </ul>
          </div>
        </div>
        <div
          class="relative flex flex-row-reverse items-center justify-between bg-white p-4 rounded-lg shadow-md cursor-pointer"
          @click="openMenu('menu2')"
        >
          <div class="flex items-center gap-x-2 flex-row-reverse">
            <IconsLocation class="text-primary text-2xl" />
            <p class="text-black/70" ref="destTitle">{{ advStore.destName }}</p>
          </div>
          <IconsDownArrow class="text-primary text-lg" />
          <div
            class="fixed left-0 top-0 h-screen w-screen bg-black/50 z-50"
            :class="[{ invisible: !isMenu2Open }]"
            @click="isMenu2Open = true"
          >
            <ul
              class="fixed left-1/2 -translate-x-1/2 right-0 z-50 w-screen max-w-[800px] bg-white text-center space-y-2 divide-y-2 overflow-scroll rounded-lg drop1 h-96 divide-primary border-2 border-primary"
              :class="[
                { '-bottom-0': isMenu2Open },
                { '-bottom-full': !isMenu2Open },
              ]"
            >
              <li
                v-for="(city, index) in cities"
                :key="index"
                class="p-3 pb-1"
                @click="setDest(city)"
              >
                {{ city.title }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <SectionsBarCard
        class="my-3"
        v-for="card in data"
        :key="data.id"
        :data="{ callBtn: true, data: card }"
      />
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

const { sendRequest } = useAxios();
const advStore = useAdvStore();

const isMenu1Open = ref(false);
const isMenu2Open = ref(false);
const originTitle = ref();
const destTitle = ref();

const data = ref([]);

const cities = ref([
  { title: "اصفهان", subtitle: "استان اصفهان" },
  { title: "مشهد", subtitle: "استان مشهد" },
  { title: "یزد", subtitle: "استان یزد" },
  { title: "تهران", subtitle: "استان تهران" },
  { title: "اصفهان", subtitle: "استان اصفهان" },
  { title: "اصفهان", subtitle: "استان اصفهان" },
  { title: "اصفهان", subtitle: "استان اصفهان" },
  { title: "اصفهان", subtitle: "استان اصفهان" },
  { title: "اصفهان", subtitle: "استان اصفهان" },
  { title: "اصفهان", subtitle: "استان اصفهان" },
]);

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
  if (
    !advStore.originName ||
    !advStore.destName ||
    !advStore.originID ||
    !advStore.destID
  )
    navigateTo("/");
  const res = await sendRequest({
    method: "POST",
    url: "/panel/driver/advertisers/search-cargo",
    data: {
      destination_id: 134555,
      origin_id: 134555,
    },
  });
  if (res.status === 200) data.value = res.data.data;
});
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

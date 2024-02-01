<template>
  <div class="py-4 max-w-80">
    <SectionsBackButton />
    <h2 class="text-end md:text-center md:text-3xl text-xl font-bold mb-5">
      جستجوی بار
    </h2>
    <div class="mx-auto my-10 w-3/4 md:w-full">
      <img src="/images/searchCargo.webp" />
    </div>
    <div class="space-y-16 md:space-y-24 relative">
      <div class="relative flex flex-row-reverse items-center gap-x-6">
        <div class="bg-white p-3 rounded-xl">
          <IconsCircle class="text-primary text-3xl" />
        </div>
        <div
          class="relative text-end border-b w-3/4 border-black/30 pb-1 cursor-pointer"
          @click="openMenu('menu1')"
        >
          <h5 class="text-xl font-bold" ref="originTitle">میبد</h5>
          <p class="text-sm" ref="originSubtitle">استان یزد</p>
          <div
            class="fixed left-0 top-0 h-screen w-screen bg-black/50 z-50"
            :class="[{ invisible: !isMenu1Open }]"
            @click="isMenu1Open = true"
          >
            <ul
              class="subMenu"
              :class="[
                { '-bottom-0': isMenu1Open },
                { '-bottom-full': !isMenu1Open },
              ]"
            >
              <li
                v-for="(city, index) in cities"
                :key="index"
                @click="setOrigin(city)"
                class="p-3 pb-1"
              >
                {{ city.title }}
              </li>
            </ul>
          </div>
        </div>
        <div
          class="absolute left-0 cursor-pointer"
          @click="isMenu1Open = !isMenu1Open"
        >
          <IconsBackFlash class="-rotate-90 text-primary text-xl" />
        </div>
      </div>
      <button
        class="absolute top-0 bg-primary p-2 rounded-xl cursor-pointer"
        @click="change"
      >
        <IconsChange class="text-2xl text-white" />
      </button>
      <div
        class="absolute -top-10 right-[26px] w-px h-1/3 border border-dashed border-primary"
      />
      <div class="relative flex flex-row-reverse items-center gap-x-6">
        <div class="bg-white p-3 rounded-xl">
          <IconsLocation class="text-primary text-3xl" />
        </div>
        <div
          class="relative text-end border-b w-3/4 border-black/30 pb-1 cursor-pointer"
          @click="openMenu('menu2')"
        >
          <h5 class="text-xl font-bold" ref="destTitle">تهران</h5>
          <p class="text-sm" ref="destSubtitle">استان تهران</p>
          <div
            class="fixed left-0 top-0 h-screen w-screen bg-black/50 z-50"
            :class="[{ invisible: !isMenu2Open }]"
            @click="isMenu2Open = true"
          >
            <ul
              class="subMenu"
              :class="[
                { '-bottom-0': isMenu2Open },
                { '-bottom-full': !isMenu2Open },
              ]"
            >
              <li
                v-for="(city, index) in cities"
                :key="index"
                @click="setDestination(city)"
                class="p-3 pb-1"
              >
                {{ city.title }}
              </li>
            </ul>
          </div>
        </div>
        <div
          class="absolute left-0 cursor-pointer"
          @click="isMenu2Open = !isMenu2Open"
        >
          <IconsBackFlash class="-rotate-90 text-primary text-xl" />
        </div>
      </div>
      <button
        class="bg-primary text-white py-3 px-10 w-full rounded-lg"
        @click="search()"
      >
        جستجوی بار
      </button>
    </div>
  </div>
</template>

<script setup>
const isMenu1Open = ref(false);
const isMenu2Open = ref(false);
const originTitle = ref();
const destTitle = ref();
const originSubtitle = ref();
const destSubtitle = ref();

const cities = ref([
  { title: "اصفهان", subtitle: "استان اصفهان" },
  { title: "مشهد", subtitle: "استان مشهد" },
  { title: "اصفهان", subtitle: "استان اصفهان" },
  { title: "اصفهان", subtitle: "استان اصفهان" },
  { title: "اصفهان", subtitle: "استان اصفهان" },
  { title: "اصفهان", subtitle: "استان اصفهان" },
  { title: "اصفهان", subtitle: "استان اصفهان" },
  { title: "اصفهان", subtitle: "استان اصفهان" },
  { title: "اصفهان", subtitle: "استان اصفهان" },
  { title: "اصفهان", subtitle: "استان اصفهان" },
]);

function setOrigin(data) {
  originTitle.value.textContent = data.title;
  originSubtitle.value.textContent = data.subtitle;
  isMenu1Open.value = false;
}

function setDestination(data) {
  destTitle.value.textContent = data.title;
  destSubtitle.value.textContent = data.subtitle;
  isMenu2Open.value = false;
}

function change() {
  const oldOriginTitle = originTitle.value.textContent;
  const oldOriginSubTitle = originSubtitle.value.textContent;

  originTitle.value.textContent = destTitle.value.textContent;
  originSubtitle.value.textContent = destSubtitle.value.textContent;
  destTitle.value.textContent = oldOriginTitle;
  destSubtitle.value.textContent = oldOriginSubTitle;
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

function search() {
  navigateTo("/profile/map");
}
</script>

<style scoped>
.invisible {
  transition: visibility 0.1s 0.1s;
}

ul {
  transition: bottom 0.3s;
}
</style>

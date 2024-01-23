<template>
  <div class="py-4 max-w-80">
    <SectionsBackButton />
    <h2 class="text-end md:text-center md:text-3xl text-xl font-bold mb-5">
      جستجوی بار
    </h2>
    <div class="mx-auto my-10">
      <img src="/images/searchCargo.webp" />
    </div>
    <div class="space-y-24 relative">
      <div class="relative flex flex-row-reverse items-center gap-x-6 z-50">
        <div class="bg-white p-3 rounded-xl">
          <IconsCircle class="text-primary text-3xl" />
        </div>
        <div
          class="relative text-end border-b w-3/4 border-black/30 pb-1 cursor-pointer"
          @click="isMenu1Open = !isMenu1Open"
        >
          <h5 class="text-xl font-bold" ref="originTitle">میبد</h5>
          <p class="text-sm" ref="originSubtitle">استان یزد</p>
          <ul
            class="absolute w-full bg-primary rounded-b-xl text-white divide-y z-40 overflow-scroll"
            :class="[
              { 'h-0': !isMenu1Open },
              { invisible: !isMenu1Open },
              { 'h-64': isMenu1Open },
            ]"
          >
            <li v-for="city in cities" @click="setOrigin(city)" class="p-2">
              {{ city.title }}
            </li>
          </ul>
        </div>
        <div class="absolute left-0">
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
      <div class="relative flex flex-row-reverse items-center gap-x-6 z-40">
        <div class="bg-white p-3 rounded-xl">
          <IconsLocation class="text-primary text-3xl" />
        </div>
        <div
          class="relative text-end border-b w-3/4 border-black/30 pb-1 cursor-pointer"
          @click="isMenu2Open = !isMenu2Open"
        >
          <h5 class="text-xl font-bold" ref="destTitle">تهران</h5>
          <p class="text-sm" ref="destSubtitle">استان تهران</p>
          <ul
            class="absolute w-full bg-primary rounded-b-xl text-white divide-y z-30 overflow-scroll"
            :class="[
              { 'h-0': !isMenu2Open },
              { invisible: !isMenu2Open },
              { 'h-64': isMenu2Open },
            ]"
          >
            <li
              v-for="city in cities"
              @click="setDestination(city)"
              class="p-2"
            >
              {{ city.title }}
            </li>
          </ul>
        </div>
        <div class="absolute left-0">
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
}

function setDestination(data) {
  destTitle.value.textContent = data.title;
  destSubtitle.value.textContent = data.subtitle;
}

function change() {
  const oldOriginTitle = originTitle.value.textContent;
  const oldOriginSubTitle = originSubtitle.value.textContent;

  originTitle.value.textContent = destTitle.value.textContent;
  originSubtitle.value.textContent = destSubtitle.value.textContent;
  destTitle.value.textContent = oldOriginTitle;
  destSubtitle.value.textContent = oldOriginSubTitle;
}

function search() {}
</script>

<style scoped>
ul {
  transition: height 0.2s;
}
</style>

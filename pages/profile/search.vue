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
        >
          <h5 class="text-xl font-bold" ref="originTitle"></h5>
          <input
            type="text"
            class="outline-none bg-transparent p-2"
            dir="rtl"
            placeholder="انتخاب مبدا"
            v-model="originInput"
            @input="searchCities('origin', originInput)"
          />
          <ul
            class="subMenu"
            :class="[
              { '-bottom-0': isMenu1Open },
              { '-bottom-full': !isMenu1Open },
            ]"
          >
            <li
              v-for="(city, index) in originList"
              :key="index"
              @click="setOrigin(city)"
              class="p-3 pb-1"
            >
              {{ city.name }}
            </li>
          </ul>
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
        >
          <h5 class="text-xl font-bold" ref="destTitle"></h5>
          <input
            type="text"
            class="outline-none bg-transparent p-2"
            dir="rtl"
            placeholder="انتخاب مقصد"
            v-model="destInput"
            @input="searchCities('dest', destInput)"
          />
          <ul
            class="subMenu"
            :class="[
              { '-bottom-0': isMenu2Open },
              { '-bottom-full': !isMenu2Open },
            ]"
          >
            <li
              v-for="(city, index) in destList"
              :key="index"
              @click="setDestination(city)"
              class="p-3 pb-1"
            >
              {{ city.name }}
            </li>
          </ul>
        </div>
        <div
          class="absolute left-0 cursor-pointer"
          @click="isMenu2Open = !isMenu2Open"
        >
          <IconsBackFlash class="-rotate-90 text-primary text-xl" />
        </div>
      </div>
      <button
        class="bg-primary text-white disabled:opacity-70 py-3 px-10 w-full rounded-lg transition-opacity"
        :disabled="
          !originInput || !destInput || !isOriginSelected || !isDestSelected
        "
        @click="search()"
      >
        جستجوی بار
      </button>
    </div>
  </div>
</template>

<script setup>
import useAxios from "~/composables/useAxios";

const { sendRequest } = useAxios();

const advStore = useAdvStore();

const isMenu1Open = ref(false);
const isMenu2Open = ref(false);
const canFetchCities = ref(true);
const originTitle = ref();
const destTitle = ref();
const originInput = ref();
const destInput = ref();
const originList = ref([]);
const destList = ref([]);
const isOriginSelected = ref(false);
const isDestSelected = ref(false);

watch(originInput, (newValue, oldValue) => {
   if (oldValue && !newValue) {
     isMenu1Open.value = true;
     canFetchCities.value = false;
   }
   else canFetchCities.value = true;
});

watch(destInput, (newValue, oldValue) => {
   if (oldValue && !newValue) {
     isMenu2Open.value = false;
     canFetchCities.value = false;
   }
   else canFetchCities.value = true;
});

async function searchCities(type, value) {
  isMenu1Open.value = false;
  isMenu2Open.value = false;
  if (!canFetchCities.value) {
    if (type === "origin") {
      originList.value = [];
      originTitle.value.textContent = "";
      originInput.value = "";
      isOriginSelected.value = false;
    } else {
      destList.value = [];
      destTitle.value.textContent = "";
      destInput.value = "";
      isDestSelected.value = false;
    }
    return;
  }

  if(value.length < 2) return

  const res = await sendRequest({
    method: "POST",
    url: "/panel/map/search",
    data: {
      keyword: value,
    },
  });
  if (res.status === 200) {
    if(!res.data.data.length) return
    if (type === "origin") {
      originList.value = res.data.data;
      isMenu1Open.value = true;
    } else {
      destList.value = res.data.data;
      isMenu2Open.value = true;
    }
  }
}

function setOrigin(data) {
  originTitle.value.textContent = data.state_name;
  originInput.value = data.fname;
  isMenu1Open.value = false;
  isOriginSelected.value = true;
  advStore.destID = data.id;
  advStore.destLongitude = data.longitude;
  advStore.destLatitude = data.latitude;
}

function setDestination(data) {
  destTitle.value.textContent = data.state_name;
  destInput.value = data.fname;
  isMenu2Open.value = false;
  isDestSelected.value = true;
  advStore.originID = data.id;
  advStore.originLongitude = data.longitude;
  advStore.originLatitude = data.latitude;
}

function change() {
  const oldOriginTitle = originTitle.value.textContent;
  const oldOriginSubTitle = originInput.value;

  originTitle.value.textContent = destTitle.value.textContent;
  originInput.value = destInput.value;
  destTitle.value.textContent = oldOriginTitle;
  destInput.value = oldOriginSubTitle;
}

function search() {
  if (
    !originInput.value ||
    !destInput.value ||
    !isOriginSelected.value ||
    !isDestSelected.value
  )
    return;
  advStore.originName = originInput.value;
  advStore.destName = destInput.value;
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

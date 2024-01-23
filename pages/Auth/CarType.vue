<template>
  <div class="h-screen min-w-80 flex flex-col items-center py-24 gap-y-4">
    <!-- Back Button -->
    <SectionsBackButton />
    <img src="/images/car-type.png" />
    <div class="w-full space-y-3">
      <div class="relative">
        <div
          class="bg-primary text-white w-full mx-auto flex items-center justify-between py-4 px-8 rounded-lg cursor-pointer"
          @click="openSubMenu('isDrop1Open')"
        >
          <IconsDownArrow class="text-lg" />
          <span ref="mainCarTypeInput"> انتخاب نوع ماشین</span>
        </div>
        <ul
          class="absolute top-10 z-50 w-full bg-primary text-white text-center space-y-2 divide-y-2 overflow-scroll rounded-lg drop1 pb-2"
          :class="[
            { 'h-52': isDrop1Open },
            { 'h-0': !isDrop1Open },
            { invisible: !isDrop1Open },
          ]"
        >
          <li
            class="py-2 px-3 pt-3 cursor-pointer"
            @click="setCarInformation($event, 'isDrop1Open')"
            v-for="(item, index) in mainCarTypeList"
            :key="index"
          >
            تریلی
          </li>
        </ul>
      </div>
      <div class="relative" v-show="isSelected">
        <div
          class="bg-primary text-white w-full mx-auto flex items-center justify-between py-4 px-8 rounded-lg cursor-pointer"
          @click="openSubMenu('isDrop2Open')"
        >
          <IconsDownArrow class="text-lg" />
          <span ref="carInfoInput"> انتخاب نوع ماشین</span>
        </div>
        <ul
          class="absolute top-10 z-40 w-full bg-primary text-white text-center space-y-2 divide-y-2 overflow-scroll rounded-lg drop1 pb-2"
          :class="[
            { 'h-52': isDrop2Open },
            { 'h-0': !isDrop2Open },
            { invisible: !isDrop2Open },
          ]"
        >
          <li
            class="py-2 px-3 pt-3 cursor-pointer"
            @click="setCarInformation($event, 'isDrop2Open')"
            v-for="(item, index) in mainCarTypeList"
            :key="index"
          >
            تریلی
          </li>
        </ul>
      </div>
      <div class="relative" v-show="isSelected">
        <div
          class="bg-primary text-white w-full mx-auto flex items-center justify-between py-4 px-8 rounded-lg cursor-pointer"
          @click="openSubMenu('isDrop3Open')"
        >
          <IconsDownArrow class="text-lg" />
          <span ref="carNumberInput"> انتخاب نوع ماشین</span>
        </div>
        <ul
          class="absolute top-10 z-30 w-full bg-primary text-white text-center space-y-2 divide-y-2 overflow-scroll rounded-lg drop1 pb-2"
          :class="[
            { 'h-52': isDrop3Open },
            { 'h-0': !isDrop3Open },
            { invisible: !isDrop3Open },
          ]"
        >
          <li
            class="py-2 px-3 pt-3 cursor-pointer"
            @click="setCarInformation($event, 'isDrop3Open')"
            v-for="(item, index) in mainCarTypeList"
            :key="index"
          >
            تریلی
          </li>
        </ul>
      </div>
      <button
        v-show="isSelected"
        @click="submit()"
        class="block bg-primary disabled:bg-gray-300 disabled:cursor-default disabled:text-black/70 text-white text-center w-full mx-auto py-4 px-8 rounded-lg cursor-pointer"
        :disabled="selectNumber !== 3"
      >
        شروع کار
      </button>
    </div>
  </div>
</template>

<script setup>
const authStore = useAuthStore();
const selectNumber = ref(0);
const isDrop1Open = ref(false);
const isDrop2Open = ref(false);
const isDrop3Open = ref(false);
const isSelected = ref(false);
const mainCarTypeInput = ref();
const carNumberInput = ref();
const carInfoInput = ref();
const mainCarTypeList = ref([
  "تریلی",
  "تریلی",
  "تریلی",
  "تریلی",
  "تریلی",
  "تریلی",
  "تریلی",
  "تریلی",
  "تریلی",
  "تریلی",
]);

function setCarInformation(event, drop) {
  switch (drop) {
    case "isDrop1Open":
      openSubMenu();
      mainCarTypeInput.value.textContent = event.target.textContent;
      isSelected.value = true;
      isDrop1Open.value = false;
      selectNumber.value = 1;

      break;
    case "isDrop2Open":
      openSubMenu();
      carInfoInput.value.textContent = event.target.textContent;
      isDrop2Open.value = false;
      selectNumber.value = 2;

      break;
    case "isDrop3Open":
      openSubMenu();
      carNumberInput.value.textContent = event.target.textContent;
      isDrop3Open.value = false;
      selectNumber.value = 3;
      break;
  }
}

function openSubMenu(drop) {
  switch (drop) {
    case "isDrop1Open":
      isDrop2Open.value = false;
      isDrop3Open.value = false;
      isDrop1Open.value = !isDrop1Open.value;
      break;
    case "isDrop2Open":
      isDrop1Open.value = false;
      isDrop3Open.value = false;
      isDrop2Open.value = !isDrop2Open.value;
      break;
    case "isDrop3Open":
      isDrop1Open.value = false;
      isDrop2Open.value = false;
      isDrop3Open.value = !isDrop3Open.value;
      break;
  }
}

function submit() {
  authStore.saveLoginData({
    carType: mainCarTypeInput.value,
    carInfo: carInfoInput.value,
    carNumber: carNumberInput.value,
  });
  navigateTo("/auth/verify");
}
</script>

<style scoped>
.drop1 {
  transition: height 0.2s;
}
</style>

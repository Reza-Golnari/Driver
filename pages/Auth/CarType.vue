<template>
  <!-- Back Button -->
  <SectionsBackButton />
  <div
    class="h-screen relative min-w-80 flex flex-col items-center py-24 gap-y-4"
  >
    <img src="/images/car-type.png" />
    <div class="w-full space-y-3">
      <div>
        <div
          class="bg-primary text-white w-full mx-auto flex items-center justify-between py-4 px-8 rounded-lg cursor-pointer"
          @click="openSubMenu('isDrop1Open')"
        >
          <IconsDownArrow class="text-lg" />
          <span ref="mainCarTypeInput"> انتخاب نوع ماشین</span>
        </div>
        <div
          class="fixed left-0 top-0 h-screen w-screen bg-black/50 z-50"
          :class="[{ invisible: !isDrop1Open }]"
          @click="isDrop1Open = false"
        >
          <ul
            class="subMenu max-h-72"
            :class="[
              { '-bottom-0': isDrop1Open },
              { '-bottom-full': !isDrop1Open },
            ]"
          >
            <li
              class="py-2 px-3 pt-3 cursor-pointer"
              @click="setCarInformation($event, 'isDrop1Open')"
              v-for="item in mainCarTypeList"
              :key="item.id"
            >
              {{ item.name }}
            </li>
          </ul>
        </div>
      </div>
      <div class="relative" v-show="isSelected">
        <div
          class="bg-primary text-white w-full mx-auto flex items-center justify-between py-4 px-8 rounded-lg cursor-pointer"
          @click="openSubMenu('isDrop2Open')"
        >
          <IconsDownArrow class="text-lg" />
          <span ref="carInfoInput"> انتخاب </span>
        </div>
        <div
          class="fixed left-0 top-0 h-screen w-screen bg-black/50 z-50"
          :class="[{ invisible: !isDrop2Open }]"
          @click="isDrop2Open = false"
        >
          <ul
            class="subMenu max-h-72"
            :class="[
              { '-bottom-0': isDrop2Open },
              { '-bottom-full': !isDrop2Open },
            ]"
          >
            <li
              class="py-2 px-3 pt-3 cursor-pointer"
              @click="setCarInformation($event, 'isDrop2Open')"
              v-for="item in subCarInfoList"
              :key="item.id"
            >
              {{ item.name }}
            </li>
          </ul>
        </div>
      </div>
      <!-- <div class="relative" v-show="isSelected">
        <div
          class="bg-primary text-white w-full mx-auto flex items-center justify-between py-4 px-8 rounded-lg cursor-pointer"
          @click="openSubMenu('isDrop3Open')"
        >
          <IconsDownArrow class="text-lg" />
          <span ref="carNumberInput"> انتخاب </span>
        </div>
        <div
          class="fixed left-0 top-0 h-screen w-screen bg-black/50 z-50"
          :class="[{ invisible: !isDrop3Open }]"
          @click="isDrop3Open = false"
        >
          <ul
            class="subMenu"
            :class="[
              { '-bottom-0': isDrop3Open },
              { '-bottom-full': !isDrop3Open },
            ]"
          >
            <li
              class="py-2 px-3 pt-3 cursor-pointer"
              @click="setCarInformation($event, 'isDrop3Open')"
              v-for="(item, index) in mainCarTypeList"
              :key="index"
            >
              {{ item }}
            </li>
          </ul>
        </div>
      </div> -->
      <button
        v-show="isSelected"
        @click="submit()"
        class="block bg-primary disabled:bg-gray-300 disabled:cursor-default disabled:text-black/70 text-white text-center w-full mx-auto py-4 px-8 rounded-lg cursor-pointer"
        :disabled="!showBtn"
      >
        شروع کار
      </button>
    </div>
  </div>
</template>

<script setup>
import useAxios from "~/composables/useAxios";
const { sendRequest } = useAxios();

const authStore = useAuthStore();
const showBtn = ref(false);
const isDrop1Open = ref(false);
const isDrop2Open = ref(false);
// const isDrop3Open = ref(false);
const isSelected = ref(false);
const mainCarTypeInput = ref();
// const carNumberInput = ref();
const carInfoInput = ref();
const isCarType = ref(false);
// const isCarNumber = ref(false);
const isCarInfo = ref(false);
const mainCarTypeList = ref([]);
const subCarInfoList = ref([]);
let selectedCarID;

watchEffect(() => {
  // if (isCarType.value && isCarNumber.value && isCarInfo.value)
  if (isCarType.value && isCarInfo.value) showBtn.value = true;
});

onMounted(async () => {
  // check user type
  if (authStore.user?.type === "shipper") navigateTo("/Auth/CreateProfile");

  // get loaders
  const res = await sendRequest({
    method: "GET",
    url: "/panel/loader/getAllLoaders",
  });
  if (res.status === 200) mainCarTypeList.value = res.data.data;
});

function setCarInformation(event, drop) {
  switch (drop) {
    case "isDrop1Open":
      openSubMenu();
      mainCarTypeInput.value.textContent = event.target.textContent;
      isSelected.value = true;
      isDrop1Open.value = false;
      isCarType.value = true;
      setSubCarInfoList(mainCarTypeInput.value.textContent);

      break;
    case "isDrop2Open":
      openSubMenu();
      carInfoInput.value.textContent = event.target.textContent;
      isDrop2Open.value = false;
      isCarInfo.value = true;
      subCarInfoList.value.some((item) => {
        if (item.name === carInfoInput.value.textContent) {
          selectedCarID = item.id;
          return true;
        }
      });

      break;
    case "isDrop3Open":
      openSubMenu();
      // carNumberInput.value.textContent = event.target.textContent;
      // isDrop3Open.value = false;
      // isCarNumber.value = true;
      break;
  }
}

function setSubCarInfoList(text) {
  mainCarTypeList.value.some((item) => {
    if (item.name === text) {
      subCarInfoList.value = item.childs;
      return true;
    }
  });
  carInfoInput.value.textContent = subCarInfoList.value[0].name;
}

function openSubMenu(drop) {
  switch (drop) {
    case "isDrop1Open":
      isDrop2Open.value = false;
      // isDrop3Open.value = false;
      isDrop1Open.value = !isDrop1Open.value;
      break;
    case "isDrop2Open":
      isDrop1Open.value = false;
      // isDrop3Open.value = false;
      isDrop2Open.value = !isDrop2Open.value;
      break;
    case "isDrop3Open":
      isDrop1Open.value = false;
      isDrop2Open.value = false;
      // isDrop3Open.value = !isDrop3Open.value;
      break;
  }
}

async function submit() {
  authStore.saveLoginData({
    carType: mainCarTypeInput.value,
    carInfo: carInfoInput.value,
    // carNumber: carNumberInput.value,
  });
  const res = await sendRequest({
    method: "POST",
    url: "/panel/profile/chooseLoader",
    data: {
      loader: selectedCarID,
    },
  });
  if (res.status === 200) navigateTo("/profile");
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

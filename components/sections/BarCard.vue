<template>
  <div class="min-w-80 rounded-lg overflow-hidden bg-white shadow-md pb-2">
    <!-- Start of Card Header -->
    <div class="flex items-center justify-between bg-gray-300 w-full px-3 py-2">
      <NuxtLink to="/" class="flex items-center text-xs gap-x-1 text-red-600">
        <IconsBackFlash />
        <p>گزارش تخلف</p>
      </NuxtLink>

      <div class="flex items-center gap-x-3">
        <div class="flex items-center gap-x-1">
          <p class="text-xs mt-1">{{ info.view_count }}</p>
          <IconsEye />
        </div>
        <div class="text-xs">{{ time }}</div>
      </div>
    </div>
    <!-- End of Card Header -->
    <!-- Start of Card Body -->
    <div class="px-2">
      <div class="flex items-center justify-between p-2 gap-x-3">
        <div class="flex flex-col items-center gap-y-1">
          <IconsLocation class="md:text-4xl text-3xl text-primary" />
          <h5 class="font-bold md:text-2xl text-xl">{{ info.origin.fname }}</h5>
        </div>
        <div
          class="w-1/2 flex flex-col items-center justify-between gap-y-4 pt-2"
        >
          <p class="font-bold text-lg"><span>752</span>km</p>
          <img src="~/assets/icons/truck.svg" />
          <p class="font-bold md:text-3xl text-xl">{{ info.rental_amount }}</p>
        </div>
        <div class="flex flex-col items-center gap-y-1">
          <IconsCircle class="md:text-4xl text-3xl" />
          <h5 class="font-bold md:text-2xl text-xl">
            {{ info.destination.fname }}
          </h5>
        </div>
      </div>
      <div>
        <div
          class="border-t border-black/50 md:text-sm text-xs text-center md:p-3 py-2 px-1"
        >
          <p>
            باربر :
            <span>{{ loaders }}</span>
          </p>
        </div>
        <div
          class="border-t border-black/50 md:text-sm text-xs text-center md:p-3 py-2 px-1"
        >
          <p>
            کالا :
            <span>{{ info.good_title }}</span>
          </p>
        </div>
        <div
          class="border-t border-black/50 md:text-sm text-xs text-center md:p-3 py-2 px-1"
        >
          <p dir="rtl">
            توضیحات :
            <span>{{ info.description }}</span>
          </p>
        </div>
        <div
          class="border-t border-black/50 md:text-sm text-xs text-center md:p-3 py-2 px-1"
        >
          <p>
            تلفن جهت هماهنگی :
            <span>{{ info.agent_mobile }}</span>
          </p>
        </div>
        <a
          :href="`tel:${info.shipper.mobile}`"
          @click="
            driverCall(
              info.shipper.shipper_id,
              authStore.user?.driver.driver_id
            )
          "
          v-if="isBtnShow"
          class="block text-center mx-auto mt-2 md:w-2/3 w-5/6 md:py-3 py-2 bg-green text-white rounded-lg text-sm md:text-lg"
        >
          تماس با صاحب بار
        </a>
      </div>
    </div>
    <!-- End of Card Body -->
  </div>
</template>

<script setup>
import useAxios from "~/composables/useAxios";

const { sendRequest } = useAxios();

const authStore = useAuthStore();
const props = defineProps(["data"]);
const data = props.data;
const info = props.data.data;
const isBtnShow = data.callBtn;

const loaders = ref("");
const loaderArray = [];
info.loaders.forEach((loader, index) => {
  loaderArray.push(loader.name.trim());
  loaders.value = loaderArray.join(" - ");
});

const date = new Date();
const time = ref(date.toTimeString(info.created_at).slice(0, 5));

async function driverCall(shipperID, driverID) {
  const res = await sendRequest({
    method: "POST",
    url: "/panel/driver/driverCallShipper",
    data: {
      advertisments_id: shipperID,
      user_id: driverID,
    },
  });
}
</script>

<template>
  <div
    class="max-w-96 min-w-80  h-screen flex flex-col justify-center gap-y-4 py-3 pb-10"
  >
    <!-- Back Button -->
    <SectionsBackButton />
    <div class="flex gap-4 flex-col items-between space-y-12">
      <img
        src="/images/bar.png"
        alt="bar login"
        class="w-56 object-fill mx-auto"
        style="object-fit: cover"
        v-if="isShipper"
      />
      <img
        src="/images/trucklogin.png"
        alt="Truck login"
        class="w-80 object-fill mx-auto"
        style="object-fit: cover"
        v-else
      />
      <div>
        <div
          class="flex items-center justify-center bg-white py-2 px-4 rounded-lg shadow-md"
        >
          <!-- Prefix input mobile -->
          <input
            @keyup.enter="login"
            v-model="prefixMobile"
            placeholder="09123456789"
            class="text-xl w-full tracking-widest font-semibold pr-0 m-0 outline-none text-black bg-white full lg pl-2 py-1"
            size="12"
            maxlength="12"
            ref="prefixInputRef"
          />
        </div>
        <p
          class="mt-3 text-sm text-center text-rose-500 font-semibold"
          v-show="errorMessage.length"
        >
          {{ errorMessage }}
        </p>
      </div>
    </div>
    <div class="w-full">
      <button
        ref="loginButtonRef"
        @click="login"
        class="inline-block w-full py-3 rounded-lg bg-primary text-center text-white outline-none cursor-pointer"
      >
        {{ loginTitle }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from "@/stores/auth";
const authStore = useAuthStore();

const route = useRoute();

const isShipper = computed(()=> route.query.type === "shipper")

const prefixMobile = ref("");
const prefixInputRef = ref(null);
const loginButtonRef = ref(null);
const errorMessage = ref("");

const loginTitle = computed(() => {
  if (route.query.type == "driver") {
    return "ورود راننده";
  } else if (route.query.type == "shipper") {
    return "ورود صاحب بار";
  } else {
    return "ورود";
  }
});

function validateMobileNumber() {
  if (prefixMobile.value.length)
    if (!prefixMobile.value.toString().trim()[0] != "0") {
      errorMessage.value = "لطفا شماره موبایل را درست وارد کنید";
      return false;
    }
  if (Number(prefixMobile.value).toString().length < 10) {
    errorMessage.value = "لطفا شماره موبایل را درست وارد کنید";
    return false;
  }
  errorMessage.value = "";
  return true;
}

onMounted(() => {
  // check is there any type query in url?

  if (
    route.query?.type == undefined ||
    route.query?.type.toString().trim() == ""
  ) {
    navigateTo("/Auth");
  }
});

async function login() {
  // validate mobile number
  if (validateMobileNumber() == false) {
    return;
  }
  //  save data in store(pinia)
  authStore.saveLoginData({
    mobile: prefixMobile.value,
    type: route.query.type,
  });

  navigateTo("/Auth/Verify");
}
</script>

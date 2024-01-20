<script setup>
import { useAuthStore } from "@/stores/auth";
const authStore = useAuthStore();

const route = useRoute();
const prefixMobile = ref("");
const middleMobile = ref("");
const suffixMobile = ref("");
const prefixInputRef = ref(null);
const middleInputRef = ref(null);
const suffixInputRef = ref(null);
const loginButtonRef = ref(null);
const errorMessage= ref('');

const loginTitle = computed(() => {
  if (route.query.type == "driver") {
    return "ورود راننده";
  } else if (route.query.type == "shipper") {
    return "ورود صاحب بار";
  } else {
    return "ورود";
  }
});

function prefixKeyUp(e) {
  const value = e.target.value;
  if (value.toString().length == 4) {
    focusInputRef(middleInputRef);
  }
}

function middleKeyUp(e) {
  const value = e.target.value;
  if (value.toString().length == 3) {
    focusInputRef(suffixInputRef);
  } else if (value.toString().length == 0 && e.code == "Backspace") {
    // focus prefix input ref
    focusInputRef(prefixInputRef);
  }
}

function suffixKeyUp(e) {
  const value = e.target.value;
  if (value.toString().length == 4) {
    focusInputRef(loginButtonRef);
  } else if (value.toString().length == 0 && e.code == "Backspace") {
    // focus middle input ref
    focusInputRef(middleInputRef);
  }
}

function focusInputRef(inputRef) {
  inputRef.value.focus();
}

function validateMobileNumber(){
  console.log(Number(prefixMobile.value+middleMobile.value+suffixMobile.value).toString().length)
  if(prefixMobile.value.length)
  if(!prefixMobile.value.toString().trim()[0]!='0'){
    errorMessage.value='لطفا شماره موبایل را درست وارد کنید';
    return false;
  }
    if(Number(prefixMobile.value+middleMobile.value+suffixMobile.value).toString().length <10){
      errorMessage.value='لطفا شماره موبایل را درست وارد کنید';
      return false;
    }
  errorMessage.value='';
  return true;
}

onMounted(() => {
  // check is there any type query in url?
  
  if(route.query?.type==undefined || route.query?.type.toString().trim()==''){
    navigateTo('/')
  }
  focusInputRef(prefixInputRef);
});

async function login() {
  // validate mobile number
  if(validateMobileNumber()==false){
    return;
  }
  //  save data in store(pinia)
  authStore.saveLoginData({
    mobile: prefixMobile.value + middleMobile.value + suffixMobile.value,
    type: route.query.type,
  });

  navigateTo('/profile/verify')
}
</script>

<template>
  <div
    class="flex w-96 m-auto flex-col items-center justify-between min-h-screen bg-gray-100 py-6 px-4"
  >
    <div class="w-full px-2">
      <NuxtLink to="/">
        <nuxt-icon name="ArrowLeftFilled" filled />
      </NuxtLink>
    </div>
    <div class="flex gap-4 flex-col items-between space-y-12">
      <NuxtImg
        src="/images/trucklogin.png"
        alt="Truck login"
        class="max-w-xs object-fill"
        style="object-fit: cover"
      />
      <div>
        <div
        class="flex items-center justify-center bg-white py-2 px-4 rounded-lg shadow-md"
      >
        <!-- Prefix input mobile -->
        <input
          @keyup.enter="login"
          @keyup="prefixKeyUp"
          v-model="prefixMobile"
          placeholder="0993"
          class="text-xl w-16 tracking-widest font-semibold pr-0 m-0 outline-none text-black bg-white full lg pl-2 py-1"
          size="4"
          maxlength="4"
          ref="prefixInputRef"
        />

        <!-- Middle input mobile -->
        <input
          @keyup.enter="login"
          @keyup="middleKeyUp"
          v-model="middleMobile"
          ref="middleInputRef"
          placeholder="933"
          class="text-xl w-16 font-semibold pr-0 m-0 outline-none tracking-widest text-red-500 bg-white full lg pl-2 py-1"
          size="3"
          maxlength="3"
        />

        <!-- Suffix input mobile -->
        <input
          @keyup.enter="login"
          v-model="suffixMobile"
          @keyup="suffixKeyUp"
          placeholder="3664"
          size="4"
          ref="suffixInputRef"
          maxlength="4"
          class="text-xl font-semibold tracking-widest outline-none text-red-500 bg-white full lg pr-2 py-1"
        />
      </div>
      <p class=" mt-3 text-sm text-center text-rose-500 font-semibold " v-show="errorMessage.length"> {{ errorMessage }}</p>
      </div>
    </div>
    <div class="w-full px-4 py-2 h-24">
      <button
        ref="loginButtonRef"
        @click="login"
        class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 w-full bg-red-600 text-white"
      >
        {{ loginTitle }}
      </button>
    </div>
  </div>
</template>



<style scoped>
</style>
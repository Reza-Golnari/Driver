<template>
  <div class="flex flex-col items-center justify-center min-h-screen p-4">
    <div class="flex h-52 w-52 -mr-24 justify-center">
      <img alt="Phone" class="h-max mx-auto" src="/images/sms.png" />
    </div>

    <div class="mt-2 text-center">
      <form action="" method="post">
        <div class="flex flex-col space-y-16">
          <div class="flex flex-col gap-4 items-center">
            <div
              class="flex flex-row items-center justify-between mx-auto w-full max-w-xs"
            >
              <div class="w-16 h-16 pr-1 mr-2">
                <input
                  @input="checkToken"
                  @keyup="(e) => focusNext(e, inputTwo)"
                  ref="inputOne"
                  class="text-4xl text-light-green-number w-full border-l-0 border-r-0 border-t-0 border-b-2 text-green border-gray-400 h-full flex flex-col items-center justify-center text-center px-5 outline-none bg-transparent"
                  type="text"
                  pattern="[0-9]"
                  v-model="one"
                  required
                />
              </div>
              <div class="w-16 h-16 pr-1 mr-2">
                <input
                  @input="checkToken"
                  @keyup="(e) => focusNext(e, inputThree)"
                  ref="inputTwo"
                  class="text-4xl text-light-green-number w-full border-l-0 border-r-0 border-t-0 border-b-2 text-green border-gray-400 h-full flex flex-col items-center justify-center text-center px-5 outline-none bg-transparent"
                  type="text"
                  v-model="two"
                  pattern="[0-9]"
                  required
                />
              </div>
              <div class="w-16 h-16 pr-1 mr-2">
                <input
                  @input="checkToken"
                  @keyup="(e) => focusNext(e, inputFour)"
                  ref="inputThree"
                  class="text-4xl text-light-green-number w-full border-l-0 border-r-0 border-t-0 border-b-2 text-green border-gray-400 h-full flex flex-col items-center justify-center text-center px-5 outline-none bg-transparent"
                  type="text"
                  v-model="three"
                  pattern="[0-9]"
                  required
                />
              </div>
              <div class="w-16 h-16 pr-1 mr-2">
                <input
                  @input="checkToken"
                  ref="inputFour"
                  class="text-4xl text-light-green-number w-full border-l-0 border-r-0 border-t-0 border-b-2 text-green border-gray-400 h-full flex flex-col items-center justify-center text-center pl-5 pr-5 outline-none bg-transparent"
                  type="text"
                  v-model="four"
                  size="1"
                  pattern="[0-9]"
                  required
                />
              </div>
            </div>
            <div class="flex items-center justify-around w-full mt-3" dir="rtl">
              <p class="text-base">صبر کنید، در حال دریافت کد تایید!!</p>
              <span>
                <IconsLoading />
              </span>
            </div>
            <div class="flex flex-col space-y-3">
              <div class="flex items-center justify-end text-sm">
                <button class="mx-auto border-b border-b-black/50">
                  کد را دریافت نکردید؟
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from "@/stores/auth";
import Cookie from "js-cookie";
import useAxios from "~/composables/useAxios";

const { sendRequest } = useAxios();
const authStore = useAuthStore();

const inputOne = ref(null);
const inputTwo = ref(null);
const inputThree = ref(null);
const inputFour = ref(null);

function focusNext(e, inputRef) {
  if (e.target.value.length > 0) {
    inputRef.focus();
  }
}

const one = ref();
const two = ref();
const three = ref();
const four = ref();

async function checkToken() {
  nextTick(async () => {
    if (one.value && two.value && three.value && four.value) {
      const token = one.value + two.value + three.value + four.value;
      const res = await sendRequest({
        method: "POST",
        url: "/otp/verify-otp",
        data: {
          model: authStore.loginData.type,
          mobile: authStore.loginData.mobile,
          token,
        },
        newHeader: {},
      });
      console.log(res);
      if (res.token) {
        Cookie.set("token", res.token, { expires: 30, path: "/" });
        navigateTo("/Auth/CreateProfile");
      }
    }
  });
}

async function sendCode() {
  try {
    const res = await sendRequest({
      method: "POST",
      url: "/otp/send-otp",
      data: {
        model: authStore.loginData.type,
        mobile: authStore.loginData.mobile,
      },
      newHeader: {},
    });
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

onMounted(() => {
  inputOne.value.focus();
  sendCode();
});
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen p-4 gap-y-4">
    <div class="flex h-52 w-52 -mr-24 justify-center">
      <img alt="Phone" class="h-max mx-auto" src="/images/sms.png" />
    </div>

    <div class="mt-2 text-center">
      <form action="" method="post">
        <div class="flex flex-col space-y-16">
          <div class="flex flex-col gap-4 items-center">
            <div
              class="flex flex-row items-center justify-between mx-auto w-full scale-90 md:scale-100"
            >
              <div class="w-16 h-16 pr-1 mr-2">
                <input
                  @input="checkToken"
                  @keyup="(e) => focusNext(e, inputTwo)"
                  ref="inputOne"
                  class="text-4xl text-light-green-number w-full border-l-0 border-r-0 border-t-0 border-b-2 text-green border-gray-400 h-full flex flex-col items-center justify-center text-center px-4 outline-none bg-transparent"
                  type="tel"
                  maxlength="1"
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
                  class="text-4xl text-light-green-number w-full border-l-0 border-r-0 border-t-0 border-b-2 text-green border-gray-400 h-full flex flex-col items-center justify-center text-center px-4 outline-none bg-transparent"
                  type="tel"
                  maxlength="1"
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
                  class="text-4xl text-light-green-number w-full border-l-0 border-r-0 border-t-0 border-b-2 text-green border-gray-400 h-full flex flex-col items-center justify-center text-center px-4 outline-none bg-transparent"
                  type="tel"
                  maxlength="1"
                  v-model="three"
                  pattern="[0-9]"
                  required
                />
              </div>
              <div class="w-16 h-16 pr-1 mr-2">
                <input
                  @input="checkToken"
                  @keyup="(e) => focusNext(e, inputFive)"
                  ref="inputFour"
                  class="text-4xl text-light-green-number w-full border-l-0 border-r-0 border-t-0 border-b-2 text-green border-gray-400 h-full flex flex-col items-center justify-center text-center px-4 outline-none bg-transparent"
                  type="tel"
                  maxlength="1"
                  v-model="four"
                  size="1"
                  pattern="[0-9]"
                  required
                />
              </div>
              <div class="w-16 h-16 pr-1 mr-2">
                <input
                  @input="checkToken"
                  ref="inputFive"
                  class="text-4xl text-light-green-number w-full border-l-0 border-r-0 border-t-0 border-b-2 text-green border-gray-400 h-full flex flex-col items-center justify-center text-center px-4 outline-none bg-transparent"
                  type="tel"
                  maxlength="1"
                  v-model="five"
                  size="1"
                  pattern="[0-9]"
                  required
                />
              </div>
            </div>
            <div class="flex items-center justify-around w-full mt-3" dir="rtl">
              <p class="text-base">
                {{ codeText }}
              </p>
              <span v-if="codeLoading">
                <IconsLoading />
              </span>
            </div>
            <div class="flex flex-col space-y-3">
              <div class="flex items-center justify-end text-sm">
                <button
                  class="mx-auto border-b border-b-black/50"
                  @click="sendCode"
                >
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
const appStore = useAppStore();

const inputOne = ref(null);
const inputTwo = ref(null);
const inputThree = ref(null);
const inputFour = ref(null);
const inputFive = ref(null);

const codeLoading = ref(true);
const codeText = ref("صبر کنید، در حال دریافت کد تایید!!");

function focusNext(e, inputRef) {
  if (e.target.value.length > 0) {
    inputRef.focus();
  }
}

const one = ref();
const two = ref();
const three = ref();
const four = ref();
const five = ref();

async function checkToken() {
  nextTick(async () => {
    if (one.value && two.value && three.value && four.value && five.value) {
      const token =
        one.value + two.value + three.value + four.value + five.value;
      const res = await sendRequest({
        method: "POST",
        url: "/otp/verify-otp",
        data: {
          mobile: authStore.loginData.mobile,
          token,
          model: authStore.loginData.type,
        },
        newHeader: {},
      });
      console.log(res.data)
      if (!res || res.status !== 200) {
        codeText.value = "خطا در صحت سنجی کد تایید";
        appStore.showAlert(true, "مشکلی در صحت سنجی کد تایید بوجود آمده است");
      }else if(res.data.data.profile.full_name || res.data.data.national_id){
        authStore.saveUserData(res.data.data.profile);
        Cookie.set("token", res.data.data.token, { expires: 30, path: "/" });
        navigateTo("/profile")
      } else if (res.data.data.token) {
        Cookie.set("token", res.data.data.token, { expires: 30, path: "/" });
        navigateTo("/Auth/CreateProfile");
      }
    }
  });
}

async function sendCode() {
  codeLoading.value = true;
  codeText.value = "صبر کنید، در حال دریافت کد تایید!!";
  try {
    const res = await sendRequest({
      method: "POST",
      url: "/otp/send-otp",
      data: {
        mobile: authStore.loginData.mobile,
      },
      newHeader: {
        "Content-Type": "application/vnd.api+json",
      },
    });
    if (res.status === 200) {
      codeLoading.value = false;
      codeText.value = "کد تایید برای شما ارسال شد";
    } else {
      codeLoading.value = false;
      codeText.value = "مشکلی در ارسال کد رخ داده است";
    }
  } catch (error) {
    codeLoading.value = false;
    codeText.value = "مشکلی در ارسال کد رخ داده است";
    appStore.showAlert(true, "مشکلی در ارسال کد تایید رخ داده است");
  }
}

onMounted(() => {
  if (!authStore.loginData.mobile) navigateTo("/");
  inputOne.value.focus();
  sendCode();
});
</script>

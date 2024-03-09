<template>
  <div class="h-screen p-2 flex items-center justify-center min-w-72">
    <SectionsBackButton />
    <div class="text-center">
      <div
        class="w-48 h-48 mx-auto p-12 rounded-full flex items-center justify-center bg-primary cursor-pointer mb-2 shadow-md"
        @click="fileInput.click()"
      >
        <img src="/images/picture.png" />
      </div>
      <p class="text-lg">عکس پروفایل</p>
      <form
        class="flex flex-col items-center justify-center mt-12 gap-y-5"
        @submit.prevent="submitForm"
      >
        <input
          type="file"
          accept="image/png, image/jpeg"
          class="hidden"
          ref="fileInput"
          @input="validateForm()"
        />
        <input
          v-model="userName"
          ref="userNameInput"
          type="text"
          class="p-4 outline-none w-80 shadow rounded-md"
          dir="rtl"
          placeholder="نام و نام خانوادگی"
        />
        <input
          v-model="userCode"
          ref="userCodeInput"
          type="text"
          class="p-4 outline-none w-80 shadow rounded-md"
          dir="rtl"
          placeholder="کد ملی"
        />
        <div class="w-full" v-show="isError">
          <p ref="errorMsg" class="text-primary font-bold text-sm text-end"></p>
        </div>
        <input
          type="submit"
          value="ادامه"
          class="p-4 outline-none w-80 shadow rounded-md bg-primary disabled:bg-[#C6C6C6] text-white disabled:text-black/50 transition-colors cursor-pointer disabled:cursor-default"
          :disabled="isError"
        />
      </form>
    </div>
  </div>
</template>

<script setup>
import useAxios from "~/composables/useAxios";

const appStore = useAppStore();

const authStore = useAuthStore();
const userNameInput = ref();
const userCodeInput = ref();
const errorMsg = ref();
const isError = ref(true);
const userName = ref("");
const userCode = ref("");
const fileInput = ref();

const { sendRequest } = useAxios();

watch([userName, userCode], () => {
  validateForm();
});

function validateForm() {
  if (userName.value.trim().length < 8) {
    errorMsg.value.textContent =
      "نام و نام خانوادگی نمی‌تواند کمتر از 8 حرف باشد";
  } else if (userName.value.trim().split(" ").length < 2) {
    errorMsg.value.textContent = "نام و نام خانوادگی صحیح نیست";
  } else if (userCode.value.trim().length <= 9) {
    errorMsg.value.textContent = "کد ملی نمی‌تواند کمتر از 9 حرف باشد";
  } else if (isNaN(userCode.value.trim())) {
    errorMsg.value.textContent = "کد ملی می‌تواند تنها شامل اعداد باشد";
  } else if (!fileInput.value.files[0]) {
    errorMsg.value.textContent = "یک عکس انتخاب کنید";
  } else {
    errorMsg.value.textContent = "";
    isError.value = false;
  }
}

async function submitForm() {
  validateForm();
  const spaceIndex = userNameInput.value.value.trim().indexOf(" ");
  const firstName = userNameInput.value.value.slice(0, spaceIndex);
  const lastName = userNameInput.value.value.slice(spaceIndex).trim();
  const frmData = new FormData();
  frmData.append("photo", fileInput.value.files[0]);
  frmData.append("first_name", firstName);
  frmData.append("last_name", lastName);
  frmData.append("national_id", userCodeInput.value.value);

  const res = await sendRequest({
    method: "POST",
    url: "/panel/profile",
    data: frmData,
    newHeader: {
      "Content-Type": "multipart/form-data",
    },
  });
  if (res.status === 200) {
    authStore.saveUserData(res.data.data);
    navigateTo("/Auth/CarType");
  } else {
    errorMsg.value.textContent = res.message;
    appStore.showAlert(true , "خطایی در ثبت اطلاعات رخ داده است")
  }
}
</script>

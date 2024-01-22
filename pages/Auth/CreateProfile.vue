<template>
  <div class="h-screen p-2 flex items-center justify-center min-w-72">
    <SectionsBackButton />
    <div class="text-center">
      <div
        class="w-48 h-48 mx-auto p-12 rounded-full flex items-center justify-center bg-primary cursor-pointer mb-2 shadow-md"
      >
        <img src="/images/picture.png" />
      </div>
      <p class="text-lg">عکس پروفایل</p>
      <form class="flex flex-col items-center justify-center mt-12 gap-y-5">
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
const userNameInput = ref();
const userCodeInput = ref();
const errorMsg = ref();
const isError = ref(true);
const userName = ref("");
const userCode = ref("");

watch([userName, userCode], () => {
  validateForm();
});

function validateForm() {
  if (userName.value.trim().length < 8) {
    errorMsg.value.textContent =
      "نام و نام خانوادگی نمی‌تواند کمتر از 8 حرف باشد";
  } else if (userName.value.trim().split(" ").length < 2) {
    errorMsg.value.textContent = "نام و نام خانوادگی صحیح نیست";
  } else if (userCode.value.trim().length <= 10) {
    errorMsg.value.textContent = "کد ملی نمی‌تواند کمتر از 10 حرف باشد";
  } else if (isNaN(userCode.value.trim())) {
    errorMsg.value.textContent = "کد ملی می‌تواند تنها شامل اعداد باشد";
  } else {
    errorMsg.value.textContent = "";
    isError.value = false;
  }
}
</script>

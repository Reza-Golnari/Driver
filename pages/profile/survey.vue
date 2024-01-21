<template>
  <SectionsBackButton />
  <div class="min-h-screen md:py-4 space-y-5 py-16">
    <SectionsBarCard :data="{ callBtn: false }" />
    <div>
      <div class="h-px border border-black/30" />
      <h2 class="text-center md:text-2xl text-xl font-bold mt-3 opacity-80">
        با صاحب کار توافق کردید؟
      </h2>
      <div class="space-y-2 mt-3">
        <div
          class="py-4 px-6 transition-colors rounded-lg shadow cursor-pointer text-black/70 bg-white text-end"
          @click="setSurvey($event)"
        >
          بله
        </div>
        <div
          class="py-4 px-6 transition-colors rounded-lg shadow cursor-pointer text-black/70 bg-white text-end"
          @click="setSurvey($event)"
        >
          خیر، بار رد شد
        </div>
        <div
          class="py-4 px-6 transition-colors rounded-lg shadow cursor-pointer text-black/70 bg-white text-end"
          @click="setSurvey($event)"
        >
          خیر، کرایه کم بود
        </div>
        <div
          class="py-4 px-6 transition-colors rounded-lg shadow cursor-pointer text-black/70 bg-white text-end"
          @click="setSurvey($event)"
        >
          خیر، صاحب بار جواب نداد
        </div>
        <button
          class="py-4 px-6 w-full rounded-lg shadow text-center transition-colors"
          :class="[
            { 'text-black/70': !isSet },
            { 'bg-white': !isSet },
            { 'bg-green': isSet },
            { 'text-white': isSet },
            { 'cursor-pointer': isSet },
          ]"
          :disabled="isSet"
        >
          ثبت نظرسنجی
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const isSet = ref(false);

function setSurvey(event) {
  if (document.querySelector(".chose"))
    document.querySelector(".chose").classList.remove("chose");

  event.target.classList.add("chose");
  isSet.value = true;
}
</script>

<style scoped>
.chose {
  background-color: #26c95d !important;
  color: white !important;
}
</style>

<script setup>
import { useAuthStore } from "@/stores/auth";
const authStore = useAuthStore();

import { useForm } from "vee-validate";
import * as yup from "yup";

const { values, errors, defineField } = useForm({
  validationSchema: yup.object({
    carType: yup
      .string()
      .required("فیلد نام الزامی است ")

  }),
});

const [carType, carTypeAttrs] = defineField("carType");

onMounted(()=>{
    carType.value=''
})
</script>

<template>
  <div
    class="flex w-full md:max-w-96 m-auto flex-col items-center justify-between min-h-screen bg-gray-100 py-6 px-4"
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
      <div class="gap-3 flex flex-col">
        <div
          class="flex flex-col gap-3 items-center justify-center bg-rose-500 py-2 px-4 rounded-lg shadow-md"
        >
          <select
            v-model="carType"
            v-bind="carTypeAttrs"
          dir="rtl"
            id="countries"
            class="  border-gray-300 outline-none border-0 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-rose-500 text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="">انتخاب نوع ماشین</option>
            <option value="US">کفی </option>
            <option value="CA">تریلی </option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
        
        <p class="mt-3 text-sm text-center text-rose-500 font-semibold">
          error me
        </p>

        <pre>values: {{ values }}</pre>
        <pre>errors: {{ errors }}</pre>
      </div>
    </div>
    <div class="w-full px-4 py-2 h-24">
      
    </div>
  </div>
</template>



<style scoped>
</style>
<script setup>
import { useAuthStore } from "@/stores/auth";
const authStore = useAuthStore();

import { useForm } from "vee-validate";
import * as yup from "yup";

const { values, errors, defineField } = useForm({
  validationSchema: yup.object({
    carName: yup
      .string()
      .required("فیلد نام ماشین الزامی است "),
    roadType: yup
      .string()
      .required("فیلد نوع جاده الزامی است "),
    size: yup
      .string()
      .required("فیلد اندازه الزامی است "),

  }),
});

const [carName, carNameAttrs] = defineField("carName");
const [roadType, roadTypeAttrs] = defineField("roadType");
const [size, sizeAttrs] = defineField("size");

onMounted(()=>{
  carName.value=''
  roadType.value=''
  size.value=''
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
            v-model="carName"
            v-bind="carNameAttrs"
          dir="rtl"
            id="countries"
            class="  border-gray-300 outline-none border-0 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-rose-500 text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="">  تریلی</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
        <div
          class="flex flex-col gap-3 items-center justify-center bg-rose-500 py-2 px-4 rounded-lg shadow-md"
        >
          <select
            v-model="roadType"
            v-bind="roadTypeAttrs"
          dir="rtl"
            id="countries"
            class="  border-gray-300 outline-none border-0 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-rose-500 text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="">  کفی</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
        <div
          class="flex flex-col gap-3 items-center justify-center bg-rose-500 py-2 px-4 rounded-lg shadow-md"
        >
          <select
            v-model="size"
            v-bind="sizeAttrs"
          dir="rtl"
            id="countries"
            class="  border-gray-300 outline-none border-0 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-rose-500 text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="">12.20  </option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
        <div
          class="flex flex-col gap-3  text-center py-3 text-white items-center justify-center bg-rose-500  px-4 rounded-lg shadow-md"
        >
          <button>شروع به  کار</button>
        </div>
        <a class="text-sm w-full text-center underline">با ثبت نام در آرام بار، قوانین آرام بار و خط مشی رازداری 2023 را میپذیرید.</a>
        
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
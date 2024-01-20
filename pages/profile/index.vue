<script setup>
import { useAuthStore } from "@/stores/auth";
const authStore = useAuthStore();

import { useForm } from "vee-validate";
import * as yup from "yup";

const { values, errors, defineField } = useForm({
  validationSchema: yup.object({
    fullName: yup.string().length(5,'نام باید حداقل 5 کارکتر باشد').required('فیلد نام را درست وارد کنید'),
    nationalCode: yup
      .string()
      .matches(/^\d{10}$/, "کد ملی را درست وارد  کنید")
      .required('کد ملی الزامی است'),
  }),
});

const [fullName, fullNameAttrs] = defineField("fullName");
const [nationalCode, nationalCodeAttrs] = defineField("nationalCode");
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
          class="flex flex-col gap-3 items-center justify-center bg-white py-2 px-4 rounded-lg shadow-md"
        >
          <input
            class="w-full outline-none text-right py-2"
            placeholder="نام و نام خانوادگی"
            v-model="nationalCode"
            v-bind="nationalCodeAttrs"
          />
        </div>
        <div
          class="flex flex-col gap-3 items-center justify-center bg-white py-2 px-4 rounded-lg shadow-md"
        >
          <input
            class="w-full outline-none text-right py-2"
            placeholder="کد ملی"
            v-model="fullName"
            v-bind="fullNameAttrs"
          />
        </div>
        <p class="mt-3 text-sm text-center text-rose-500 font-semibold">
          error me
        </p>

        <pre>values: {{ values }}</pre>
        <pre>errors: {{ errors }}</pre>
      </div>
    </div>
    <div class="w-full px-4 py-2 h-24">
      <button
        ref="loginButtonRef"
        @click="login"
        class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 w-full bg-gray-300 text-black"
      >
        ادامه
      </button>
    </div>
  </div>
</template>



<style scoped>
</style>
<template>
  <div
    class="bg-primary h-screen w-full flex items-center justify-center cursor-pointer"
    @click="changeRoute()"
  >
    <img src="/images/splash.png" class="w-2/3 max-w-96" />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "custom",
});

function changeRoute() {
  navigateTo("/Auth");
}
</script>

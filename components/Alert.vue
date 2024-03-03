<template>
  <div
    class="fixed bottom-8 left-1/2 -translate-x-1/2 w-80 transition-opacity py-3 px-5 rounded-lg z-50 text-center"
    :class="[
      { 'opacity-0': !appStore.isShow },
      { 'bg-red-500': appStore.isError },
      { 'text-white': appStore.isError },
      { 'bg-green': !appStore.isError },
      { 'text-black': !appStore.isError },
    ]"
  >
    {{ appStore.message }}
  </div>
</template>

<script setup>
const appStore = useAppStore();
</script>

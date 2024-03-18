<template>
  <div class="min-h-screen bg-mainBg p-2">
    <div class="container max-w-[800px] mx-auto md:px-5 flex justify-center overflow-x-hidden">
      <slot />

      <Alert />
    </div>
  </div>
</template>

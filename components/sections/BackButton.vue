<template>
  <div class="absolute top-3 left-3 text-4xl cursor-pointer z-20">
    <NuxtLink @click="$router.go(-1)">
      <IconsBackArrow />
    </NuxtLink>
  </div>
</template>

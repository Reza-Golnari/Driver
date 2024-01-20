<template>
  <div class="absolute top-3 left-3 text-4xl cursor-pointer">
    <NuxtLink @click="$router.go(-1)">
      <IconsBackArrow />
    </NuxtLink>
  </div>
</template>

<template>
  <div
    class="w-full md:max-w-[500px] flex flex-col items-center justify-between h-screen py-4"
  >
    <SectionsBackButton />
    <NeshanMap
      :mapKey="mapKey"
      :serviceKey="serviceKey"
      :scale="0.5"
      class="w-10/12 border h-72"
    />
    <div></div>
    <SectionsBarCard :data="{ callBtn: false }" />
  </div>
</template>
<script setup>
const mapKey = process.env.MAP_KEY;
const serviceKey = process.env.SERVICE_KEY;
import NeshanMap from "@neshan-maps-platform/vue3-openlayers";
</script>

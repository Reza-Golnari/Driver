// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
  ],
  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.API_BASE_URL,
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: [
    "~/assets/css/font.css",
    "~/assets/css/global.css",
    "~/assets/css/tailwind.css",
    "@neshan-maps-platform/mapbox-gl-vue/dist/style.css",
  ],
  app: {
    head: {
      link: [
        { rel: "icon", href: "/images/icon-192.png" },
        { rel: "manifest", href: "/manifest.json" },
      ],
    },
  },
});

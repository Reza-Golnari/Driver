// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "nuxt-icons",
    "@vueuse/nuxt",
    "nuxt-icon",
    "@vee-validate/nuxt",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "nuxt-swiper",
    "@nuxt/image",
    "@vite-pwa/nuxt",
  ],
  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.API_BASE_URL,
    },
  },
  veeValidate: {
    // disable or enable auto imports
    autoImports: true,
    // Use different names for components
    componentNames: {
      Form: "VeeForm",
      Field: "VeeField",
      FieldArray: "VeeFieldArray",
      ErrorMessage: "VeeErrorMessage",
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  pwa: {
    manifest: {
      name: "آرام بار",
      short_name: "آرام بار",
      description: "حمل بارهای شما",
      display: "standalone",
      start_url: "/",
      theme_color: "#ffffff",
      background_color: "#ffffff",
      icons: [
        {
          src: "/images/icon-512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "any maskable",
        },
        {
          src: "/images/icon-192.png",
          sizes: "192x192",
          type: "image/png",
          purpose: "any maskable",
        },
      ],
    },
    workbox: {
      globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
    },
    devOptions: {
      enabled: true,
      type: "module",
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
      link: [{ rel: "icon", href: "/images/icon-192.png" }],
    },
  },
});

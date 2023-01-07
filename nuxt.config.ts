// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],

  css: [
    "locomotive-scroll/dist/locomotive-scroll.min.css",
    "~/assets/css/style.css",
  ],

  app: {
    head: {
      bodyAttrs: {
        class: "bg-black text-white",
      },
    },
  },

  plugins: [{ src: "~/plugins/locomotive.ts", mode: "client" }],
});

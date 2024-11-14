// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  ssr: true,
  spaLoadingTemplate: false,

  devServer: {
    port: 3000,
  },

  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
      htmlAttrs: {
        lang: "en",
        class: "h-full",
      },
      bodyAttrs: {
        class: "antialiased bg-gray-50 dark:bg-black min-h-screen ",
      },
    },
  },

  modules: [[
    "@nuxtjs/google-fonts",
    {
      families: {
        Poppins: {
          wght: [300, 400, 500, 700, 800],
        },
      },
      display: "swap",
      download: true,
    },
  ], "nuxt-icon", "@nuxt/image", ["@nuxt/ui", {}], "@vueuse/nuxt", "@nuxt/content", "@nuxt/ui"],

  ui: {
    icons: ["heroicons", "lucide"],
  },

  css: ["~/assets/css/tailwind/main.css"],

  tailwindcss: {
    cssPath: "~/assets/css/tailwind/index.css",
    configPath: "tailwind.config",
    injectPosition: "first",
    viewer: false,
  },

  components: ["~/components"],
  compatibilityDate: "2024-11-14",
});
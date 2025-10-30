// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@nuxt/icon",
    "@nuxt/fonts",
    "@nuxtjs/mdc",
    "@nuxtjs/sitemap",
  ],
  css: ["~/assets/css/main.css"],
  ssr: true,
  ui: {
    theme: {
      colors: [
        "primary",
        "secondary",
        "accent",
        "neutral",

        "info",
        "success",
        "warning",
        "error",
      ],
    },
  },

  icon: {
    customCollections: [
      {
        prefix: "lydflor",
        dir: "./app/assets/icons",
      },
    ],
  },

  router: {
    options: {
      scrollBehaviorType: "smooth",
    },
  },

  site: {
    url: "https://lydflor.dk/",
    name: "Lyd:Flor",
  },

  app: {
    head: {
      title: "Lyd:Flor",
      htmlAttrs: {
        lang: "da",
      },
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon-96x96.png",
          sizes: "96x96",
        },
        {
          rel: "icon",
          type: "image/svg+xml",
          href: "/favicon-green.svg",
          media: "(prefers-color-scheme: light)",
        },
        {
          rel: "icon",
          type: "image/svg+xml",
          href: "/favicon-white.svg",
          media: "(prefers-color-scheme: black)",
        },
        {
          rel: "apple-touch-icon",
          href: "/apple-touch-icon.png",
          sizes: "180x180",
        },
        { rel: "manifest", href: "/site.webmanifest" },
      ],
      meta: [{ name: "apple-mobile-web-app-title", content: "Lyd:Flor" }],
    },
  },
});

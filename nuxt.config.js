export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  pageTransition: {
    name: "page",
    mode: "out-in",
  },

  head: {
    title: "black-lambo",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
      {
        src: "/scripts/@gsap/shockingly/dist/SplitText.js",
        body: true,
      },
      {
        src: "/scripts/@gsap/shockingly/dist/DrawSVGPlugin.js",
        body: true,
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/styles/index.scss"],

  googleFonts: {
    preconnect: true,
    // prefetch: true,
    preload: true,
    families: {
      Inter: {
        wght: [400, 500, 600, 700, 800],
      }
    },
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "nuxt-gsap-module",
    "@nuxtjs/style-resources",
    "@nuxtjs/google-fonts",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@vueuse/nuxt", "@nuxtjs/svg"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  gsap: {
    /* Module Options */
    extraPlugins: {
      scrollTo: true,
      scrollTrigger: true,
      text: true,
    },
    extraEases: {
      customEase: true,
      expoScaleEase: false,
      roughEase: false,
      slowMo: true,
    },
  },
};

require("dotenv").config();
// import head from "./utils/head.json";

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  // ssr: true,
  // target: "server",
  head: {
    title: "디지털문화유산전 2023",
    htmlAttrs: {
      lang: "ko-KR",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "format-detection", content: "telephone=no" },
      {
        hid: "title",
        name: "title",
        property: "title",
        content: "디지털문화유산전 2023",
      },
      {
        hid: "description",
        name: "description",
        property: "description",
        content: "디지털문화유산전 2023",
      },
      {
        name: "keyword",
        content:
          "공주시, 공주인, 공주, 충남, 충청남도, 충청도, 공주여행, 커뮤니티, 공주커뮤니티, 공주시웹사이트, 공주시청, 공주대학교, 공주원룸, 공주대, 공주교대, 공주원도심, 공주신도심, 신관동, 반죽동, 중학동",
      },
      {
        hid: "og:image",
        name: "og:image",
        property: "og:image",
        content: "/og-image.png",
      },
      {
        hid: "og:title",
        name: "og:title",
        property: "og:title",
        content: "디지털문화유산전 2023",
      },
      {
        hid: "og:description",
        name: "og:description",
        property: "og:description",
        content: "",
      },
      {
        name: "og:url",
        property: "og:url",
        content: "",
      },
      {
        name: "og:type",
        property: "og:type",
        content: "",
      },
      {
        name: "og:site_name",
        property: "og:site_name",
        content: "디지털문화유산전 2023",
      },

      {
        name: "msapplication-TileColor",
        property: "msapplication-TileColor",
        content: "#da532c",
      },
      {
        name: "theme-color",
        property: "theme-color",
        content: "#da532c",
      },
      {
        name: "twitter:card",
        hid: "twitter:card",
        content: "/og-image.png",
      },
      // {
      //   property: "twitter:domain",
      //   content: "seoro-malgm.studio",
      // },
      // {
      //   property: "twitter:url",
      //   hid: "twitter:url",
      //   content: "https://seoro-malgm.studio",
      // },
      {
        name: "twitter:title",
        hid: "twitter:title",
        content: "디지털문화유산전 2023",
      },
      // {
      //   name: "twitter:description",
      //   hid: "twitter:description",
      //   content: "UI/UX, Branding, Calligraphy, Graphic",
      // },
      {
        name: "twitter:image",
        hid: "twitter:image",
        content: "/og-image.png",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
      {
        rel: "icon",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },
      {
        rel: "manifest",
        href: "/site.webmanifest",
      },
      {
        rel: "mask-icon",
        color: "#5bbad5",
        href: "/safari-pinned-tab.svg",
      },
    ],
  },
  css: [
    {
      src: "~/assets/styles/index.scss",
      lang: "scss",
    },
  ],

  plugins: [
    // { src: "~/plugins/axios.js" },
    { src: "~/plugins/router.js", mode: "client" },
    { src: "~/plugins/firebase.js" },
    { src: "~/plugins/carousel.js", mode: "client" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],
  build: {
    loaders: {
      sass: {
        implementation: require("sass"),
      },
      scss: {
        implementation: require("sass"),
      },
    },
  },
  // buildDir: "client",
  generate: {
    dir: "dist",
  },
  styleResources: {
    scss: ["~/assets/styles/variables.scss"],
  },
  dev: process.env.NODE_ENV === "development",
  watchQuery: ["page"],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "vue2-editor/nuxt",
    "@nuxtjs/style-resources",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // BoardItemaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },
  // 로딩바
  loading: {
    color: "#00ffe6",
  },
  // 페이지 트랜지션
  // transition: '',
  // 환경변수
  env: {
    BASE_URL: process.env.BASE_URL || "http://localhost:3000",
    API_KEY: process.env.API_KEY,
    PROJECT_ID: process.env.PROJECT_ID,
    APP_ID: process.env.APP_ID,
    AUTH_DOMAIN: process.env.AUTH_DOMAIN,
    DATABASE_URL: process.env.DATABASE_URL,
    STORAGE_BUCKET: process.env.STORAGE_BUCKET,
    MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID,
    MEASUREMENT_ID: process.env.MEASUREMENT_ID,
    TOKEN_NAME: process.env.TOKEN_NAME,
    // NAVER_CLIENT_ID: process.env.NAVER_CLIENT_ID,
    // GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
  },
};

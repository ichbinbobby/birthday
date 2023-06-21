// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        { name: "author", content: "ichbinbobby" },
        { name: "charset", content: "utf-8" },
        {
          name: "description",
          content: "Bobby's birthday page",
        },
        // <meta name="viewport" content="width=device-width, initial-scale=1">
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          property: "og:description",
          content: "Bobby's birthday page",
        },
        {
          property: "og:image",
          content:
            "https://lh3.googleusercontent.com/QTSOFxOaVde6gu-lNjTZ_VrOh7ihpSgRc-hErsBVjQ4Te9tIj4cW4BNWXj2fy1WbDnWYNS3v6pO628xBLC-A74K7ylf0ODNz-jbNhM1OUCgTUvZSN3zP=w960",
        },
        {
          property: "og:title",
          content: "Bobby's Dirty Thirty",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:url",
          content: "http://geburtstag.ichbinbobby.de/",
        },
      ],
      title: "Bobby's Dirty Thirty",
    },
  },
  devtools: { enabled: true },
  modules: ["@invictus.codes/nuxt-vuetify"],
  vuetify: {
    /* vuetify options */
    vuetifyOptions: {
      // @TODO: list all vuetify options
    },

    moduleOptions: {
      /* nuxt-vuetify module options */
      treeshaking: true,
      useIconCDN: true,

      /* vite-plugin-vuetify options */
      styles: true,
      autoImport: true,
    },
  },
});

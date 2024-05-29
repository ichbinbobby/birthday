// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        { name: "author", content: "ichbinbobby" },
        { name: "charset", content: "utf-8" },
        {
          name: "description",
          content:
            "Komm in die Gruppe! Sei kein Low Performer! Hier wirst du erfolgreich!",
        },
        // <meta name="viewport" content="width=device-width, initial-scale=1">
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          property: "og:description",
          content:
            "Komm in die Gruppe! Sei kein Low Performer! Hier wirst du erfolgreich!",
        },
        {
          property: "og:image",
          content:
            "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/155.png",
        },
        {
          property: "og:title",
          content: "Bobby's Birthday Coaching",
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
      title: "Bobby's Birthday Coaching",
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

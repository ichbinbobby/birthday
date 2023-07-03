<template>
  <v-sheet>
    <v-layout>
      <!-- The class fill-height applies height: 100% to an element. When applied to v-container it will also set align-items: center -->
      <v-container fill-height>
        <v-card
          class="text-center d-flex"
          elevation="0"
          min-height="500"
          :style="{ backgroundImage: `url(${cardImage})` }"
        >
          <v-row
            align="center"
            no-gutters
          >
            <v-col />

            <v-col cols="6">
              <span class="text-lg-h1 text-md-h1 text-sm-h2 text-xs-h2 pa-2">
                We're hungry, because we're alive.
              </span>

              <div class="text-lg-h5 text-md-h5 text-sm-h6 text-xs-h6 pa-2">
                Irgendwann treffen wir uns wieder im
                <a
                  href="https://goo.gl/maps/YNhGsEjYxDbQ1Jvq5"
                  target="_blank"
                  rel="noopener"
                  class="text-decoration-underline"
                >
                  Grillplatz im Monbijoupark
                </a>
              </div>

              <div class="text-lg-h5 text-md-h5 text-sm-h6 text-xs-h6 pa-2">
                Bringt Essen und Trinken mit, auf das ihr Lust habt. Ich brauche
                keine materiellen Geschenke, aber hier sind ein paar Optionen,
                falls ihr etwas tun möchtet.
              </div>
            </v-col>

            <v-col />
          </v-row>
        </v-card>

        <v-main style="min-height: 300px">
          <v-row class="flex-wrap pt-4">
            <v-col
              v-for="(item, index) in referals"
              :key="index"
              cols="12"
              sm="6"
              md="4"
              lg="3"
            >
              <v-card
                :color="cardColor"
                :height="cardHeight"
                elevation="0"
                @click="open(item.link)"
              >
                <v-img
                  :width="imgWidth"
                  :src="item.img"
                  class="pt-4 pl-4 app-img"
                />

                <v-card-title> {{ item.title }} </v-card-title>

                <v-card-text class="text-wrap">
                  {{ item.text }}
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-main>
      </v-container>
    </v-layout>
  </v-sheet>
</template>

<script>
import referals from "./referals";

export default {
  data() {
    return {
      cardColor: "red-lighten-5",
      cardHeight: 300,
      cardImage:
        "https://lh3.googleusercontent.com/2OrUzHCRSI-V46Z1qJBh90usG6OkKwCbXN80FbrjkWoQz4VfoJjNAoQHLHPQRZWH7dI_m5I1gi48h6xMJ5pK6kkdXmUnXPe4VqwvEdo4QeWRjLV9Oew=w2400-rj",
      imgWidth: 128,
      referals: referals,
    };
  },

  methods: {
    open(link) {
      window.open(link, "_blank");
    },
  },
};
</script>

<style>
a {
  color: black;
  text-decoration: none; /* no underline */
}

.card-image {
  background-size: cover;
  background-position: center center;
}

.text-wrap {
  word-wrap: break-word;
}

.app-img > .v-img__img {
  border-radius: 20%;
  background-color: white;
}
</style>

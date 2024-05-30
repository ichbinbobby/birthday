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
                ボビーの<br>誕生日会
              </span>

              <div class="text-lg-h5 text-md-h5 text-sm-h6 text-xs-h6 pa-2">
                Am Samstag den 22.06 ab 14 Uhr feiere ich meinen Geburtstag und
                ihr seit herzlich eingeladen. Nebenbei ist auch Feurigel
                Community Day Classic.
              </div>

              <a
                href="https://goo.gl/maps/YNhGsEjYxDbQ1Jvq5"
                target="_blank"
                rel="noopener"
              >
                <v-btn
                  prepend-icon="mdi-map-marker"
                  variant="outlined"
                >
                  <template #prepend>
                    <v-icon />
                  </template>

                  <span class="text-lg-button text-md-button text-sm-button text-xs-button">
                    Monbijoupark
                  </span>
                </v-btn>
              </a>

              <div class="text-lg-h5 text-md-h5 text-sm-h6 text-xs-h6 pa-2">
                Bringt Essen und Trinken mit. Decken, Spiele und Hunde sind auch
                gern gesehen.
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
                  class="mt-4 ml-4 app-img"
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
      cardHeight: 350,
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

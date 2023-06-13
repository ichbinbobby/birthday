<template>
  <v-sheet>
    <v-layout>
      <!-- The class fill-height applies height: 100% to an element. When applied to v-container it will also set align-items: center -->
      <v-container
        fill-height
      >
        <v-card
          class="text-center d-flex"
          color="primary"
          elevation="0"
          min-height="500"
        >
          <v-row
            align="center"
            no-gutters
          >
            <v-col />

            <v-col cols="6">
              <span class="text-lg-h1 text-md-h1 text-sm-h2 text-xs-h2 pa-2">
                Happy Birthday
              </span>

              <div class="text-lg-h5 text-md-h5 text-sm-h6 text-xs-h6 pa-2">
                Ich brauche keine materiellen Dinge, aber hier sind ein paar Optionen, falls ihr etwas tun möchtet.
              </div>
            </v-col>

            <v-col />
          </v-row>
        </v-card>

        <v-main style="min-height: 300px;">
          <v-row class="pt-4">
            <v-col>
              <v-card
                :color="cardColor"
                :height="cardHeight"
                :max-width="cardMaxWidth"
                elevation="0"
                @click="open('https://pokemongolive.com/refer?code=VJ4Y927TK&source=INVITE_PAGE')"
              >
                <v-img
                  :width="imgWidth"
                  src="https://play-lh.googleusercontent.com/0vpq7Mu6ZEloYsC6kJFJRRHidRQzZf9loRcOcBh03GT2DNQiX_Z-uS9tyYuaHZIDKCI"
                  class="pt-4 pl-4"
                />

                <v-card-title>
                  Kostenloses Spiel für Smartphones
                </v-card-title>

                <v-card-text>
                  Wenn du meinen Empfehlungscode VJ4Y927TK verwendest, um Pokémon GO beizutreten oder zurückzukommen, erhältst du einen Willkommensbonus, besondere Belohnungen und mehr.
                </v-card-text>
              </v-card>
            </v-col>

            <v-col>
              <v-card
                :color="cardColor"
                :height="cardHeight"
                :max-width="cardMaxWidth"
                elevation="0"
                @click="open('https://tomorrow.one/?r=YeDyJynS')"
              >
                <v-img
                  :width="imgWidth"
                  src="https://play-lh.googleusercontent.com/GQ_CWKv7DFM1i2qGJhD2n_2-Jizet83RXBFaw82LyEDTPJlXePRJODJUh1Q8hka-b0Y"
                  class="pt-4 pl-4"
                />

                <v-card-title>
                  Nachhaltiges Konto
                </v-card-title>

                <v-card-text>
                  Verwende meinen Code für deine Kontoeröffnung und du bekommst 1 Freimonat! Außerdem werden für uns beide jeweils 3m² Land in Südafrika renaturiert 🌱
                </v-card-text>
              </v-card>
            </v-col>

            <v-col>
              <v-card
                :color="cardColor"
                :height="cardHeight"
                :max-width="cardMaxWidth"
                elevation="0"
                @click="open('https://www.netzclub.net/einladung-folgen?ic=7W4-VZL-NEG')"
              >
                <v-img
                  :width="imgWidth"
                  src="https://play-lh.googleusercontent.com/sKmpsdhvuo6N4zQKzIsUbuwzMDsqKq2P7FW32rDk7NjFXoAEUVTFybnvuPoGTpDTBx0"
                  class="pt-4 pl-4"
                />

                <v-card-title>
                  Kostenlose Prepaid-SIM
                </v-card-title>

                <v-card-text>
                  netzclub schenkt dir pro Monat 200mb Datenvolumen und zusätzlich bekommst du mit dem Einladungscode 7W4-VZL-NEG einmalig 10GB Datenvolumen zusätzlich.
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
export default {
    data() {
      return {
        cardColor: 'deep-purple-lighten-4',
        cardHeight: 320,
        cardMaxWidth: null,
        imgWidth: 200
      }
    },

   methods: {
    open(link) {
      window.open(link, '_blank');
    }
   },     
}
</script>

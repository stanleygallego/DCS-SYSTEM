<script setup>
import { useDisplay } from 'vuetify'

const { mobile } = useDisplay()
</script>

<template>
  <v-container fluid class="pa-6 about-us-container">
    <v-btn icon>
      <RouterLink to="/">
        <v-icon>mdi-arrow-left</v-icon>
      </RouterLink>
    </v-btn>
    <v-row class="justify-center">
      <v-col cols="12" md="12">
        <v-card flat class="pa-8 rounded-xl about-card">
          <h2 class="text-center text-h2 mb-8 font-weight-bold">ABOUT US</h2>

          <v-row>
            <!-- Left Text Box -->
            <v-col cols="12" md="6">
              <v-card class="pa-3 text-card" color="#455546" elevation="0">
                <p class="text-white text-h3 text-center">
                  We guarantee that our solid wood products meet the highest quality standards. With
                  precision craftsmanship, we create Kitchen Furniture, Living Room Furniture,
                  Bedroom Furniture, and more customized to your specifications.
                </p>
              </v-card>
            </v-col>

            <!-- Right Image Grid -->
            <v-col cols="12" md="6">
              <v-row class="g-4">
                <v-col cols="6">
                  <v-img src="/path-to-your-image1.jpg" aspect-ratio="1" class="rounded-lg"></v-img>
                </v-col>

                <v-col cols="6">
                  <v-img src="/path-to-your-image2.jpg" aspect-ratio="1" class="rounded-lg"></v-img>
                </v-col>

                <v-col cols="12">
                  <v-img
                    src="/path-to-your-image3.jpg"
                    aspect-ratio="2"
                    class="rounded-lg mt-4"
                  ></v-img>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.about-us-container {
  background-color: #2f3e2f; /* dark green background */
  min-height: 100vh;
}

.about-card {
  background-color: #2f3e2f;
}

.text-card {
  border-radius: 16px;
}

.g-4 {
  gap: 1rem;
}
</style>

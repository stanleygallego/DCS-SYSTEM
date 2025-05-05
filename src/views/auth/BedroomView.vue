<script setup>
import { ref } from 'vue'

import { useDisplay } from 'vuetify'

const { mobile } = useDisplay()

const images = ref([
  'https://unsplash.com/photos/brown-kitchen-cabinet-with-kitchen-island-ykHFS4Ul64U',
  'https://unsplash.com/photos/a-modern-kitchen-with-a-bar-and-stools-80DAbtNfh4k',
  'https://unsplash.com/photos/white-and-black-gas-range-oven-VgyN_CWXQVM',
  'https://unsplash.com/photos/brown-wooden-kitchen-cabinet-JDBVXignFdA',
  'https://unsplash.com/photos/brown-wooden-shelf-CX8ooha2yLA',
  'https://unsplash.com/photos/white-wooden-kitchen-cabinet-and-white-kitchen-counter-UDDULE_eIBYs',
  'https://unsplash.com/photos/a-room-with-a-table-and-chairs-BdU_E9nv1yY',
  'https://unsplash.com/photos/yellow-armchair-and-stool-beside-wooden-nightstand-by-the-wall-near-glass-window-and-bed-g_8MrEZAvyE',
  'https://unsplash.com/photos/gray-sofa-seet-f8egRYt5RGk',
  'https://unsplash.com/photos/empty-black-plastic-tub-chair-ssbgw3cKdXg',
  'https://unsplash.com/photos/a-living-room-filled-with-furniture-and-a-large-window-8fY8lWL6MfU',
  'https://unsplash.com/photos/a-living-room-filled-with-furniture-and-a-window-j6VEVVaYauc',
  'https://unsplash.com/photos/modern-living-room-interior-with-yellow-armchair-and-floor-lamp-3d-rendering-WMrdj6KgET4',
  'https://unsplash.com/photos/brown-leather-2-seat-sofa-bpg-ngqrPc8',
  'https://unsplash.com/photos/black-cat-OzqieLcs464',
])
const goToShop = (images) => {
  router.push({ name: '/Shop', params: { images } })
}
</script>

<template>
  <v-app>
    <v-main>
      <v-container fluid class="pa-0" style="background-color: #2e3b32; min-height: 100vh">
        <!-- Toolbar/Header -->
        <v-app-bar color="#3A2C26" dense dark>
          <v-btn icon>
            <RouterLink to="/shop">
              <v-icon>mdi-arrow-left</v-icon>
            </RouterLink>
          </v-btn>
          <v-toolbar-title class="text-center w-100">BEDROOM FURNITURES</v-toolbar-title>
        </v-app-bar>

        <!-- Image Grid -->
        <v-container fluid class="py-6">
          <v-row dense>
            <v-col
              v-for="(item, index) in images"
              :key="index"
              cols="4"
              class="d-flex justify-center"
            >
              <v-img :src="item" aspect-ratio="3/4" class="rounded-lg" cover></v-img>
            </v-col>
          </v-row>
        </v-container>
      </v-container>
    </v-main>
  </v-app>
</template>
<style scoped>
.v-img {
  border: 2px solid rgba(255, 255, 255, 0.1);
}
</style>

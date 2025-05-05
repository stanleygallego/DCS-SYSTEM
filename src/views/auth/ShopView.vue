<script setup>
import { useRouter } from 'vue-router'
import { useDisplay } from 'vuetify'

const { mobile } = useDisplay()
const router = useRouter()

const categories = [
  { label: 'Kitchen Furniture', routeName: 'kitchen' },
  { label: 'Living Room Furniture', routeName: 'living' },
  { label: 'Bedroom Furniture', routeName: 'bedroom' },
  { label: 'Customize Furnitures', routeName: 'customize' },
]

const goToGallery = (routeName) => {
  router.push({ name: routeName })
}

const goBackToHome = () => {
  router.push({ name: '/' }) // Or use router.back()
}
</script>

<template>
  <v-app>
    <v-main>
      <v-container fluid style="background-color: #2e3b32; min-height: 100vh">
        <!-- Back Button -->
        <v-btn icon @click="goBackToHome" class="ma-2">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>

        <!-- Category Buttons -->
        <v-container fluid class="py-6">
          <v-row justify="center" align="center" dense>
            <v-col
              v-for="(category, index) in categories"
              :key="index"
              cols="6"
              class="d-flex justify-center"
            >
              <v-btn
                class="rounded-lg mt-5"
                color="#6B7D75"
                style="height: 240px; width: 350px; font-size: 12px"
                @click="goToGallery(category.routeName)"
              >
                {{ category.label }}
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-container>
    </v-main>
  </v-app>
</template>

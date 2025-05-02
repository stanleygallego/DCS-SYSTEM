<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <v-container fluid class="pa-0">
    <v-row no-gutters>
      <!-- Left Section (Dark) -->
      <v-col cols="12" md="6" class="d-flex flex-column justify-center align-center hero-left">
        <v-btn color="brown" class="mb-4"> WOOD FURNITURE </v-btn>

        <h1 class="text-h3 font-weight-bold mb-2"><span>ELEVATE</span> YOUR SPACE</h1>

        <h3 class="text-subtitle-1 font-weight-bold mb-4">with handcrafted wood furniture</h3>

        <p class="text-body-1 text-center px-6">
          Where timeless elegance meets lasting durability. Each piece is crafted with passion,
          precision, and the finest materials to bring warmth and sophistication to your home.
        </p>

        <v-btn color="brown-darken-3" class="mt-6" size="large" to="/shop"> Shop Now </v-btn>
      </v-col>

      <!-- Right Section (Image/White) -->
      <v-col cols="12" md="6" class="hero-right d-flex flex-column justify-center align-center">
        <div class="d-flex justify-end align-center w-100 pr-6 pt-4">
          <RouterLink>
            <v-btn variant="text" class="text-black" to="/about"> About Us </v-btn>
          </RouterLink>
          <v-avatar size="40" class="ml-4">
            <v-icon>mdi-account-circle</v-icon>
          </v-avatar>
        </div>

        <v-img src="/path-to-your-arte-en-madera-image.png" class="mt-8" width="300"></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.hero-left {
  background-color: #2f3e2f; /* dark greenish */
  min-height: 100vh;
  clip-path: polygon(0 0, 85% 0, 100% 25%, 100% 100%, 0% 100%);
  color: white;
}

.hero-right {
  background-color: #ffffff;
  min-height: 100vh;
}

h1 span {
  margin-right: 0.3em;
  color: #d6a65c;
}
</style>

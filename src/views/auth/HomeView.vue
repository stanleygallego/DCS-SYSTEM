<script setup>
import AppLayout from '@/components/layout/AppLayout.vue'
</script>

<template>
  <v-container fluid class="pa-0">
    <v-row no-gutters>
      <!-- Left Section (Dark) -->
      <v-col cols="12" md="6" class="d-flex flex-column justify-center align-center hero-left">
        <v-btn color="brown" class="mb-15"> WOOD FURNITURE </v-btn>

        <h1 class="text-h2 font-weight-bold mb-2">
          <span><u>ELEVATE YOUR SPACE</u></span>
        </h1>

        <h3 class="text-h4 font-weight-bold mb-4">
          <u>with handcrafted wood furniture</u>
        </h3>

        <p class="text-body-1 text-center px-6 mb-16">
          Where timeless elegance meets lasting durability. Each piece is crafted with passion,
          precision, and the finest materials to bring warmth and sophistication to your home.
        </p>

        <v-btn color="black" class="mt-15" size="large" to="/shop">
          Shop Now
        </v-btn>
      </v-col>

      <!-- Right Section (Image/White) -->
      <v-col cols="12" md="6" class="hero-right d-flex flex-column justify-center align-center">
        <div class="d-flex justify-end align-center w-100 pr-6 pt-4">
          <v-btn variant="text" class="text-black" to="/about"> About Us </v-btn>

          <v-avatar size="40" class="ml-4">
            <RouterLink to="/login">
              <v-btn icon to="/login" variant="text" class="text-black">
                <v-icon>mdi-account-circle</v-icon>
              </v-btn>
            </RouterLink>
          </v-avatar>
        </div>

        <!-- Logo Image inserted here -->
        <v-img
          src="/public/images/logo1.png"
          contain
          max-width="300"
          class="mt-10"
        />
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
  color: black;
}
</style>

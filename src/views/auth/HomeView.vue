<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <v-app class="full-height">
    <v-app-bar app flat color="transparent" elevation="0" class="nav-bar">
      <v-spacer></v-spacer>
      <v-btn variant="text" class="font-weight-medium me-4" to="/about"> ABOUT US </v-btn>
      <v-btn icon color="black" to="/login">
        <v-icon class="me-5">mdi-account-circle</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main class="pa-0 ma-0 full-height">
      <div class="hero-container">
        <div class="brown-section">
          <div class="content-wrapper">
            <v-chip
              variant="outlined"
              color="white"
              class="mb-8 px-4 py-2 text-white wood-furniture-chip"
            >
              WOOD FURNITURE
            </v-chip>

            <h1 class="text-h3 text-sm-h2 text-md-h1 font-weight-bold text-black mb-4">
              ELEVATE YOUR SPACE
            </h1>

            <h2 class="text-h5 text-sm-h4 text-md-h3 font-weight-medium text-white mb-6">
              with handcrafted wood furniture
            </h2>

            <p class="text-white mb-12 description-text">
              Where timeless elegance meets lasting durability. Each piece is crafted with passion,
              precision, and the finest materials to bring warmth and sophistication to your home.
            </p>

            <v-btn
              color="black"
              size="large"
              class="text-white px-8 py-3 font-weight-medium shop-now-btn"
              to="/shop"
            >
              SHOP NOW
            </v-btn>
          </div>
        </div>

        <div class="white-section d-none d-md-block"></div>
      </div>
    </v-main>
  </v-app>
</template>

<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
}
</style>

<style scoped>
.full-height {
  height: 100vh !important;
  min-height: 100vh !important;
  max-height: 100vh !important;
  overflow: hidden;
}

.nav-bar {
  position: absolute !important;
  top: 0;
  right: 0;
  z-index: 10;
  background-color: transparent !important;
}

.hero-container {
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
}

.brown-section {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #75584a;
  height: 100vh;
  width: 100%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0;
}

.content-wrapper {
  max-width: 600px;
  margin-left: 2rem;
  padding: 0 1rem;
}

.white-section {
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  background-color: #75584a;
  z-index: 0;
  clip-path: polygon(30% 0, 100% 0, 100% 100%, 0% 100%);
}

.wood-furniture-chip {
  border-color: rgba(255, 255, 255, 0.3) !important;
  letter-spacing: 1px;
}

.description-text {
  line-height: 1.6;
}

.shop-now-btn {
  letter-spacing: 1px;
  text-transform: uppercase;
}

@media (min-width: 960px) {
  .brown-section {
    width: 75%;
  }

  .content-wrapper {
    margin-left: 3rem;
  }
}

@media (min-width: 1200px) {
  .content-wrapper {
    margin-left: 6rem;
  }
}
</style>

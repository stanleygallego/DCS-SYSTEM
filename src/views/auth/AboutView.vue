<script setup></script>

<template>
  <v-app>
    <div class="about-page">
      <RouterLink to="/">
        <v-btn icon class="ma-4" color="white" variant="text">
          <div>
            <v-icon class="black">mdi-arrow-left</v-icon>
          </div>
        </v-btn>
      </RouterLink>

      <v-container class="text-center py-10">
        <h1 class="text-h3 font-weight-medium text-white mb-10">About Us</h1>

        <v-row class="justify-center">
          <v-col cols="12" md="5">
            <v-card class="pa-6 rounded-lg text-white" color="#5D4037" elevation="0">
              <div id="body" class="text-left text-bold">
                We guarantee that our solid wood products meet the highest quality standards. With
                precision craftsmanship and we create Kitchen Furniture, Living Room Furniture,
                Bedroom Furniture, and more customized to your specifications.
              </div>
            </v-card>
          </v-col>

          <v-col cols="12" md="5">
            <div class="image-gallery">
              <v-img
                src="/images/images/kape.jpg"
                class="gallery-image top-image"
                height="200"
                cover
              ></v-img>

              <v-img
                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                class="gallery-image middle-image"
                height="150"
                cover
              ></v-img>

              <v-img
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                class="gallery-image bottom-image"
                height="200"
                cover
              ></v-img>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-app>
  <v-footer class="">
    <v-row class="justify-center mt-10">
      <v-col class="text-center" cols="12" md="4">
        <v-avatar :size="200" class="elevation-12 mx-auto mb-4">
          <v-img src="images/images/ako.jpg"></v-img>
        </v-avatar>
        <div class="text-black text-subtitle-1 font-weight-medium">FRONTEND DEVELOPER</div>

        <div class="text-black text-subtitle-1 font-weight-medium">Colbhorne Stanley Gallego</div>
      </v-col>

      <v-col class="text-center" cols="12" md="4">
        <v-avatar :size="200" class="elevation-12 mx-auto mb-4">
          <v-img src="images/images/nignig.jpg"></v-img>
        </v-avatar>
        <div class="text-black text-subtitle-1 font-weight-medium">SYSTEM ANALYST</div>
        <div class="text-black text-subtitle-1 font-weight-medium">Clint Rebusa</div>
      </v-col>

      <v-col class="text-center" cols="12" md="4">
        <v-avatar :size="200" class="elevation-12 mx-auto mb-4">
          <v-img src="images/images/dan.png"></v-img>
        </v-avatar>
        <div class="text-black text-subtitle-1 font-weight-medium">FRONTEND DEVELOPER</div>

        <div class="text-black text-subtitle-1 font-weight-medium">Danilo Bituro</div>
      </v-col>
    </v-row>
  </v-footer>
</template>

<style scoped>
#body {
  font-size: 28px;
  font-weight: bold;
}
.about-page {
  background-color: #75584a;
  min-height: 100vh;
  padding-bottom: 2rem;
}

.image-gallery {
  position: relative;
  height: 400px;
}

.gallery-image {
  border-radius: 12px;
  border: 2px solid #8d6e63;
}

.top-image {
  position: absolute;
  top: 0;
  right: 0;
  width: 80%;
  z-index: 1;
}

.middle-image {
  position: absolute;
  top: 120px;
  left: 0;
  width: 60%;
  z-index: 3;
}

.bottom-image {
  position: absolute;
  bottom: 0;
  right: 20px;
  width: 75%;
  z-index: 2;
}

/* Responsive adjustments */
@media (max-width: 960px) {
  .image-gallery {
    height: 500px;
    margin-top: 2rem;
  }
}

@media (max-width: 600px) {
  .image-gallery {
    height: 400px;
  }

  .top-image,
  .bottom-image {
    width: 90%;
  }

  .middle-image {
    width: 70%;
  }
}
</style>

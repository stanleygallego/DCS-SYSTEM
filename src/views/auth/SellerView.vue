<script setup>
const artist = {
  name: 'Edgar Balod',
  phone: '+63 0772 854 095',
  address: 'Purok 2a Ampayon, Butuan City',
  image:
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80', // Replace with actual image
}
</script>

<template>
  <v-container fluid class="pa-6 artist-container">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card flat class="pa-6 rounded-xl artist-card">
          <v-row>
            <!-- Left: Artist Image -->
            <v-col cols="12" md="5">
              <v-img :src="artist.image" aspect-ratio="1" class="rounded-lg" cover></v-img>
            </v-col>

            <!-- Right: Info -->
            <v-col cols="12" md="7" class="d-flex flex-column justify-center">
              <h3 class="text-white mb-4">Artist Name:</h3>
              <div class="text-white mb-2 d-flex align-center">
                <v-icon class="mr-2">mdi-phone</v-icon>
                {{ artist.phone }}
              </div>
              <div class="text-white mb-2 d-flex align-center">
                <v-icon class="mr-2">mdi-map-marker</v-icon>
                {{ artist.address }}
              </div>
              <div class="text-white d-flex align-center">
                <v-icon class="mr-2">mdi-facebook</v-icon>
                {{ artist.name }}
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.artist-container {
  background-color: #2f3e2f;
  min-height: 100vh;
}

.artist-card {
  background-color: #2f3e2f;
  color: white;
}
</style>

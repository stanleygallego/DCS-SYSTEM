<script setup>
// No logic yet
</script>

<template>
  <v-container class="d-flex align-center justify-center fill-height" fluid>
    <v-row class="d-flex" justify="center" align="center" no-gutters>
      <!-- First Card -->
      <v-col cols="12" md="4">
        <v-card
          class="click-card"
          elevation="8"
          rounded
        >
          <!-- Add content here if needed -->
        </v-card>
      </v-col>

      <!-- Second Card -->
      <v-col cols="12" md="6">
        <v-card
          class="about-card pa-4"
          elevation="8"
          style="background-color: #171717; color: white; border-top-right-radius: 20px; border-bottom-left-radius: 20px;"
        >
          <v-card-text class="text-center">
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo corporis quae ducimus
              obcaecati dolore sapiente asperiores officiis. Praesentium quisquam, id quam inventore
              consequuntur vel necessitatibus error tempora. Magnam, ducimus amet.
            </span>

            <div class="info mt-3">Short description about yourself.</div>

            <div class="share mt-4 d-flex justify-center gap-4">
              <!-- Placeholder icons or links -->
              <v-icon color="white">mdi-share</v-icon>
              <v-icon color="white">mdi-email</v-icon>
              <v-icon color="white">mdi-linkedin</v-icon>
            </div>
          </v-card-text>

          <v-card-actions class="justify-center">
            <v-btn color="white" class="text-black font-weight-bold" rounded @click="">
              Click Me
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.click-card {
  width: 300px;
  height: 500px;
  background: rgba(217, 217, 217, 0.58);
  border: 1px solid white;
  box-shadow: 12px 17px 51px rgba(0, 0, 0, 0.22);
  backdrop-filter: blur(6px);
  border-radius: 17px;
  cursor: pointer;
  transition: all 0.5s;
  display: flex;
  flex-direction: column;
  font-weight: bolder;
  color: black;
  padding: 20px;
}

.click-card:hover {
  border: 1px solid black;
  transform: scale(1.05);
}

.click-card:active {
  transform: scale(0.95) rotateZ(1.7deg);
}

.about-card span {
  font-weight: bold;
  display: block;
  font-size: 1em;
  margin-top: 10px;
}

.about-card .info {
  font-weight: 400;
  font-size: 0.72em;
}

.gap-4 > * + * {
  margin-left: 1em;
}
</style>

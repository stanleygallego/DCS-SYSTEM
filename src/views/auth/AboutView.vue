<template>
  <v-container class="py-12">
    <!-- Hero Section -->
    <section class="text-center mb-20">
      <v-row justify="center">
        <v-col cols="12" md="8">
          <h1 class="text-h3 font-weight-bold mb-4">About Our Company</h1>
          <p class="text-subtitle-1 mb-6">
            Blending Traditional Woodcraft with Modern Living — Because Your Space Deserves More
            Than the Ordinary.
          </p>
        </v-col>
      </v-row>
    </section>

    <!-- Our Values Section -->
    <section class="mb-20">
      <h2 class="text-h4 font-weight-bold mb-10 text-center mt-5">Our Values</h2>
      <v-row>
        <v-col cols="12" md="4" v-for="(value, i) in values" :key="i">
          <v-card elevation="3">
            <v-card-text class="text-center">
              <v-avatar class="mb-4" color="primary" size="48">
                <v-icon color="white">{{ value.icon }}</v-icon>
              </v-avatar>
              <h3 class="text-h6 font-semibold mb-2">{{ value.title }}</h3>
              <p class="text-body-2 text-muted">{{ value.description }}</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </section>

    <!-- Contact Section -->
  </v-container>
</template>

<script setup>
import { ref } from 'vue'

const values = ref([
  {
    title: 'Passion',
    description: "We're driven by passion for what we do and the impact we create.",
    icon: 'mdi-heart',
  },
  {
    title: 'Collaboration',
    description: 'We believe in teamwork and building strong relationships.',
    icon: 'mdi-account-group',
  },
  {
    title: 'Excellence',
    description: 'We constantly push boundaries and exceed expectations.',
    icon: 'mdi-target',
  },
])
</script>

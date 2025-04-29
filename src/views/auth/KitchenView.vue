<script setup>
import { ref } from 'vue'

import { useDisplay } from 'vuetify'

const { mobile } = useDisplay()

const images = ref([
  'https://images.unsplash.com/photo-1744719256525-3deab6fd16ac?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://source.unsplash.com/301x400/?kitchen,table',
  'https://source.unsplash.com/302x400/?kitchen,chairs',
  'https://images.unsplash.com/photo-1744479357124-ef43ab9d6a9f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://source.unsplash.com/304x400/?kitchen,dining',
  'https://source.unsplash.com/305x400/?kitchen,stools',
  'https://images.unsplash.com/photo-1745330612914-95e0a40f70cc?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://source.unsplash.com/307x400/?kitchen,cabinets',
  'https://source.unsplash.com/308x400/?kitchen,sink',
  'https://images.unsplash.com/photo-1745330612914-95e0a40f70cc?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://source.unsplash.com/310x400/?kitchen,utensils',
  'https://source.unsplash.com/311x400/?kitchen,modern',
  'https://images.unsplash.com/photo-1745330612914-95e0a40f70cc?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://source.unsplash.com/313x400/?kitchen,design',
  'https://source.unsplash.com/314x400/?kitchen,cozy',
])
</script>

<template>
  <v-app>
    <v-main>
      <v-container fluid class="pa-0" style="background-color: #2e3b32; min-height: 100vh">
        <!-- Toolbar/Header -->
        <v-app-bar color="#3A2C26" dense dark>
          <v-btn icon>
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>
          <v-toolbar-title class="text-center w-100">KITCHEN FURNITURE</v-toolbar-title>
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

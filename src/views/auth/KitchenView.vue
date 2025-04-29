<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()

const images = ref([
  {
    src: 'https://images.unsplash.com/photo-1745870297558-367a83462926?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    route: '/product'
  },
  {
    src: '',
    route: '/page2'
  },
  {
    src: '',
    route: '/page3'
  }
])

function goToPage(route) {
  router.push(route)
}
</script>

<template>
  <v-item-group>
    <v-container fluid style="background-color: #2e3b32; min-height: 100vh">
      <v-row>
        <v-col
          v-for="(image, index) in images"
          :key="index"
          cols="12"
          md="4"
        >
          <v-card
            class="d-flex align-center justify-center"
            height="200"
            @click="goToPage(image.route)"
            style="cursor: pointer;"
          >
            <v-img
              :src="image.src"
              height="100%"
              width="100%"
              cover
            >
              <template #placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
                >
                  <v-progress-circular indeterminate color="grey lighten-5" />
                </v-row>
              </template>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
</template>



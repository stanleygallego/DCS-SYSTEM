<script setup>
import { ref } from 'vue'

const product = ref({
  name: '',
  category: '',
  description: '',
  price: null,
  photo: null,
})

const submitProduct = () => {
  console.log('Submitted Product:', product.value)
  // You can add your API or state handling logic here
}
</script>

<template>
  <v-container class="pa-8" style="background-color: #6d4c41; min-height: 100vh" fluid>
    <v-btn icon variant="plain" color="white" class="mb-4">
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>

    <v-card
      class="mx-auto pa-8"
      max-width="600"
      style="background-color: #6d4c41; border-radius: 20px"
    >
      <div class="d-flex justify-space-between align-center mb-6">
        <h2 class="text-white font-weight-bold">DSC WoodWorks</h2>
        <RouterLink to="/"><v-btn color="white" text>Dashboard</v-btn></RouterLink>
      </div>

      <v-form>
        <v-text-field
          label="Product Name"
          v-model="product.name"
          variant="outlined"
          hide-details
          class="mb-4"
          color="white"
        ></v-text-field>

        <v-text-field
          label="Category"
          v-model="product.category"
          variant="outlined"
          hide-details
          class="mb-4"
          color="white"
          type="text"
        ></v-text-field>

        <v-textarea
          label="Description"
          v-model="product.description"
          variant="outlined"
          hide-details
          class="mb-4"
          color="white"
        ></v-textarea>

        <v-text-field
          label="Price"
          v-model="product.price"
          type="number"
          variant="outlined"
          hide-details
          class="mb-4"
          color="white"
        ></v-text-field>

        <v-file-input
          label="Photo"
          v-model="product.photo"
          variant="outlined"
          hide-details
          class="mb-6"
          color="white"
        ></v-file-input>

        <v-btn color="white" variant="flat" class="text-black" @click="submitProduct">
          Add Product
        </v-btn>
      </v-form>
    </v-card>
  </v-container>
</template>

<style scoped>
.v-label {
  color: #ccc !important;
}
</style>

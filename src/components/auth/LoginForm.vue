<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const showPassword = ref(false)
</script>

<template>
  <v-form>
    <v-text-field
      v-model="email"
      label="Email"
      type="email"
      prepend-inner-icon="mdi-email"
      required
    ></v-text-field>

    <v-text-field
      v-model="password"
      :type="showPassword ? 'text' : 'password'"
      label="Password"
      prepend-inner-icon="mdi-lock"
      :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
      @click:append-inner="showPassword = !showPassword"
      required
    ></v-text-field>

    <RouterLink to="/home">
      <v-btn type="submit" color="brown" block class="mt-4" to="/home" text-decoration="none">
        Login
      </v-btn>
    </RouterLink>
  </v-form>
</template>

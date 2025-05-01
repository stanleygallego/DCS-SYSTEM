<script setup>
import { ref } from 'vue'

const isPasswordVisible = ref(false)
const isPasswordConfirmVisible = ref(false)
</script>

<template>
  <v-form fast-fail @submit.prevent>
    <v-row>
      <v-col cols="12" md="6">
        <v-text-field label="First Name" variant="outlined"></v-text-field>
      </v-col>

      <v-col cols="12" md="6">
        <v-text-field label="Last Name" variant="outlined"></v-text-field>
      </v-col>

      <v-col cols="12" md="6">
        <v-text-field label="Email" variant="outlined"></v-text-field>
      </v-col>

      <v-col cols="12" md="6">
        <v-text-field
          prepend-inner-icon="mdi mdi-lock"
          label="Password"
          :type="isPasswordVisible ? 'text' : 'password'"
          :append-icon="isPasswordVisible ? 'mdi mdi-eye-off-outline' : 'mdi mdi-eye-outline'"
          @click:append-inner="isPasswordVisible = !isPasswordVisible"
          type="password"
          variant="outlined"
        ></v-text-field>
      </v-col>

      <v-col cols="12" md="6">
        <v-text-field label="Confirm Password" type="password" variant="outlined"></v-text-field>
      </v-col>
      <v-col cols="12" md="6">
        <v-btn class="mt-2" type="submit" block color="brown" prepend-icon="mdi-account-plus"
          >Register</v-btn
        >
      </v-col>
    </v-row>
  </v-form>
</template>

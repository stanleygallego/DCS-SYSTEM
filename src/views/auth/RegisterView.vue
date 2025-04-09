<script setup>
import AppLayout from '@/components/layout/AppLayout.vue'
import RegisterForm from '@/components/auth/RegisterForm.vue'
import { useDisplay } from 'vuetify'

const { mobile } = useDisplay()
</script>

<template>
  <AppLayout>
    <template #content>
      <v-row class="d-flex justify-center rounded-circle">
        <v-col cols="12" md="6" class="pt-16">
          <v-card class="mx-auto" elevation="24">
            <v-card-title class="text-center">
              <v-img class="mx-auto" src="/images/logo4.png" width="25%"></v-img>
              <h5 class="font-weight-black">DSC Woodworks System</h5>
              <P class="font-weight-bold">Registration Form</P>
            </v-card-title>

            <v-card-text class="bg-surface-light pt-4">
              <v-divider class="my-5"></v-divider>

              <RegisterForm></RegisterForm>

              <v-divider class="my-5"></v-divider>

              <h5 class="text-center">
                Already have an account?
                <RouterLink class="text-brown font-weight-black" to="/"
                  >Click here to Login</RouterLink
                >
              </h5>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </template>
  </AppLayout>
</template>

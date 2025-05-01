<script setup>
import {
  requiredValidator,
  emailValidator,
  passwordValidator,
  confirmedValidator,
} from '@/utils/validators'
import { ref } from 'vue'

const formDataDefault = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  password_confirmation: '',
}

const formData = ref({
  ...formDataDefault,
})

const isPasswordVisible = ref(false)
const isPasswordConfirmVisible = ref(false)

const refVForm = ref()

const onSubmit = () => {
  alert(formData.value.email)
}

const onFormSubmit = () => {
  refVForm.value?.validate().then(({ valid }) => {
    if (valid) onSubmit()
  })
}
</script>

<template>
  <v-form ref="refVForm" @submit.prevent="onFormSubmit">
    <v-row>
      <v-col cols="12" md="6">
        <v-text-field
          v-model="formData.firstname"
          label="First Name"
          :rules="[requiredValidator]"
          variant="outlined"
        ></v-text-field>
      </v-col>

      <v-col cols="12" md="6">
        <v-text-field
          v-model="formData.lastname"
          label="Last Name"
          :rules="[requiredValidator]"
          variant="outlined"
        ></v-text-field>
      </v-col>

      <v-col cols="12" md="6">
        <v-text-field
          v-model="formData.email"
          label="Email"
          prepend-icon="mdi-email-outline"
          :rules="[requiredValidator, emailValidator]"
          variant="outlined"
        ></v-text-field>
      </v-col>

      <v-col cols="12" md="6">
        <v-text-field
          v-model="formData.password"
          prepend-inner-icon="mdi mdi-lock"
          label="Password"
          :type="isPasswordVisible ? 'text' : 'password'"
          :append-icon="isPasswordVisible ? 'mdi mdi-eye-off-outline' : 'mdi mdi-eye-outline'"
          @click:append-inner="isPasswordVisible = !isPasswordVisible"
          type="password"
          variant="outlined"
          :rules="[requiredValidator, passwordValidator]"
        ></v-text-field>
      </v-col>

      <v-col cols="12" md="6">
        <v-text-field
          v-model="formData.password_confirmation"
          prepend-inner-icon="mdi mdi-lock"
          label="Password Confirmation "
          :type="isPasswordConfirmVisible ? 'text' : 'password'"
          :append-icon="
            isConfirmPasswordVisible ? 'mdi mdi-eye-off-outline' : 'mdi mdi-eye-outline'
          "
          @click:append-inner="isPasswordConfirmVisible = !isPasswordConfirmVisible"
          type="password"
          variant="outlined"
          :rules="[
            requiredValidator,
            confirmedValidator(formDatapassword_confirmation, formData.password),
          ]"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-btn class="mt-2" type="submit" block color="brown" prepend-icon="mdi-account-plus"
      >Register</v-btn
    >
  </v-form>
</template>

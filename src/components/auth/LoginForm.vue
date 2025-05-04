<script setup>
import { requiredValidator, emailValidator } from '@/utils/validators'
import { ref } from 'vue'

const showPassword = ref(false)

const refVForm = ref()

const formDataDefault = {
  email: '',
  password: '',
}

const formData = ref({
  ...formDataDefault,
})

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
  <v-form ref="refVform" @submit.prevent="onFormSubmit">
    <v-text-field
      v-model="formData.email"
      label="Email"
      type="email"
      prepend-inner-icon="mdi-email-outline"
      :rules="[requiredValidator, emailValidator]"
      required
    ></v-text-field>

    <v-text-field
      v-model="formData.password"
      :type="showPassword ? 'text' : 'password'"
      label="Password"
      prepend-inner-icon="mdi-lock"
      :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
      @click:append-inner="showPassword = !showPassword"
      required
      :rules="[requiredValidator]"
    ></v-text-field>

    <v-btn
      type="submit"
      color="brown"
      prepend-icon="mdi-login"
      block
      class="mt-4"
      to="/"
      text-decoration="none"
    >
      Login
    </v-btn>
  </v-form>
</template>

<script setup>
import {
  requiredValidator,
  emailValidator,
  passwordValidator,
  confirmedValidator,
} from '@/utils/validators'
import { ref } from 'vue'
<<<<<<< HEAD
=======
import AlertNotification from '@/components/common/AlertNotification.vue'
import { supabase, formActionDefault } from '@utils/supabase/js'
>>>>>>> feat/supabase

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

<<<<<<< HEAD
const isPasswordVisible = ref(false)
const isPasswordConfirmVisible = ref(false)

const refVForm = ref()

const onSubmit = () => {
  alert(formData.value.email)
=======
const formAction = ref({
  ...formActionDefault,
})
const isPasswordVisible = ref(false)
const isPasswordConfirmVisible = ref(false)
const refVForm = ref()

const onSubmit = async () => {
  formAction.value = { ...formActionDefault }
  formAction.value.formProcess = true

  const { data, error } = await supabase.auth.signUp({
    email: formData.value.email,
    password: formAction.value.password,
    options: {
      data: {
        firstname: formData.value.firstname,
        lastname: formData.value.lastname,
      },
    },
  })

  if (error) {
    console.log(error)
    formAction.value.formErrorMessage = error.message
    formAction.value.formStatus = error.status
  } else if (data) {
    console.log(data)
    formAction.value.formSuccessMessage = 'Successfully Registered Account.'
    refVForm.value?.reset()
  }

  formAction.value.formProcess = false
>>>>>>> feat/supabase
}

const onFormSubmit = () => {
  refVForm.value?.validate().then(({ valid }) => {
    if (valid) onSubmit()
  })
}
</script>

<template>
<<<<<<< HEAD
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
=======
  <AlertNotification
    :form-success-message="formAction.formSuccessMessage"
    :form-error-message="formAction.formErrorMessage"
  ></AlertNotification>

  <v-form class="mt-5" ref="refVForm" @submit.prevent="onFormSubmit">
    <v-row>
      <v-col cols="12" md="6">
        <v-text-field
          v-model="formData.firstname"
          label="First Name"
>>>>>>> feat/supabase
          :rules="[requiredValidator]"
          variant="outlined"
        ></v-text-field>
      </v-col>

      <v-col cols="12" md="6">
        <v-text-field
<<<<<<< HEAD
          v-model="formData.email"
          label="Email"
          prepend-icon="mdi-email-outline"
          :rules="[requiredValidator, emailValidator]"
=======
          v-model="formData.lastname"
          label="Last Name"
          :rules="[requiredValidator]"
>>>>>>> feat/supabase
          variant="outlined"
        ></v-text-field>
      </v-col>

      <v-col cols="12" md="6">
        <v-text-field
<<<<<<< HEAD
=======
          v-model="formData.email"
          label="Email"
          prepend-icon="mdi-email-outline"
          :rules="[requiredValidator, emailValidator]"
          variant="outlined"
        ></v-text-field>
      </v-col>

      <v-col cols="12" md="6">
        <v-text-field
>>>>>>> feat/supabase
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
<<<<<<< HEAD
    <v-btn class="mt-2" type="submit" block color="brown" prepend-icon="mdi-account-plus"
=======
    <v-btn
      class="mt-2"
      type="submit"
      block
      color="brown"
      prepend-icon="mdi-account-plus"
      :disabled="formAction.formProcess"
      :loading="formAction.formProcess"
>>>>>>> feat/supabase
      >Register</v-btn
    >
  </v-form>
</template>

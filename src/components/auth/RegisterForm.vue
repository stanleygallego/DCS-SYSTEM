<script setup>
import {
  requiredValidator,
  emailValidator,
  passwordValidator,
  confirmedValidator,
} from '@/utils/validators'
import { ref } from 'vue'
import AlertNotification from '@/components/common/AlertNotification.vue'
import { supabase, formActionDefault } from '@/utils/supabase'
import { useRouter } from 'vue-router'

//Load pre-defined vue functions
const router = useRouter()
//Load Variables
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

const formAction = ref({
  ...formActionDefault,
})
const isPasswordVisible = ref(false)
const isPasswordConfirmVisible = ref(false)
const refVForm = ref()

//Registration Functionalities
const onSubmit = async () => {
  //Reset form action utils
  formAction.value = { ...formActionDefault }
  //Turn on Processing
  formAction.value.formProcess = true

  const { data, error } = await supabase.auth.signUp({
    email: formData.value.email,
    password: formData.value.password,
    options: {
      data: {
        firstname: formData.value.firstname,
        lastname: formData.value.lastname,
      },
    },
  })

  if (error) {
    //Add Error Message and Status Code
    console.log(error)
    formAction.value.formErrorMessage = error.message
    formAction.value.formStatus = error.status
  } else if (data) {
    console.log(data)
    //Add Success Message
    formAction.value.formSuccessMessage = 'Successfully Registered Account.'
    //Route to homepage
    router.replace('/')
  }
  //Reset Form
  refVForm.value?.reset()
  //Turn off Processing
  formAction.value.formProcess = false
}

//Trigger Validators
const onFormSubmit = () => {
  refVForm.value?.validate().then(({ valid }) => {
    if (valid) onSubmit()
  })
}
</script>

<template>
  <AlertNotification
    :form-success-message="formAction.formSuccessMessage"
    :form-error-message="formAction"
  ></AlertNotification>

  <v-form class="mt-5" ref="refVForm" @submit.prevent="onFormSubmit">
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

      <v-col cols="12">
        <v-text-field
          v-model="formData.email"
          label="Email"
          prepend-inner-icon="mdi-email-outline"
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
          :append-inner-icon="isPasswordVisible ? 'mdi mdi-eye-off-outline' : 'mdi mdi-eye-outline'"
          @click:append-inner="isPasswordVisible = !isPasswordVisible"
          type="password"
          variant="outlined"
          :rules="[requiredValidator, passwordValidator]"
        ></v-text-field>
      </v-col>

      <v-col cols="12" md="6">
        <v-text-field
          v-model="formData.password_confirmation"
          label="Password Confirmation"
          :type="isPasswordConfirmVisible ? 'text' : 'password'"
          :append-inner-icon="isPasswordConfirmVisible ? 'mdi-eye-off' : 'mdi-eye'"
          @click:append-inner="isPasswordConfirmVisible = !isPasswordConfirmVisible"
          :rules="[
            requiredValidator,
            confirmedValidator(formData.password_confirmation, formData.password),
          ]"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-btn
      class="mt-2"
      type="submit"
      block
      color="brown"
      prepend-icon="mdi-account-plus"
      :disabled="formAction.formProcess"
      :loading="formAction.formProcess"
      >Register</v-btn
    >
  </v-form>
</template>

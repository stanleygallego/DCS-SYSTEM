<script setup>
import { supabase } from '@/utils/supabase'
import { requiredValidator, emailValidator } from '@/utils/validators'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import AlertNotification from '@/components/common/AlertNotification.vue'

const router = useRouter()

// Default form data and action state
const formDataDefault = {
  email: '',
  password: '',
}

const formActionDefault = {
  formErrorMessage: '',
  formSuccessMessage: '',
  formProcess: false,
  formStatus: null,
}

// Reactive references
const formData = ref({ ...formDataDefault })
const formAction = ref({ ...formActionDefault })
const isPasswordVisible = ref(false)
const refVForm = ref()

// Submit handler
const onSubmit = async () => {
  formAction.value = { ...formActionDefault } // Reset action messages
  formAction.value.formProcess = true // Set processing state

  const { data, error } = await supabase.auth.signInWithPassword({
    email: formData.value.email,
    password: formData.value.password,
  })

  if (error) {
    console.log(error)
    formAction.value.formErrorMessage = error.message
    formAction.value.formStatus = error.status
  } else if (data) {
    console.log(data)
    formAction.value.formSuccessMessage = 'Successfully Logged In.'
    router.replace('/addproduct') // Navigate
    refVForm.value?.reset() // Reset form
  }

  formAction.value.formProcess = false // Turn off processing
}

// Validate form before submitting
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
      :type="isPasswordVisible ? 'text' : 'password'"
      label="Password"
      prepend-inner-icon="mdi-lock"
      :append-inner-icon="isPasswordVisible ? 'mdi-eye' : 'mdi-eye-off'"
      @click:append-inner="isPasswordVisible = !isPasswordVisible"
      :rules="[requiredValidator]"
      required
    ></v-text-field>

    <v-btn type="submit" color="brown" prepend-icon="mdi-login" block class="mt-4" to="/addproduct">
      Login
    </v-btn>

    <!-- Optional: Display error or success message -->
    <p v-if="formAction.formErrorMessage" class="text-red-600 mt-2">
      {{ formAction.formErrorMessage }}
    </p>
    <p v-if="formAction.formSuccessMessage" class="text-green-600 mt-2">
      {{ formAction.formSuccessMessage }}
    </p>
  </v-form>
</template>

<script setup>
import { supabase, formActionDefault } from '@/utils/supabase'
import { getAvatarText } from '@/utils/helpers'
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'

//
const router = useRouter()

//
const userData = ref({
  initials: '',
  email: '',
  fullname: '',
})
const formAction = ref({
  ...formActionDefault,
})

//
const onLogOut = async () => {
  formAction.value = { ...formActionDefault }
  formAction.value.formProcess = true

  const { error } = await supabase.auth.signOut()
  if (error) {
    console.error('Error during logout:', error)
    return
  }

  formAction.value.formProcess = false
  router.replace('/')
}

const getUser = async () => {
  const {
    data: {
      user: { user_metadata: metadata },
    },
  } = await supabase.auth.getUser()

  userData.value.email = metadata.email
  userData.value.fullname = metadata.firstname + ' ' + metadata.lastname
  userData.value.initials = getAvatarText(userData.value.fullname)
}
//
onMounted(() => {
  getUser()
})
</script>

<template>
  <div>
    <v-menu min-width="200px" rounded>
      <template #activator="{ props }">
        <v-btn icon v-bind="props">
          <v-avatar color="grey-darken-4" size="large">
            <span class="text-h5">{{ userData.initials }}</span>
          </v-avatar>
        </v-btn>
      </template>

      <v-card class="mt-1">
        <v-card-text>
          <v-list>
            <v-list-item :subtitle="userData.email" :title="userData.fullname">
              <template #prepend>
                <v-avatar color="grey-darken-4" size="large">
                  <span class="text-h5">{{ userData.initials }}</span>
                </v-avatar>
              </template>
            </v-list-item>
          </v-list>

          <v-divider class="my-3"></v-divider>

          <v-btn
            prepend-icon="mdi mdi-logout"
            variant="plain"
            @click="onLogOut"
            :loading="formAction.formProcess"
            :disabled="formAction.formProcess"
          >
            Logout
          </v-btn>
        </v-card-text>
      </v-card>
    </v-menu>
  </div>
</template>

<script setup lang="ts">
import type { Form, FormErrors } from '@/types'
import AppHeader from './AppHeader.vue'
import FormTextInput from './FormTextInput.vue'

defineEmits(['submit'])

const model = defineModel<Form>({ required: true })

defineProps<{
  formErrors: FormErrors
}>()
</script>

<template>
  <AppHeader>Personal info</AppHeader>

  <p class="mt-2">Please provide your name, email address, and phone number.</p>

  <form id="form" class="mt-4 flex flex-col gap-3" @submit.prevent="$emit('submit')">
    <FormTextInput
      id="name"
      v-model="model.name"
      :error-message="formErrors.name"
      placeholder="e.g. Stephen King"
      >Name</FormTextInput
    >

    <FormTextInput
      id="email"
      v-model="model.email"
      :error-message="formErrors.email"
      placeholder="e.g. stephenking@lorem.com"
      type="email"
      >Email Address</FormTextInput
    >

    <FormTextInput
      id="phone_number"
      v-model="model.phoneNumber"
      :error-message="formErrors.phoneNumber"
      placeholder="e.g. +1 234 567 890"
      type="tel"
      >Phone Number</FormTextInput
    >

    <button type="submit" class="hidden" aria-label="Next Step"></button>
  </form>
</template>

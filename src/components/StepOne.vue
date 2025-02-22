<script setup lang="ts">
import type { Form, FormErrors } from '@/types'
import FormTextInput from './FormTextInput.vue'

defineEmits(['nameChange', 'emailChange', 'phoneNumberChange', 'submit'])

const model = defineModel<Form>({ required: true })

defineProps<{
  formErrors: FormErrors
}>()
</script>

<template>
  <h1 class="text-marine-blue text-2xl font-bold">Personal info</h1>

  <p class="text-cool-gray mt-2">Please provide your name, email address, and phone number.</p>

  <form id="form" class="mt-4 flex flex-col gap-3" @submit.prevent="$emit('submit')">
    <FormTextInput
      id="name"
      v-model.trim="model.name"
      :error-message="formErrors.name"
      placeholder="e.g. Stephen King"
      @change="$emit('nameChange')"
      >Name</FormTextInput
    >

    <FormTextInput
      id="email"
      v-model.trim="model.email"
      :error-message="formErrors.email"
      placeholder="e.g. stephenking@lorem.com"
      type="email"
      @change="$emit('emailChange')"
      >Email Address</FormTextInput
    >

    <FormTextInput
      id="phone_number"
      v-model.trim="model.phoneNumber"
      :error-message="formErrors.phoneNumber"
      placeholder="e.g. +1 234 567 890"
      type="tel"
      @change="$emit('phoneNumberChange')"
      >Phone Number</FormTextInput
    >

    <button type="submit" class="hidden" aria-label="Next Step"></button>
  </form>
</template>

<script setup lang="ts">
import validator from 'validator'
import { ref } from 'vue'
import FormTextInput from './components/FormTextInput.vue'
import StepButton from './components/StepButton.vue'

const currentStep = ref(1)
const lastAvailableStep = ref(1)

const form = ref({
  name: '',
  email: '',
  phoneNumber: '',
})

const formErrors = ref({
  name: '',
  email: '',
  phoneNumber: '',
})

function validateName() {
  if (form.value.name === '') {
    formErrors.value.name = 'This field is required'
  } else {
    formErrors.value.name = ''
  }
}

function validateEmail() {
  if (form.value.email === '') {
    formErrors.value.email = 'This field is required'
  } else if (!validator.isEmail(form.value.email)) {
    formErrors.value.email = 'Enter valid email'
  } else {
    formErrors.value.email = ''
  }
}

function validatePhoneNumber() {
  if (form.value.phoneNumber === '') {
    formErrors.value.phoneNumber = 'This field is required'
  } else if (!validator.isMobilePhone(form.value.phoneNumber)) {
    formErrors.value.phoneNumber = 'Enter valid phone number'
  } else {
    formErrors.value.phoneNumber = ''
  }
}

function validateForm(): boolean {
  validateName()
  validateEmail()
  validatePhoneNumber()

  let key: keyof typeof formErrors.value

  for (key in formErrors.value) {
    if (formErrors.value[key]) {
      return false
    }
  }

  return true
}

function onStepButtonClick(step: number) {
  if (step === currentStep.value || step > lastAvailableStep.value) return
  if (currentStep.value === 1 && validateForm() === false) return

  currentStep.value = step
}

function onSubmit() {
  if (validateForm()) currentStep.value = lastAvailableStep.value = 2
}
</script>

<template>
  <div
    class="font-ubuntu bg-magnolia flex min-h-screen flex-col gap-8 bg-[url(./img/bg-sidebar-mobile.svg)] bg-no-repeat"
  >
    <nav class="mt-8 flex gap-4 self-center">
      <StepButton
        v-for="step in 4"
        :key="step"
        :number="step"
        :active="step == currentStep"
        @click="onStepButtonClick(step)"
      />
    </nav>

    <main class="mx-4 rounded-lg bg-white px-6 py-8 shadow-lg">
      <h1 class="text-marine-blue text-2xl font-bold">Personal info</h1>

      <p class="text-cool-gray mt-2">Please provide your name, email address, and phone number.</p>

      <form id="form" class="mt-4 flex flex-col gap-3" @submit.prevent="onSubmit">
        <FormTextInput
          id="name"
          v-model.trim="form.name"
          :error-message="formErrors.name"
          placeholder="e.g. Stephen King"
          @change="validateName"
          >Name</FormTextInput
        >

        <FormTextInput
          id="email"
          v-model.trim="form.email"
          :error-message="formErrors.email"
          placeholder="e.g. stephenking@lorem.com"
          type="email"
          @change="validateEmail"
          >Email Address</FormTextInput
        >

        <FormTextInput
          id="phone_number"
          v-model.trim="form.phoneNumber"
          :error-message="formErrors.phoneNumber"
          placeholder="e.g. +1 234 567 890"
          type="tel"
          @change="validatePhoneNumber"
          >Phone Number</FormTextInput
        >

        <button type="submit" class="hidden" aria-label="Next Step"></button>
      </form>
    </main>

    <div class="absolute right-0 bottom-0 left-0 flex h-18 items-center justify-end bg-white">
      <button
        type="submit"
        form="form"
        class="bg-marine-blue hover:bg-light-marine-blue mr-4 h-10 rounded-sm px-4 text-sm font-bold text-white"
      >
        Next Step
      </button>
    </div>
  </div>
</template>

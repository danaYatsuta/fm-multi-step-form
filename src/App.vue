<script setup lang="ts">
import validator from 'validator'
import { ref, watch } from 'vue'
import StepButton from './components/StepButton.vue'
import StepOne from './components/StepOne.vue'
import StepTwo from './components/StepTwo.vue'
import type { Form, FormErrors } from './types.d.ts'

type Step = 1 | 2 | 3 | 4

const currentStep = ref<Step>(2)
const lastAvailableStep = ref<Step>(1)

const form = ref<Form>({
  name: '',
  email: '',
  phoneNumber: '',
  plan: 'arcade',
  isYearly: false,
})

const formErrors = ref<FormErrors>({})

function validateName() {
  if (form.value.name === '') {
    formErrors.value.name = 'This field is required'
  } else {
    delete formErrors.value.name
  }
}

function validateEmail() {
  if (form.value.email === '') {
    formErrors.value.email = 'This field is required'
  } else if (!validator.isEmail(form.value.email)) {
    formErrors.value.email = 'Enter valid email'
  } else {
    delete formErrors.value.email
  }
}

function validatePhoneNumber() {
  if (form.value.phoneNumber === '') {
    formErrors.value.phoneNumber = 'This field is required'
  } else if (!validator.isMobilePhone(form.value.phoneNumber)) {
    formErrors.value.phoneNumber = 'Enter valid phone number'
  } else {
    delete formErrors.value.phoneNumber
  }
}

watch(() => form.value.name, validateName)
watch(() => form.value.email, validateEmail)
watch(() => form.value.phoneNumber, validatePhoneNumber)

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

function onStepButtonClick(step: Step) {
  if (step === currentStep.value || step > lastAvailableStep.value) return
  if (currentStep.value === 1 && validateForm() === false) return

  currentStep.value = step
}

function onSubmit() {
  if (validateForm()) currentStep.value = lastAvailableStep.value = 2
}

function onNextStepButtonClick() {
  switch (currentStep.value) {
    case 1:
      onSubmit()
      break
    case 2:
      currentStep.value = 3
      lastAvailableStep.value = Math.max(lastAvailableStep.value, 3) as Step
      break
  }
}
</script>

<template>
  <div
    class="font-ubuntu bg-magnolia text-cool-gray flex min-h-screen flex-col justify-between gap-6 bg-[url(./img/bg-sidebar-mobile.svg)] bg-no-repeat"
  >
    <div class="mt-8 flex flex-col gap-8">
      <nav class="flex gap-4 self-center">
        <StepButton
          v-for="step in 4"
          :key="step"
          :number="step"
          :active="step == currentStep"
          @click="onStepButtonClick(step as Step)"
        />
      </nav>

      <main class="mx-4 rounded-lg bg-white px-6 py-8 shadow-lg">
        <StepOne
          v-if="currentStep === 1"
          v-model="form"
          :form-errors="formErrors"
          @submit="onSubmit"
        />

        <StepTwo v-if="currentStep === 2" v-model="form" />
      </main>
    </div>

    <div class="flex h-18 items-center justify-end bg-white">
      <button
        type="button"
        class="bg-marine-blue hover:bg-light-marine-blue mr-4 h-10 rounded-sm px-4 text-sm font-bold text-white"
        @click="onNextStepButtonClick"
      >
        Next Step
      </button>
    </div>
  </div>
</template>

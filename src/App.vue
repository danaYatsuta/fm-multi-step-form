<script setup lang="ts">
import validator from 'validator'
import { ref, watch } from 'vue'
import StepButton from './components/StepButton.vue'
import StepFour from './components/StepFour.vue'
import StepOne from './components/StepOne.vue'
import StepThree from './components/StepThree.vue'
import StepTwo from './components/StepTwo.vue'
import type { Addon, Form, FormErrors, Plan } from './types.d.ts'

type Step = 1 | 2 | 3 | 4

const currentStep = ref<Step>(2)
const lastAvailableStep = ref<Step>(2)

const plans: Plan[] = [
  {
    id: 0,
    name: 'Arcade',
    priceMonthly: 9,
    priceYearly: 90,
    icon: 'icon-arcade.svg',
  },
  {
    id: 1,
    name: 'Advanced',
    priceMonthly: 12,
    priceYearly: 120,
    icon: 'icon-advanced.svg',
  },
  {
    id: 2,
    name: 'Pro',
    priceMonthly: 15,
    priceYearly: 150,
    icon: 'icon-pro.svg',
  },
]

const addons: Addon[] = [
  {
    id: 0,
    name: 'Online service',
    priceMonthly: 1,
    priceYearly: 10,
    description: 'Access to multiplayer games',
  },
  {
    id: 1,
    name: 'Larger storage',
    priceMonthly: 2,
    priceYearly: 20,
    description: 'Extra 1TB of cloud save',
  },
  {
    id: 2,
    name: 'Customizable profile',
    priceMonthly: 2,
    priceYearly: 20,
    description: 'Custom theme on your profile',
  },
]

const form = ref<Form>({
  name: '',
  email: '',
  phoneNumber: '',
  isYearly: false,
  plan: plans[0],
  addons: [],
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

watch(
  () => form.value.addons,
  () => {
    form.value.addons.sort((a, b) => a.id - b.id)
  },
)

function onStepButtonClick(step: Step) {
  if (step === currentStep.value || step > lastAvailableStep.value) return
  if (currentStep.value === 1 && validateForm() === false) return

  currentStep.value = step
}

function onSubmit() {
  if (validateForm()) currentStep.value = lastAvailableStep.value = 2
}

function onNextStepButtonClick() {
  if (currentStep.value === 1) {
    onSubmit()
    return
  }

  currentStep.value++
  lastAvailableStep.value = Math.max(currentStep.value, lastAvailableStep.value) as Step
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

        <StepTwo
          v-if="currentStep === 2"
          v-model="form"
          :plans="plans"
          @submit="currentStep = lastAvailableStep = 3"
        />

        <StepThree
          v-if="currentStep === 3"
          v-model="form"
          :addons="addons"
          @submit="currentStep = lastAvailableStep = 4"
        />

        <StepFour v-if="currentStep === 4" :form />
      </main>
    </div>

    <div
      class="flex h-18 items-center bg-white px-4"
      :class="{ 'justify-end': currentStep === 1, 'justify-between': currentStep > 1 }"
    >
      <button
        v-if="currentStep > 1"
        type="button"
        class="text-sm font-medium"
        @click="currentStep--"
      >
        Go Back
      </button>

      <button
        type="button"
        class="bg-marine-blue h-10 rounded-sm px-4 text-sm font-bold text-white"
        @click="onNextStepButtonClick"
      >
        Next Step
      </button>
    </div>
  </div>
</template>

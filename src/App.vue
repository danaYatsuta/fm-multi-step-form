<script setup lang="ts">
import { ref } from 'vue'
import StepButton from './components/StepButton.vue'
import FormTextInput from './components/FormTextInput.vue'

const currentStep = ref(1)
const lastCompletedStep = ref(1)

function onStepButtonClick(step: number) {
  if (step <= lastCompletedStep.value) currentStep.value = step
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

      <form class="mt-4 flex flex-col gap-3" @submit.prevent>
        <FormTextInput id="name" placeholder="e.g. Stephen King">Name</FormTextInput>
        <FormTextInput id="email" placeholder="e.g. stephenking@lorem.com"
          >Email Address</FormTextInput
        >
        <FormTextInput id="phone_number" placeholder="e.g. +1 234 567 890"
          >Phone Number</FormTextInput
        >

        <button type="submit" class="hidden" aria-label="Next Step"></button>
      </form>
    </main>

    <div class="absolute right-0 bottom-0 left-0 h-18 bg-white"></div>
  </div>
</template>

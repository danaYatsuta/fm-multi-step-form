<script setup lang="ts">
import { ref } from 'vue'
import StepButton from './components/StepButton.vue'

const currentStep = ref(1)
const lastCompletedStep = ref(1)

function onStepButtonClick(step: number) {
  if (step <= lastCompletedStep.value) currentStep.value = step
}
</script>

<template>
  <div
    class="font-ubuntu bg-magnolia flex min-h-screen flex-col bg-[url(./img/bg-sidebar-mobile.svg)] bg-no-repeat"
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
    <div class="absolute right-0 bottom-0 left-0 h-18 bg-white"></div>
  </div>
</template>

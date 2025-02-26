<script setup lang="ts">
import AppHeader from './AppHeader.vue'
import PlanRadioButton from './PlanRadioButton.vue'
import type { Form } from '@/types.d.ts'

defineEmits(['submit'])

const model = defineModel<Form>({ required: true })
</script>

<template>
  <AppHeader>Select your plan</AppHeader>

  <p class="mt-2">You have the option of monthly or yearly billing.</p>

  <form class="mt-5 flex flex-col gap-3" @submit.prevent="$emit('submit')">
    <PlanRadioButton
      v-model="model.plan"
      value="arcade"
      icon="icon-arcade.svg"
      plan-name="Arcade"
      :price="model.isYearly ? '$90/yr' : '$9/mo'"
      :extra-info="model.isYearly ? '2 months free' : undefined"
    />

    <PlanRadioButton
      v-model="model.plan"
      icon="icon-advanced.svg"
      plan-name="Advanced"
      :price="model.isYearly ? '$120/yr' : '$12/mo'"
      value="advanced"
      :extra-info="model.isYearly ? '2 months free' : undefined"
    />

    <PlanRadioButton
      v-model="model.plan"
      icon="icon-pro.svg"
      plan-name="Pro"
      :price="model.isYearly ? '$150/yr' : '$15/mo'"
      value="pro"
      :extra-info="model.isYearly ? '2 months free' : undefined"
    />

    <div
      class="bg-alabaster mt-3 flex h-12 items-center justify-center gap-6 rounded-sm text-sm font-medium"
    >
      <p :class="{ 'text-marine-blue': !model.isYearly }">Monthly</p>
      <label
        class="bg-marine-blue flex h-5 w-10 items-center rounded-full px-1 has-checked:justify-end"
      >
        <span class="block h-3 w-3 rounded-full bg-white"></span>
        <input v-model="model.isYearly" type="checkbox" class="hidden" />
      </label>
      <p :class="{ 'text-marine-blue': model.isYearly }">Yearly</p>
    </div>

    <button type="submit" class="hidden" aria-label="Next Step"></button>
  </form>
</template>

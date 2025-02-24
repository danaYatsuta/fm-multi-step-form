<script setup lang="ts">
import AppHeader from './AppHeader.vue'
import PlanRadioButton from './PlanRadioButton.vue'
import type { Plan } from '@/types.d.ts'

const model = defineModel<Plan>()
</script>

<template>
  <AppHeader>Select your plan</AppHeader>

  <p class="mt-2">You have the option of monthly or yearly billing.</p>

  <form class="mt-5 flex flex-col gap-3" @submit.prevent>
    <PlanRadioButton
      v-model="model"
      value="arcade"
      icon="icon-arcade.svg"
      plan-name="Arcade"
      price="$9/mo"
    />

    <PlanRadioButton
      v-model="model"
      icon="icon-advanced.svg"
      plan-name="Advanced"
      price="$12/mo"
      value="advanced"
    />

    <PlanRadioButton
      v-model="model"
      icon="icon-pro.svg"
      plan-name="Pro"
      price="$15/mo"
      value="pro"
    />

    <button type="submit" class="hidden" aria-label="Next Step"></button>
  </form>
</template>

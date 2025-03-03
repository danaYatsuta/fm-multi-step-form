<script setup lang="ts">
import type { Plan } from '../types'

const { plan, isYearly } = defineProps<{
  plan: Plan
  isYearly: boolean
}>()

const model = defineModel<Plan>()
</script>

<template>
  <label
    class="border-light-gray has-checked:border-purplish-blue has-checked:bg-alabaster flex gap-3 rounded-sm border px-4 py-4"
  >
    <input v-model="model" type="radio" class="hidden" :value="plan" />
    <img :src="`/src/assets/img/${plan.icon}`" aria-hidden="true" class="self-start" />
    <span>
      <span class="text-marine-blue block font-medium">{{ plan.name }}</span>
      <span class="block text-sm">{{
        isYearly ? `$${plan.priceYearly}/yr` : `$${plan.priceMonthly}/mo`
      }}</span>
      <span v-if="isYearly" class="text-marine-blue text-sm">2 months free</span>
    </span>
  </label>
</template>

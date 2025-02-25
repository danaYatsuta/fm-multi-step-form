<script setup lang="ts">
import type { Plan } from '../types'

defineProps<{
  icon: string
  planName: string
  price: string
  value: Plan
  extraInfo?: string
}>()

const model = defineModel<Plan>()
</script>

<template>
  <label
    class="border-light-gray has-checked:border-purplish-blue has-checked:bg-alabaster flex gap-3 rounded-sm border px-4 py-4"
  >
    <input v-model="model" type="radio" class="hidden" :value />
    <img :src="`/src/assets/img/${icon}`" aria-hidden="true" class="self-start" />
    <span>
      <span class="text-marine-blue block font-medium">{{ planName }}</span>
      <span class="block text-sm">{{ price }}</span>
      <span class="text-marine-blue text-sm">{{ extraInfo }}</span>
    </span>
  </label>
</template>

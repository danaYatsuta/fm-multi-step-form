<script setup lang="ts">
import type { Plan } from '../types'

defineProps<{
  icon: string
  planName: string
  price: string
  value: Plan
}>()

const model = defineModel<Plan>()
</script>

<template>
  <label
    class="border-light-gray has-checked:border-purplish-blue has-checked:bg-alabaster flex h-19 items-center gap-3 rounded-sm border px-4"
  >
    <input v-model="model" type="radio" class="hidden" :value />
    <img :src="`/src/assets/img/${icon}`" aria-hidden="true" />
    <span>
      <span class="text-marine-blue text block font-medium">{{ planName }}</span>
      <span class="text-sm">{{ price }}</span>
    </span>
  </label>
</template>

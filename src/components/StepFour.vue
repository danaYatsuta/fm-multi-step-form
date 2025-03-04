<script setup lang="ts">
import type { Form } from '@/types'
import AppHeader from './AppHeader.vue'
import { computed } from 'vue'

defineEmits(['returnToStepTwo'])

const { form } = defineProps<{
  form: Form
}>()

const totalPrice = computed(() => {
  if (form.isYearly) {
    let result = form.plan.priceYearly
    form.addons.forEach((addon) => {
      result += addon.priceYearly
    })

    return result
  } else {
    let result = form.plan.priceMonthly
    form.addons.forEach((addon) => {
      result += addon.priceMonthly
    })

    return result
  }
})
</script>

<template>
  <AppHeader>Finishing up</AppHeader>

  <p class="mt-2">Double-check everything looks OK before confirming.</p>

  <div class="bg-alabaster mt-5 flex flex-col gap-3 rounded-sm px-4 py-5 text-sm">
    <div class="flex items-center justify-between">
      <div>
        <p class="text-marine-blue font-medium">
          {{ form.plan.name + (form.isYearly ? ' (Yearly)' : ' (Monthly)') }}
        </p>
        <button type="button" class="underline" @click="$emit('returnToStepTwo')">Change</button>
      </div>
      <p>
        {{
          $formatPriceString(
            form.isYearly ? form.plan.priceYearly : form.plan.priceMonthly,
            form.isYearly,
          )
        }}
      </p>
    </div>

    <hr class="text-light-gray" />

    <div v-for="addon in form.addons" :key="addon.id" class="flex justify-between">
      <p>{{ addon.name }}</p>
      <p class="text-marine-blue">
        {{
          $formatPriceString(
            form.isYearly ? addon.priceYearly : addon.priceMonthly,
            form.isYearly,
            true,
          )
        }}
      </p>
    </div>
  </div>

  <div class="mt-7 flex justify-between px-4">
    <p class="text-sm">Total {{ form.isYearly ? '(per year)' : '(per month)' }}</p>
    <p class="text-purplish-blue font-bold">{{ $formatPriceString(totalPrice, form.isYearly) }}</p>
  </div>
</template>

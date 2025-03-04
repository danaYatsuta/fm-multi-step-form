<script setup lang="ts">
import type { Addon } from '@/types'

const { addon, isYearly } = defineProps<{
  addon: Addon
  isYearly: boolean
}>()

const model = defineModel<Addon[]>()
</script>

<template>
  <label
    class="border-light-gray has-checked:border-purplish-blue has-checked:bg-alabaster flex h-15 items-center justify-between rounded-sm border px-4"
  >
    <span class="flex items-center gap-4">
      <input v-model="model" type="checkbox" class="peer hidden" :value="addon" />
      <span
        class="border-light-gray peer-checked:bg-purplish-blue block h-5 w-5 rounded-xs border bg-center bg-no-repeat peer-checked:border-none peer-checked:bg-[url('./img/icon-checkmark.svg')]"
      >
      </span>
      <span class="leading-none">
        <span class="text-marine-blue block text-sm font-medium">{{ addon.name }}</span>
        <span class="text-xs">{{ addon.description }}</span>
      </span>
    </span>
    <span class="text-purplish-blue text-xs">{{
      $formatPriceString(isYearly ? addon.priceYearly : addon.priceMonthly, isYearly, true)
    }}</span>
  </label>
</template>

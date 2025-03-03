<script setup lang="ts">
import type { Addon, Form } from '@/types'
import AddonCheckbox from './AddonCheckbox.vue'
import AppHeader from './AppHeader.vue'

defineEmits(['submit'])

defineProps<{
  addons: Addon[]
}>()

const model = defineModel<Form>({ required: true })
</script>

<template>
  <AppHeader>Pick add-ons</AppHeader>

  <p class="mt-2">Add-ons help enhance your gaming experience.</p>

  <form class="mt-5 flex flex-col gap-3" @submit.prevent="$emit('submit')">
    <AddonCheckbox
      v-for="addon in addons"
      :key="addon.id"
      v-model="model.addons"
      :addon
      :is-yearly="model.isYearly"
    />

    <button type="submit" class="hidden" aria-label="Next Step"></button>
  </form>
</template>

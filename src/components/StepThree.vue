<script setup lang="ts">
import AppHeader from './AppHeader.vue'
import AddonCheckbox from './AddonCheckbox.vue'
import type { Form } from '@/types'

const model = defineModel<Form>({ required: true })
</script>

<template>
  <AppHeader>Pick add-ons</AppHeader>

  <p class="mt-2">Add-ons help enhance your gaming experience.</p>

  <form class="mt-5 flex flex-col gap-3" @submit.prevent>
    <AddonCheckbox
      v-model="model.addons"
      addon-name="Online service"
      description="Access to multiplayer games"
      :price="model.isYearly ? '+$10/yr' : '+$1/mo'"
      value="online_service"
    />

    <AddonCheckbox
      v-model="model.addons"
      addon-name="Larger storage"
      description="Extra 1TB of cloud save"
      :price="model.isYearly ? '+$20/yr' : '+$2/mo'"
      value="larger_storage"
    />

    <AddonCheckbox
      v-model="model.addons"
      addon-name="Customizable profile"
      description="Custom theme on your profile"
      :price="model.isYearly ? '+$20/yr' : '+$2/mo'"
      value="customizable_profile"
    />

    <button type="submit" class="hidden" aria-label="Next Step"></button>
  </form>
</template>

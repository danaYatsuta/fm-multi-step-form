<script setup lang="ts">
import AppHeader from './AppHeader.vue'
import AddonCheckbox from './AddonCheckbox.vue'
</script>

<template>
  <AppHeader>Pick add-ons</AppHeader>

  <p class="mt-2">Add-ons help enhance your gaming experience.</p>

  <form @submit.prevent>
    <AddonCheckbox
      addon-name="Online service"
      description="Access to multiplayer games"
      price="+$1/mo"
    />

    <button type="submit" class="hidden" aria-label="Next Step"></button>
  </form>
</template>

<script setup lang="ts">
import AppHeader from './AppHeader.vue'
</script>

<template>
  <AppHeader>Finishing up</AppHeader>

  <p class="mt-2">Double-check everything looks OK before confirming.</p>

  <div class="bg-alabaster mt-5 flex flex-col gap-3 rounded-sm px-4 py-5 text-sm">
    <div class="flex items-center justify-between">
      <div>
        <p class="text-marine-blue font-medium">Arcade (Monthly)</p>
        <button type="button" class="underline">Change</button>
      </div>
      <p>$9/mo</p>
    </div>

    <hr class="text-light-gray" />

    <div class="flex justify-between">
      <p>Online service</p>
      <p class="text-marine-blue">+1$/mo</p>
    </div>

    <div class="flex justify-between">
      <p>Larger storage</p>
      <p class="text-marine-blue">+2$/mo</p>
    </div>
  </div>

  <div class="mt-7 flex justify-between px-4">
    <p class="text-sm">Total (per month)</p>
    <p class="text-purplish-blue font-bold">+$12/mo</p>
  </div>
</template>

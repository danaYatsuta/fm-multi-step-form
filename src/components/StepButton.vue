<script setup lang="ts">
defineProps<{
  number: number
  active?: boolean
}>()
</script>

<template>
  <button
    type="button"
    class="flex h-8 w-8 items-center justify-center rounded-full pb-px text-sm font-bold"
    :class="{ 'bg-light-blue text-marine-blue': active, 'border text-white': !active }"
  >
    {{ number }}
  </button>
</template>

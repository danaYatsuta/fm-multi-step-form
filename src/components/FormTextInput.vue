<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
})

defineProps<{
  id: string
  errorMessage?: string
}>()

const model = defineModel<string>()
</script>

<template>
  <div class="text-marine-blue flex flex-col gap-0.5">
    <div class="flex justify-between text-xs">
      <label :for="id"><slot /></label>
      <p class="text-strawberry-red font-medium">{{ errorMessage }}</p>
    </div>
    <input
      :id
      v-model="model"
      type="text"
      v-bind="$attrs"
      class="border-light-gray placeholder:text-cool-gray focus:border-purplish-blue h-10 rounded-sm border px-3 text-sm font-medium outline-none"
      :class="{ 'border-strawberry-red': errorMessage }"
    />
  </div>
</template>

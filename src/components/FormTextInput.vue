<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
})

defineProps<{
  id: string
}>()

const model = defineModel<string>()
</script>

<template>
  <div class="text-marine-blue flex flex-col gap-0.5">
    <label :for="id" class="text-xs"><slot /></label>
    <input
      :id
      v-model="model"
      type="text"
      v-bind="$attrs"
      class="border-light-gray placeholder:text-cool-gray focus:border-purplish-blue h-10 rounded-sm border px-3 text-sm font-medium outline-none"
    />
  </div>
</template>

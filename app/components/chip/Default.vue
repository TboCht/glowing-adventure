<template>
  <div
    class="rounded-3xl px-4 py-2 hover:border border leading-5 cursor-pointer font-medium"
    :class="[
      selected
        ? 'border border-[#212121]'
        : 'border border-transparent bg-[#F5F5F5]',
    ]"
  >
    <p>{{ label }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string;
  selected: boolean;
}>();
</script>

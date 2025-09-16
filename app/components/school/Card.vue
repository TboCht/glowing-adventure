<template>
  <div
    :class="[
      'flex flex-col md:flex-row sm:justify-between p-5 rounded-2xl text-white gap-6 backdrop-blur-md ',
    ]"
    :style="{
      background: 'linear-gradient(to left, #B176FF 0%, #FF7342 100%)',
    }"
  >
    <div class="flex flex-col gap-2">
      <!-- Name -->
      <h6>{{ school.name }}</h6>

      <!-- Info -->
      <div class="flex items-center gap-2">
        <span class="flex items-center gap-1">
          <img src="/icons/map-pin.svg" alt="map-marker" class="w-3 h-3" />
          <p class="text-sm">{{ school.town }}</p>
        </span>
        <span class="flex items-center gap-1">
          <img src="/icons/building.svg" alt="school" class="w-3 h-3" />
          <p class="text-sm">{{ school.type }}</p>
        </span>
      </div>
    </div>
    <!-- Button -->
    <button-default
      label="Modifier"
      variant="secondary-white"
      class="w-fit"
      @click="emit('confirm')"
    />
  </div>
</template>

<script setup lang="ts">
import type { School } from "~~/shared/types/school";

defineProps<{
  school: School;
}>();

const emit = defineEmits<{ (e: "confirm"): void }>();
</script>

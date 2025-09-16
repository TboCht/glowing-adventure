<template>
  <button
    class="rounded-full flex items-center gap-2 font-medium text-center justify-center"
    :class="buttonClasses"
    @click="$emit('click')"
    :disabled="isDisabled"
  >
    <div class="h-4 w-4" v-if="iconName">
      <Icon :name="iconName" />
    </div>
    {{ label }}
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";

type Variant = "primary" | "secondary-white" | "secondary-black" | "disabled";

const props = withDefaults(
  defineProps<{
    label: string;
    variant?: Variant;
    iconName?: string;
    disabled?: boolean;
  }>(),
  {
    variant: "primary",
    disabled: false,
  }
);

defineEmits<{
  (e: "click"): void;
}>();

const isDisabled = computed(
  () => props.disabled || props.variant === "disabled"
);

const VARIANT_STYLES: Record<
  Variant,
  { base: string; padding: string; hover?: string }
> = {
  primary: {
    base: "bg-[#212121] text-white",
    padding: "py-4 px-6",
    hover: "hover:bg-[#333333]",
  },
  "secondary-black": { base: "bg-[#212121] text-white", padding: "py-2 px-4" },
  "secondary-white": { base: "bg-white text-[#212121]", padding: "py-2 px-4" },
  disabled: { base: "bg-white text-[#BDBDBD]", padding: "py-2 px-4" },
};

const buttonClasses = computed(() => {
  const variant = props.variant as Variant;
  const { base, padding, hover } = VARIANT_STYLES[variant] ?? {
    base: "",
    padding: "",
  };
  const classes: string[] = [base, padding];

  if (isDisabled.value) {
    classes.push("cursor-not-allowed", "opacity-60");
  } else {
    if (hover) classes.push(hover);
    classes.push("cursor-pointer");
  }

  return classes;
});
</script>

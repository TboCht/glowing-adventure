<template>
  <section
    class="rounded-2xl border border-neutral-200 bg-white p-5 flex flex-col gap-6"
  >
    <button
      class="flex w-full items-center justify-between font-semibold cursor-pointer text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500/50 disabled:cursor-not-allowed disabled:opacity-60"
      type="button"
      :id="headerId"
      :aria-expanded="isOpen ? 'false' : 'true'"
      :aria-controls="contentId"
      @click="toggle"
      @keydown.enter.prevent="toggle"
      @keydown.space.prevent="toggle"
    >
      <span class="text-left">{{ title }}</span>

      <div class="flex items-center gap-2">
        <span class="text-sm font-normal text-neutral-500" v-if="!allSelected">
          A compléter
        </span>
        <svg
          class="h-4 w-4 transition-transform duration-200"
          :class="isOpen ? 'rotate-180' : 'rotate-0'"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            d="M12 15.5a1 1 0 0 1-.7-.29l-6-6a1 1 0 1 1 1.4-1.42L12 13.09l5.3-5.3a1 1 0 0 1 1.4 1.42l-6 6a1 1 0 0 1-.7.29z"
            fill="currentColor"
          />
        </svg>
      </div>
    </button>
    <div
      v-if="allSelected && !isOpen && selectedValues"
      class="flex items-center"
    >
      <span class="text-sm text-neutral-500">{{ selectedValues }}</span>
    </div>

    <div
      v-show="isOpen"
      class="border-neutral-200 flex flex-col gap-6"
      :id="contentId"
      role="region"
      :aria-labelledby="headerId"
    >
      <slot />
      <button-default
        label="Confirmer"
        variant="primary"
        class="w-full"
        :disabled="disabled"
        @click="toggle"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  title: string;
  selectedValues?: string;
  allSelected?: boolean | null;
  defaultOpen?: boolean;
  disabled?: boolean;
  id?: string;
}>();

const emit = defineEmits<{ (e: "toggle", value: boolean): void }>();

const isOpen = ref<boolean>(Boolean(props.defaultOpen));
const instanceId = props.id ?? `acc-${Math.random().toString(36).slice(2, 8)}`;
const headerId = `${instanceId}-header`;
const contentId = `${instanceId}-content`;

function toggle() {
  isOpen.value = !isOpen.value;
  emit("toggle", isOpen.value);
}

function onBeforeEnter(el: Element) {
  const element = el as HTMLElement;
  element.style.boxSizing = "border-box";
  element.style.height = "0px";
  element.style.overflow = "hidden";
  element.style.transition =
    "height 250ms cubic-bezier(0.22, 1, 0.36, 1), 200ms ease";
}

function onEnter(el: Element) {
  const element = el as HTMLElement;
  requestAnimationFrame(() => {
    element.style.height = `${element.scrollHeight}px`;
  });
}

function onAfterEnter(el: Element) {
  const element = el as HTMLElement;
  element.style.height = "";
  element.style.overflow = "";
  element.style.transition = "";
  element.style.boxSizing = "";
}

function onBeforeLeave(el: Element) {
  const element = el as HTMLElement;
  element.style.boxSizing = "border-box";
  element.style.height = `${element.getBoundingClientRect().height}px`;

  element.style.overflow = "hidden";
  element.style.transition =
    "height 250ms cubic-bezier(0.22, 1, 0.36, 1), opacity 200ms ease";
  void (element as HTMLElement).offsetHeight;
}

function onLeave(el: Element) {
  const element = el as HTMLElement;
  element.style.height = "0px";
}

function onAfterLeave(el: Element) {
  const element = el as HTMLElement;
  element.style.height = "";

  element.style.overflow = "";
  element.style.transition = "";
  element.style.boxSizing = "";
}
</script>

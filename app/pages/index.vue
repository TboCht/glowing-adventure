<template>
  <div class="flex flex-col justify-between h-full items-center w-full">
    <div class="flex flex-col gap-4 w-full">
      <Icon name="codex:loader" v-if="!data" />
      <school-card :school="data?.highschool" v-else />
      <drop-down
        title="Classe"
        :selectedValues="selectedValues"
        :allSelected="canSubmit"
        :disabled="!canSubmit"
      >
        <div class="flex flex-col gap-6">
          <div class="flex flex-wrap items-center gap-2">
            <chip-default
              v-for="speciality in data?.availableClasses"
              :key="speciality.value"
              :label="speciality.label"
              :selected="
                classeFormValues.selectedClass.value === speciality.value
              "
              @click="classeFormValues.selectedClass = speciality"
            />
          </div>
          <hr />

          <div class="flex items-center flex-wrap gap-2">
            <chip-default
              v-for="diploma in availableDiplomas"
              :key="diploma.value"
              :label="diploma.label"
              :selected="classeFormValues.diploma === diploma.value"
              @click="classeFormValues.diploma = diploma.value"
            />
          </div>
        </div>
      </drop-down>
      <drop-down title="Spécialités" disabled />
      <drop-down title="Notes" disabled />
    </div>
    <button-default
      label="Confirmer"
      variant="secondary-white"
      class="w-fit"
      disabled
    />
  </div>
</template>

<script setup lang="ts">
import {
  type FormDataResponse,
  type HighschoolClasseOption,
} from "#shared/types/school";

const { data } = await useFetch<FormDataResponse>("/api/formData");

interface ClasseFormValue {
  selectedClass: HighschoolClasseOption;
  diploma: DiplomaType | null;
}

const classeFormValues = ref<ClasseFormValue>({
  selectedClass: data?.value?.selectedClass as HighschoolClasseOption,
  diploma: null,
});

const selectedValues = computed(() => {
  if (
    !classeFormValues.value.selectedClass ||
    !classeFormValues.value.diploma
  ) {
    return undefined;
  }
  return `${classeFormValues.value.selectedClass.label}, ${classeFormValues.value.diploma}`;
});

const availableDiplomas = computed(() => {
  return data?.value?.availableDiplomas;
});

const canSubmit = computed(() => {
  return (
    classeFormValues.value.selectedClass &&
    classeFormValues.value.diploma &&
    classeFormValues.value.diploma !== null
  );
});
</script>

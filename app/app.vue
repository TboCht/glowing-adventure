<template>
  <h1 class="text-3xl font-bold text-blue-500 underline">Hello world!</h1>

  <button @click="fetchData" class="bg-blue-500 text-white p-2 rounded-md">
    text API
  </button>
  {{ response }}
</template>

<script setup lang="ts">
const response = ref<any>(null);
const fetchData = async () => {
  const data = await useFetch("/api/formData");
  console.log(data);
  response.value = data;
};
</script>

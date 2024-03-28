<script setup>
import { defineEmits, ref, onMounted } from 'vue'

const emit = defineEmits(['selected'])

const selectedValue = ref('carbon_emission')

const handleChange = (event) => {
  emit('selected', event.target.value)
}
onMounted(() => {
  emit('selected', selectedValue.value)
})
</script>

<template>
  <div class="relative">
    <label
      for="Sort"
      class="text-sm px-4 bg-gray-50 font-medium text-gray-900 absolute left-2 -top-3"
      >Sort by</label
    >
    <select
      id="countries"
      class="bg-white text-gray-900 w-auto text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
      @change="handleChange"
      v-model="selectedValue"
    >
      <option value="carbon_emission">kg eq. CO2/m2</option>
      <option value="surface">Surface (m2)</option>
    </select>
  </div>
</template>

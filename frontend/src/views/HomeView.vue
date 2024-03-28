<script setup>
import { ref } from 'vue'

import BuildingList from '@/components/BuildingList.vue'
import BuildingSortSelect from '@/components/BuildingSortSelect.vue'

// Reactive reference that holds the current selected sort option.
const sortOption = ref(null)

// A function that updates sortOption when a new option is selected.
// It's passed as a prop to the BuildingSortSelect Component
const handleSelected = (value) => {
  sortOption.value = value
}
</script>

<template>
  <main>
    <div class="bg-teal-50">
      <div class="container mx-auto p-6 lg:px-10">
        <BuildingSortSelect class="my-6" @selected="handleSelected" />
        <BuildingList :sortingCriteria="sortOption" />
      </div>
    </div>
  </main>
</template>

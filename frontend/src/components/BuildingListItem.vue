<script setup>
import EyeIcon from '@/components/icons/EyeIcon.vue'
defineProps({ buildingItem: { type: Object, required: true } })
</script>
<template>
  <div class="p-4 bg-teal-400/40 rounded">
    <h2 class="text-2 font-semibold p-2 bg-white inline rounded">{{ buildingItem.name }}</h2>
    <p class="text-sm my-7">
      {{ buildingItem.address }} <br />
      {{ buildingItem.postcode }}, {{ buildingItem.city }}
    </p>

    <div class="text-end">
      <router-link
        class="bg-gray-700 text-white text-uppercase text-sm px-2 py-1 rounded inline-flex items-center"
        :to="{ name: 'building.details', params: { id: buildingItem.id } }"
      >
        <EyeIcon size="1" class="mr-2" />Details
      </router-link>
    </div>
  </div>
</template>

<style scoped></style>

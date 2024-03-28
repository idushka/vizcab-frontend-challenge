<script setup>
import { onMounted, computed, defineProps } from 'vue'
import { useBuildingListStore } from '@/stores/buildingStore'
import { storeToRefs } from 'pinia'
import BuildingListItem from '@/components/BuildingListItem.vue'
import BuildingService from '@/services/BuildingService'

const buildingListStore = useBuildingListStore()
let { buildingList } = storeToRefs(buildingListStore)

const props = defineProps({ sortingCriteria: { type: String, required: true } })

onMounted(async () => {
  try {
    const response = await BuildingService.getBuildings()
    buildingList.value = response
  } catch (error) {
    console.error(error)
  }
})

const sortedBuildingsList = computed(() => {
  if (props.sortingCriteria === 'surface') {
    return [...buildingList.value].sort((a, b) => b.surface - a.surface)
  } else if (props.sortingCriteria === 'carbon_emission') {
    return [...buildingList.value].sort((a, b) => b.carbon_emission - a.carbon_emission)
  } else {
    return buildingList.value
  }
})
</script>
<template>
  <div>
    <div class="mx-auto grid gap-8 lg:grid-cols-3 md:grid-cols-2">
      <BuildingListItem
        v-for="building in sortedBuildingsList"
        :key="building.id"
        :buildingItem="building"
      />
    </div>
  </div>
</template>

<style scoped></style>

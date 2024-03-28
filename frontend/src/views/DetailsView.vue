<script setup>
import { onMounted, computed, ref } from 'vue'
import BuildingService from '@/services/BuildingService'

const props = defineProps({ id: { type: String, required: true } })

let building = ref({})

onMounted(async () => {
  try {
    const response = await BuildingService.getBuildingDetails(props.id)
    building.value = response
  } catch (error) {
    console.error(error)
  }
})

const carbonEmissionPerM2 = computed(() => {
  return Math.round(building.value.carbon_emission / building.value.surface)
})
</script>
<template>
  <div class="bg-teal-50 h-screen grid content-center">
    <section class="w-3/4 mx-auto p-4">
      <h1 class="text-2xl font-bold">{{ building.name }}</h1>
      <dl class="my-6">
        <dt class="font-bold">Address</dt>
        <dd>{{ building.address }}</dd>
        <dt class="font-bold">Surface (m2)</dt>
        <dd>{{ building.surface }}</dd>
        <dt class="font-bold">Carbon emission (kg eq. CO2)</dt>
        <dd>{{ building.carbon_emission }}</dd>
        <dt class="font-bold">Carbon emission per square meter (kg eq. CO2/m2)</dt>
        <dd>{{ carbonEmissionPerM2 }}</dd>
      </dl>
      <RouterLink to="/">Back</RouterLink>
    </section>
  </div>
</template>

import { defineStore } from 'pinia'

export const useBuildingListStore = defineStore('buildingList', {
  state: () => ({
    buildingList: [],
    id: 0
  })
})

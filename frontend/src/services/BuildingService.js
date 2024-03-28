import axios from 'axios'

// Create axios defaults
//  we can generate a client for any API and reuse the configuration for any calls using the same client
const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  async getBuildings() {
    const response = await apiClient.get()
    return response.data.data
  },

  async getBuildingDetails(id) {
    const buildings = await this.getBuildings()
    // check the type of id
    if (typeof id === 'string') {
      id = parseInt(id)
    }
    return buildings.find((entry) => entry.id === id)
  }
}

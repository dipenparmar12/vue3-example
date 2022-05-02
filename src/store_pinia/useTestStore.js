import faker from '@faker-js/faker'
import { defineStore } from 'pinia'

const useTestStore = defineStore('testStore', {
  state: () => {
    return {
      items: [
        { id: 1, name: 'Dipen' },
        { id: 2, name: 'hitesh' },
      ],
    }
  },
  getters: {
    totalItems: (state) => state.items.length,
  },

  actions: {
    addItem() {
      this.items.push({
        name: faker.name.findName(),
        id: this.items.length + 1,
      })
    },
    removeItem(id) {
      this.items = this.items.filter((el) => el.id !== id)
    },
  },
})

export default useTestStore

import { defineStore } from 'pinia'

const useCounterStore = defineStore('counterStore', {
  // state
  // Getters
  // Actions
  state: () => ({ counter: 5 }),
  actions: {
    increment() {
      this.counter++
    },
    doubleIt() {
      return (this.counter *= 2)
    },
  },
  getters: {
    doubleDisplay() {
      return this.counter * 2
    },
  },
})

export default useCounterStore

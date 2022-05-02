<template>
  <div>
    <h1>Pinia List store, ITEMS: {{ testStore.totalItems }}</h1>
    <div>
      <button @click="testStore.addItem">Add</button>
    </div>
    <div class="card" v-for="item in testStore.items" :key="item.id">
      <h3>{{ item.id }} {{ item.name }}</h3>
      <button @click="testStore.removeItem(item.id)">Delete</button>
    </div>
  </div>
</template>

<script setup>
import useTestStore from '@/store_pinia/useTestStore'
const testStore = useTestStore()
</script>

<style></style>

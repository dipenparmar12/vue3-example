<template>
  <div>
    <h1>Pinia Counter:</h1>
    <div>
      <button @click="counterStore.increment">Inc</button>
      <button @click="counterStore.doubleIt">Double</button>
    </div>
    <h2>{{ counterStore.doubleDisplay }}</h2>
  </div>
</template>

<script setup>
import useCounterStore from '../store_pinia/useCounterStore'
const counterStore = useCounterStore()
</script>

<style></style>

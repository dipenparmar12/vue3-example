<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->

  <StoreTest />
  <!-- <TestStore /> -->
  <!-- <Test /> -->
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Test from './components/Test.vue'
import TestStore from './components/store-counter.vue'
import StoreTest from './components/store-test.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Test,
    TestStore,
    StoreTest,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #21374d;
  margin-top: 10px;
}

.card {
  margin: 10px auto;
  width: 350px;
  border: 1px solid rgb(179, 179, 179);
  box-shadow: 1px 2px 5px 1px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  transition: all 0.1s ease-in;
  padding: 5px 20px;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.card:hover {
  border: 1px solid rgb(35, 35, 35);
  box-shadow: 1px 2px 10px 1px rgba(0, 0, 0, 0.2);
  transform: scale(1.01);
}
</style>

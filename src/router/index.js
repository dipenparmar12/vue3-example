import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from 'vue-router'

import routes from './routes'

const router = createRouter({
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})

export default router

/* 
========================================================
  
======================================================== 
import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from 'vue-router'

// 1. Define route components.
// These can be imported from other files
import HelloWorld from './components/HelloWorld.vue'
const Home = { template: '<div> ME ROUTE </div>' }
const About = { template: '<div> ABOUT ROUTE </div>' }

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
export const routes = [
  { path: '/hello-world', component: HelloWorld },
  { path: '/test-me', component: Home },
  { path: '/test-about', component: About },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})

export default router

*/

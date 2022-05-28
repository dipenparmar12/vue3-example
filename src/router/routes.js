import HelloWorld from '../components/HelloWorld.vue'
import StoreCounter from '../components/store-counter.vue'
import StoreExample from '../components/store-test.vue'
import Modal from '../components/modal/Modal.vue'

// const Home = { template: '<div>Home</div>' }
// const About = { template: '<div>About</div>' }

const routes = [
  { path: '/hello-world', component: HelloWorld },
  { path: '/store', component: StoreCounter },
  { path: '/store-example', component: StoreExample },
  { path: '/modal', component: Modal },
]

export default routes

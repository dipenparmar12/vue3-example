const fontSize = {
  directiveName: 'font-size', // v-font-size
  props: {
    // called before bound element's attributes
    // or event listeners are applied
    created(el, binding, vnode, prevVnode) {
      console.log('vue-directives.js::[7] el, binding', el, binding)
      // see below for details on arguments
    },
    // called right before the element is inserted into the DOM.
    beforeMount(el, binding, vnode, prevVnode) {
      el.style.fontSize = '40px'
    },
  },
}

export default fontSize

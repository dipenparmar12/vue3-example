<script setup>
import { onMounted, reactive, ref, unref, watch, watchEffect } from 'vue'
import onClickOutside from '../../composables/useClickOutSide.js'

const modalRef = ref(null)
const state = reactive({
  isOpen: false,
})
function toggleModal(e) {
  // console.log('Modal.vue::[10] e', e.composedPath())
  state.isOpen = !state.isOpen
}

// onMounted(()=>{
//   console.log('Modal.vue::[15] modalRef', unref(modalRef))
// })

// Watch state changes
// watchEffect(() => {
//   console.log('Modal.vue::[10] ', Object.assign({}, state))
//   console.log('Modal.vue::[12] modalRef', modalRef)
// })

onClickOutside(modalRef, () => {
  console.log('Modal.vue::[26] OutSide')
  state.isOpen = false
})
</script>


<template>
  <div>
    <button @click="toggleModal">Open Modal</button>
  </div>

  <div ref="ignoreRef" class="ignore">I am ignored by the click outside</div>
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="state.isOpen" ref="modalRef" class="modal">
        <div class="modal__inner">
          <div class="modal__close">
            <button title="Close" @click="state.isOpen = false">𝖷</button>
          </div>
          <p class="heading">Demo Modal</p>
          <p>Click outside of the modal to close it.</p>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>


<style scoped>
.modal {
  background-color: rgba(0, 0, 0, 0.585);
  position: fixed;
  inset: 0;
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal__inner {
  position: relative;
  background-color: white;
  padding: 0.4em 2em;
  border-radius: 5px;
  border: 1px solid var(--vt-c-divider-light);
  box-shadow: 2px 2px 10px rgba(10, 10, 10, 0.1);
  /* height: 110vh; */
}

.modal__close {
  position: absolute;
  top: 0.5em;
  right: 0.5em;
}


.fade-enter-active,
.fade-leave-active{
  transition: all 0.1s ease-in;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(5px);
}
</style>
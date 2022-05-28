import { getCurrentScope, onScopeDispose, unref, watch } from 'vue'

function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn)
    return true
  }
  return false
}

/**
 * Register using addEventListener on mounted, and removeEventListener automatically on unmounted.
 *
 * Overload 2: Explicitly Window target
 *
 * @see https://vueuse.org/useEventListener
 * @param target
 * @param event
 * @param listener
 * @param options
 */
export default function useEventListener(target, event, listener, options) {
  let cleanUp = () => {}

  const stopWatch = watch(
    () => unref(target),
    (el) => {
      cleanUp()
      if (!el) return

      el.addEventListener(event, listener, options)

      cleanUp = () => {
        el.removeEventListener(event, listener, options)
        cleanUp = () => {}
      }
    },
    { immediate: true, flush: 'post' },
  )

  const stop = () => {
    stopWatch()
    cleanUp()
  }

  tryOnScopeDispose(stop)

  return stop
}

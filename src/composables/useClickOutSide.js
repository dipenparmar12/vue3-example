import { ref, unref } from 'vue'
import useEventListener from './useEventListener'

export const isClient = typeof window !== 'undefined'
export const defaultWindow = /* #__PURE__ */ isClient ? window : undefined

function onClickOutside(target, handler, options = {}) {
  const { window = defaultWindow, ignore, capture = true } = options

  if (!window) {
    return
  }

  const shouldListen = ref(true)
  let fallback = null

  const listener = (event) => {
    window.clearTimeout(fallback)
    const composedPath = event.composedPath()
    const el = unref(target)
    const isInSideClicked = !el || el === event.target 
    if(!isInSideClicked) return

    handler(event)
  }

  const cleanup = [
    useEventListener(window, 'click', listener, { passive: true, capture }),
  ]

  const stop = () => cleanup.forEach((fn) => fn())

  return { stop }
}

export default onClickOutside
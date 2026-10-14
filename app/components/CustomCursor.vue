<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const cursorDot = ref(null)
const cursorRing = ref(null)

let rafId = null
let ringX = 0
let ringY = 0
let mouseX = 0
let mouseY = 0

const lerp = (a, b, t) => a + (b - a) * t

const loop = () => {
  ringX = lerp(ringX, mouseX, 0.12)
  ringY = lerp(ringY, mouseY, 0.12)

  if (cursorDot.value) {
    cursorDot.value.style.left = mouseX + 'px'
    cursorDot.value.style.top = mouseY + 'px'
  }
  if (cursorRing.value) {
    cursorRing.value.style.left = ringX + 'px'
    cursorRing.value.style.top = ringY + 'px'
  }

  rafId = requestAnimationFrame(loop)
}

const onMouseMove = (e) => {
  mouseX = e.clientX
  mouseY = e.clientY
}

const onEnter = () => {
  if (cursorRing.value) {
    cursorRing.value.style.width = '52px'
    cursorRing.value.style.height = '52px'
    cursorRing.value.style.borderColor = 'rgba(232,84,26,0.6)'
  }
}

const onLeave = () => {
  if (cursorRing.value) {
    cursorRing.value.style.width = '36px'
    cursorRing.value.style.height = '36px'
    cursorRing.value.style.borderColor = 'rgba(232,84,26,0.3)'
  }
}

let observer = null

onMounted(() => {
  window.addEventListener('mousemove', onMouseMove)
  loop()

  const attach = () => {
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })
  }
  attach()

  observer = new MutationObserver(attach)
  observer.observe(document.body, { childList: true, subtree: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', onMouseMove)
  cancelAnimationFrame(rafId)
  observer?.disconnect()
})
</script>

<template>
  <!-- Hidden on touch devices via CSS -->
  <div class="pointer-events-none fixed inset-0 z-[9999] hidden [@media(hover:hover)]:block">
    <!-- Dot -->
    <div
      ref="cursorDot"
      class="absolute w-[10px] h-[10px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E8541A]"
    />
    <!-- Ring -->
    <div
      ref="cursorRing"
      class="absolute w-9 h-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(232,84,26,0.3)]"
      style="transition: width 0.2s ease, height 0.2s ease, border-color 0.2s ease;"
    />
  </div>
</template>

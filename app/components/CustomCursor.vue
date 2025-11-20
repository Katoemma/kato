<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const canvas = ref(null)
let ctx
let animationId
let particles = []
let mouseX = 0
let mouseY = 0
let isMoving = false

// Fire Color Palette (Red, Orange, Yellow, White)
const colors = ['#ff0000', '#ff4d00', '#ffcc00', '#ffffff']

class Particle {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.size = Math.random() * 20 + 10 // Bigger base size
    this.speedX = Math.random() * 2 - 1
    this.speedY = -Math.random() * 3 - 1
    this.color = colors[Math.floor(Math.random() * colors.length)]
    this.life = 1.0
  }

  update() {
    this.x += this.speedX
    this.y += this.speedY
    if (this.size > 0.2) {
      this.size -= 0.3
    }
    if (this.size < 0) this.size = 0 // Safety clamp
    this.life -= 0.01
  }

  draw() {
    if (this.size <= 0) return // Don't draw if invisible
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fillStyle = this.color
    ctx.fill()
  }
}

const initCanvas = () => {
  if (!canvas.value) return
  canvas.value.width = window.innerWidth
  canvas.value.height = window.innerHeight
  ctx = canvas.value.getContext('2d')
}

const handleMouseMove = (e) => {
  mouseX = e.clientX
  mouseY = e.clientY
  isMoving = true
  
  // Spawn particles
  for (let i = 0; i < 3; i++) { // Reduced count slightly for performance
    particles.push(new Particle(mouseX, mouseY))
  }
}

const animate = () => {
  if (!ctx || !canvas.value) return

  ctx.clearRect(0, 0, canvas.value.width, canvas.value.height)
  
  ctx.globalCompositeOperation = 'lighter'
  
  for (let i = 0; i < particles.length; i++) {
    particles[i].update()
    particles[i].draw()
    
    if (particles[i].size <= 0.2 || particles[i].life <= 0) {
      particles.splice(i, 1)
      i--
    }
  }
  
  ctx.globalCompositeOperation = 'source-over'
  
  try {
    updateMagneticElements()
  } catch (e) {
    // Ignore magnetic errors to keep cursor alive
  }

  animationId = requestAnimationFrame(animate)
}

const onWindowResize = () => {
  canvas.value.width = window.innerWidth
  canvas.value.height = window.innerHeight
}

// Magnetic Effect Logic
const magneticElements = ref([])

const updateMagneticElements = () => {
  magneticElements.value.forEach(el => {
    const rect = el.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const dist = Math.sqrt(Math.pow(mouseX - centerX, 2) + Math.pow(mouseY - centerY, 2))
    
    if (dist < 100) {
      const pullStrength = 0.3
      const moveX = (mouseX - centerX) * pullStrength
      const moveY = (mouseY - centerY) * pullStrength
      el.style.transform = `translate(${moveX}px, ${moveY}px)`
    } else {
      el.style.transform = 'translate(0px, 0px)'
    }
  })
}

onMounted(() => {
  initCanvas()
  window.addEventListener('resize', onWindowResize)
  window.addEventListener('mousemove', handleMouseMove)
  animate()
  
  const updateListeners = () => {
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, .group')
    magneticElements.value = Array.from(interactiveElements)
    interactiveElements.forEach(el => {
      el.style.transition = 'transform 0.2s ease-out'
    })
  }
  updateListeners()
  const observer = new MutationObserver(updateListeners)
  observer.observe(document.body, { childList: true, subtree: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', onWindowResize)
  window.removeEventListener('mousemove', handleMouseMove)
  cancelAnimationFrame(animationId)
})
</script>

<template>
  <div class="custom-cursor-container">
    <canvas ref="canvas" class="cursor-canvas"></canvas>
  </div>
</template>

<style scoped>
.custom-cursor-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 9999;
  /* Removed blur filter for better visibility */
}

.cursor-canvas {
  display: block;
  width: 100%;
  height: 100%;
}
</style>

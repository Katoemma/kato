<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import * as THREE from 'three'

const container = ref(null)
let scene, camera, renderer, particles, animationId

const initThree = () => {
  scene = new THREE.Scene()
  scene.fog = new THREE.FogExp2(0x050505, 0.02)
  
  // Camera setup
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.z = 20

  // Renderer setup
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  container.value.appendChild(renderer.domElement)

  // Create binary textures
  const createTextTexture = (text, color) => {
    const canvas = document.createElement('canvas')
    canvas.width = 64
    canvas.height = 64
    const context = canvas.getContext('2d')
    context.font = 'bold 48px "Courier New", monospace'
    context.fillStyle = color
    context.textAlign = 'center'
    context.textBaseline = 'middle'
    context.fillText(text, 32, 32)
    const texture = new THREE.CanvasTexture(canvas)
    return texture
  }

  const texture0 = createTextTexture('0', '#00ff41') // Matrix Green
  const texture1 = createTextTexture('1', '#00f3ff') // Cyan

  // Particles
  const geometry = new THREE.BufferGeometry()
  const count = 1500
  const positions = new Float32Array(count * 3)
  const type = new Float32Array(count) // 0 or 1

  for(let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 60
    positions[i * 3 + 1] = (Math.random() - 0.5) * 60
    positions[i * 3 + 2] = (Math.random() - 0.5) * 40
    type[i] = Math.random() > 0.5 ? 1 : 0
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  geometry.setAttribute('type', new THREE.BufferAttribute(type, 1))

  // Custom Shader Material for individual textures
  const material = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uTexture0: { value: texture0 },
      uTexture1: { value: texture1 },
      uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) }
    },
    vertexShader: `
      attribute float type;
      varying float vType;
      varying vec3 vPos;
      uniform float uTime;
      uniform float uPixelRatio;

      void main() {
        vType = type;
        vec3 pos = position;
        
        // Falling effect
        pos.y = mod(pos.y - uTime * 2.0 + 30.0, 60.0) - 30.0;
        
        vPos = pos;
        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
        gl_Position = projectionMatrix * mvPosition;
        gl_PointSize = (300.0 / -mvPosition.z) * uPixelRatio;
      }
    `,
    fragmentShader: `
      uniform sampler2D uTexture0;
      uniform sampler2D uTexture1;
      varying float vType;
      varying vec3 vPos;

      void main() {
        vec4 texColor;
        if (vType < 0.5) {
          texColor = texture2D(uTexture0, gl_PointCoord);
        } else {
          texColor = texture2D(uTexture1, gl_PointCoord);
        }

        if (texColor.a < 0.5) discard;
        
        // Distance fade
        float alpha = 1.0 - smoothstep(10.0, 30.0, abs(vPos.z));
        gl_FragColor = vec4(texColor.rgb, texColor.a * alpha);
      }
    `,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending
  })

  particles = new THREE.Points(geometry, material)
  scene.add(particles)

  window.addEventListener('resize', onWindowResize)
}

const onWindowResize = () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
  particles.material.uniforms.uPixelRatio.value = Math.min(window.devicePixelRatio, 2)
}

const animate = () => {
  animationId = requestAnimationFrame(animate)
  const time = performance.now() * 0.001
  particles.material.uniforms.uTime.value = time
  
  // Gentle rotation
  particles.rotation.y = time * 0.05

  // Mouse Parallax
  const targetX = (mouseX * 2)
  const targetY = (mouseY * 2)
  
  particles.rotation.x += 0.05 * (targetY - particles.rotation.x)
  particles.rotation.y += 0.05 * (targetX - particles.rotation.y)

  renderer.render(scene, camera)
}

let mouseX = 0
let mouseY = 0

const onMouseMove = (event) => {
  mouseX = (event.clientX / window.innerWidth) * 2 - 1
  mouseY = -(event.clientY / window.innerHeight) * 2 + 1
}

onMounted(() => {
  initThree()
  document.addEventListener('mousemove', onMouseMove)
  animate()
})

onBeforeUnmount(() => {
  cancelAnimationFrame(animationId)
  window.removeEventListener('resize', onWindowResize)
  document.removeEventListener('mousemove', onMouseMove)
  if (container.value && renderer.domElement) {
    container.value.removeChild(renderer.domElement)
  }
  if (particles) {
    particles.geometry.dispose()
    particles.material.dispose()
  }
  if (renderer) {
    renderer.dispose()
  }
})
</script>

<template>
  <div ref="container" class="fixed top-0 left-0 w-full h-full -z-10 bg-[#050505] pointer-events-none"></div>
</template>

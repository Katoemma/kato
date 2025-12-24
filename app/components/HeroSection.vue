<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'

const isVisible = ref(false)
const scrollY = ref(0)

const handleScroll = () => {
  scrollY.value = window.scrollY
}

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <section class="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8">
    <!-- HUD Grid Background -->
    <div class="absolute inset-0 bg-[linear-gradient(rgba(0,255,65,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,65,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)] pointer-events-none"></div>

    <div 
      class="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center justify-center h-full"
      :class="[isVisible ? 'opacity-100' : 'opacity-0']"
      style="transition: opacity 1s ease-out;"
    >
      <!-- Main Content Container with HUD Frame -->
      <div class="relative p-8 md:p-16 w-full max-w-5xl mx-auto text-center group">
        <!-- HUD Corners -->
        <div class="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#00ff41] opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div class="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#00f3ff] opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div class="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-[#00f3ff] opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div class="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#00ff41] opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>

        <!-- Status Badge -->
        <div class="inline-flex items-center gap-2 px-4 py-1 bg-[#00ff41]/10 border border-[#00ff41]/30 rounded-full mb-8 backdrop-blur-sm">
          <div class="w-2 h-2 bg-[#00ff41] rounded-full animate-pulse"></div>
          <span class="text-[#00ff41] font-mono text-xs tracking-[0.2em] uppercase">System Online</span>
        </div>

        <!-- Massive Typography -->
        <div class="relative mb-8">
          <!-- Ghost Text (Outline) -->
          <h1 class="absolute top-0 left-0 w-full text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-transparent stroke-text opacity-20 select-none transform translate-x-1 translate-y-1" aria-hidden="true">
            KATO EMMANUEL
          </h1>
          <!-- Main Text -->
          <h1 class="relative text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter mix-blend-screen glitch-container">
            <span class="glitch-layer" data-text="KATO">KATO</span>
            <span class="block md:inline text-transparent bg-clip-text bg-gradient-to-r from-[#00ff41] via-[#00f3ff] to-[#00ff41] animate-gradient-x glitch-layer" data-text="EMMANUEL"> EMMANUEL</span>
          </h1>
        </div>
        
        <!-- Role & Location -->
        <div class="flex flex-col items-center gap-4 mb-12">
          <div class="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#00f3ff] to-transparent"></div>
          <p class="text-xl sm:text-2xl text-gray-300 font-mono tracking-wide">
            SOFTWARE_DEVELOPER <span class="text-[#00ff41] mx-2">//</span> WEB & MOBILE
          </p>
          <p class="text-sm text-gray-500 font-mono uppercase tracking-[0.2em]">
            [LOC: GULU CITY, UGANDA]
          </p>
        </div>
        
        <!-- Tech Buttons -->
        <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a href="#projects" class="cybr-btn group">
            <span class="cybr-btn__text">ACCESS_PROJECTS</span>
            <span class="cybr-btn__glitch">ACCESS_PROJECTS</span>
            <span class="cybr-btn__tag">R25</span>
          </a>
          
          <a href="#contact" class="cybr-btn cybr-btn--secondary group">
            <span class="cybr-btn__text">ESTABLISH_UPLINK</span>
            <span class="cybr-btn__glitch">ESTABLISH_UPLINK</span>
            <span class="cybr-btn__tag">C-137</span>
          </a>
        </div>
      </div>
    </div>
    
    <!-- Scroll Indicator -->
    <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
      <span class="text-[10px] text-[#00f3ff] tracking-[0.3em] animate-pulse font-mono">SCROLL_TO_INIT</span>
      <div class="w-[1px] h-12 bg-gradient-to-b from-[#00f3ff] to-transparent"></div>
    </div>
  </section>
</template>

<style scoped>
/* Stroke Text Effect */
.stroke-text {
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.5);
}

/* Glitch Animation Layers */
.glitch-container {
  position: relative;
}

.glitch-layer {
  position: relative;
  display: inline-block;
}

.glitch-layer::before,
.glitch-layer::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #050505;
}

.glitch-layer::before {
  left: 2px;
  text-shadow: -1px 0 #00ff41;
  clip: rect(24px, 550px, 90px, 0);
  animation: glitch-anim-2 3s infinite linear alternate-reverse;
}

.glitch-layer::after {
  left: -2px;
  text-shadow: -1px 0 #00f3ff;
  clip: rect(85px, 550px, 140px, 0);
  animation: glitch-anim 2.5s infinite linear alternate-reverse;
}

@keyframes glitch-anim {
  0% { clip: rect(14px, 9999px, 127px, 0); }
  20% { clip: rect(8px, 9999px, 49px, 0); }
  40% { clip: rect(120px, 9999px, 14px, 0); }
  60% { clip: rect(66px, 9999px, 33px, 0); }
  80% { clip: rect(2px, 9999px, 88px, 0); }
  100% { clip: rect(102px, 9999px, 125px, 0); }
}

@keyframes glitch-anim-2 {
  0% { clip: rect(65px, 9999px, 119px, 0); }
  20% { clip: rect(12px, 9999px, 77px, 0); }
  40% { clip: rect(95px, 9999px, 34px, 0); }
  60% { clip: rect(5px, 9999px, 22px, 0); }
  80% { clip: rect(111px, 9999px, 84px, 0); }
  100% { clip: rect(33px, 9999px, 55px, 0); }
}

/* Cyberpunk Button Styles */
.cybr-btn {
  --primary: #00ff41;
  --shadow-primary: #00ff41;
  --color: #000;
  --font-size: 16px;
  --label-size: 9px;
  --shadow-primary-hue: 120;
  --shadow-secondary-hue: 60;
  --clip: polygon(0 0, 100% 0, 100% 100%, 95% 100%, 95% 90%, 85% 90%, 85% 100%, 8% 100%, 0 70%);
  --border: 2px;
  --shimmy-distance: 5;
  --clip-one: polygon(0 2%, 100% 2%, 100% 95%, 95% 95%, 95% 90%, 85% 90%, 85% 95%, 8% 95%, 0 70%);
  --clip-two: polygon(0 78%, 100% 78%, 100% 100%, 95% 100%, 95% 90%, 85% 90%, 85% 100%, 8% 100%, 0 78%);
  --clip-three: polygon(0 44%, 100% 44%, 100% 54%, 95% 54%, 95% 54%, 85% 54%, 85% 54%, 8% 54%, 0 54%);
  --clip-four: polygon(0 0, 100% 0, 100% 0, 95% 0, 95% 0, 85% 0, 85% 0, 8% 0, 0 0);
  --clip-five: polygon(0 0, 100% 0, 100% 0, 95% 0, 95% 0, 85% 0, 85% 0, 8% 0, 0 0);
  --clip-six: polygon(0 40%, 100% 40%, 100% 85%, 95% 85%, 95% 85%, 85% 85%, 85% 85%, 8% 85%, 0 70%);
  --clip-seven: polygon(0 63%, 100% 63%, 100% 80%, 95% 80%, 95% 80%, 85% 80%, 85% 80%, 8% 80%, 0 70%);
  
  color: var(--color);
  cursor: pointer;
  background: transparent;
  text-transform: uppercase;
  font-size: var(--font-size);
  outline: transparent;
  letter-spacing: 2px;
  position: relative;
  font-weight: 700;
  border: 0;
  min-width: 200px;
  height: 60px;
  line-height: 60px;
  transition: background 0.2s;
}

.cybr-btn--secondary {
  --primary: #00f3ff;
  --shadow-primary: #00f3ff;
  --shadow-primary-hue: 180;
}

.cybr-btn:hover {
  --primary: #fff; /* Flash white on hover */
}

.cybr-btn__text {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--primary);
  clip-path: var(--clip);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'JetBrains Mono', monospace;
  z-index: 2;
}

.cybr-btn__tag {
  position: absolute;
  padding: 1px 4px;
  letter-spacing: 1px;
  line-height: 1;
  bottom: -5%;
  right: 5%;
  font-weight: normal;
  color: hsl(0, 0%, 0%);
  font-size: var(--label-size);
  background: var(--primary);
  z-index: 3;
}

.cybr-btn__glitch {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--shadow-primary);
  text-shadow: 2px 2px var(--shadow-primary), -2px -2px var(--shadow-secondary);
  clip-path: var(--clip);
  animation: shimmy 2s infinite;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'JetBrains Mono', monospace;
  z-index: 1;
}

.cybr-btn:hover .cybr-btn__glitch {
  display: none;
}

.cybr-btn:hover .cybr-btn__text {
  background: var(--primary);
  color: #000;
}

@keyframes shimmy {
  0% { clip-path: var(--clip-one); }
  2%, 8% { clip-path: var(--clip-two); transform: translate(calc(var(--shimmy-distance) * -1%), 0); }
  6% { clip-path: var(--clip-two); transform: translate(calc(var(--shimmy-distance) * 1%), 0); }
  9% { clip-path: var(--clip-two); transform: translate(0, 0); }
  10% { clip-path: var(--clip-three); transform: translate(calc(var(--shimmy-distance) * 1%), 0); }
  13% { clip-path: var(--clip-three); transform: translate(0, 0); }
  14%, 21% { clip-path: var(--clip-four); transform: translate(calc(var(--shimmy-distance) * 1%), 0); }
  25% { clip-path: var(--clip-five); transform: translate(calc(var(--shimmy-distance) * 1%), 0); }
  30% { clip-path: var(--clip-five); transform: translate(calc(var(--shimmy-distance) * -1%), 0); }
  35%, 45% { clip-path: var(--clip-six); transform: translate(calc(var(--shimmy-distance) * -1%)); }
  40% { clip-path: var(--clip-six); transform: translate(calc(var(--shimmy-distance) * 1%)); }
  50% { clip-path: var(--clip-six); transform: translate(0, 0); }
  55% { clip-path: var(--clip-seven); transform: translate(calc(var(--shimmy-distance) * 1%), 0); }
  60% { clip-path: var(--clip-seven); transform: translate(0, 0); }
  31%, 61%, 100% { clip-path: var(--clip-four); }
}
</style>

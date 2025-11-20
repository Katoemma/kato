<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import profileImg from '/images/profile.png'

const scrollY = ref(0)

const handleScroll = () => {
  scrollY.value = window.scrollY
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <section id="about" class="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div class="space-y-6 relative" :style="{ transform: `translateY(${(scrollY - 500) * -0.1}px)` }">
          <!-- Holographic Header -->
          <div class="flex items-center gap-4 mb-8">
            <div class="h-[2px] w-12 bg-[#00ff41]"></div>
            <h2 class="text-3xl font-bold text-white tracking-widest">
              DATA_<span class="text-[#00ff41]">LOG</span>
            </h2>
          </div>

          <div class="bg-[#0a0a0a]/80 border border-[#00ff41]/30 p-6 relative overflow-hidden group">
            <!-- Scanline effect -->
            <div class="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,255,65,0.05)_50%)] bg-[length:100%_4px] pointer-events-none"></div>
            
            <div class="font-mono text-gray-300 space-y-4 relative z-10">
              <p><span class="text-[#00ff41]">>></span> INITIALIZING BIO_SCAN...</p>
              <p>
                Innovative Software Developer experienced in building scalable, production-ready web and mobile applications. 
                Skilled at designing robust backend architectures and crafting responsive frontends.
              </p>
              <p>
                <span class="text-[#00ff41]">>></span> CORE_STACK: Laravel // Vue.js // Flutter // Inertia.js
              </p>
              <p>
                Passionate about writing clean, maintainable code and contributing to agile product teams that ship impactful software.
              </p>
            </div>
          </div>

          <!-- Stats/Details -->
          <div class="grid grid-cols-2 gap-4">
            <div class="border border-[#00f3ff]/30 p-4 bg-[#0a0a0a]/50">
              <h3 class="text-[#00f3ff] text-sm font-mono mb-1">EXPERIENCE</h3>
              <p class="text-2xl font-bold text-white">4+ YEARS</p>
            </div>
            <div class="border border-[#00f3ff]/30 p-4 bg-[#0a0a0a]/50">
              <h3 class="text-[#00f3ff] text-sm font-mono mb-1">PROJECTS</h3>
              <p class="text-2xl font-bold text-white">ENTERPRISE</p>
            </div>
          </div>
        </div>

        <!-- Profile Image / Visual -->
        <div class="relative group">
          <div class="absolute -inset-4 bg-gradient-to-r from-[#00ff41] to-[#00f3ff] opacity-30 blur-lg group-hover:opacity-50 transition duration-500"></div>
          <div class="relative border-2 border-[#00ff41] p-2 bg-black/50">
            <img 
              :src="profileImg" 
              alt="Kato Emmanuel" 
              class="w-full h-auto grayscale group-hover:grayscale-0 transition duration-500"
            />
            <!-- Tech overlay lines -->
            <div class="absolute top-0 left-0 w-full h-[2px] bg-[#00ff41] shadow-[0_0_10px_#00ff41]"></div>
            <div class="absolute bottom-0 right-0 w-full h-[2px] bg-[#00f3ff] shadow-[0_0_10px_#00f3ff]"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

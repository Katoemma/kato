<script setup>
import { onMounted, ref } from 'vue'

const isVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})
</script>

<template>
  <section class="relative min-h-screen flex items-center pt-32 overflow-hidden bg-[#0f1f17]">
    <!-- Background map texture -->
    <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1"
      class="absolute inset-0 w-full h-full object-cover opacity-10" alt="Background" />

    <div class="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center"
      :class="[isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8']"
      style="transition: opacity 0.8s ease-out, transform 0.8s ease-out;">
      <!-- TEXT -->
      <div>
        <p class="text-orange-500 font-medium mb-4">
          GIS • Full-Stack • Systems Engineering
        </p>

        <h1 class="text-5xl md:text-6xl font-bold text-white leading-tight">
          Building Spatial Systems<br />
          <span class="text-orange-500">That Scale</span>
        </h1>

        <p class="mt-6 text-lg text-slate-300 max-w-xl">
          I design and build modern GIS platforms, data-driven web systems,
          and scalable SaaS tools for forestry, land restoration, and operations teams.
        </p>

        <div class="mt-10 flex flex-wrap gap-4">
          <a href="#projects"
            class="bg-orange-600 hover:bg-orange-700 px-6 py-3 rounded-full text-white font-medium shadow-lg shadow-orange-600/30 transition-all duration-200">
            View Work
          </a>

          <a href="#contact">
            <button
              class="border border-white/20 px-6 py-3 rounded-full text-white hover:bg-white/5 transition-all duration-200">
              Contact Me
            </button>
          </a>
        </div>
      </div>

      <!-- IMAGE COLLAGE -->
      <div class="relative hidden md:block h-[520px]">
        <!-- Tall main image -->
        <div
          class="absolute left-20 top-0 w-56 h-96 rounded-3xl overflow-hidden shadow-2xl shadow-black/40 border border-white/10">
          <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" class="w-full h-full object-cover"
            alt="Nature landscape" />
        </div>

        <!-- Top right -->
        <div class="absolute right-0 top-10 w-44 h-44 rounded-2xl overflow-hidden shadow-xl border border-white/10">
          <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470" class="w-full h-full object-cover"
            alt="Mountains" />
        </div>

        <!-- Bottom right -->
        <div class="absolute right-10 bottom-0 w-48 h-56 rounded-3xl overflow-hidden shadow-xl border border-white/10">
          <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e" class="w-full h-full object-cover"
            alt="Forest" />
        </div>

        <!-- Floating accent -->
        <div class="absolute left-0 bottom-20 w-40 h-40 rounded-full overflow-hidden shadow-xl border border-white/10">
          <img src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da" class="w-full h-full object-cover"
            alt="Taj Mahal" />
        </div>
      </div>
    </div>
  </section>
</template>

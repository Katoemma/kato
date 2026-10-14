<script setup>
import { onMounted, ref } from 'vue'

const isVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 80)
})
</script>

<template>
  <section class="relative min-h-screen flex flex-col justify-center bg-[#FAFAF8] overflow-hidden pt-16">

    <!-- Subtle grid pattern -->
    <div
      class="absolute inset-0 pointer-events-none"
      style="background-image: linear-gradient(to right, #e4e4e7 1px, transparent 1px), linear-gradient(to bottom, #e4e4e7 1px, transparent 1px); background-size: 48px 48px; opacity: 0.45;"
    />

    <!-- Orange accent dot top-right -->
    <div class="absolute top-32 right-16 w-3 h-3 rounded-full bg-[#D4651A] opacity-60 hidden lg:block" />
    <div class="absolute top-52 right-32 w-1.5 h-1.5 rounded-full bg-[#D4651A] opacity-30 hidden lg:block" />

    <div
      class="relative max-w-7xl mx-auto px-6 w-full"
      :class="[isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6']"
      style="transition: opacity 0.7s ease-out, transform 0.7s ease-out;"
    >
      <!-- Tag line -->
      <div class="flex items-center gap-2 mb-8">
        <span class="w-6 h-px bg-[#D4651A]" />
        <span class="text-xs font-medium text-[#D4651A] uppercase tracking-widest">
          GIS · Full-Stack · Systems Engineering
        </span>
      </div>

      <!-- Main headline -->
      <h1 class="text-5xl md:text-7xl lg:text-8xl font-bold text-[#18181B] leading-[1.02] tracking-tight max-w-4xl">
        Building<br />
        Spatial Systems<br />
        <span class="relative inline-block">
          That Scale
          <!-- Underline accent -->
          <span
            class="absolute -bottom-1 left-0 h-[3px] w-full bg-[#D4651A] rounded-full"
            :class="[isVisible ? 'scale-x-100' : 'scale-x-0']"
            style="transition: transform 0.6s ease-out 0.5s; transform-origin: left;"
          />
        </span>
      </h1>

      <!-- Sub-copy + actions row -->
      <div class="mt-10 flex flex-col md:flex-row md:items-end gap-10 md:gap-16">
        <p class="text-base md:text-lg text-[#71717A] max-w-md leading-relaxed">
          I design and build modern GIS platforms, data-driven web systems,
          and scalable SaaS tools for forestry, land restoration, and operations teams.
        </p>

        <div class="flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            class="bg-[#18181B] text-white text-sm font-medium px-6 py-3 rounded-md hover:bg-[#D4651A] transition-all duration-200"
          >
            View Work
          </a>
          <a
            href="#contact"
            class="border border-[#E4E4E7] text-[#18181B] text-sm font-medium px-6 py-3 rounded-md hover:border-[#18181B] transition-all duration-200"
          >
            Contact Me
          </a>
        </div>
      </div>

      <!-- Stats row -->
      <div
        class="mt-20 pt-8 border-t border-[#E4E4E7] flex flex-wrap gap-10"
        :class="[isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4']"
        style="transition: opacity 0.7s ease-out 0.3s, transform 0.7s ease-out 0.3s;"
      >
        <div>
          <p class="text-3xl font-bold text-[#18181B]">3+</p>
          <p class="text-sm text-[#71717A] mt-0.5">Years of Experience</p>
        </div>
        <div class="w-px bg-[#E4E4E7] self-stretch hidden sm:block" />
        <div>
          <p class="text-3xl font-bold text-[#18181B]">15+</p>
          <p class="text-sm text-[#71717A] mt-0.5">Projects Shipped</p>
        </div>
        <div class="w-px bg-[#E4E4E7] self-stretch hidden sm:block" />
        <div>
          <p class="text-3xl font-bold text-[#18181B]">GIS</p>
          <p class="text-sm text-[#71717A] mt-0.5">Spatial Engineering</p>
        </div>
        <div class="w-px bg-[#E4E4E7] self-stretch hidden sm:block" />
        <div>
          <p class="text-3xl font-bold text-[#18181B]">Full-Stack</p>
          <p class="text-sm text-[#71717A] mt-0.5">Web Development</p>
        </div>
      </div>
    </div>

    <!-- Scroll cue -->
    <div
      class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-40"
      :class="[isVisible ? 'opacity-40' : 'opacity-0']"
      style="transition: opacity 0.6s ease-out 0.8s;"
    >
      <span class="text-[10px] uppercase tracking-widest text-[#71717A]">Scroll</span>
      <svg class="w-4 h-4 text-[#71717A] animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </section>
</template>

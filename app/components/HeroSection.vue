<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        entry.target.style.transitionDelay = (i % 4) * 0.08 + 's'
        entry.target.classList.add('!opacity-100', '!translate-y-0')
      }
    })
  }, { threshold: 0.08 })
  document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el))
})
</script>

<template>
  <section class="min-h-screen flex items-center pt-[68px] bg-[#FAFAF8]">
    <div class="max-w-[1200px] mx-auto w-full px-10 py-20 grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-20 items-center">

      <!-- ── Left column ── -->
      <div class="flex flex-col">

        <!-- Availability badge -->
        <div
          data-reveal
          class="opacity-0 translate-y-5 transition-all duration-[600ms] ease-out inline-flex items-center gap-2 w-fit mb-7 px-4 py-[7px] rounded-full text-[12px] font-medium tracking-wide text-[#E8541A] bg-[rgba(232,84,26,0.07)] border border-[rgba(232,84,26,0.2)]"
        >
          <span class="w-[7px] h-[7px] rounded-full bg-[#E8541A] animate-pulse" />
          Available for work
        </div>

        <!-- Name -->
        <h1
          data-reveal
          class="opacity-0 translate-y-5 transition-all duration-[600ms] ease-out font-[Syne] font-extrabold leading-[1.0] tracking-[-0.03em] text-[#18181B] mb-4"
          style="font-size: clamp(52px, 6.5vw, 84px);"
        >
          Kato<br />
          <span class="text-[#E8541A]">Emmanuel</span>
        </h1>

        <!-- Role -->
        <p
          data-reveal
          class="opacity-0 translate-y-5 transition-all duration-[600ms] ease-out text-[15px] font-medium text-[#6B6B65] tracking-[0.01em] mb-5"
        >
          Full-Stack &amp; Geospatial Engineer
        </p>

        <!-- Bio -->
        <p
          data-reveal
          class="opacity-0 translate-y-5 transition-all duration-[600ms] ease-out text-[15px] leading-[1.72] text-[#6B6B65] max-w-[460px] mb-9"
        >
          Building scalable web, mobile &amp; AI-powered systems —
          from Kampala to the cloud. 3+ years, real-world impact.
        </p>

        <!-- CTAs -->
        <div
          data-reveal
          class="opacity-0 translate-y-5 transition-all duration-[600ms] ease-out flex flex-wrap items-center gap-4 mb-14"
        >
          <a
            href="#work"
            class="inline-flex items-center gap-2 px-[26px] py-[13px] rounded-full bg-[#E8541A] text-white font-[Syne] font-bold text-[14px] tracking-[0.02em] hover:bg-[#C94815] hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(232,84,26,0.3)] transition-all duration-200"
          >
            View Projects
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#contact"
            class="inline-flex items-center gap-2 text-[14px] font-medium text-[#6B6B65] hover:text-[#E8541A] transition-colors duration-200"
          >
            Let's Talk
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        </div>

        <!-- Stats -->
        <div
          data-reveal
          class="opacity-0 translate-y-5 transition-all duration-[600ms] ease-out flex items-center gap-7 pt-7 border-t border-[#E2E2DC]"
        >
          <div>
            <span class="block font-[Syne] font-extrabold text-[26px] leading-none text-[#E8541A]">75%</span>
            <span class="block text-[11px] font-medium text-[#6B6B65] mt-[5px] tracking-[0.01em]">Reporting Time Saved</span>
          </div>
          <div class="w-px h-8 bg-[#E2E2DC] flex-shrink-0" />
          <div>
            <span class="block font-[Syne] font-extrabold text-[26px] leading-none text-[#E8541A]">450+</span>
            <span class="block text-[11px] font-medium text-[#6B6B65] mt-[5px] tracking-[0.01em]">Field Users Reached</span>
          </div>
          <div class="w-px h-8 bg-[#E2E2DC] flex-shrink-0" />
          <div>
            <span class="block font-[Syne] font-extrabold text-[26px] leading-none text-[#E8541A]">3+</span>
            <span class="block text-[11px] font-medium text-[#6B6B65] mt-[5px] tracking-[0.01em]">Years Experience</span>
          </div>
        </div>
      </div>

      <!-- ── Right column: photo card ── -->
      <div
        data-reveal
        class="opacity-0 translate-y-5 transition-all duration-[600ms] ease-out hidden lg:flex flex-col items-center gap-4"
      >
        <div class="relative w-full">
          <!-- Photo -->
          <img
            src="/Images/profile.png"
            alt="Kato Emmanuel"
            class="w-full h-[500px] object-cover object-top rounded-3xl border border-[#E2E2DC] shadow-[0_20px_60px_rgba(0,0,0,0.1)]"
          />

          <!-- Badge: GIS Expert -->
          <div class="absolute top-5 -left-5 flex items-center gap-2 bg-white border border-[#E2E2DC] rounded-full px-3.5 py-2 shadow-[0_4px_16px_rgba(0,0,0,0.07)] text-[12px] font-semibold text-[#18181B] whitespace-nowrap">
            <span class="w-[26px] h-[26px] rounded-full bg-[#E8541A] flex items-center justify-center text-white flex-shrink-0">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </span>
            GIS Expert
          </div>

          <!-- Badge: AI Developer -->
          <div class="absolute bottom-20 -right-5 flex items-center gap-2 bg-white border border-[#E2E2DC] rounded-full px-3.5 py-2 shadow-[0_4px_16px_rgba(0,0,0,0.07)] text-[12px] font-semibold text-[#18181B] whitespace-nowrap">
            <span class="w-[26px] h-[26px] rounded-full bg-[#E8541A] flex items-center justify-center text-white flex-shrink-0">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2" />
              </svg>
            </span>
            AI Developer
          </div>

          <!-- Tech strip -->
          <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-white border border-[#E2E2DC] rounded-full px-4 py-2 shadow-[0_4px_16px_rgba(0,0,0,0.06)]">
            <!-- Laravel -->
            <span class="w-7 h-7 rounded-lg bg-[#F2F1EE] flex items-center justify-center text-[10px] font-bold text-[#E8541A]">L</span>
            <!-- Vue -->
            <span class="w-7 h-7 rounded-lg bg-[#F2F1EE] flex items-center justify-center text-[10px] font-bold text-[#42B883]">V</span>
            <!-- Flutter -->
            <span class="w-7 h-7 rounded-lg bg-[#F2F1EE] flex items-center justify-center text-[10px] font-bold text-[#027DFD]">F</span>
            <!-- PostGIS -->
            <span class="w-7 h-7 rounded-lg bg-[#F2F1EE] flex items-center justify-center text-[10px] font-bold text-[#336791]">PG</span>
          </div>
        </div>

        <!-- Location tag -->
        <div class="flex items-center gap-1.5 text-[12px] font-medium text-[#6B6B65]">
          <svg class="w-3.5 h-3.5 text-[#E8541A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Kampala, Uganda
        </div>
      </div>

    </div>
  </section>
</template>

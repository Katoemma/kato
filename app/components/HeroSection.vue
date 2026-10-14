<script setup>
import { onMounted, ref } from 'vue'

const mounted = ref(false)

onMounted(() => {
  // Stagger mount trigger — small delay so transition fires
  requestAnimationFrame(() => {
    setTimeout(() => { mounted.value = true }, 60)
  })
})
</script>

<template>
  <section class="relative min-h-screen bg-[#FAFAF8] flex flex-col justify-between pt-[68px] overflow-hidden">

    <!-- ── Background: large faint name watermark ── -->
    <div
      class="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
      aria-hidden="true"
    >
      <span
        class="font-[ClashDisplay] font-extrabold text-[#18181B] whitespace-nowrap transition-all duration-[1200ms]"
        style="font-size: clamp(120px, 18vw, 260px); opacity: 0.028; letter-spacing: -0.04em; transform: translateY(10%);"
      >
        KATO
      </span>
    </div>

    <!-- ── Top strip: role + location ── -->
    <div
      class="relative z-10 max-w-[1200px] mx-auto w-full px-10 pt-14 flex items-center justify-between"
      :class="mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'"
      style="transition: opacity 500ms cubic-bezier(0.23,1,0.32,1), transform 500ms cubic-bezier(0.23,1,0.32,1); transition-delay: 0ms;"
    >
      <!-- Left: availability pill -->
      <div class="inline-flex items-center gap-2 px-4 py-[7px] rounded-full text-[12px] font-medium text-[#E8541A] bg-[rgba(232,84,26,0.07)] border border-[rgba(232,84,26,0.2)]">
        <span class="w-[7px] h-[7px] rounded-full bg-[#E8541A] animate-pulse" />
        Available for work
      </div>

      <!-- Right: location -->
      <div class="hidden sm:flex items-center gap-1.5 text-[12px] font-medium text-[#6B6B65]">
        <svg class="w-3.5 h-3.5 text-[#E8541A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        Kampala, Uganda
      </div>
    </div>

    <!-- ── Centre: giant editorial headline ── -->
    <div class="relative z-10 max-w-[1200px] mx-auto w-full px-10 flex-1 flex flex-col justify-center py-10">

      <!-- Eyebrow line -->
      <div
        class="flex items-center gap-3 mb-6"
        :class="mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
        style="transition: opacity 600ms cubic-bezier(0.23,1,0.32,1), transform 600ms cubic-bezier(0.23,1,0.32,1); transition-delay: 80ms;"
      >
        <span class="w-8 h-[1.5px] bg-[#E8541A] rounded-full" />
        <span class="text-[11px] font-bold text-[#6B6B65] tracking-[0.15em] uppercase">Full-Stack · Geospatial · AI</span>
      </div>

      <!-- Name — massive, centre-anchored -->
      <h1
        class="font-[ClashDisplay] font-extrabold leading-[0.92] tracking-[-0.04em] text-[#18181B]"
        style="font-size: clamp(64px, 10.5vw, 152px);"
      >
        <span
          class="block"
          :class="mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
          style="transition: opacity 700ms cubic-bezier(0.23,1,0.32,1), transform 700ms cubic-bezier(0.23,1,0.32,1); transition-delay: 120ms;"
        >
          Kato
        </span>
        <span
          class="block text-[#E8541A]"
          :class="mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
          style="transition: opacity 700ms cubic-bezier(0.23,1,0.32,1), transform 700ms cubic-bezier(0.23,1,0.32,1); transition-delay: 190ms;"
        >
          Emmanuel
        </span>
      </h1>

      <!-- Horizontal divider with inline bio -->
      <div
        class="mt-10 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8"
        :class="mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
        style="transition: opacity 700ms cubic-bezier(0.23,1,0.32,1), transform 700ms cubic-bezier(0.23,1,0.32,1); transition-delay: 280ms;"
      >
        <div class="flex-1 h-px bg-[#E2E2DC]" />
        <p class="text-[14px] leading-[1.7] text-[#6B6B65] max-w-sm sm:max-w-xs flex-shrink-0">
          Building scalable web, mobile &amp; AI-powered systems —
          from Kampala to the cloud.
        </p>
      </div>

      <!-- CTAs -->
      <div
        class="mt-10 flex flex-wrap items-center gap-4"
        :class="mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
        style="transition: opacity 700ms cubic-bezier(0.23,1,0.32,1), transform 700ms cubic-bezier(0.23,1,0.32,1); transition-delay: 340ms;"
      >
        <a
          href="#work"
          class="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#18181B] text-white font-[ClashDisplay] font-bold text-[13px] tracking-[0.03em] hover:bg-[#E8541A] active:scale-[0.97] transition-all duration-200"
        >
          View Projects
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
        <a
          href="#contact"
          class="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-[#E2E2DC] text-[#18181B] font-[ClashDisplay] font-bold text-[13px] tracking-[0.03em] hover:border-[#18181B] active:scale-[0.97] transition-all duration-200"
        >
          Let's Talk
        </a>
        <a
          href="/Kato_Emmanuel_CV.pdf"
          download
          class="hidden sm:inline-flex items-center gap-1.5 text-[13px] font-medium text-[#6B6B65] hover:text-[#E8541A] transition-colors duration-200 ml-2"
        >
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download CV
        </a>
      </div>
    </div>

    <!-- ── Bottom strip: stats + tech row ── -->
    <div
      class="relative z-10 border-t border-[#E2E2DC]"
      :class="mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
      style="transition: opacity 700ms cubic-bezier(0.23,1,0.32,1), transform 700ms cubic-bezier(0.23,1,0.32,1); transition-delay: 420ms;"
    >
      <div class="max-w-[1200px] mx-auto px-10 py-5 flex flex-wrap items-center justify-between gap-6">

        <!-- Stats -->
        <div class="flex items-center gap-8">
          <div
            v-for="(stat, i) in stats" :key="stat.value"
            class="flex items-center gap-8"
          >
            <div>
              <span class="block font-[ClashDisplay] font-extrabold text-[22px] leading-none text-[#18181B]">{{ stat.value }}</span>
              <span class="block text-[10px] font-medium text-[#6B6B65] mt-1 tracking-[0.04em] uppercase">{{ stat.label }}</span>
            </div>
            <div v-if="i < stats.length - 1" class="w-px h-7 bg-[#E2E2DC]" />
          </div>
        </div>

        <!-- Tech chips -->
        <div class="flex items-center gap-2">
          <span
            v-for="(tech, i) in techs" :key="tech.name"
            class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold border transition-all duration-200"
            :class="i === 0
              ? 'bg-[#E8541A] text-white border-[#E8541A]'
              : 'bg-white text-[#6B6B65] border-[#E2E2DC] hover:border-[#18181B] hover:text-[#18181B]'"
          >
            {{ tech.name }}
          </span>
          <span class="text-[11px] text-[#6B6B65] font-medium ml-1">+more</span>
        </div>

      </div>
    </div>

  </section>
</template>

<script>
export default {
  data() {
    return {
      stats: [
        { value: '3+',   label: 'Years Experience'      },
        { value: '15+',  label: 'Projects Shipped'      },
        { value: '450+', label: 'Field Users Reached'   },
        { value: '75%',  label: 'Reporting Time Saved'  },
      ],
      techs: [
        { name: 'Laravel'  },
        { name: 'Vue.js'   },
        { name: 'Flutter'  },
        { name: 'PostGIS'  },
        { name: 'OpenAI'   },
      ],
    }
  }
}
</script>

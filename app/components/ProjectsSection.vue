<template>
  <section id="work" class="bg-[#FAFAF8] py-24">
    <div class="max-w-[1200px] mx-auto px-8">

      <!-- Section header -->
      <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
        <div>
          <div class="flex items-center gap-3 mb-4">
            <span class="font-[Satoshi] text-[11px] font-bold text-[#E8541A] tracking-[0.1em]">02</span>
            <span class="w-10 h-px bg-[#E2E2DC]" />
            <span class="font-[Satoshi] text-[11px] font-bold text-[#6B6B65] tracking-[0.12em] uppercase">Work</span>
          </div>
          <h2 class="font-[ClashDisplay] font-bold text-[#18181B] leading-tight tracking-[-0.02em]"
            style="font-size: clamp(32px, 4vw, 48px);">
            Selected Projects
          </h2>
        </div>
        <p class="text-[14px] text-[#6B6B65] max-w-xs leading-relaxed">
          Shipped products with real-world impact.
        </p>
      </div>

      <!-- Bento grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <a
          v-for="card in cards" :key="card.title"
          :href="card.href"
          :target="card.href !== '#' ? '_blank' : undefined"
          rel="noopener"
          class="group flex flex-col bg-white border border-[#E2E2DC] rounded-2xl p-7 no-underline transition-all duration-[250ms] hover:border-[#E8541A]/30 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)]"
          :class="card.wide ? 'lg:col-span-2' : ''"
        >
          <!-- Top row -->
          <div class="flex items-start justify-between mb-6">
            <div
              class="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-[250ms] group-hover:bg-[#E8541A] group-hover:text-white"
              :class="card.accent
                ? 'bg-[#E8541A] text-white'
                : 'bg-[#F4F4F2] text-[#6B6B65]'"
            >
              <component :is="card.icon" class="w-5 h-5" />
            </div>

            <div class="flex items-center gap-2">
              <span
                v-if="card.badge"
                class="text-[11px] font-semibold px-3 py-1 rounded-full"
                :class="card.badge === 'Building'
                  ? 'bg-amber-50 text-amber-600 border border-amber-200'
                  : 'bg-[rgba(232,84,26,0.07)] text-[#E8541A] border border-[rgba(232,84,26,0.2)]'"
              >
                {{ card.badge }}
              </span>
              <div v-else class="w-7 h-7 rounded-lg bg-[#F4F4F2] flex items-center justify-center group-hover:bg-[#E8541A]/10 transition-colors duration-200">
                <svg class="w-3.5 h-3.5 text-[#6B6B65] group-hover:text-[#E8541A] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </div>
          </div>

          <!-- Title -->
          <h3 class="font-[Satoshi] text-[17px] font-bold text-[#18181B] mb-2 group-hover:text-[#E8541A] transition-colors duration-200">
            {{ card.title }}
          </h3>

          <!-- Desc -->
          <p class="text-[13px] leading-[1.75] text-[#6B6B65] flex-1 mb-6">{{ card.desc }}</p>

          <!-- Tags -->
          <div class="flex flex-wrap gap-1.5">
            <span
              v-for="tag in card.tags" :key="tag"
              class="text-[11px] font-medium px-2.5 py-[5px] rounded-md bg-[#F4F4F2] text-[#6B6B65] border border-[#E2E2DC]"
            >
              {{ tag }}
            </span>
          </div>
        </a>
      </div>

      <!-- Bottom CTA -->
      <div class="mt-12 flex justify-center">
        <a
          href="#contact"
          class="inline-flex items-center gap-2 text-[13px] font-semibold text-[#6B6B65] border border-[#E2E2DC] px-6 py-3 rounded-full hover:border-[#18181B] hover:text-[#18181B] transition-all duration-200"
        >
          Discuss your project
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>

    </div>
  </section>
</template>

<script setup>
import { defineComponent, h } from 'vue'

const icon = (d) => defineComponent({
  render: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
    h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d }),
  ])
})

const IconLeaf    = icon('M5 3s0 4 3 7 7 3 7 3-4 0-7 3-3 7-3 7 0-4-3-7-7-3-7-3 4 0 7-3 3-7 3-7z')
const IconPackage = icon('M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4')
const IconMap     = icon('M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7')
const IconUsers   = icon('M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z')
const IconSpark   = icon('M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z')
const IconPlane   = icon('M12 19l9 2-9-18-9 18 9-2zm0 0v-8')

const cards = [
  {
    icon: IconLeaf,
    title: 'Kijani Forestry App',
    desc: 'Cross-platform Flutter app for offline-first field data collection via Airtable API. Adopted by 450+ field staff across Uganda.',
    tags: ['Flutter', 'Airtable', 'Offline-First'],
    href: '#',
    wide: true,
    accent: true,
  },
  {
    icon: IconPackage,
    title: 'Airtable CRUD',
    desc: 'Open-source Dart library on pub.dev simplifying Airtable API for Flutter devs.',
    tags: ['Dart', 'Open Source', 'pub.dev'],
    href: 'https://pub.dev/packages/airtable_crud',
  },
  {
    icon: IconMap,
    title: 'Terrave',
    desc: 'Real-time spatial dashboard integrating PostGIS, Leaflet & Laravel for map-based analytics.',
    tags: ['PostGIS', 'Leaflet', 'Laravel'],
    href: 'https://terrave.lipon.store',
  },
  {
    icon: IconUsers,
    title: 'VireonHR',
    desc: 'AI-powered HRMS with automated recruitment, payroll, attendance tracking, and performance reviews for modern teams.',
    tags: ['Laravel', 'Vue', 'AI', 'Docker'],
    href: 'https://lipon.store',
    wide: true,
    accent: true,
  },
  {
    icon: IconSpark,
    title: 'Publlsh',
    desc: 'AI-powered social media management — scheduling, AI captions, and analytics.',
    tags: ['Laravel', 'Vue', 'AI'],
    href: 'https://publlsh.lipon.store',
    badge: 'Building',
  },
  {
    icon: IconPlane,
    title: 'Zoya Travels',
    desc: 'SEO-optimised travel agency landing page built with Nuxt.js and Tailwind CSS.',
    tags: ['Nuxt', 'Tailwind', 'SEO'],
    href: 'https://zoyatravelsug.com/',
    badge: 'Client',
  },
]
</script>

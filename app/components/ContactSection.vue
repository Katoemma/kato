<template>
  <section id="contact" class="bg-[#0C0C0A] py-24">
    <div class="max-w-[1200px] mx-auto px-8">

      <!-- Section label -->
      <div class="flex items-center gap-4 mb-14">
        <span class="font-[Syne] text-[11px] font-bold text-[#E8541A] tracking-[0.1em]">04</span>
        <span class="w-12 h-px bg-[#2A2A24]" />
        <span class="font-[Syne] text-[11px] font-bold text-[#8A8A80] tracking-[0.12em] uppercase">Contact</span>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

        <!-- Left: headline + links -->
        <div>
          <h2
            class="font-[Syne] font-extrabold leading-[1.0] tracking-[-0.03em] text-[#F5F0EB] mb-6"
            style="font-size: clamp(42px, 5vw, 72px);"
          >
            Let's build<br />
            <span class="text-[#E8541A]">something</span><br />
            great.
          </h2>

          <p class="text-[15px] leading-[1.7] text-[#8A8A80] mb-9">
            Open to freelance projects, full-time roles, and geospatial collaborations.
            Based in Uganda, working globally.
          </p>

          <div class="flex flex-col gap-3">
            <a
              v-for="link in contactLinks" :key="link.label"
              :href="link.href"
              class="flex items-center gap-2.5 text-[14px] text-[#8A8A80] hover:text-[#E8541A] transition-colors duration-200"
            >
              <component :is="link.icon" class="w-4 h-4 flex-shrink-0" />
              {{ link.label }}
            </a>
          </div>
        </div>

        <!-- Right: form -->
        <div class="bg-[#141410] border border-[#2A2A24] rounded-[20px] p-8">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label class="block text-[11px] font-semibold text-[#8A8A80] uppercase tracking-[0.08em] mb-2">Your Name</label>
              <input
                type="text"
                placeholder="Jane Smith"
                class="w-full bg-[rgba(255,255,255,0.04)] border border-[#2A2A24] text-[#F5F0EB] rounded-[10px] px-4 py-3 text-[14px] outline-none placeholder-[#46463E] focus:border-[rgba(232,84,26,0.45)] focus:shadow-[0_0_0_3px_rgba(232,84,26,0.08)] transition-all duration-200"
              />
            </div>
            <div>
              <label class="block text-[11px] font-semibold text-[#8A8A80] uppercase tracking-[0.08em] mb-2">Email</label>
              <input
                type="email"
                placeholder="jane@company.com"
                class="w-full bg-[rgba(255,255,255,0.04)] border border-[#2A2A24] text-[#F5F0EB] rounded-[10px] px-4 py-3 text-[14px] outline-none placeholder-[#46463E] focus:border-[rgba(232,84,26,0.45)] focus:shadow-[0_0_0_3px_rgba(232,84,26,0.08)] transition-all duration-200"
              />
            </div>
          </div>

          <div class="mb-4">
            <label class="block text-[11px] font-semibold text-[#8A8A80] uppercase tracking-[0.08em] mb-2">Subject</label>
            <input
              type="text"
              placeholder="Project inquiry / Job opportunity"
              class="w-full bg-[rgba(255,255,255,0.04)] border border-[#2A2A24] text-[#F5F0EB] rounded-[10px] px-4 py-3 text-[14px] outline-none placeholder-[#46463E] focus:border-[rgba(232,84,26,0.45)] focus:shadow-[0_0_0_3px_rgba(232,84,26,0.08)] transition-all duration-200"
            />
          </div>

          <div class="mb-5">
            <label class="block text-[11px] font-semibold text-[#8A8A80] uppercase tracking-[0.08em] mb-2">Message</label>
            <textarea
              rows="4"
              placeholder="Tell me about your project..."
              class="w-full bg-[rgba(255,255,255,0.04)] border border-[#2A2A24] text-[#F5F0EB] rounded-[10px] px-4 py-3 text-[14px] outline-none placeholder-[#46463E] focus:border-[rgba(232,84,26,0.45)] focus:shadow-[0_0_0_3px_rgba(232,84,26,0.08)] transition-all duration-200 resize-none"
            />
          </div>

          <a
            href="mailto:katoemmy001@gmail.com"
            class="flex items-center justify-center gap-2 w-full bg-[#E8541A] hover:bg-[#C94815] text-white font-[Syne] font-bold text-[14px] tracking-[0.02em] rounded-full py-3.5 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(232,84,26,0.3)] transition-all duration-200"
          >
            Send Message
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { defineComponent, h } from 'vue'

const svgIcon = (d) => defineComponent({
  render: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
    h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d }),
  ])
})

const IconMail  = svgIcon('M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z')
const IconPhone = svgIcon('M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z')
const IconGlobe = svgIcon('M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 004 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z')

const contactLinks = [
  { icon: IconMail,  label: 'katoemmy001@gmail.com', href: 'mailto:katoemmy001@gmail.com' },
  { icon: IconPhone, label: '+256 778 707 801',       href: 'tel:+256778707801' },
  { icon: IconGlobe, label: 'katoemma.website',       href: 'https://katoemma.website' },
]
</script>

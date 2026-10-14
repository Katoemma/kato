<template>
  <section id="about" class="max-w-[1200px] mx-auto px-8 py-24">

    <!-- Section label -->
    <div class="flex items-center gap-4 mb-14">
      <span class="font-[Syne] text-[11px] font-bold text-[#E8541A] tracking-[0.1em]">01</span>
      <span class="w-12 h-px bg-[#E2E2DC]" />
      <span class="font-[Syne] text-[11px] font-bold text-[#6B6B65] tracking-[0.12em] uppercase">About</span>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-20 items-start">

      <!-- Left: text -->
      <div>
        <h2
          class="font-[Syne] font-bold leading-[1.2] tracking-[-0.02em] text-[#18181B] mb-6"
          style="font-size: clamp(28px, 3.5vw, 42px);"
        >
          I build systems that work — on the web, in the field, everywhere in between.
        </h2>

        <p class="text-[15px] leading-[1.75] text-[#6B6B65] mb-4">
          I'm an innovative Full-Stack Software Developer with expertise spanning web, mobile, and AI-powered
          applications. From backend architectures in <strong class="text-[#18181B] font-semibold">Laravel</strong>
          to fluid frontends with <strong class="text-[#18181B] font-semibold">Vue.js / Nuxt.js</strong>
          and cross-platform apps in <strong class="text-[#18181B] font-semibold">Flutter</strong> — I ship end-to-end.
        </p>

        <p class="text-[15px] leading-[1.75] text-[#6B6B65] mb-7">
          Beyond traditional development, I design geospatial systems — leveraging spatial databases, mapping
          libraries, and field data pipelines to help organisations act on geographic information in real time.
        </p>

        <div class="flex flex-wrap gap-2">
          <span
            v-for="tag in tags" :key="tag"
            class="inline-flex items-center px-3 py-[5px] rounded-full text-[12px] font-medium bg-[rgba(232,84,26,0.07)] text-[#E8541A] border border-[rgba(232,84,26,0.18)]"
          >
            {{ tag }}
          </span>
        </div>
      </div>

      <!-- Right: values list -->
      <div class="flex flex-col">
        <div
          v-for="(v, i) in values" :key="i"
          class="flex items-start gap-4 py-5"
          :class="i === 0 ? 'border-t border-b border-[#E2E2DC]' : 'border-b border-[#E2E2DC]'"
        >
          <div class="w-9 h-9 flex-shrink-0 rounded-[10px] bg-[rgba(232,84,26,0.08)] flex items-center justify-center text-[#E8541A]">
            <component :is="v.icon" class="w-4 h-4" />
          </div>
          <div>
            <p class="font-[Syne] text-[14px] font-bold text-[#18181B] mb-1">{{ v.title }}</p>
            <p class="text-[13px] text-[#6B6B65] leading-[1.6]">{{ v.desc }}</p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { defineComponent, h } from 'vue'

// Inline SVG icon components — no external dependency
const IconGlobe = defineComponent({ render: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 004 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z' }),
]) })

const IconBrain = defineComponent({ render: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' }),
]) })

const IconPackage = defineComponent({ render: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4' }),
]) })

const IconGrad = defineComponent({ render: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M12 14l9-5-9-5-9 5 9 5z' }),
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z' }),
]) })

const IconZap = defineComponent({ render: () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M13 10V3L4 14h7v7l9-11h-7z' }),
]) })

const tags = ['Clean Architecture', 'Open Source', 'Agile / Sprints', 'Offline-First', 'LLM Integration']

const values = [
  { icon: IconGlobe,   title: 'Geospatial & Field-First',    desc: 'Systems that work where data is sparse — in the field, offline, under pressure.' },
  { icon: IconBrain,   title: 'AI-Augmented',                desc: 'Integrating OpenAI & Anthropic APIs to automate complex workflows.' },
  { icon: IconPackage, title: 'Open Source Contributor',     desc: 'Published Dart libraries to pub.dev used by the Flutter community.' },
  { icon: IconGrad,    title: 'Mentor & Educator',           desc: 'Mentored 100+ students to national app competition finals.' },
  { icon: IconZap,     title: 'Measurable Impact',           desc: '35–75% efficiency gains across real production deployments.' },
]
</script>

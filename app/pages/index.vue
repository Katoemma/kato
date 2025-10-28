<script setup lang="ts">
const title = 'Full‑Stack Developer & UI/UX Designer'
const description = 'I build modern, scalable web and mobile applications end‑to‑end, from design to production. Specialized in the VILT stack (Vue, Inertia, Laravel, Tailwind), Nuxt.js, Flutter, TypeScript, and AI‑powered RAG using LangChain.js with Google Gemini.'

useSeoMeta({
  title: `Katoemma — ${title}`,
  description,
  ogTitle: `Katoemma — ${title}`,
  ogDescription: description,
  twitterTitle: `Katoemma — ${title}`,
  twitterDescription: description
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Katoemma',
        jobTitle: 'Full-Stack Developer & UI/UX Designer',
        url: 'https://example.com',
        sameAs: [
          'https://github.com/your-username',
          'https://www.linkedin.com/in/your-username',
          'https://dribbble.com/your-username'
        ],
        knowsAbout: [
          'Vue.js', 'Nuxt.js', 'Laravel', 'Inertia.js', 'Tailwind CSS', 'Flutter', 'Dart', 'TypeScript', 'JavaScript', 'AI RAG', 'LangChain.js', 'Google Gemini', 'Airtable', 'Supabase'
        ],
        worksFor: {
          '@type': 'Organization',
          name: 'Independent'
        }
      })
    }
  ]
})

const projects = [
  {
    title: 'AI RAG Chatbot (LangChain.js + Google Gemini)',
    description: 'Production‑ready conversational AI with RAG, semantic search, and citations.',
    tags: ['Nuxt.js', 'TypeScript', 'LangChain.js', 'Google Gemini'],
    cover: '/project-default.svg',
    year: '2025'
  },
  {
    title: 'Airtable CRUD Flutter Package',
    description: 'Open‑source Flutter package simplifying Airtable API integrations with clean, developer‑friendly APIs.',
    tags: ['Flutter', 'Dart', 'Airtable', 'Open Source'],
    cover: '/project-default.svg',
    year: '2024'
  },
  {
    title: 'VILT SaaS Starter',
    description: 'Full‑stack starter with Vue, Inertia, Laravel, Tailwind CSS, and robust auth, billing, and CRUD patterns.',
    tags: ['Vue', 'Inertia', 'Laravel', 'Tailwind CSS'],
    cover: '/project-default.svg',
    year: '2023'
  }
]
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative overflow-hidden">
      <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div class="absolute -top-40 left-1/2 -translate-x-1/2 h-[480px] w-[480px] rounded-full bg-accent blur-[160px] opacity-10"></div>
      </div>

      <div class="mx-auto max-w-7xl px-6 pt-24 pb-20">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <div class="md:col-span-7">
            <p class="eyebrow">Hi, I'm <span class="accent font-semibold">Katoemma</span> 👋</p>
            <h1 class="mt-3 text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight">
              <span class="text-gradient">Full‑Stack Developer</span> & UI/UX Designer
            </h1>
            <p class="mt-5 max-w-2xl text-slate-300 leading-relaxed">I design and build delightful products — from Figma to production code — specializing in VILT, Nuxt.js, Flutter, and AI‑powered experiences.</p>

            <div class="mt-7 flex flex-wrap items-center gap-3">
              <a href="#work" class="btn btn-primary">View Projects</a>
              <a href="#contact" class="btn btn-ghost">Contact Me</a>
            </div>

            <div class="mt-8 grid grid-cols-3 gap-6 text-sm text-slate-400">
              <div>
                <p class="text-2xl font-bold text-white">8+ yrs</p>
                <p>Experience</p>
              </div>
              <div>
                <p class="text-2xl font-bold text-white">20+ </p>
                <p>Projects</p>
              </div>
              <div>
                <p class="text-2xl font-bold text-white">Open‑Source</p>
                <p class="mono">Airtable CRUD Pkg</p>
              </div>
            </div>
          </div>

          <div class="md:col-span-5">
            <div class="glass p-6">
              <div class="grid grid-cols-2 gap-3 text-sm">
                <div class="rounded-lg bg-white/5 p-4 border border-white/10">
                  <p class="text-slate-400">Frontend</p>
                  <p class="mt-1 font-semibold">Vue, Nuxt, Inertia</p>
                </div>
                <div class="rounded-lg bg-white/5 p-4 border border-white/10">
                  <p class="text-slate-400">Backend</p>
                  <p class="mt-1 font-semibold">Laravel, Node</p>
                </div>
                <div class="rounded-lg bg-white/5 p-4 border border-white/10">
                  <p class="text-slate-400">Mobile</p>
                  <p class="mt-1 font-semibold">Flutter, Dart</p>
                </div>
                <div class="rounded-lg bg-white/5 p-4 border border-white/10">
                  <p class="text-slate-400">AI/ML</p>
                  <p class="mt-1 font-semibold">RAG, LangChain, Gemini</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- What I Do -->
    <section id="about" class="mx-auto max-w-7xl px-6 py-20">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div class="lg:col-span-6">
          <h2 class="text-2xl font-bold">What I Do</h2>
          <p class="mt-3 text-slate-300">From UX research and prototyping to scalable backends and mobile apps, I ship polished, accessible, and performant products.</p>
          <ul class="mt-6 space-y-3 text-slate-300">
            <li>🎨 UI/UX: Wireframes → Prototypes → Polished UI (Figma, Dribbble)</li>
            <li>🧩 Frontend: Vue.js, Nuxt.js, Inertia.js, Tailwind CSS</li>
            <li>📱 Mobile: Flutter (Dart) for cross‑platform apps</li>
            <li>🗄️ Backend: Laravel (PHP), Node.js (TS/JS), APIs</li>
            <li>🧠 AI/ML: RAG chatbots with LangChain.js + Google Gemini</li>
            <li>👐 Open Source: Airtable CRUD Flutter Package</li>
          </ul>
        </div>
        <div class="lg:col-span-6">
          <div class="card glass p-6">
            <h3 class="font-semibold">Highlights</h3>
            <div class="mt-4 grid gap-4">
              <div class="rounded-xl bg-white/5 p-4 border border-white/10">
                <p class="text-slate-400 text-sm">End‑to‑End Product Development</p>
                <p class="mt-1">From design in Figma to clean, scalable production code.</p>
              </div>
              <div class="rounded-xl bg-white/5 p-4 border border-white/10">
                <p class="text-slate-400 text-sm">AI Integration</p>
                <p class="mt-1">Building intelligent, context‑aware experiences with RAG.</p>
              </div>
              <div class="rounded-xl bg-white/5 p-4 border border-white/10">
                <p class="text-slate-400 text-sm">Airtable CRUD Flutter Package</p>
                <p class="mt-1">Widely‑used OSS to streamline Airtable API integrations.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stack -->
    <section id="stack" class="mx-auto max-w-7xl px-6 py-20">
      <h2 class="text-2xl font-bold">Tech Stack</h2>
      <div class="mt-6 flex flex-wrap gap-2">
        <TechBadge v-for="t in ['Vue.js','Nuxt.js','Inertia.js','Laravel','Tailwind CSS','Flutter','Dart','TypeScript','JavaScript','PHP','Google Gemini','LangChain.js','Airtable','Supabase','Git','GitHub','Figma','Dribbble']" :key="t" :label="t" />
      </div>
    </section>

    <!-- Projects -->
    <section id="work" class="mx-auto max-w-7xl px-6 py-20">
      <div class="flex items-end justify-between">
        <div>
          <h2 class="text-2xl font-bold">Selected Work</h2>
          <p class="mt-2 text-slate-400 text-sm">A few projects that highlight design craft, engineering depth, and product impact.</p>
        </div>
        <a href="#" class="text-sm text-slate-300 hover:text-white link-underline">See all</a>
      </div>
      <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProjectCard v-for="p in projects" :key="p.title" :project="p" />
      </div>
    </section>

    <!-- Contact -->
    <section id="contact" class="mx-auto max-w-7xl px-6 py-20">
      <div class="card glass p-8">
        <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 class="text-2xl font-bold">Let’s build something great</h2>
            <p class="mt-2 text-slate-300">Available for freelance, contracting, and full‑time opportunities.</p>
          </div>
          <div class="flex items-center gap-3">
            <a href="mailto:hello@example.com" class="btn btn-primary">Email Me</a>
            <a href="#" class="btn btn-ghost">View GitHub</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
import { Icon } from '@iconify/vue'

// SEO Meta Tags
useSeoMeta({
  title: 'Kato Emmanuel — Full-Stack & Geospatial Engineer',
  description: 'Kato Emmanuel - Expert Full-Stack Software Engineer & Geospatial Developer based in Uganda. Specializing in Laravel, Vue.js, Flutter, PostGIS, and AI-powered applications. Building scalable web, mobile, and geospatial systems for real-world impact.',
  ogTitle: 'Kato Emmanuel — Full-Stack & Geospatial Engineer',
  ogDescription: 'Full-Stack & Geospatial Engineer building web, mobile, and AI-powered applications with real-world impact.',
  ogImage: 'https://katoemma.website/og-image.png',
  ogUrl: 'https://katoemma.website',
  ogSiteName: 'Kato Emmanuel',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Kato Emmanuel — Full-Stack & Geospatial Engineer',
})

useHead({
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap' }
  ]
})

// Custom cursor logic
onMounted(() => {
  const cursor = document.getElementById('cursor')
  const ring = document.getElementById('cursorRing')

  const moveCursor = (e: MouseEvent) => {
    if (cursor && ring) {
      cursor.style.left = e.clientX + 'px'
      cursor.style.top = e.clientY + 'px'
      ring.style.left = e.clientX + 'px'
      ring.style.top = e.clientY + 'px'
    }
  }

  document.addEventListener('mousemove', moveCursor)

  // Hover effects
  const hoverElements = document.querySelectorAll('a, button, .card')
  hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      if (cursor) {
        cursor.style.width = '6px'
        cursor.style.height = '6px'
      }
      if (ring) {
        ring.style.width = '50px'
        ring.style.height = '50px'
      }
    })
    el.addEventListener('mouseleave', () => {
      if (cursor) {
        cursor.style.width = '12px'
        cursor.style.height = '12px'
      }
      if (ring) {
        ring.style.width = '36px'
        ring.style.height = '36px'
      }
    })
  })

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal')
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        ; (entry.target as HTMLElement).style.transitionDelay = (i % 3) * 0.1 + 's'
        entry.target.classList.add('visible')
      }
    })
  }, { threshold: 0.1 })
  reveals.forEach(el => observer.observe(el))

  // Skill bars
  const barObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
          bar.classList.add('animate')
        })
      }
    })
  }, { threshold: 0.3 })
  document.querySelectorAll('.card').forEach(card => barObserver.observe(card))

  // Counter animation
  const animateCounter = (el: HTMLElement, target: number, duration = 1800) => {
    let start: number | null = null
    const step = (timestamp: number) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      el.textContent = Math.floor(progress * target).toString()
      if (progress < 1) requestAnimationFrame(step)
      else {
        const suffix = target === 75 ? '%' : target === 450 ? '+' : '+'
        el.textContent = target + suffix
      }
    }
    requestAnimationFrame(step)
  }

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt((entry.target as HTMLElement).dataset.target || '0')
        animateCounter(entry.target as HTMLElement, target)
        counterObserver.unobserve(entry.target)
      }
    })
  }, { threshold: 0.5 })
  document.querySelectorAll('.counter').forEach(el => counterObserver.observe(el))
})
</script>

<template>
  <div class="site-wrapper">
    <!-- Custom cursor -->
    <div class="cursor" id="cursor"></div>
    <div class="cursor-ring" id="cursorRing"></div>

    <!-- =========== NAV =========== -->
    <nav class="py-4 px-6 md:px-12">
      <div class="max-w-6xl mx-auto flex items-center justify-between">
        <a href="#" class="syne font-bold text-lg tracking-tight brand-text">
          KE<span class="text-white">.</span>
        </a>
        <div class="hidden md:flex items-center gap-8">
          <a href="#about" class="nav-link">About</a>
          <a href="#skills" class="nav-link">Skills</a>
          <a href="#projects" class="nav-link">Projects</a>
          <a href="#geo" class="nav-link">Geospatial</a>
          <a href="#contact" class="nav-link">Contact</a>
        </div>
        <a href="mailto:katoemmy001@gmail.com" class="btn-primary text-xs py-2 px-5">
          Hire Me
          <Icon icon="lucide:arrow-right" class="w-4 h-4" />
        </a>
      </div>
    </nav>

    <!-- =========== HERO =========== -->
    <section class="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div class="grid-bg"></div>

      <!-- Blobs -->
      <div class="blob w-96 h-96 bg-green-500 top-20 -left-32"></div>
      <div class="blob w-80 h-80 bg-green-700 bottom-20 right-0"></div>

      <div class="relative z-10 max-w-6xl mx-auto px-6 md:px-12 w-full py-20">
        <div class="flex flex-col lg:flex-row items-start lg:items-center gap-16">

          <!-- Left: Text -->
          <div class="flex-1">
            <div class="flex items-center gap-3 mb-8">
              <span class="tag">
                <span class="w-2 h-2 rounded-full bg-green-400 mr-2 pulsing-dot"></span>
                Available for work · Gulu, Uganda
              </span>
            </div>

            <h1 class="syne text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
              <span class="hero-word" style="animation-delay:0.1s;">Full-Stack</span><br />
              <span class="hero-word brand-text" style="animation-delay:0.2s;">& Geospatial</span><br />
              <span class="hero-word" style="animation-delay:0.3s;">Engineer.</span>
            </h1>

            <p class="text-base md:text-lg leading-relaxed mb-10 max-w-xl text-muted">
              I'm <strong class="text-white font-medium">Kato Emmanuel</strong> — a Full-Stack Software Engineer with 3+
              years building scalable web, mobile, and AI-powered applications. I also design geospatial systems that
              make geographic data actionable for real-world impact.
            </p>

            <div class="flex flex-wrap gap-4">
              <a href="#projects" class="btn-primary">View Projects</a>
              <a href="#contact" class="btn-outline">Let's Talk</a>
            </div>

            <!-- Stat strip -->
            <div class="flex gap-10 mt-14 pt-10 border-t border-green-500/10">
              <div>
                <p class="stat-num counter" data-target="75">0</p>
                <p class="text-xs mt-1 text-muted">% Reporting Time Saved</p>
              </div>
              <div>
                <p class="stat-num counter" data-target="450">0</p>
                <p class="text-xs mt-1 text-muted">+ Field Users Reached</p>
              </div>
              <div>
                <p class="stat-num counter" data-target="3">0</p>
                <p class="text-xs mt-1 text-muted">+ Years Experience</p>
              </div>
            </div>
          </div>

          <!-- Right: Avatar card -->
          <div class="flex-shrink-0 relative">
            <!-- Main card -->
            <div class="relative w-72 h-80 card overflow-hidden card-gradient">
              <!-- Decorative geo lines -->
              <svg class="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 288 320" fill="none">
                <line x1="0" y1="80" x2="288" y2="80" stroke="#4ade80" stroke-width="0.5" />
                <line x1="0" y1="160" x2="288" y2="160" stroke="#4ade80" stroke-width="0.5" />
                <line x1="0" y1="240" x2="288" y2="240" stroke="#4ade80" stroke-width="0.5" />
                <line x1="72" y1="0" x2="72" y2="320" stroke="#4ade80" stroke-width="0.5" />
                <line x1="144" y1="0" x2="144" y2="320" stroke="#4ade80" stroke-width="0.5" />
                <line x1="216" y1="0" x2="216" y2="320" stroke="#4ade80" stroke-width="0.5" />
                <circle cx="144" cy="160" r="60" stroke="#4ade80" stroke-width="0.5" />
                <circle cx="144" cy="160" r="100" stroke="#4ade80" stroke-width="0.3" />
              </svg>

              <!-- Avatar placeholder -->
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="text-center">
                  <div
                    class="w-28 h-28 rounded-full mx-auto mb-4 flex items-center justify-center syne font-extrabold text-4xl avatar-gradient">
                    KE
                  </div>
                  <p class="syne font-bold text-lg">Kato Emmanuel</p>
                  <p class="text-sm mt-1 text-muted">Gulu City, Uganda</p>
                  <div class="flex justify-center gap-2 mt-3">
                    <span class="tag text-xs">Laravel</span>
                    <span class="tag text-xs">Flutter</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Floating badges -->
            <div class="float-badge absolute -top-5 -right-8 card px-3 py-2 text-xs syne font-bold bg-card">
              <Icon icon="lucide:hexagon" class="w-4 h-4 brand-text" /> GIS Systems
            </div>
            <div class="float-badge absolute -bottom-4 -left-8 card px-3 py-2 text-xs syne font-bold bg-card"
              style="animation-delay: 1.5s;">
              <Icon icon="lucide:bot" class="w-4 h-4 brand-text" /> AI-Powered Apps
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- =========== ABOUT =========== -->
    <section id="about" class="py-24 px-6 md:px-12">
      <div class="max-w-6xl mx-auto">
        <div class="flex flex-col lg:flex-row gap-16 items-start">

          <!-- Left -->
          <div class="flex-1 reveal">
            <div class="accent-line mb-4"></div>
            <h2 class="syne text-4xl font-bold mb-6">About Me</h2>
            <p class="text-base leading-relaxed mb-5 text-muted">
              I'm an innovative Full-Stack Software Developer with expertise spanning web, mobile, and AI-powered
              applications. From backend architectures in <strong class="text-white">Laravel</strong> to fluid frontends
              with <strong class="text-white">Vue.js / Nuxt.js</strong> and cross-platform apps in <strong
                class="text-white">Flutter</strong> — I ship end-to-end.
            </p>
            <p class="text-base leading-relaxed mb-5 text-muted">
              Beyond traditional development, I design and build <strong class="brand-text">geospatial systems</strong>
              — leveraging spatial databases, mapping libraries, and field data pipelines to help organizations
              understand and act on geographic information in real time.
            </p>
            <p class="text-base leading-relaxed text-muted">
              I thrive in challenging environments — from low-connectivity field deployments across Uganda to
              AI-augmented workflows — always with a focus on clean architecture, open-source, and technology that
              solves real problems.
            </p>

            <div class="flex flex-wrap gap-3 mt-8">
              <span class="tag">Clean Architecture</span>
              <span class="tag">Open Source</span>
              <span class="tag">Agile / Sprints</span>
              <span class="tag">Offline-First Apps</span>
              <span class="tag">LLM Integration</span>
            </div>
          </div>

          <!-- Right: Values grid -->
          <div class="flex-1 grid grid-cols-2 gap-4 reveal">
            <div class="card p-5 col-span-2">
              <Icon icon="lucide:globe" class="w-8 h-8 mb-2 brand-text" />
              <p class="syne font-bold text-base mb-1">Geospatial & Field-First</p>
              <p class="text-sm text-muted">Building systems that work where data is sparse — in the field, offline, and
                under pressure.</p>
            </div>
            <div class="card p-5">
              <Icon icon="lucide:bot" class="w-8 h-8 mb-2 brand-text" />
              <p class="syne font-bold text-sm mb-1">AI-Augmented</p>
              <p class="text-xs text-muted">Integrating LLM APIs (OpenAI, Anthropic) to automate workflows.</p>
            </div>
            <div class="card p-5">
              <Icon icon="lucide:package" class="w-8 h-8 mb-2 brand-text" />
              <p class="syne font-bold text-sm mb-1">Open Source</p>
              <p class="text-xs text-muted">Published Dart libraries to the pub.dev community.</p>
            </div>
            <div class="card p-5">
              <Icon icon="lucide:graduation-cap" class="w-8 h-8 mb-2 brand-text" />
              <p class="syne font-bold text-sm mb-1">Mentor</p>
              <p class="text-xs text-muted">Mentored 100+ students to national app competition finals.</p>
            </div>
            <div class="card p-5">
              <Icon icon="lucide:zap" class="w-8 h-8 mb-2 brand-text" />
              <p class="syne font-bold text-sm mb-1">Performance</p>
              <p class="text-xs text-muted">35–75% efficiency gains in real deployments.</p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- =========== SKILLS =========== -->
    <section id="skills" class="py-24 px-6 md:px-12 bg-white/[0.01]">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-16 reveal">
          <div class="accent-line mx-auto mb-4"></div>
          <h2 class="syne text-3xl font-bold mb-4">Tech Stack</h2>
          <p class="text-sm text-muted max-w-md mx-auto">Core technologies I use to build scalable applications and
            geospatial systems.</p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 reveal">

          <!-- Backend -->
          <div class="card p-5 text-center group">
            <p class="syne font-semibold text-sm mb-3">Backend</p>
            <div class="flex justify-center gap-2 mb-3">
              <Icon icon="logos:laravel" class="w-6 h-6" />
              <Icon icon="logos:php" class="w-6 h-6" />
              <Icon icon="logos:nodejs-icon" class="w-6 h-6" />
            </div>
            <p class="text-xs text-muted">Laravel · PHP · Node.js</p>
          </div>

          <!-- Frontend -->
          <div class="card p-5 text-center group">
            <p class="syne font-semibold text-sm mb-3">Frontend</p>
            <div class="flex justify-center gap-2 mb-3">
              <Icon icon="logos:vue" class="w-6 h-6" />
              <Icon icon="logos:nuxt-icon" class="w-6 h-6" />
              <Icon icon="logos:tailwindcss-icon" class="w-6 h-6" />
            </div>
            <p class="text-xs text-muted">Vue.js · Nuxt · Tailwind</p>
          </div>

          <!-- Mobile -->
          <div class="card p-5 text-center group">
            <p class="syne font-semibold text-sm mb-3">Mobile</p>
            <div class="flex justify-center gap-2 mb-3">
              <Icon icon="logos:flutter" class="w-6 h-6" />
              <Icon icon="logos:dart" class="w-6 h-6" />
            </div>
            <p class="text-xs text-muted">Flutter · Dart · Offline-First</p>
          </div>

          <!-- Data & Maps -->
          <div class="card p-5 text-center group">
            <p class="syne font-semibold text-sm mb-3">Data & Maps</p>
            <div class="flex justify-center gap-2 mb-3">
              <Icon icon="logos:postgresql" class="w-6 h-6" />
              <Icon icon="simple-icons:qgis" class="w-6 h-6 text-green-600" />
              <Icon icon="simple-icons:mapbox" class="w-6 h-6" />
            </div>
            <p class="text-xs text-muted">PostgreSQL · PostGIS · Mapbox · GeoServer · QGIS</p>
          </div>

        </div>

        <!-- AI Integration -->
        <div class="mt-4 reveal">
          <div class="card p-5 flex items-center gap-4">
            <div class="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0">
              <Icon icon="lucide:brain-circuit" class="w-5 h-5 brand-text" />
            </div>
            <div>
              <p class="syne font-semibold text-sm">AI Integration</p>
              <p class="text-xs text-muted">OpenAI · Anthropic APIs · Prompt Engineering for automated workflows</p>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- =========== PROJECTS =========== -->
    <section id="projects" class="py-24 px-6 md:px-12">
      <div class="max-w-6xl mx-auto">
        <div class="mb-14 reveal">
          <div class="accent-line mb-4"></div>
          <h2 class="syne text-4xl font-bold mb-3">Notable Projects</h2>
          <p class="text-sm text-muted">Shipped products with real-world impact.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          <!-- Project 1 -->
          <div class="card p-6 reveal" style="animation-delay: 0.1s;">
            <div class="w-10 h-10 rounded-xl flex items-center justify-center mb-4 bg-green-500/10">
              <Icon icon="lucide:leaf" class="w-6 h-6 brand-text" />
            </div>
            <h3 class="syne font-bold text-lg mb-2">Kijani Forestry App</h3>
            <p class="text-sm leading-relaxed mb-5 text-muted">
              Cross-platform Flutter application with Airtable API integration for offline-first field data collection.
              Adopted by 450+ field staff across Uganda, cutting reporting time by 75%.
            </p>
            <div class="flex flex-wrap gap-2 mb-5">
              <span class="tag">Flutter</span><span class="tag">Airtable API</span><span
                class="tag">Offline-First</span>
            </div>
            <div class="flex items-center gap-4 pt-4 border-t border-green-500/10 text-xs text-muted">
              <span>450+ Users</span>
              <span class="brand-text">75% Time Saved</span>
            </div>
          </div>

          <!-- Project 2 -->
          <div class="card p-6 reveal" style="animation-delay: 0.2s;">
            <div class="w-10 h-10 rounded-xl flex items-center justify-center mb-4 bg-green-500/10">
              <Icon icon="lucide:package" class="w-6 h-6 brand-text" />
            </div>
            <h3 class="syne font-bold text-lg mb-2">Airtable CRUD Library</h3>
            <p class="text-sm leading-relaxed mb-5 text-muted">
              Open-source Dart library published to pub.dev that simplifies Airtable API integration for Flutter
              developers. Reduces boilerplate and accelerates development across the community.
            </p>
            <div class="flex flex-wrap gap-2 mb-5">
              <span class="tag">Dart</span><span class="tag">Open Source</span><span class="tag">pub.dev</span>
            </div>
            <div class="flex items-center gap-4 pt-4 border-t border-green-500/10 text-xs text-muted">
              <span>Flutter Community</span>
              <span class="brand-text">Public Package</span>
            </div>
          </div>

          <!-- Project 3: Geo -->
          <div class="card p-6 reveal border-green-400/25" style="animation-delay: 0.3s;">
            <div class="w-10 h-10 rounded-xl flex items-center justify-center mb-4 bg-green-500/15">
              <Icon icon="lucide:map" class="w-6 h-6 brand-text" />
            </div>
            <h3 class="syne font-bold text-lg mb-2">Geospatial Field Dashboard</h3>
            <p class="text-sm leading-relaxed mb-5 text-muted">
              Real-time spatial dashboard for visualising field data from across Uganda. Integrates PostGIS, Leaflet,
              and Laravel to provide map-based analytics for decision-makers.
            </p>
            <div class="flex flex-wrap gap-2 mb-5">
              <span class="tag">PostGIS</span><span class="tag">Leaflet</span><span class="tag">Laravel</span>
            </div>
            <div class="flex items-center gap-4 pt-4 border-t border-green-500/10 text-xs">
              <span class="brand-text">Geospatial System</span>
            </div>
          </div>

          <!-- Project 4: POS -->
          <div class="card p-6 reveal" style="animation-delay: 0.1s;">
            <div class="w-10 h-10 rounded-xl flex items-center justify-center mb-4 bg-green-500/10">
              <Icon icon="lucide:monitor" class="w-6 h-6 brand-text" />
            </div>
            <h3 class="syne font-bold text-lg mb-2">Legacy POS Modernization</h3>
            <p class="text-sm leading-relaxed mb-5 text-muted">
              Migrated legacy point-of-sale systems to modern architectures with offline-first desktop and mobile
              clients designed for low-connectivity environments.
            </p>
            <div class="flex flex-wrap gap-2 mb-5">
              <span class="tag">Offline-First</span><span class="tag">Desktop App</span><span class="tag">Modern
                Stack</span>
            </div>
            <div class="flex items-center gap-4 pt-4 border-t border-green-500/10 text-xs text-muted">
              <span>Native Frontiers</span>
              <span class="brand-text">2026</span>
            </div>
          </div>

          <!-- Project 5: AI -->
          <div class="card p-6 reveal" style="animation-delay: 0.2s;">
            <div class="w-10 h-10 rounded-xl flex items-center justify-center mb-4 bg-green-500/10">
              <Icon icon="lucide:bot" class="w-6 h-6 brand-text" />
            </div>
            <h3 class="syne font-bold text-lg mb-2">AI-Powered Workflow Tools</h3>
            <p class="text-sm leading-relaxed mb-5 text-muted">
              Integrated LLM APIs (OpenAI, Anthropic) into business workflows for document processing, intelligent
              routing, and automated data-driven reporting.
            </p>
            <div class="flex flex-wrap gap-2 mb-5">
              <span class="tag">OpenAI API</span><span class="tag">Anthropic</span><span class="tag">Prompt
                Engineering</span>
            </div>
            <div class="flex items-center gap-4 pt-4 border-t border-green-500/10 text-xs text-muted">
              <span class="brand-text">AI Integration</span>
            </div>
          </div>

          <!-- Project 6: Web -->
          <div class="card p-6 reveal" style="animation-delay: 0.3s;">
            <div class="w-10 h-10 rounded-xl flex items-center justify-center mb-4 bg-green-500/10">
              <Icon icon="lucide:globe" class="w-6 h-6 brand-text" />
            </div>
            <h3 class="syne font-bold text-lg mb-2">Responsive Web Platforms</h3>
            <p class="text-sm leading-relaxed mb-5 text-muted">
              Developed responsive web interfaces using PHP and Tailwind CSS for Oysters & Pearls Uganda, improving page
              load speed by 35% and database efficiency.
            </p>
            <div class="flex flex-wrap gap-2 mb-5">
              <span class="tag">PHP</span><span class="tag">Tailwind CSS</span><span class="tag">MySQL</span>
            </div>
            <div class="flex items-center gap-4 pt-4 border-t border-green-500/10 text-xs text-muted">
              <span>35% Faster Load</span>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- =========== GEOSPATIAL =========== -->
    <section id="geo" class="py-24 px-6 md:px-12 relative overflow-hidden bg-green-400/[0.02]">
      <div class="max-w-6xl mx-auto">
        <div class="flex flex-col lg:flex-row gap-16 items-center">

          <!-- Map SVG visual -->
          <div class="flex-1 reveal">
            <svg viewBox="0 0 420 300" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-lg">
              <!-- Grid -->
              <defs>
                <pattern id="geo-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                  <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(74,222,128,0.08)" stroke-width="0.5" />
                </pattern>
              </defs>
              <rect width="420" height="300" fill="url(#geo-grid)" />

              <!-- Uganda outline (simplified) -->
              <path
                d="M160 40 L200 35 L240 50 L260 80 L270 120 L260 160 L250 190 L220 210 L200 220 L170 210 L150 185 L140 160 L135 130 L140 100 L150 70 Z"
                fill="rgba(74,222,128,0.06)" stroke="rgba(74,222,128,0.4)" stroke-width="1.5" stroke-linejoin="round" />

              <!-- Gulu dot -->
              <circle cx="200" cy="90" r="5" fill="#4ade80" class="map-dot" style="animation-delay: 0s;" />
              <circle cx="200" cy="90" r="14" fill="rgba(74,222,128,0.12)" class="map-dot"
                style="animation-delay: 0s;" />
              <text x="212" y="94" fill="#4ade80" font-size="10" font-family="'Syne', sans-serif" font-weight="700">Gulu
                City</text>

              <!-- Kampala dot -->
              <circle cx="195" cy="175" r="4" fill="#22c55e" class="map-dot" style="animation-delay: 0.7s;" />
              <circle cx="195" cy="175" r="12" fill="rgba(34,197,94,0.12)" class="map-dot"
                style="animation-delay: 0.7s;" />
              <text x="207" y="179" fill="#9ca3af" font-size="9" font-family="'DM Sans', sans-serif">Kampala</text>

              <!-- Field lines -->
              <line x1="200" y1="90" x2="195" y2="175" stroke="rgba(74,222,128,0.2)" stroke-width="1"
                stroke-dasharray="4,3" />

              <!-- Data points scattered -->
              <circle cx="150" cy="110" r="3" fill="rgba(74,222,128,0.5)" />
              <circle cx="230" cy="105" r="3" fill="rgba(74,222,128,0.5)" />
              <circle cx="170" cy="140" r="3" fill="rgba(74,222,128,0.5)" />
              <circle cx="220" cy="145" r="3" fill="rgba(74,222,128,0.5)" />
              <circle cx="165" cy="165" r="3" fill="rgba(74,222,128,0.5)" />
              <circle cx="240" cy="125" r="3" fill="rgba(74,222,128,0.3)" />

              <!-- Legend -->
              <circle cx="30" cy="260" r="4" fill="#4ade80" />
              <text x="40" y="264" fill="#6b7a6b" font-size="9" font-family="'DM Sans', sans-serif">Base Location</text>
              <circle cx="120" cy="260" r="3" fill="rgba(74,222,128,0.5)" />
              <text x="130" y="264" fill="#6b7a6b" font-size="9" font-family="'DM Sans', sans-serif">Field Data
                Points</text>

              <!-- Compass rose -->
              <g transform="translate(375, 40)">
                <circle cx="0" cy="0" r="18" fill="rgba(74,222,128,0.05)" stroke="rgba(74,222,128,0.2)"
                  stroke-width="0.5" />
                <text x="0" y="-7" fill="#4ade80" font-size="8" text-anchor="middle" font-family="'Syne', sans-serif"
                  font-weight="700">N</text>
                <line x1="0" y1="-4" x2="0" y2="4" stroke="rgba(74,222,128,0.5)" stroke-width="0.5" />
                <line x1="-4" y1="0" x2="4" y2="0" stroke="rgba(74,222,128,0.3)" stroke-width="0.5" />
              </g>

              <!-- Scale bar -->
              <line x1="300" y1="270" x2="360" y2="270" stroke="rgba(74,222,128,0.4)" stroke-width="1" />
              <line x1="300" y1="267" x2="300" y2="273" stroke="rgba(74,222,128,0.4)" stroke-width="1" />
              <line x1="360" y1="267" x2="360" y2="273" stroke="rgba(74,222,128,0.4)" stroke-width="1" />
              <text x="330" y="265" fill="#6b7a6b" font-size="8" text-anchor="middle"
                font-family="'DM Sans', sans-serif">100 km</text>
            </svg>
          </div>

          <!-- Right: Text -->
          <div class="flex-1 reveal">
            <div class="accent-line mb-4"></div>
            <h2 class="syne text-4xl font-bold mb-6">Geospatial Systems</h2>
            <p class="text-base leading-relaxed mb-6 text-muted">
              I design and build geospatial systems that transform raw geographic data into actionable intelligence.
              From mobile field data collection in remote Uganda to interactive web-based spatial dashboards — I bridge
              the physical world and the digital.
            </p>

            <div class="space-y-4">
              <div class="card p-4 flex gap-4">
                <div class="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-green-500/10">
                  <Icon icon="lucide:database" class="w-4 h-4 brand-text" />
                </div>
                <div>
                  <p class="syne font-bold text-sm mb-1">Spatial Databases</p>
                  <p class="text-xs text-muted">PostGIS, spatial indexing, geospatial queries, coordinate systems.</p>
                </div>
              </div>
              <div class="card p-4 flex gap-4">
                <div class="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-green-500/10">
                  <Icon icon="lucide:map" class="w-4 h-4 brand-text" />
                </div>
                <div>
                  <p class="syne font-bold text-sm mb-1">Interactive Mapping</p>
                  <p class="text-xs text-muted">Leaflet, Mapbox, OpenLayers — dynamic, web-based map visualisations.</p>
                </div>
              </div>
              <div class="card p-4 flex gap-4">
                <div class="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-green-500/10">
                  <Icon icon="lucide:smartphone" class="w-4 h-4 brand-text" />
                </div>
                <div>
                  <p class="syne font-bold text-sm mb-1">Mobile Field Collection</p>
                  <p class="text-xs text-muted">GPS-integrated Flutter apps with offline sync for field teams.</p>
                </div>
              </div>
              <div class="card p-4 flex gap-4">
                <div class="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-green-500/10">
                  <Icon icon="lucide:bar-chart-3" class="w-4 h-4 brand-text" />
                </div>
                <div>
                  <p class="syne font-bold text-sm mb-1">Spatial Analytics</p>
                  <p class="text-xs text-muted">GeoJSON, KML, shapefiles — data pipelines for geographic
                    decision-making.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- =========== CONTACT =========== -->
    <section id="contact" class="py-24 px-6 md:px-12">
      <div class="max-w-3xl mx-auto text-center reveal">
        <div class="accent-line mx-auto mb-4"></div>
        <h2 class="syne text-4xl md:text-5xl font-bold mb-4">
          Let's Build<br /><span class="brand-text">Something Great.</span>
        </h2>
        <p class="mb-12 text-base text-muted">
          Open to freelance projects, full-time roles, and geospatial collaborations. Based in Uganda, working globally.
        </p>

        <div class="card p-8 text-left">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label class="text-xs mb-2 block text-muted">Your Name</label>
              <input type="text" class="form-input" placeholder="Jane Smith" />
            </div>
            <div>
              <label class="text-xs mb-2 block text-muted">Email Address</label>
              <input type="email" class="form-input" placeholder="jane@company.com" />
            </div>
          </div>
          <div class="mb-4">
            <label class="text-xs mb-2 block text-muted">Subject</label>
            <input type="text" class="form-input" placeholder="Project inquiry / Job opportunity" />
          </div>
          <div class="mb-6">
            <label class="text-xs mb-2 block text-muted">Message</label>
            <textarea class="form-input" rows="4" placeholder="Tell me about your project..."></textarea>
          </div>
          <button class="btn-primary w-full justify-center" onclick="window.location='mailto:katoemmy001@gmail.com'">
            Send Message
            <Icon icon="lucide:arrow-right" class="w-4 h-4" />
          </button>
        </div>

        <!-- Contact links -->
        <div class="flex flex-wrap justify-center gap-6 mt-10">
          <a href="mailto:katoemmy001@gmail.com" class="flex items-center gap-2 text-sm nav-link">
            <Icon icon="lucide:mail" class="w-4 h-4" />
            katoemmy001@gmail.com
          </a>
          <a href="tel:+256778707801" class="flex items-center gap-2 text-sm nav-link">
            <Icon icon="lucide:phone" class="w-4 h-4" />
            +256 778 707 801
          </a>
          <a href="https://katoemma.website" target="_blank" class="flex items-center gap-2 text-sm nav-link">
            <Icon icon="lucide:globe" class="w-4 h-4" />
            katoemma.website
          </a>
        </div>
      </div>
    </section>

    <!-- =========== FOOTER =========== -->
    <footer class="py-8 px-6 md:px-12 border-t border-green-500/10">
      <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="syne font-bold text-lg brand-text">KE.</p>
        <p class="text-xs text-muted">© 2026 Kato Emmanuel · Full-Stack & Geospatial Engineer · Gulu City, Uganda</p>
        <p class="text-xs text-muted">Built with precision & code.</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.site-wrapper {
  font-family: 'DM Sans', sans-serif;
  background-color: #f8faf8;
  color: #1a1f1a;
  overflow-x: hidden;
  cursor: none;
}

/* Custom cursor */
.cursor {
  width: 12px;
  height: 12px;
  background: #16a34a;
  border-radius: 50%;
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
  transition: transform 0.1s ease, width 0.2s ease, height 0.2s ease, background 0.2s ease;
}

.cursor-ring {
  width: 36px;
  height: 36px;
  border: 1px solid rgba(22, 163, 74, 0.4);
  border-radius: 50%;
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 9998;
  transform: translate(-50%, -50%);
  transition: left 0.08s ease, top 0.08s ease, width 0.2s ease, height 0.2s ease;
}

/* Fonts */
.syne {
  font-family: 'Syne', sans-serif;
}

/* Noise texture overlay */
.site-wrapper::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 0;
  opacity: 0.15;
}

/* Brand color */
.brand-text {
  color: #16a34a;
}

.text-muted {
  color: #5b6a5b;
}

.bg-card {
  background: #ffffff;
}

.text-white {
  color: #1a1f1a !important;
}

/* Animated grid lines */
.grid-bg {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(22, 163, 74, 0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(22, 163, 74, 0.06) 1px, transparent 1px);
  background-size: 60px 60px;
  animation: gridScroll 20s linear infinite;
}

@keyframes gridScroll {
  0% {
    background-position: 0 0;
  }

  100% {
    background-position: 60px 60px;
  }
}

/* Glow blobs */
.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.12;
  pointer-events: none;
}

/* Nav */
nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  backdrop-filter: blur(12px);
  background: rgba(248, 250, 248, 0.85);
  border-bottom: 1px solid rgba(22, 163, 74, 0.1);
}

/* Hero text animation */
.hero-word {
  display: inline-block;
  opacity: 0;
  transform: translateY(30px);
  animation: wordUp 0.7s ease forwards;
}

@keyframes wordUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Cards */
.card {
  background: #ffffff;
  border: 1px solid rgba(22, 163, 74, 0.15);
  border-radius: 16px;
  transition: border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.card:hover {
  border-color: rgba(22, 163, 74, 0.4);
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(22, 163, 74, 0.1);
}

.card-gradient {
  background: linear-gradient(135deg, #ffffff 0%, #f0f7f0 100%);
}

/* Tag pill */
.tag {
  display: inline-flex;
  align-items: center;
  padding: 4px 12px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 500;
  background: rgba(22, 163, 74, 0.08);
  color: #16a34a;
  border: 1px solid rgba(22, 163, 74, 0.2);
  letter-spacing: 0.02em;
}

/* Green accent line */
.accent-line {
  width: 48px;
  height: 3px;
  background: linear-gradient(90deg, #16a34a, transparent);
  border-radius: 2px;
}

/* Stat number */
.stat-num {
  font-family: 'Syne', sans-serif;
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  color: #16a34a;
  line-height: 1;
}

/* Timeline dot */
.timeline-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #16a34a;
  box-shadow: 0 0 0 4px rgba(22, 163, 74, 0.15);
  flex-shrink: 0;
  margin-top: 6px;
}

/* Skill bar */
.skill-bar-track {
  height: 3px;
  background: rgba(22, 163, 74, 0.12);
  border-radius: 2px;
  overflow: hidden;
}

.skill-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, #16a34a, #22c55e);
  border-radius: 2px;
  transform-origin: left;
  transform: scaleX(0);
  transition: transform 1.2s cubic-bezier(0.22, 1, 0.36, 1);
}

.skill-bar-fill.animate {
  transform: scaleX(var(--w, 1));
}

/* Scroll reveal */
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Geo map visual */
.map-dot {
  animation: mapPulse 2s ease-in-out infinite;
}

@keyframes mapPulse {

  0%,
  100% {
    opacity: 1;
    r: 4;
  }

  50% {
    opacity: 0.5;
    r: 7;
  }
}

/* Nav link */
.nav-link {
  position: relative;
  color: #5b6a5b;
  transition: color 0.2s ease;
  font-size: 14px;
  font-weight: 400;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background: #16a34a;
  transition: width 0.3s ease;
}

.nav-link:hover {
  color: #16a34a;
}

.nav-link:hover::after {
  width: 100%;
}

/* CTA button */
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  background: #16a34a;
  color: #ffffff;
  border-radius: 999px;
  font-family: 'Syne', sans-serif;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.02em;
  transition: background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
  cursor: none;
}

.btn-primary:hover {
  background: #15803d;
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(22, 163, 74, 0.25);
}

.btn-outline {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  background: transparent;
  color: #16a34a;
  border: 1px solid rgba(22, 163, 74, 0.4);
  border-radius: 999px;
  font-family: 'Syne', sans-serif;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.02em;
  transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
  cursor: none;
}

.btn-outline:hover {
  background: rgba(22, 163, 74, 0.08);
  border-color: #16a34a;
  transform: translateY(-2px);
}

/* Contact input */
.form-input {
  background: #ffffff;
  border: 1px solid rgba(22, 163, 74, 0.2);
  color: #1a1f1a;
  border-radius: 10px;
  padding: 12px 16px;
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  outline: none;
  width: 100%;
}

.form-input:focus {
  border-color: rgba(22, 163, 74, 0.5);
  box-shadow: 0 0 0 3px rgba(22, 163, 74, 0.1);
}

.form-input::placeholder {
  color: #8b9a8b;
}

/* Floating badge */
.float-badge {
  animation: floatBadge 3s ease-in-out infinite;
}

@keyframes floatBadge {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-8px);
  }
}

/* Pulsing dot */
.pulsing-dot {
  animation: mapPulse 1.5s ease-in-out infinite;
}

/* Avatar gradient */
.avatar-gradient {
  background: linear-gradient(135deg, rgba(22, 163, 74, 0.15), rgba(34, 197, 94, 0.25));
  border: 2px solid rgba(22, 163, 74, 0.3);
  color: #16a34a;
}

/* Scrollbar */
::-webkit-scrollbar {
  width: 4px;
}

::-webkit-scrollbar-track {
  background: #e8f0e8;
}

::-webkit-scrollbar-thumb {
  background: rgba(22, 163, 74, 0.3);
  border-radius: 2px;
}

/* Hide custom cursor on touch devices */
@media (hover: none) {
  .site-wrapper {
    cursor: auto;
  }

  .cursor,
  .cursor-ring {
    display: none;
  }

  .btn-primary,
  .btn-outline {
    cursor: pointer;
  }
}
</style>

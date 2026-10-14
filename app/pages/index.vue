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
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Inter:wght@300;400;500;600&display=swap' }
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
        <a href="#" class="syne font-bold text-xl tracking-tight brand-text">
          KE<span class="text-dim">.</span>
        </a>
        <div class="hidden md:flex items-center gap-8">
          <a href="#about" class="nav-link">About</a>
          <a href="#skills" class="nav-link">Skills</a>
          <a href="#projects" class="nav-link">Projects</a>
          <a href="#geo" class="nav-link">Geospatial</a>
          <a href="#contact" class="nav-link">Contact</a>
        </div>
        <a href="/Kato_Emmanuel_CV.pdf" download class="btn-primary text-xs py-2 px-5">
          Download CV
          <Icon icon="lucide:download" class="w-4 h-4" />
        </a>
      </div>
    </nav>

    <!-- =========== HERO =========== -->
    <section class="relative min-h-screen flex items-center overflow-hidden pt-20">

      <div class="relative z-10 max-w-6xl mx-auto px-6 md:px-12 w-full py-20">
        <div class="flex flex-col lg:flex-row items-center gap-16">

          <!-- Left: Text -->
          <div class="flex-1 max-w-2xl">
            <!-- Label -->
            <div class="flex items-center gap-3 mb-8">
              <span class="availability-tag">
                <span class="pulsing-dot"></span>
                Available for work
              </span>
            </div>

            <!-- Headline -->
            <h1 class="syne text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.08] mb-6 tracking-tight">
              <span class="hero-word" style="animation-delay:0.1s;">Full-Stack</span><br />
              <span class="hero-word brand-text" style="animation-delay:0.2s;">& Geospatial</span><br />
              <span class="hero-word underline-accent" style="animation-delay:0.3s;">
                Engineer
              </span>
            </h1>

            <p class="text-base md:text-lg leading-relaxed mb-10 max-w-lg text-muted inter">
              I'm <strong class="text-dark font-semibold">Kato Emmanuel</strong> — a Full-Stack Software Engineer with 3+
              years building scalable web, mobile, and AI-powered applications.
            </p>

            <!-- CTA Buttons -->
            <div class="flex flex-wrap items-center gap-4 mb-12">
              <a href="#projects" class="btn-primary">
                View Projects
                <Icon icon="lucide:arrow-right" class="w-4 h-4" />
              </a>
              <a href="#contact" class="text-sm font-medium brand-text hover-link flex items-center gap-1.5">
                Let's Talk
                <Icon icon="lucide:arrow-up-right" class="w-4 h-4" />
              </a>
            </div>

            <!-- Stats -->
            <div class="flex gap-10">
              <div>
                <p class="syne text-3xl font-bold brand-text">75%</p>
                <p class="inter text-xs text-muted mt-1 font-medium">Reporting Time Saved</p>
              </div>
              <div class="stat-divider"></div>
              <div>
                <p class="syne text-3xl font-bold brand-text">450+</p>
                <p class="inter text-xs text-muted mt-1 font-medium">Field Users Reached</p>
              </div>
              <div class="stat-divider"></div>
              <div>
                <p class="syne text-3xl font-bold brand-text">3+</p>
                <p class="inter text-xs text-muted mt-1 font-medium">Years Experience</p>
              </div>
            </div>
          </div>

          <!-- Right: Profile Photo -->
          <div class="flex-shrink-0 relative">
            <!-- Main photo container -->
            <div class="relative w-72 h-[26rem] rounded-3xl overflow-hidden shadow-xl border border-zinc-200">
              <!-- Profile photo -->
              <img
                src="/Images/profile.png"
                alt="Kato Emmanuel"
                class="w-full h-full object-cover"
              />

              <!-- Name overlay at bottom -->
              <div class="name-overlay absolute bottom-0 left-0 right-0 p-5">
                <p class="syne font-bold text-lg text-dark">Kato Emmanuel</p>
                <p class="inter text-sm text-muted">Full-Stack & Geospatial Engineer</p>
              </div>
            </div>

            <!-- Floating badges -->
            <div class="float-badge absolute top-1/4 -right-5 bg-white rounded-2xl px-4 py-2.5 shadow-md border border-zinc-100 flex items-center gap-2.5">
              <div class="w-8 h-8 rounded-xl badge-icon flex items-center justify-center">
                <Icon icon="lucide:map-pin" class="w-4 h-4 text-white" />
              </div>
              <span class="inter text-xs font-semibold text-dark">GIS Expert</span>
            </div>

            <div class="float-badge absolute bottom-28 -left-7 bg-white rounded-2xl px-4 py-2.5 shadow-md border border-zinc-100 flex items-center gap-2.5">
              <div class="w-8 h-8 rounded-xl badge-icon flex items-center justify-center">
                <Icon icon="lucide:bot" class="w-4 h-4 text-white" />
              </div>
              <span class="inter text-xs font-semibold text-dark">AI Developer</span>
            </div>

            <!-- Tech stack icons at bottom -->
            <div class="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-2xl px-4 py-2.5 shadow-md border border-zinc-100 flex items-center gap-2">
              <div class="w-7 h-7 rounded-lg bg-zinc-50 flex items-center justify-center">
                <Icon icon="logos:laravel" class="w-4 h-4" />
              </div>
              <div class="w-7 h-7 rounded-lg bg-zinc-50 flex items-center justify-center">
                <Icon icon="logos:vue" class="w-4 h-4" />
              </div>
              <div class="w-7 h-7 rounded-lg bg-zinc-50 flex items-center justify-center">
                <Icon icon="logos:flutter" class="w-4 h-4" />
              </div>
              <div class="w-7 h-7 rounded-lg bg-zinc-50 flex items-center justify-center">
                <Icon icon="logos:postgresql" class="w-4 h-4" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- =========== ABOUT =========== -->
    <section id="about" class="py-24 px-6 md:px-12 section-alt">
      <div class="max-w-6xl mx-auto">
        <div class="flex flex-col lg:flex-row gap-16 items-start">

          <!-- Left -->
          <div class="flex-1 reveal">
            <p class="inter text-xs font-semibold brand-text uppercase tracking-widest mb-3">About Me</p>
            <h2 class="syne text-4xl font-bold mb-6 text-dark">Turning complex<br />problems into elegant code.</h2>
            <p class="inter text-base leading-relaxed mb-5 text-muted">
              I'm an innovative Full-Stack Software Developer with expertise spanning web, mobile, and AI-powered
              applications. From backend architectures in <strong class="text-dark font-semibold">Laravel</strong> to fluid frontends
              with <strong class="text-dark font-semibold">Vue.js / Nuxt.js</strong> and cross-platform apps in <strong
                class="text-dark font-semibold">Flutter</strong> — I ship end-to-end.
            </p>
            <p class="inter text-base leading-relaxed mb-5 text-muted">
              Beyond traditional development, I design and build <strong class="brand-text font-semibold">geospatial systems</strong>
              — leveraging spatial databases, mapping libraries, and field data pipelines to help organizations
              understand and act on geographic information in real time.
            </p>
            <p class="inter text-base leading-relaxed text-muted">
              I thrive in challenging environments — from low-connectivity field deployments across Uganda to
              AI-augmented workflows — always with a focus on clean architecture, open-source, and technology that
              solves real problems.
            </p>

            <div class="flex flex-wrap gap-2.5 mt-8">
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
              <div class="icon-wrap mb-3">
                <Icon icon="lucide:globe" class="w-5 h-5 brand-text" />
              </div>
              <p class="syne font-bold text-base mb-1 text-dark">Geospatial & Field-First</p>
              <p class="inter text-sm text-muted">Building systems that work where data is sparse — in the field, offline, and
                under pressure.</p>
            </div>
            <div class="card p-5">
              <div class="icon-wrap mb-3">
                <Icon icon="lucide:bot" class="w-5 h-5 brand-text" />
              </div>
              <p class="syne font-bold text-sm mb-1 text-dark">AI-Augmented</p>
              <p class="inter text-xs text-muted">Integrating LLM APIs (OpenAI, Anthropic) to automate workflows.</p>
            </div>
            <div class="card p-5">
              <div class="icon-wrap mb-3">
                <Icon icon="lucide:package" class="w-5 h-5 brand-text" />
              </div>
              <p class="syne font-bold text-sm mb-1 text-dark">Open Source</p>
              <p class="inter text-xs text-muted">Published Dart libraries to the pub.dev community.</p>
            </div>
            <div class="card p-5">
              <div class="icon-wrap mb-3">
                <Icon icon="lucide:graduation-cap" class="w-5 h-5 brand-text" />
              </div>
              <p class="syne font-bold text-sm mb-1 text-dark">Mentor</p>
              <p class="inter text-xs text-muted">Mentored 100+ students to national app competition finals.</p>
            </div>
            <div class="card p-5">
              <div class="icon-wrap mb-3">
                <Icon icon="lucide:zap" class="w-5 h-5 brand-text" />
              </div>
              <p class="syne font-bold text-sm mb-1 text-dark">Performance</p>
              <p class="inter text-xs text-muted">35–75% efficiency gains in real deployments.</p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- =========== SKILLS =========== -->
    <section id="skills" class="py-24 px-6 md:px-12">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-16 reveal">
          <p class="inter text-xs font-semibold brand-text uppercase tracking-widest mb-3">Tech Stack</p>
          <h2 class="syne text-3xl font-bold mb-4 text-dark">Tools of the Trade</h2>
          <p class="inter text-sm text-muted max-w-md mx-auto">Core technologies I use to build scalable applications and
            geospatial systems.</p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 reveal">

          <!-- Backend -->
          <div class="card p-5 text-center group">
            <p class="syne font-semibold text-sm mb-3 text-dark">Backend</p>
            <div class="flex justify-center gap-2 mb-3">
              <Icon icon="logos:laravel" class="w-6 h-6" />
              <Icon icon="logos:php" class="w-6 h-6" />
              <Icon icon="logos:nodejs-icon" class="w-6 h-6" />
            </div>
            <p class="inter text-xs text-muted">Laravel · PHP · Node.js</p>
          </div>

          <!-- Frontend -->
          <div class="card p-5 text-center group">
            <p class="syne font-semibold text-sm mb-3 text-dark">Frontend</p>
            <div class="flex justify-center gap-2 mb-3">
              <Icon icon="logos:vue" class="w-6 h-6" />
              <Icon icon="logos:nuxt-icon" class="w-6 h-6" />
              <Icon icon="logos:tailwindcss-icon" class="w-6 h-6" />
            </div>
            <p class="inter text-xs text-muted">Vue.js · Nuxt · Tailwind</p>
          </div>

          <!-- Mobile -->
          <div class="card p-5 text-center group">
            <p class="syne font-semibold text-sm mb-3 text-dark">Mobile</p>
            <div class="flex justify-center gap-2 mb-3">
              <Icon icon="logos:flutter" class="w-6 h-6" />
              <Icon icon="logos:dart" class="w-6 h-6" />
            </div>
            <p class="inter text-xs text-muted">Flutter · Dart · Offline-First</p>
          </div>

          <!-- Data & Maps -->
          <div class="card p-5 text-center group">
            <p class="syne font-semibold text-sm mb-3 text-dark">Data & Maps</p>
            <div class="flex justify-center gap-2 mb-3">
              <Icon icon="logos:postgresql" class="w-6 h-6" />
              <Icon icon="simple-icons:qgis" class="w-6 h-6 brand-text" />
              <Icon icon="simple-icons:mapbox" class="w-6 h-6" />
            </div>
            <p class="inter text-xs text-muted">PostgreSQL · PostGIS · Mapbox · QGIS</p>
          </div>

        </div>

        <!-- AI Integration -->
        <div class="mt-4 reveal">
          <div class="card p-5 flex items-center gap-4">
            <div class="icon-wrap flex-shrink-0">
              <Icon icon="lucide:brain-circuit" class="w-5 h-5 brand-text" />
            </div>
            <div>
              <p class="syne font-semibold text-sm text-dark">AI Integration</p>
              <p class="inter text-xs text-muted">OpenAI · Anthropic APIs · Prompt Engineering for automated workflows</p>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- =========== PROJECTS =========== -->
    <section id="projects" class="py-24 px-6 md:px-12 section-alt">
      <div class="max-w-6xl mx-auto">
        <div class="mb-14 reveal">
          <p class="inter text-xs font-semibold brand-text uppercase tracking-widest mb-3">Work</p>
          <h2 class="syne text-4xl font-bold mb-3 text-dark">Notable Projects</h2>
          <p class="inter text-sm text-muted">Shipped products with real-world impact.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

          <!-- Project 1: Kijani -->
          <a href="#" class="project-card group block reveal" style="animation-delay: 0.1s;">
            <div class="flex items-start justify-between mb-5">
              <div class="project-icon group-hover:brand-bg transition-all duration-300">
                <Icon icon="lucide:leaf" class="w-5 h-5 brand-text group-hover:text-white transition-colors" />
              </div>
              <Icon icon="lucide:arrow-up-right" class="w-4 h-4 text-zinc-300 group-hover:brand-text group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
            <h3 class="syne font-bold text-lg mb-2 text-dark group-hover:brand-text transition-colors">Kijani Forestry App</h3>
            <p class="inter text-sm leading-relaxed mb-5 text-muted line-clamp-3">
              Cross-platform Flutter application with Airtable API integration for offline-first field data collection.
              Adopted by 450+ field staff across Uganda.
            </p>
            <div class="flex flex-wrap gap-1.5">
              <span class="tech-tag">Flutter</span>
              <span class="tech-tag">Airtable</span>
              <span class="tech-tag">Offline-First</span>
            </div>
          </a>

          <!-- Project 2: Airtable CRUD -->
          <a href="https://pub.dev/packages/airtable_crud" target="_blank" rel="noopener" class="project-card group block reveal" style="animation-delay: 0.2s;">
            <div class="flex items-start justify-between mb-5">
              <div class="project-icon group-hover:brand-bg transition-all duration-300">
                <Icon icon="lucide:package" class="w-5 h-5 brand-text group-hover:text-white transition-colors" />
              </div>
              <Icon icon="lucide:external-link" class="w-4 h-4 text-zinc-300 group-hover:brand-text transition-all" />
            </div>
            <h3 class="syne font-bold text-lg mb-2 text-dark group-hover:brand-text transition-colors">Airtable CRUD</h3>
            <p class="inter text-sm leading-relaxed mb-5 text-muted line-clamp-3">
              Open-source Dart library published to pub.dev. Simplifies Airtable API integration for Flutter developers,
              reducing boilerplate and accelerating development.
            </p>
            <div class="flex flex-wrap gap-1.5">
              <span class="tech-tag">Dart</span>
              <span class="tech-tag">Open Source</span>
              <span class="tech-tag">pub.dev</span>
            </div>
          </a>

          <!-- Project 3: Terrave -->
          <a href="https://terrave.lipon.store" target="_blank" rel="noopener" class="project-card group block reveal" style="animation-delay: 0.3s;">
            <div class="flex items-start justify-between mb-5">
              <div class="project-icon group-hover:brand-bg transition-all duration-300">
                <Icon icon="lucide:map" class="w-5 h-5 brand-text group-hover:text-white transition-colors" />
              </div>
              <Icon icon="lucide:external-link" class="w-4 h-4 text-zinc-300 group-hover:brand-text transition-all" />
            </div>
            <h3 class="syne font-bold text-lg mb-2 text-dark group-hover:brand-text transition-colors">Terrave</h3>
            <p class="inter text-sm leading-relaxed mb-5 text-muted line-clamp-3">
              Real-time spatial dashboard for visualising field data from across Uganda. Integrates PostGIS, Leaflet,
              and Laravel for map-based analytics.
            </p>
            <div class="flex flex-wrap gap-1.5">
              <span class="tech-tag">PostGIS</span>
              <span class="tech-tag">Leaflet</span>
              <span class="tech-tag">Laravel</span>
            </div>
          </a>

          <!-- Project 4: VireonHR -->
          <a href="https://lipon.store" target="_blank" rel="noopener" class="project-card group block reveal" style="animation-delay: 0.1s;">
            <div class="flex items-start justify-between mb-5">
              <div class="project-icon group-hover:brand-bg transition-all duration-300">
                <Icon icon="lucide:users" class="w-5 h-5 brand-text group-hover:text-white transition-colors" />
              </div>
              <Icon icon="lucide:external-link" class="w-4 h-4 text-zinc-300 group-hover:brand-text transition-all" />
            </div>
            <h3 class="syne font-bold text-lg mb-2 text-dark group-hover:brand-text transition-colors">VireonHR</h3>
            <p class="inter text-sm leading-relaxed mb-5 text-muted line-clamp-3">
              HRMS system with AI-powered recruitment and automated reports. Features employee management, payroll,
              attendance tracking, and performance reviews.
            </p>
            <div class="flex flex-wrap gap-1.5">
              <span class="tech-tag">Laravel</span>
              <span class="tech-tag">Vue</span>
              <span class="tech-tag">AI</span>
              <span class="tech-tag">Docker</span>
            </div>
          </a>

          <!-- Project 5: Publlsh -->
          <a href="https://publlsh.lipon.store" target="_blank" rel="noopener" class="project-card group block reveal opacity-80" style="animation-delay: 0.2s;">
            <div class="flex items-start justify-between mb-5">
              <div class="project-icon">
                <Icon icon="lucide:sparkles" class="w-5 h-5 brand-text" />
              </div>
              <span class="building-badge">Building</span>
            </div>
            <h3 class="syne font-bold text-lg mb-2 text-dark">Publlsh</h3>
            <p class="inter text-sm leading-relaxed mb-5 text-muted line-clamp-3">
              AI-powered social media management platform in development. Automates content scheduling, generates
              AI-assisted captions, and provides analytics.
            </p>
            <div class="flex flex-wrap gap-1.5">
              <span class="tech-tag">Laravel</span>
              <span class="tech-tag">Vue</span>
              <span class="tech-tag">AI</span>
            </div>
          </a>

          <!-- Project 6: Zoya Travels -->
          <a href="https://zoyatravelsug.com/" target="_blank" rel="noopener" class="project-card group block reveal" style="animation-delay: 0.3s;">
            <div class="flex items-start justify-between mb-5">
              <div class="project-icon group-hover:brand-bg transition-all duration-300">
                <Icon icon="lucide:plane" class="w-5 h-5 brand-text group-hover:text-white transition-colors" />
              </div>
              <div class="flex items-center gap-2">
                <span class="client-badge">Client</span>
                <Icon icon="lucide:external-link" class="w-4 h-4 text-zinc-300 group-hover:brand-text transition-all" />
              </div>
            </div>
            <h3 class="syne font-bold text-lg mb-2 text-dark group-hover:brand-text transition-colors">Zoya Travels</h3>
            <p class="inter text-sm leading-relaxed mb-5 text-muted line-clamp-3">
              Travel agency landing page built with Nuxt.js and Tailwind CSS. Fast, responsive, and SEO-optimized
              for showcasing travel packages and destinations.
            </p>
            <div class="flex flex-wrap gap-1.5">
              <span class="tech-tag">Nuxt</span>
              <span class="tech-tag">Tailwind</span>
              <span class="tech-tag">Landing Page</span>
            </div>
          </a>

        </div>
      </div>
    </section>

    <!-- =========== GEOSPATIAL =========== -->
    <section id="geo" class="py-24 px-6 md:px-12">
      <div class="max-w-6xl mx-auto">
        <div class="flex flex-col lg:flex-row gap-16 items-center">

          <!-- Map SVG visual -->
          <div class="flex-1 reveal">
            <svg viewBox="0 0 420 300" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-lg">
              <!-- Grid -->
              <defs>
                <pattern id="geo-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                  <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(212,101,26,0.08)" stroke-width="0.5" />
                </pattern>
              </defs>
              <rect width="420" height="300" fill="url(#geo-grid)" />

              <!-- Uganda outline (simplified) -->
              <path
                d="M160 40 L200 35 L240 50 L260 80 L270 120 L260 160 L250 190 L220 210 L200 220 L170 210 L150 185 L140 160 L135 130 L140 100 L150 70 Z"
                fill="rgba(212,101,26,0.06)" stroke="rgba(212,101,26,0.35)" stroke-width="1.5" stroke-linejoin="round" />

              <!-- Kampala dot -->
              <circle cx="195" cy="175" r="4" fill="#D4651A" class="map-dot" style="animation-delay: 0.7s;" />
              <circle cx="195" cy="175" r="12" fill="rgba(212,101,26,0.12)" class="map-dot"
                style="animation-delay: 0.7s;" />
              <text x="207" y="179" fill="#9ca3af" font-size="9" font-family="'Inter', sans-serif">Kampala</text>

              <!-- Field lines -->
              <line x1="200" y1="90" x2="195" y2="175" stroke="rgba(212,101,26,0.2)" stroke-width="1"
                stroke-dasharray="4,3" />

              <!-- Data points scattered -->
              <circle cx="150" cy="110" r="3" fill="rgba(212,101,26,0.5)" />
              <circle cx="230" cy="105" r="3" fill="rgba(212,101,26,0.5)" />
              <circle cx="170" cy="140" r="3" fill="rgba(212,101,26,0.5)" />
              <circle cx="220" cy="145" r="3" fill="rgba(212,101,26,0.5)" />
              <circle cx="165" cy="165" r="3" fill="rgba(212,101,26,0.5)" />
              <circle cx="240" cy="125" r="3" fill="rgba(212,101,26,0.3)" />

              <!-- Legend -->
              <circle cx="30" cy="260" r="4" fill="#D4651A" />
              <text x="40" y="264" fill="#71717a" font-size="9" font-family="'Inter', sans-serif">Base Location</text>
              <circle cx="120" cy="260" r="3" fill="rgba(212,101,26,0.5)" />
              <text x="130" y="264" fill="#71717a" font-size="9" font-family="'Inter', sans-serif">Field Data Points</text>

              <!-- Compass rose -->
              <g transform="translate(375, 40)">
                <circle cx="0" cy="0" r="18" fill="rgba(212,101,26,0.05)" stroke="rgba(212,101,26,0.2)"
                  stroke-width="0.5" />
                <text x="0" y="-7" fill="#D4651A" font-size="8" text-anchor="middle" font-family="'Syne', sans-serif"
                  font-weight="700">N</text>
                <line x1="0" y1="-4" x2="0" y2="4" stroke="rgba(212,101,26,0.5)" stroke-width="0.5" />
                <line x1="-4" y1="0" x2="4" y2="0" stroke="rgba(212,101,26,0.3)" stroke-width="0.5" />
              </g>

              <!-- Scale bar -->
              <line x1="300" y1="270" x2="360" y2="270" stroke="rgba(212,101,26,0.4)" stroke-width="1" />
              <line x1="300" y1="267" x2="300" y2="273" stroke="rgba(212,101,26,0.4)" stroke-width="1" />
              <line x1="360" y1="267" x2="360" y2="273" stroke="rgba(212,101,26,0.4)" stroke-width="1" />
              <text x="330" y="265" fill="#71717a" font-size="8" text-anchor="middle"
                font-family="'Inter', sans-serif">100 km</text>
            </svg>
          </div>

          <!-- Right: Text -->
          <div class="flex-1 reveal">
            <p class="inter text-xs font-semibold brand-text uppercase tracking-widest mb-3">Specialty</p>
            <h2 class="syne text-4xl font-bold mb-6 text-dark">Geospatial Systems</h2>
            <p class="inter text-base leading-relaxed mb-8 text-muted">
              I design and build geospatial systems that transform raw geographic data into actionable intelligence.
              From mobile field data collection in remote Uganda to interactive web-based spatial dashboards — I bridge
              the physical world and the digital.
            </p>

            <div class="space-y-3">
              <div class="card p-4 flex gap-4">
                <div class="icon-wrap flex-shrink-0">
                  <Icon icon="lucide:database" class="w-4 h-4 brand-text" />
                </div>
                <div>
                  <p class="syne font-bold text-sm mb-1 text-dark">Spatial Databases</p>
                  <p class="inter text-xs text-muted">PostGIS, spatial indexing, geospatial queries, coordinate systems.</p>
                </div>
              </div>
              <div class="card p-4 flex gap-4">
                <div class="icon-wrap flex-shrink-0">
                  <Icon icon="lucide:map" class="w-4 h-4 brand-text" />
                </div>
                <div>
                  <p class="syne font-bold text-sm mb-1 text-dark">Interactive Mapping</p>
                  <p class="inter text-xs text-muted">Leaflet, Mapbox, OpenLayers — dynamic, web-based map visualisations.</p>
                </div>
              </div>
              <div class="card p-4 flex gap-4">
                <div class="icon-wrap flex-shrink-0">
                  <Icon icon="lucide:smartphone" class="w-4 h-4 brand-text" />
                </div>
                <div>
                  <p class="syne font-bold text-sm mb-1 text-dark">Mobile Field Collection</p>
                  <p class="inter text-xs text-muted">GPS-integrated Flutter apps with offline sync for field teams.</p>
                </div>
              </div>
              <div class="card p-4 flex gap-4">
                <div class="icon-wrap flex-shrink-0">
                  <Icon icon="lucide:bar-chart-3" class="w-4 h-4 brand-text" />
                </div>
                <div>
                  <p class="syne font-bold text-sm mb-1 text-dark">Spatial Analytics</p>
                  <p class="inter text-xs text-muted">GeoJSON, KML, shapefiles — data pipelines for geographic
                    decision-making.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- =========== CONTACT =========== -->
    <section id="contact" class="py-24 px-6 md:px-12 section-alt">
      <div class="max-w-3xl mx-auto text-center reveal">
        <p class="inter text-xs font-semibold brand-text uppercase tracking-widest mb-3">Get In Touch</p>
        <h2 class="syne text-4xl md:text-5xl font-bold mb-4 text-dark">
          Let's Build<br /><span class="brand-text">Something Great.</span>
        </h2>
        <p class="inter mb-12 text-base text-muted">
          Open to freelance projects, full-time roles, and geospatial collaborations. Based in Uganda, working globally.
        </p>

        <div class="card p-8 text-left">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label class="inter text-xs mb-2 block text-muted font-medium">Your Name</label>
              <input type="text" class="form-input" placeholder="Jane Smith" />
            </div>
            <div>
              <label class="inter text-xs mb-2 block text-muted font-medium">Email Address</label>
              <input type="email" class="form-input" placeholder="jane@company.com" />
            </div>
          </div>
          <div class="mb-4">
            <label class="inter text-xs mb-2 block text-muted font-medium">Subject</label>
            <input type="text" class="form-input" placeholder="Project inquiry / Job opportunity" />
          </div>
          <div class="mb-6">
            <label class="inter text-xs mb-2 block text-muted font-medium">Message</label>
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
    <footer class="py-8 px-6 md:px-12 border-t border-zinc-200">
      <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="syne font-bold text-lg brand-text">KE.</p>
        <p class="inter text-xs text-muted">© 2026 Kato Emmanuel · Full-Stack & Geospatial Engineer · Uganda</p>
        <p class="inter text-xs text-muted">Built with precision & code.</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* =====================
   TOKENS
   ===================== */
:root {
  --brand: #D4651A;
  --brand-dark: #b8541a;
  --dark: #18181B;
  --muted: #71717A;
  --bg: #FAFAF8;
  --bg-alt: #F4F4F2;
  --border: #E4E4E7;
  --white: #ffffff;
}

/* =====================
   BASE
   ===================== */
.site-wrapper {
  font-family: 'Inter', sans-serif;
  background-color: var(--bg);
  color: var(--dark);
  overflow-x: hidden;
  cursor: none;
}

.inter { font-family: 'Inter', sans-serif; }
.syne  { font-family: 'Syne', sans-serif; }

.text-dark  { color: var(--dark); }
.text-muted { color: var(--muted); }
.text-dim   { color: #A1A1AA; }

.brand-text { color: var(--brand); }

/* =====================
   CURSOR
   ===================== */
.cursor {
  width: 12px;
  height: 12px;
  background: var(--brand);
  border-radius: 50%;
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
  transition: width 0.2s ease, height 0.2s ease;
}

.cursor-ring {
  width: 36px;
  height: 36px;
  border: 1.5px solid rgba(212, 101, 26, 0.35);
  border-radius: 50%;
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 9998;
  transform: translate(-50%, -50%);
  transition: left 0.08s ease, top 0.08s ease, width 0.2s ease, height 0.2s ease;
}

/* =====================
   NAV
   ===================== */
nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  background: rgba(250, 250, 248, 0.88);
  border-bottom: 1px solid var(--border);
}

.nav-link {
  position: relative;
  color: var(--muted);
  transition: color 0.2s ease;
  font-size: 14px;
  font-weight: 450;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--brand);
  transition: width 0.25s ease;
}

.nav-link:hover { color: var(--brand); }
.nav-link:hover::after { width: 100%; }

/* =====================
   HERO
   ===================== */
.hero-word {
  display: inline-block;
  opacity: 0;
  transform: translateY(28px);
  animation: wordUp 0.65s ease forwards;
}

@keyframes wordUp {
  to { opacity: 1; transform: translateY(0); }
}

.underline-accent {
  position: relative;
}

.underline-accent::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 100%;
  height: 3px;
  background: var(--brand);
  border-radius: 2px;
}

.availability-tag {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  background: rgba(212, 101, 26, 0.07);
  border: 1px solid rgba(212, 101, 26, 0.2);
  border-radius: 999px;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 500;
  color: var(--brand);
}

.pulsing-dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--brand);
  animation: pulse 1.6s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50%       { opacity: 0.5; transform: scale(1.3); }
}

.stat-divider {
  width: 1px;
  background: var(--border);
  align-self: stretch;
}

.hover-link {
  transition: opacity 0.2s;
}
.hover-link:hover { opacity: 0.75; }

/* Profile card overlay */
.name-overlay {
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(8px);
  border-top: 1px solid var(--border);
}

/* Float badges */
.float-badge {
  animation: floatBadge 3s ease-in-out infinite;
}

@keyframes floatBadge {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-6px); }
}

.badge-icon {
  background: var(--brand);
}

/* =====================
   SECTION ALT
   ===================== */
.section-alt {
  background: var(--bg-alt);
}

/* =====================
   CARDS
   ===================== */
.card {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 16px;
  transition: border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
}

.card:hover {
  border-color: rgba(212, 101, 26, 0.3);
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(212, 101, 26, 0.08);
}

/* Project card */
.project-card {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 24px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
  transition: border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
}

.project-card:hover {
  border-color: rgba(212, 101, 26, 0.3);
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(212, 101, 26, 0.09);
}

/* Icon wrap */
.icon-wrap {
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: rgba(212, 101, 26, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

/* Project icon */
.project-icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: rgba(212, 101, 26, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.25s ease, transform 0.25s ease;
}

.group:hover .project-icon {
  background: var(--brand);
  transform: scale(1.05);
}

.group:hover .project-icon .brand-text {
  color: white;
}

.brand-bg { background: var(--brand) !important; }

/* =====================
   TAGS
   ===================== */
.tag {
  display: inline-flex;
  align-items: center;
  padding: 5px 12px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 500;
  font-family: 'Inter', sans-serif;
  background: rgba(212, 101, 26, 0.07);
  color: var(--brand);
  border: 1px solid rgba(212, 101, 26, 0.18);
  letter-spacing: 0.01em;
}

.tech-tag {
  display: inline-flex;
  align-items: center;
  padding: 4px 10px;
  border-radius: 6px;
  font-family: 'Inter', sans-serif;
  font-size: 11px;
  font-weight: 500;
  background: #F4F4F2;
  color: var(--muted);
  border: 1px solid var(--border);
}

.building-badge {
  padding: 3px 10px;
  background: #FEF3C7;
  color: #92400E;
  border-radius: 999px;
  font-family: 'Inter', sans-serif;
  font-size: 11px;
  font-weight: 600;
}

.client-badge {
  padding: 3px 10px;
  background: rgba(212, 101, 26, 0.08);
  color: var(--brand);
  border-radius: 999px;
  font-family: 'Inter', sans-serif;
  font-size: 11px;
  font-weight: 600;
}

/* =====================
   BUTTONS
   ===================== */
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 13px 26px;
  background: var(--brand);
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
  background: var(--brand-dark);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(212, 101, 26, 0.25);
}

/* =====================
   FORM
   ===================== */
.form-input {
  background: var(--bg);
  border: 1px solid var(--border);
  color: var(--dark);
  border-radius: 10px;
  padding: 12px 16px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  outline: none;
  width: 100%;
}

.form-input:focus {
  border-color: rgba(212, 101, 26, 0.45);
  box-shadow: 0 0 0 3px rgba(212, 101, 26, 0.08);
}

.form-input::placeholder {
  color: #A1A1AA;
}

/* =====================
   MAP DOT
   ===================== */
.map-dot {
  animation: mapPulse 2s ease-in-out infinite;
}

@keyframes mapPulse {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.45; }
}

/* =====================
   SCROLL REVEAL
   ===================== */
.reveal {
  opacity: 0;
  transform: translateY(22px);
  transition: opacity 0.65s ease, transform 0.65s ease;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

/* =====================
   SCROLLBAR
   ===================== */
::-webkit-scrollbar { width: 4px; }
::-webkit-scrollbar-track { background: var(--bg); }
::-webkit-scrollbar-thumb {
  background: rgba(212, 101, 26, 0.25);
  border-radius: 2px;
}

/* =====================
   TOUCH DEVICES
   ===================== */
@media (hover: none) {
  .site-wrapper { cursor: auto; }
  .cursor, .cursor-ring { display: none; }
  .btn-primary { cursor: pointer; }
}
</style>

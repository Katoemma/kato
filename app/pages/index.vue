<script setup lang="ts">
import { onMounted } from 'vue'
import { Icon } from '@iconify/vue'

useSeoMeta({
  title: 'Kato Emmanuel — Full-Stack & Geospatial Engineer',
  description: 'Kato Emmanuel - Expert Full-Stack Software Engineer & Geospatial Developer based in Uganda. Specializing in Laravel, Vue.js, Flutter, PostGIS, and AI-powered applications.',
  ogTitle: 'Kato Emmanuel — Full-Stack & Geospatial Engineer',
  ogDescription: 'Full-Stack & Geospatial Engineer building web, mobile, and AI-powered applications with real-world impact.',
  ogImage: 'https://katoemma.website/og-image.png',
  ogUrl: 'https://katoemma.website',
  ogSiteName: 'Kato Emmanuel',
  twitterCard: 'summary_large_image',
})

useHead({
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Inter:wght@300;400;500;600&display=swap' }
  ]
})

onMounted(() => {
  const cursor = document.getElementById('cursor')
  const ring = document.getElementById('cursorRing')

  document.addEventListener('mousemove', (e: MouseEvent) => {
    if (cursor && ring) {
      cursor.style.left = e.clientX + 'px'
      cursor.style.top = e.clientY + 'px'
      ring.style.left = e.clientX + 'px'
      ring.style.top = e.clientY + 'px'
    }
  })

  document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => {
      if (ring) { ring.style.width = '52px'; ring.style.height = '52px'; ring.style.borderColor = 'rgba(232,84,26,0.6)' }
    })
    el.addEventListener('mouseleave', () => {
      if (ring) { ring.style.width = '36px'; ring.style.height = '36px'; ring.style.borderColor = 'rgba(232,84,26,0.3)' }
    })
  })

  // Reveal on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        ;(entry.target as HTMLElement).style.transitionDelay = (i % 4) * 0.08 + 's'
        entry.target.classList.add('visible')
      }
    })
  }, { threshold: 0.08 })
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
})
</script>

<template>
  <div class="site-wrapper">
    <div class="cursor" id="cursor"></div>
    <div class="cursor-ring" id="cursorRing"></div>

    <!-- ======== NAV ======== -->
    <nav>
      <div class="nav-inner">
        <a href="#" class="logo">KE<span class="logo-dot">.</span></a>
        <div class="nav-links">
          <a href="#about" class="nl">About</a>
          <a href="#work" class="nl">Work</a>
          <a href="#geo" class="nl">Geospatial</a>
          <a href="#contact" class="nl">Contact</a>
        </div>
        <a href="/Kato_Emmanuel_CV.pdf" download class="nav-cv">
          Download CV <Icon icon="lucide:arrow-down-to-line" class="w-3.5 h-3.5" />
        </a>
      </div>
    </nav>

    <!-- ======== HERO ======== -->
    <section class="hero">
      <div class="hero-container">

        <!-- Left: all text content -->
        <div class="hero-left">
          <!-- Availability badge -->
          <div class="avail-tag reveal">
            <span class="avail-dot"></span>
            Available for work
          </div>

          <!-- Name -->
          <h1 class="hero-name reveal">
            Kato<br />
            <span class="hero-name-accent">Emmanuel</span>
          </h1>

          <!-- Role -->
          <p class="hero-role reveal">Full-Stack & Geospatial Engineer</p>

          <!-- Bio -->
          <p class="hero-bio reveal">
            Building scalable web, mobile & AI-powered systems —
            from Kampala to the cloud. 3+ years, real-world impact.
          </p>

          <!-- CTAs -->
          <div class="hero-cta reveal">
            <a href="#work" class="btn-primary">
              View Projects <Icon icon="lucide:arrow-right" class="w-4 h-4" />
            </a>
            <a href="#contact" class="btn-ghost">
              Let's Talk <Icon icon="lucide:arrow-up-right" class="w-4 h-4" />
            </a>
          </div>

          <!-- Stats -->
          <div class="hero-stats reveal">
            <div class="stat-item">
              <p class="stat-num">75%</p>
              <p class="stat-label">Reporting Time Saved</p>
            </div>
            <div class="stat-rule"></div>
            <div class="stat-item">
              <p class="stat-num">450+</p>
              <p class="stat-label">Field Users Reached</p>
            </div>
            <div class="stat-rule"></div>
            <div class="stat-item">
              <p class="stat-num">3+</p>
              <p class="stat-label">Years Experience</p>
            </div>
          </div>
        </div>

        <!-- Right: photo card -->
        <div class="hero-right reveal">
          <div class="hero-photo-card">
            <img src="/Images/profile.png" alt="Kato Emmanuel" class="hero-photo" />
            <!-- Floating badges -->
            <div class="hero-badge hero-badge-top">
              <div class="hero-badge-icon"><Icon icon="lucide:map-pin" class="w-3.5 h-3.5" /></div>
              <span>GIS Expert</span>
            </div>
            <div class="hero-badge hero-badge-bottom">
              <div class="hero-badge-icon"><Icon icon="lucide:bot" class="w-3.5 h-3.5" /></div>
              <span>AI Developer</span>
            </div>
            <!-- Tech row -->
            <div class="hero-tech-row">
              <div class="tech-chip"><Icon icon="logos:laravel" class="w-4 h-4" /></div>
              <div class="tech-chip"><Icon icon="logos:vue" class="w-4 h-4" /></div>
              <div class="tech-chip"><Icon icon="logos:flutter" class="w-4 h-4" /></div>
              <div class="tech-chip"><Icon icon="logos:postgresql" class="w-4 h-4" /></div>
            </div>
          </div>
          <!-- Location tag below photo -->
          <div class="hero-location">
            <Icon icon="lucide:map-pin" class="w-3.5 h-3.5" />
            Kampala, Uganda
          </div>
        </div>

      </div>
    </section>

    <!-- ======== MARQUEE ======== -->
    <div class="marquee-wrap">
      <div class="marquee-track">
        <span>Laravel</span><span class="sep">·</span>
        <span>Vue.js</span><span class="sep">·</span>
        <span>Flutter</span><span class="sep">·</span>
        <span>PostGIS</span><span class="sep">·</span>
        <span>Mapbox</span><span class="sep">·</span>
        <span>Node.js</span><span class="sep">·</span>
        <span>Nuxt.js</span><span class="sep">·</span>
        <span>PostgreSQL</span><span class="sep">·</span>
        <span>OpenAI</span><span class="sep">·</span>
        <span>Docker</span><span class="sep">·</span>
        <span>QGIS</span><span class="sep">·</span>
        <span>Leaflet</span><span class="sep">·</span>
        <span>Dart</span><span class="sep">·</span>
        <span>PHP</span><span class="sep">·</span>
        <!-- duplicate for seamless loop -->
        <span>Laravel</span><span class="sep">·</span>
        <span>Vue.js</span><span class="sep">·</span>
        <span>Flutter</span><span class="sep">·</span>
        <span>PostGIS</span><span class="sep">·</span>
        <span>Mapbox</span><span class="sep">·</span>
        <span>Node.js</span><span class="sep">·</span>
        <span>Nuxt.js</span><span class="sep">·</span>
        <span>PostgreSQL</span><span class="sep">·</span>
        <span>OpenAI</span><span class="sep">·</span>
        <span>Docker</span><span class="sep">·</span>
        <span>QGIS</span><span class="sep">·</span>
        <span>Leaflet</span><span class="sep">·</span>
        <span>Dart</span><span class="sep">·</span>
        <span>PHP</span><span class="sep">·</span>
      </div>
    </div>

    <!-- ======== ABOUT ======== -->
    <section id="about" class="section">
      <div class="section-label reveal">
        <span class="sec-num">01</span>
        <span class="sec-rule"></span>
        <span class="sec-title">About</span>
      </div>

      <div class="about-grid">
        <!-- Left: text -->
        <div class="about-text">
          <h2 class="about-headline reveal">
            I build systems that work — on the web, in the field, everywhere in between.
          </h2>
          <p class="about-body reveal">
            I'm an innovative Full-Stack Software Developer with expertise spanning web, mobile, and AI-powered
            applications. From backend architectures in <strong>Laravel</strong> to fluid frontends
            with <strong>Vue.js / Nuxt.js</strong> and cross-platform apps in <strong>Flutter</strong> — I ship end-to-end.
          </p>
          <p class="about-body reveal">
            Beyond traditional development, I design geospatial systems — leveraging spatial databases, mapping libraries,
            and field data pipelines to help organisations act on geographic information in real time.
          </p>
          <div class="tags-row reveal">
            <span class="tag">Clean Architecture</span>
            <span class="tag">Open Source</span>
            <span class="tag">Agile / Sprints</span>
            <span class="tag">Offline-First</span>
            <span class="tag">LLM Integration</span>
          </div>
        </div>

        <!-- Right: values list -->
        <div class="about-values">
          <div class="value-item reveal">
            <div class="value-icon"><Icon icon="lucide:globe" class="w-4 h-4" /></div>
            <div>
              <p class="value-title">Geospatial & Field-First</p>
              <p class="value-desc">Systems that work where data is sparse — in the field, offline, under pressure.</p>
            </div>
          </div>
          <div class="value-item reveal">
            <div class="value-icon"><Icon icon="lucide:brain-circuit" class="w-4 h-4" /></div>
            <div>
              <p class="value-title">AI-Augmented</p>
              <p class="value-desc">Integrating OpenAI & Anthropic APIs to automate complex workflows.</p>
            </div>
          </div>
          <div class="value-item reveal">
            <div class="value-icon"><Icon icon="lucide:package" class="w-4 h-4" /></div>
            <div>
              <p class="value-title">Open Source Contributor</p>
              <p class="value-desc">Published Dart libraries to pub.dev used by the Flutter community.</p>
            </div>
          </div>
          <div class="value-item reveal">
            <div class="value-icon"><Icon icon="lucide:graduation-cap" class="w-4 h-4" /></div>
            <div>
              <p class="value-title">Mentor & Educator</p>
              <p class="value-desc">Mentored 100+ students to national app competition finals.</p>
            </div>
          </div>
          <div class="value-item reveal">
            <div class="value-icon"><Icon icon="lucide:zap" class="w-4 h-4" /></div>
            <div>
              <p class="value-title">Measurable Impact</p>
              <p class="value-desc">35–75% efficiency gains across real production deployments.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ======== PROJECTS ======== -->
    <section id="work" class="section section-dark">
      <div class="section-label reveal">
        <span class="sec-num sec-num-dark">02</span>
        <span class="sec-rule sec-rule-dark"></span>
        <span class="sec-title sec-title-dark">Work</span>
      </div>
      <p class="section-sub reveal">Shipped products with real-world impact.</p>

      <!-- Bento grid -->
      <div class="bento">

        <!-- Card 1: Kijani — featured wide -->
        <a href="#" class="bento-card bento-wide reveal">
          <div class="bento-top">
            <div class="bento-icon"><Icon icon="lucide:leaf" class="w-5 h-5" /></div>
            <Icon icon="lucide:arrow-up-right" class="w-4 h-4 bento-arrow" />
          </div>
          <h3 class="bento-title">Kijani Forestry App</h3>
          <p class="bento-desc">
            Cross-platform Flutter app for offline-first field data collection via Airtable API. Adopted by 450+ field staff across Uganda.
          </p>
          <div class="bento-tags">
            <span>Flutter</span><span>Airtable</span><span>Offline-First</span>
          </div>
        </a>

        <!-- Card 2: Airtable CRUD — small -->
        <a href="https://pub.dev/packages/airtable_crud" target="_blank" rel="noopener" class="bento-card reveal">
          <div class="bento-top">
            <div class="bento-icon"><Icon icon="lucide:package" class="w-5 h-5" /></div>
            <Icon icon="lucide:external-link" class="w-4 h-4 bento-arrow" />
          </div>
          <h3 class="bento-title">Airtable CRUD</h3>
          <p class="bento-desc">Open-source Dart library on pub.dev simplifying Airtable API for Flutter devs.</p>
          <div class="bento-tags">
            <span>Dart</span><span>Open Source</span><span>pub.dev</span>
          </div>
        </a>

        <!-- Card 3: Terrave — small -->
        <a href="https://terrave.lipon.store" target="_blank" rel="noopener" class="bento-card reveal">
          <div class="bento-top">
            <div class="bento-icon"><Icon icon="lucide:map" class="w-5 h-5" /></div>
            <Icon icon="lucide:external-link" class="w-4 h-4 bento-arrow" />
          </div>
          <h3 class="bento-title">Terrave</h3>
          <p class="bento-desc">Real-time spatial dashboard integrating PostGIS, Leaflet & Laravel for map-based analytics.</p>
          <div class="bento-tags">
            <span>PostGIS</span><span>Leaflet</span><span>Laravel</span>
          </div>
        </a>

        <!-- Card 4: VireonHR — featured wide -->
        <a href="https://lipon.store" target="_blank" rel="noopener" class="bento-card bento-wide reveal">
          <div class="bento-top">
            <div class="bento-icon"><Icon icon="lucide:users" class="w-5 h-5" /></div>
            <Icon icon="lucide:external-link" class="w-4 h-4 bento-arrow" />
          </div>
          <h3 class="bento-title">VireonHR</h3>
          <p class="bento-desc">
            AI-powered HRMS with automated recruitment, payroll, attendance tracking, and performance reviews for modern teams.
          </p>
          <div class="bento-tags">
            <span>Laravel</span><span>Vue</span><span>AI</span><span>Docker</span>
          </div>
        </a>

        <!-- Card 5: Publlsh — small, building -->
        <a href="https://publlsh.lipon.store" target="_blank" rel="noopener" class="bento-card bento-building reveal">
          <div class="bento-top">
            <div class="bento-icon"><Icon icon="lucide:sparkles" class="w-5 h-5" /></div>
            <span class="bento-wip">Building</span>
          </div>
          <h3 class="bento-title">Publlsh</h3>
          <p class="bento-desc">AI-powered social media management — scheduling, AI captions, and analytics.</p>
          <div class="bento-tags">
            <span>Laravel</span><span>Vue</span><span>AI</span>
          </div>
        </a>

        <!-- Card 6: Zoya Travels — small -->
        <a href="https://zoyatravelsug.com/" target="_blank" rel="noopener" class="bento-card reveal">
          <div class="bento-top">
            <div class="bento-icon"><Icon icon="lucide:plane" class="w-5 h-5" /></div>
            <div class="flex items-center gap-2">
              <span class="bento-client">Client</span>
              <Icon icon="lucide:external-link" class="w-4 h-4 bento-arrow" />
            </div>
          </div>
          <h3 class="bento-title">Zoya Travels</h3>
          <p class="bento-desc">SEO-optimised travel agency landing page built with Nuxt.js and Tailwind CSS.</p>
          <div class="bento-tags">
            <span>Nuxt</span><span>Tailwind</span><span>SEO</span>
          </div>
        </a>

      </div>
    </section>

    <!-- ======== GEOSPATIAL ======== -->
    <section id="geo" class="section">
      <div class="section-label reveal">
        <span class="sec-num">03</span>
        <span class="sec-rule"></span>
        <span class="sec-title">Geospatial</span>
      </div>

      <div class="geo-grid">
        <!-- Left: copy -->
        <div class="geo-text">
          <h2 class="geo-headline reveal">
            Bridging the physical world and the digital.
          </h2>
          <p class="geo-body reveal">
            I design geospatial systems that transform raw geographic data into actionable intelligence — from
            mobile field collection in remote Uganda to interactive web spatial dashboards.
          </p>

          <div class="geo-features reveal">
            <div class="geo-feat">
              <span class="geo-feat-num">01</span>
              <div>
                <p class="geo-feat-title">Spatial Databases</p>
                <p class="geo-feat-desc">PostGIS, spatial indexing, geospatial queries, coordinate systems.</p>
              </div>
            </div>
            <div class="geo-feat">
              <span class="geo-feat-num">02</span>
              <div>
                <p class="geo-feat-title">Interactive Mapping</p>
                <p class="geo-feat-desc">Leaflet, Mapbox, OpenLayers — dynamic, web-based map visualisations.</p>
              </div>
            </div>
            <div class="geo-feat">
              <span class="geo-feat-num">03</span>
              <div>
                <p class="geo-feat-title">Mobile Field Collection</p>
                <p class="geo-feat-desc">GPS-integrated Flutter apps with offline sync for field teams.</p>
              </div>
            </div>
            <div class="geo-feat">
              <span class="geo-feat-num">04</span>
              <div>
                <p class="geo-feat-title">Spatial Analytics</p>
                <p class="geo-feat-desc">GeoJSON, KML, shapefiles — pipelines for geographic decision-making.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: map -->
        <div class="geo-map reveal">
          <svg viewBox="0 0 420 340" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full">
            <defs>
              <pattern id="geo-grid" width="28" height="28" patternUnits="userSpaceOnUse">
                <path d="M 28 0 L 0 0 0 28" fill="none" stroke="rgba(232,84,26,0.07)" stroke-width="0.5" />
              </pattern>
            </defs>
            <rect width="420" height="340" fill="url(#geo-grid)" rx="16"/>

            <!-- Uganda outline -->
            <path
              d="M160 50 L200 44 L242 60 L264 92 L274 135 L264 178 L252 208 L222 230 L200 240 L168 228 L148 200 L136 172 L130 140 L136 108 L148 78 Z"
              fill="rgba(232,84,26,0.06)" stroke="rgba(232,84,26,0.4)" stroke-width="1.5" stroke-linejoin="round" />

            <!-- Kampala -->
            <circle cx="196" cy="192" r="5" fill="#E8541A" class="map-dot" />
            <circle cx="196" cy="192" r="14" fill="rgba(232,84,26,0.1)" class="map-dot" />
            <text x="214" y="197" fill="#71717A" font-size="9" font-family="'Inter', sans-serif" font-weight="500">Kampala</text>

            <!-- Field lines -->
            <line x1="200" y1="95" x2="196" y2="192" stroke="rgba(232,84,26,0.18)" stroke-width="1" stroke-dasharray="4,3" />

            <!-- Data points -->
            <circle cx="152" cy="120" r="3.5" fill="rgba(232,84,26,0.55)" />
            <circle cx="234" cy="115" r="3.5" fill="rgba(232,84,26,0.55)" />
            <circle cx="172" cy="153" r="3.5" fill="rgba(232,84,26,0.55)" />
            <circle cx="224" cy="158" r="3.5" fill="rgba(232,84,26,0.55)" />
            <circle cx="166" cy="178" r="3.5" fill="rgba(232,84,26,0.55)" />
            <circle cx="244" cy="137" r="3.5" fill="rgba(232,84,26,0.35)" />

            <!-- Compass -->
            <g transform="translate(378, 42)">
              <circle cx="0" cy="0" r="20" fill="rgba(232,84,26,0.05)" stroke="rgba(232,84,26,0.18)" stroke-width="0.8" />
              <text x="0" y="-7" fill="#E8541A" font-size="8" text-anchor="middle" font-family="'Syne', sans-serif" font-weight="700">N</text>
              <line x1="0" y1="-4" x2="0" y2="4" stroke="rgba(232,84,26,0.45)" stroke-width="0.8" />
              <line x1="-4" y1="0" x2="4" y2="0" stroke="rgba(232,84,26,0.3)" stroke-width="0.8" />
            </g>

            <!-- Legend -->
            <circle cx="28" cy="308" r="5" fill="#E8541A" />
            <text x="40" y="312" fill="#71717A" font-size="9" font-family="'Inter', sans-serif">Base Location</text>
            <circle cx="128" cy="308" r="3.5" fill="rgba(232,84,26,0.5)" />
            <text x="140" y="312" fill="#71717A" font-size="9" font-family="'Inter', sans-serif">Field Data Points</text>

            <!-- Scale bar -->
            <line x1="300" y1="310" x2="368" y2="310" stroke="rgba(232,84,26,0.35)" stroke-width="1" />
            <line x1="300" y1="306" x2="300" y2="314" stroke="rgba(232,84,26,0.35)" stroke-width="1" />
            <line x1="368" y1="306" x2="368" y2="314" stroke="rgba(232,84,26,0.35)" stroke-width="1" />
            <text x="334" y="305" fill="#71717A" font-size="8" text-anchor="middle" font-family="'Inter', sans-serif">100 km</text>
          </svg>
        </div>
      </div>
    </section>

    <!-- ======== CONTACT ======== -->
    <section id="contact" class="section section-dark">
      <div class="section-label reveal">
        <span class="sec-num sec-num-dark">04</span>
        <span class="sec-rule sec-rule-dark"></span>
        <span class="sec-title sec-title-dark">Contact</span>
      </div>

      <div class="contact-grid">
        <!-- Left: big CTA -->
        <div class="contact-left">
          <h2 class="contact-headline reveal">
            Let's build<br /><span class="brand-text">something</span><br />great.
          </h2>
          <p class="contact-sub reveal">
            Open to freelance projects, full-time roles, and geospatial collaborations.
            Based in Uganda, working globally.
          </p>
          <div class="contact-links reveal">
            <a href="mailto:katoemmy001@gmail.com" class="contact-link">
              <Icon icon="lucide:mail" class="w-4 h-4" />
              katoemmy001@gmail.com
            </a>
            <a href="tel:+256778707801" class="contact-link">
              <Icon icon="lucide:phone" class="w-4 h-4" />
              +256 778 707 801
            </a>
            <a href="https://katoemma.website" target="_blank" class="contact-link">
              <Icon icon="lucide:globe" class="w-4 h-4" />
              katoemma.website
            </a>
          </div>
        </div>

        <!-- Right: form -->
        <div class="contact-form-wrap reveal">
          <div class="contact-form">
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Your Name</label>
                <input type="text" class="form-input" placeholder="Jane Smith" />
              </div>
              <div class="form-group">
                <label class="form-label">Email</label>
                <input type="email" class="form-input" placeholder="jane@company.com" />
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">Subject</label>
              <input type="text" class="form-input" placeholder="Project inquiry / Job opportunity" />
            </div>
            <div class="form-group">
              <label class="form-label">Message</label>
              <textarea class="form-input" rows="4" placeholder="Tell me about your project..."></textarea>
            </div>
            <button class="btn-primary w-full-btn" onclick="window.location='mailto:katoemmy001@gmail.com'">
              Send Message <Icon icon="lucide:arrow-right" class="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- ======== FOOTER ======== -->
    <footer class="footer">
      <div class="footer-inner">
        <p class="footer-logo">KE.</p>
        <p class="footer-copy">© 2026 Kato Emmanuel · Full-Stack & Geospatial Engineer · Uganda</p>
        <p class="footer-right">Built with precision & code.</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* =========================================
   TOKENS
   ========================================= */
.site-wrapper {
  --brand:       #E8541A;
  --brand-dark:  #C94815;
  --dark:        #0C0C0A;
  --dark2:       #141410;
  --dark3:       #1C1C18;
  --border-dark: #2A2A24;
  --text-light:  #F5F0EB;
  --text-muted:  #8A8A80;
  --light-bg:    #FAFAF8;
  --light-alt:   #F2F1EE;
  --light-border:#E2E2DC;
  --text-dark:   #18181B;
  --text-dmuted: #6B6B65;

  font-family: 'Inter', sans-serif;
  background: var(--light-bg);
  color: var(--text-dark);
  overflow-x: hidden;
  cursor: none;
}

/* =========================================
   CURSOR
   ========================================= */
.cursor {
  width: 10px; height: 10px;
  background: var(--brand);
  border-radius: 50%;
  position: fixed; top: 0; left: 0;
  pointer-events: none; z-index: 9999;
  transform: translate(-50%, -50%);
  transition: width 0.15s, height 0.15s;
}
.cursor-ring {
  width: 36px; height: 36px;
  border: 1.5px solid rgba(232,84,26,0.3);
  border-radius: 50%;
  position: fixed; top: 0; left: 0;
  pointer-events: none; z-index: 9998;
  transform: translate(-50%, -50%);
  transition: left 0.07s ease, top 0.07s ease, width 0.2s, height 0.2s, border-color 0.2s;
}

/* =========================================
   NAV
   ========================================= */
nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  background: rgba(250,250,248,0.92);
  border-bottom: 1px solid var(--light-border);
}
.nav-inner {
  max-width: 1200px; margin: 0 auto;
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 40px;
  height: 68px;
}
.logo {
  font-family: 'Syne', sans-serif;
  font-weight: 800; font-size: 20px;
  color: var(--text-dark);
  letter-spacing: -0.5px;
  flex-shrink: 0;
}
.logo-dot { color: var(--brand); }
.nav-links {
  display: flex; gap: 36px;
  position: absolute; left: 50%; transform: translateX(-50%);
}
.nl {
  font-size: 13.5px; font-weight: 450;
  color: var(--text-dmuted);
  transition: color 0.2s;
  letter-spacing: 0.01em;
  position: relative; padding-bottom: 2px;
}
.nl::after {
  content: ''; position: absolute;
  bottom: -2px; left: 0; width: 0; height: 1.5px;
  background: var(--brand);
  transition: width 0.25s ease;
  border-radius: 1px;
}
.nl:hover { color: var(--text-dark); }
.nl:hover::after { width: 100%; }
.nav-cv {
  display: inline-flex; align-items: center; gap: 7px;
  font-family: 'Inter', sans-serif;
  font-size: 12.5px; font-weight: 600;
  color: var(--text-dark);
  background: var(--light-alt);
  border: 1.5px solid var(--light-border);
  padding: 9px 18px; border-radius: 999px;
  transition: all 0.2s ease;
  letter-spacing: 0.02em;
  flex-shrink: 0;
}
.nav-cv:hover {
  background: var(--brand);
  border-color: var(--brand);
  color: #fff;
}

/* =========================================
   HERO
   ========================================= */
.hero {
  min-height: 100vh;
  display: flex; align-items: center;
  padding-top: 68px;
}
.hero-container {
  max-width: 1200px; margin: 0 auto;
  width: 100%;
  padding: 80px 40px;
  display: grid;
  grid-template-columns: 1fr 420px;
  gap: 80px;
  align-items: center;
}

/* Left column */
.hero-left {
  display: flex; flex-direction: column;
}
.avail-tag {
  display: inline-flex; align-items: center; gap: 8px;
  background: rgba(232,84,26,0.07);
  border: 1px solid rgba(232,84,26,0.2);
  border-radius: 999px;
  padding: 7px 16px;
  font-size: 12px; font-weight: 500; color: var(--brand);
  width: fit-content; margin-bottom: 28px;
  letter-spacing: 0.02em;
}
.avail-dot {
  display: inline-block;
  width: 7px; height: 7px; border-radius: 50%;
  background: var(--brand);
  animation: pulse 1.8s ease-in-out infinite;
}
@keyframes pulse {
  0%,100% { opacity:1; transform:scale(1); }
  50%      { opacity:0.4; transform:scale(1.5); }
}

.hero-name {
  font-family: 'Syne', sans-serif;
  font-size: clamp(52px, 6.5vw, 84px);
  font-weight: 800;
  line-height: 1.0;
  letter-spacing: -0.03em;
  color: var(--text-dark);
  margin: 0 0 16px;
}
.hero-name-accent {
  color: var(--brand);
  display: block;
}

.hero-role {
  font-size: 15px; font-weight: 500;
  color: var(--text-dmuted);
  letter-spacing: 0.01em;
  margin-bottom: 20px;
}

.hero-bio {
  font-size: 15px; line-height: 1.72;
  color: var(--text-dmuted);
  max-width: 460px;
  margin-bottom: 36px;
}

.hero-cta {
  display: flex; align-items: center; gap: 16px;
  margin-bottom: 52px;
}

.hero-stats {
  display: flex; align-items: center; gap: 28px;
  padding-top: 28px;
  border-top: 1px solid var(--light-border);
}
.stat-item {}
.stat-num {
  font-family: 'Syne', sans-serif;
  font-size: 26px; font-weight: 800;
  color: var(--brand); line-height: 1;
  display: block;
}
.stat-label {
  font-size: 11px; color: var(--text-dmuted);
  margin-top: 5px; display: block; font-weight: 500;
  letter-spacing: 0.01em;
}
.stat-rule {
  width: 1px; height: 32px;
  background: var(--light-border);
  flex-shrink: 0;
}

/* Right column: photo card */
.hero-right {
  display: flex; flex-direction: column; align-items: center; gap: 16px;
}
.hero-photo-card {
  position: relative;
  width: 100%;
}
.hero-photo {
  width: 100%;
  height: 500px;
  object-fit: cover; object-position: top center;
  border-radius: 24px;
  border: 1px solid var(--light-border);
  box-shadow: 0 20px 60px rgba(0,0,0,0.1);
  display: block;
}

/* Floating badges */
.hero-badge {
  position: absolute;
  display: flex; align-items: center; gap: 8px;
  background: #fff;
  border: 1px solid var(--light-border);
  border-radius: 999px;
  padding: 8px 14px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.07);
  font-size: 12px; font-weight: 600;
  color: var(--text-dark);
  white-space: nowrap;
}
.hero-badge-icon {
  width: 26px; height: 26px;
  border-radius: 50%;
  background: var(--brand);
  display: flex; align-items: center; justify-content: center;
  color: #fff; flex-shrink: 0;
}
.hero-badge-top  { top: 20px; left: -20px; }
.hero-badge-bottom { bottom: 80px; right: -20px; }

/* Tech strip */
.hero-tech-row {
  position: absolute; bottom: 16px; left: 50%;
  transform: translateX(-50%);
  display: flex; align-items: center; gap: 6px;
  background: #fff;
  border: 1px solid var(--light-border);
  border-radius: 999px;
  padding: 8px 16px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.06);
}
.tech-chip {
  width: 28px; height: 28px;
  border-radius: 8px;
  background: var(--light-alt);
  display: flex; align-items: center; justify-content: center;
}

/* Location tag */
.hero-location {
  display: inline-flex; align-items: center; gap: 6px;
  font-size: 12px; font-weight: 500;
  color: var(--text-dmuted);
}
.text-muted-light { color: var(--text-dmuted); }

/* =========================================
   MARQUEE
   ========================================= */
.marquee-wrap {
  overflow: hidden;
  border-top: 1px solid var(--light-border);
  border-bottom: 1px solid var(--light-border);
  padding: 16px 0;
  background: var(--light-alt);
}
.marquee-track {
  display: flex; gap: 24px; align-items: center;
  white-space: nowrap;
  animation: marquee 28s linear infinite;
  width: max-content;
}
.marquee-track span {
  font-size: 13px; font-weight: 500;
  color: var(--text-dmuted); letter-spacing: 0.02em;
}
.marquee-track .sep { color: var(--brand); }
@keyframes marquee {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

/* =========================================
   SECTION STRUCTURE
   ========================================= */
.section {
  max-width: 1200px; margin: 0 auto;
  padding: 96px 32px;
}
.section-dark {
  max-width: 100%;
  background: var(--dark);
  padding: 96px 0;
}
.section-dark > * {
  max-width: 1200px; margin-left: auto; margin-right: auto;
  padding-left: 32px; padding-right: 32px;
}
.section-dark .bento,
.section-dark .contact-grid {
  max-width: 1200px; margin: 0 auto;
  padding-left: 32px; padding-right: 32px;
}

.section-label {
  display: flex; align-items: center; gap: 16px;
  margin-bottom: 56px;
}
.sec-num {
  font-family: 'Syne', sans-serif;
  font-size: 11px; font-weight: 700;
  color: var(--brand); letter-spacing: 0.1em;
}
.sec-num-dark { color: var(--brand); }
.sec-rule {
  flex: 0 0 48px; height: 1px;
  background: var(--light-border);
}
.sec-rule-dark { background: var(--border-dark); }
.sec-title {
  font-family: 'Syne', sans-serif;
  font-size: 11px; font-weight: 700;
  color: var(--text-dmuted); letter-spacing: 0.12em;
  text-transform: uppercase;
}
.sec-title-dark { color: var(--text-muted); }
.section-sub {
  font-size: 14px; color: var(--text-muted);
  margin-top: -40px; margin-bottom: 40px;
  padding: 0 32px;
}

/* =========================================
   ABOUT
   ========================================= */
.about-grid {
  display: grid;
  grid-template-columns: 1fr 420px;
  gap: 80px; align-items: start;
}
.about-headline {
  font-family: 'Syne', sans-serif;
  font-size: clamp(28px, 3.5vw, 42px);
  font-weight: 700; line-height: 1.2;
  color: var(--text-dark);
  margin-bottom: 24px;
  letter-spacing: -0.02em;
}
.about-body {
  font-size: 15px; line-height: 1.75;
  color: var(--text-dmuted); margin-bottom: 16px;
}
.about-body strong { color: var(--text-dark); font-weight: 600; }
.tags-row { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 28px; }
.tag {
  display: inline-flex; align-items: center;
  padding: 5px 12px; border-radius: 999px;
  font-size: 12px; font-weight: 500;
  background: rgba(232,84,26,0.07);
  color: var(--brand);
  border: 1px solid rgba(232,84,26,0.18);
}
.about-values { display: flex; flex-direction: column; gap: 0; }
.value-item {
  display: flex; align-items: flex-start; gap: 16px;
  padding: 20px 0;
  border-bottom: 1px solid var(--light-border);
}
.value-item:first-child { border-top: 1px solid var(--light-border); }
.value-icon {
  width: 36px; height: 36px; flex-shrink: 0;
  background: rgba(232,84,26,0.08);
  border-radius: 10px;
  display: flex; align-items: center; justify-content: center;
  color: var(--brand);
}
.value-title {
  font-family: 'Syne', sans-serif;
  font-size: 14px; font-weight: 700;
  color: var(--text-dark); margin-bottom: 4px;
}
.value-desc { font-size: 13px; color: var(--text-dmuted); line-height: 1.6; }

/* =========================================
   PROJECTS BENTO
   ========================================= */
.bento {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
.bento-card {
  background: var(--dark2);
  border: 1px solid var(--border-dark);
  border-radius: 20px;
  padding: 28px;
  display: flex; flex-direction: column;
  transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
  text-decoration: none;
}
.bento-card:hover {
  border-color: rgba(232,84,26,0.4);
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(232,84,26,0.1);
}
.bento-wide { grid-column: span 2; }
.bento-building { opacity: 0.72; }

.bento-top {
  display: flex; align-items: flex-start;
  justify-content: space-between; margin-bottom: 20px;
}
.bento-icon {
  width: 44px; height: 44px; border-radius: 12px;
  background: rgba(232,84,26,0.1);
  display: flex; align-items: center; justify-content: center;
  color: var(--brand);
  transition: background 0.25s;
}
.bento-card:hover .bento-icon { background: var(--brand); color: #fff; }
.bento-arrow { color: #3A3A34; transition: color 0.25s; }
.bento-card:hover .bento-arrow { color: var(--brand); }

.bento-title {
  font-family: 'Syne', sans-serif;
  font-size: 18px; font-weight: 700;
  color: var(--text-light); margin-bottom: 10px;
}
.bento-desc {
  font-size: 13px; line-height: 1.7;
  color: var(--text-muted); flex: 1; margin-bottom: 20px;
}
.bento-tags {
  display: flex; flex-wrap: wrap; gap: 6px;
}
.bento-tags span {
  font-size: 11px; font-weight: 500;
  padding: 4px 10px; border-radius: 6px;
  background: rgba(255,255,255,0.05);
  color: var(--text-muted);
  border: 1px solid var(--border-dark);
}
.bento-wip {
  font-size: 11px; font-weight: 600;
  padding: 4px 10px; border-radius: 999px;
  background: rgba(251,191,36,0.12);
  color: #FBBF24;
}
.bento-client {
  font-size: 11px; font-weight: 600;
  padding: 4px 10px; border-radius: 999px;
  background: rgba(232,84,26,0.12);
  color: var(--brand);
}

/* =========================================
   GEOSPATIAL
   ========================================= */
.geo-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px; align-items: center;
}
.geo-headline {
  font-family: 'Syne', sans-serif;
  font-size: clamp(28px, 3vw, 38px);
  font-weight: 700; line-height: 1.2;
  color: var(--text-dark);
  letter-spacing: -0.02em; margin-bottom: 20px;
}
.geo-body {
  font-size: 15px; line-height: 1.75;
  color: var(--text-dmuted); margin-bottom: 40px;
}
.geo-features { display: flex; flex-direction: column; gap: 0; }
.geo-feat {
  display: flex; align-items: flex-start; gap: 20px;
  padding: 18px 0; border-bottom: 1px solid var(--light-border);
}
.geo-feat:first-child { border-top: 1px solid var(--light-border); }
.geo-feat-num {
  font-family: 'Syne', sans-serif;
  font-size: 11px; font-weight: 700;
  color: var(--brand); letter-spacing: 0.08em;
  flex-shrink: 0; padding-top: 2px;
}
.geo-feat-title {
  font-family: 'Syne', sans-serif;
  font-size: 14px; font-weight: 700;
  color: var(--text-dark); margin-bottom: 3px;
}
.geo-feat-desc { font-size: 13px; color: var(--text-dmuted); line-height: 1.6; }

.geo-map {
  background: var(--light-alt);
  border: 1px solid var(--light-border);
  border-radius: 24px; padding: 24px;
}

/* =========================================
   CONTACT
   ========================================= */
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px; align-items: start;
}
.contact-headline {
  font-family: 'Syne', sans-serif;
  font-size: clamp(42px, 5vw, 72px);
  font-weight: 800; line-height: 1.0;
  color: var(--text-light);
  letter-spacing: -0.03em; margin-bottom: 24px;
}
.brand-text { color: var(--brand); }
.contact-sub {
  font-size: 15px; line-height: 1.7;
  color: var(--text-muted); margin-bottom: 36px;
}
.contact-links { display: flex; flex-direction: column; gap: 12px; }
.contact-link {
  display: flex; align-items: center; gap: 10px;
  font-size: 14px; color: var(--text-muted);
  transition: color 0.2s;
}
.contact-link:hover { color: var(--brand); }

/* Contact form -->
.contact-form-wrap { }
.contact-form {
  background: var(--dark2);
  border: 1px solid var(--border-dark);
  border-radius: 20px; padding: 32px;
}
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px; }
.form-group { margin-bottom: 16px; }
.form-group:last-of-type { margin-bottom: 20px; }
.form-label {
  display: block; font-size: 11px; font-weight: 600;
  color: var(--text-muted); text-transform: uppercase;
  letter-spacing: 0.08em; margin-bottom: 8px;
}
.form-input {
  background: rgba(255,255,255,0.04);
  border: 1px solid var(--border-dark);
  color: var(--text-light);
  border-radius: 10px; padding: 12px 16px;
  font-family: 'Inter', sans-serif; font-size: 14px;
  width: 100%; outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
  box-sizing: border-box;
}
.form-input::placeholder { color: #46463E; }
.form-input:focus {
  border-color: rgba(232,84,26,0.45);
  box-shadow: 0 0 0 3px rgba(232,84,26,0.08);
}

/* =========================================
   BUTTONS
   ========================================= */
.btn-primary {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 13px 26px;
  background: var(--brand); color: #ffffff;
  border-radius: 999px;
  font-family: 'Syne', sans-serif;
  font-weight: 700; font-size: 14px; letter-spacing: 0.02em;
  transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
  cursor: none; border: none;
}
.btn-primary:hover {
  background: var(--brand-dark);
  transform: translateY(-2px);
  box-shadow: 0 8px 28px rgba(232,84,26,0.3);
}
.w-full-btn {
  width: 100%; justify-content: center;
}
.btn-ghost {
  display: inline-flex; align-items: center; gap: 6px;
  font-size: 14px; font-weight: 500;
  color: var(--text-dmuted);
  transition: color 0.2s;
  cursor: none;
}
.btn-ghost:hover { color: var(--brand); }

/* =========================================
   FOOTER
   ========================================= */
.footer {
  background: var(--dark);
  border-top: 1px solid var(--border-dark);
  padding: 28px 32px;
}
.footer-inner {
  max-width: 1200px; margin: 0 auto;
  display: flex; align-items: center; justify-content: space-between;
}
.footer-logo {
  font-family: 'Syne', sans-serif;
  font-size: 20px; font-weight: 800; color: var(--brand);
}
.footer-copy, .footer-right {
  font-size: 12px; color: var(--text-muted);
}

/* =========================================
   SCROLL REVEAL
   ========================================= */
.reveal {
  opacity: 0; transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.reveal.visible { opacity: 1; transform: translateY(0); }

/* =========================================
   MAP DOT ANIMATION
   ========================================= */
.map-dot { animation: mapPulse 2.2s ease-in-out infinite; }
@keyframes mapPulse {
  0%,100% { opacity: 1; }
  50%      { opacity: 0.4; }
}

/* =========================================
   SCROLLBAR
   ========================================= */
::-webkit-scrollbar { width: 4px; }
::-webkit-scrollbar-track { background: var(--dark); }
::-webkit-scrollbar-thumb { background: rgba(232,84,26,0.3); border-radius: 2px; }

/* =========================================
   TOUCH DEVICES
   ========================================= */
@media (hover: none) {
  .site-wrapper { cursor: auto; }
  .cursor, .cursor-ring { display: none; }
  .btn-primary, .btn-ghost { cursor: pointer; }
}

/* =========================================
   RESPONSIVE
   ========================================= */
@media (max-width: 1024px) {
  .hero { flex-direction: column; align-items: flex-start; padding-top: 120px; }
  .hero-photo-wrap { margin-left: 0; margin-top: 40px; }
  .about-grid, .geo-grid, .contact-grid { grid-template-columns: 1fr; gap: 48px; }
  .bento { grid-template-columns: 1fr 1fr; }
  .bento-wide { grid-column: span 2; }
}
@media (max-width: 768px) {
  .nav-links { display: none; }
  .hero-name { font-size: 56px; }
  .bento { grid-template-columns: 1fr; }
  .bento-wide { grid-column: span 1; }
  .hero-stats { gap: 20px; }
  .form-row { grid-template-columns: 1fr; }
  .footer-inner { flex-direction: column; gap: 8px; text-align: center; }
  .section { padding: 64px 20px; }
  .hero { padding: 120px 20px 48px; }
}
</style>

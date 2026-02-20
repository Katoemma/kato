<script setup>
const projects = [
  {
    title: 'Terrave',
    description: 'Geospatial SaaS application for managing forest gardens in Africa.',
    link: 'https://terrave.katoemma.website',
    iframeUrl: 'https://terrave.katoemma.website',
    tags: ['GIS', 'SaaS', 'Vue.js', 'PostGIS']
  },
  {
    title: 'Qigo-HR',
    description: 'A comprehensive Human Capital Management (HCM) system.',
    link: 'https://hr.lipon.store',
    iframeUrl: 'https://hr.lipon.store',
    tags: ['HCM', 'Laravel', 'Vue.js', 'Operations']
  },
  {
    title: 'Zoya Travels',
    description: 'Travel agency landing page built with Nuxt.js and Tailwind CSS.',
    link: 'https://zoyatravelsug.com',
    iframeUrl: 'https://zoyatravelsug.com',
    tags: ['Nuxt', 'TailwindCSS', 'Landing Page', 'Travel']
  }
]
</script>

<template>
  <section id="projects" class="py-28 bg-[#0f1f17]">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
        <div>
          <p class="text-orange-500 font-medium uppercase tracking-wide text-sm mb-2">
            Portfolio
          </p>
          <h2 class="text-4xl md:text-5xl font-bold text-white">
            Selected Projects
          </h2>
        </div>
        <p class="text-slate-400 max-w-md mt-4 md:mt-0">
          A selection of systems I've designed and built for real-world operations.
        </p>
      </div>

      <!-- Project Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article v-for="project in projects" :key="project.title"
          class="group relative bg-[#162e22] rounded-2xl overflow-hidden border border-white/5 hover:border-orange-500/30 transition-all duration-300">
          <!-- Iframe Preview -->
          <div class="relative h-64 overflow-hidden bg-black/20">
            <iframe :src="project.iframeUrl"
              class="w-[100%] h-[100%] border-none pointer-events-none scale-[0.6] origin-top-left w-[166.6%] h-[166.6%]"
              loading="lazy" title="Project Preview"></iframe>
            <!-- Overlay and link -->
            <a :href="project.link" target="_blank" class="absolute inset-0 bg-transparent z-10 cursor-pointer">
              <div
                class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span
                  class="text-white bg-orange-500 px-4 py-2 rounded-full text-sm font-semibold transform -translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  Open Site
                </span>
              </div>
            </a>
          </div>

          <!-- Content -->
          <div class="p-6">
            <!-- Tags -->
            <div class="flex flex-wrap gap-2 mb-4">
              <span v-for="tag in project.tags" :key="tag"
                class="px-3 py-1 text-xs font-medium text-orange-400 bg-orange-500/10 rounded-full">
                {{ tag }}
              </span>
            </div>

            <h3 class="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors duration-200">
              {{ project.title }}
            </h3>

            <p class="text-slate-400 text-sm leading-relaxed">
              {{ project.description }}
            </p>

            <!-- View Link -->
            <div
              class="mt-6 flex items-center text-sm font-medium text-white group-hover:text-orange-400 transition-colors">
              <span>View Project</span>
              <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </article>
      </div>

      <!-- View All CTA -->
      <div class="mt-16 text-center">
        <a href="#contact"
          class="inline-flex items-center gap-2 px-8 py-4 border border-white/20 rounded-full text-white font-medium hover:bg-white/5 transition-all duration-200">
          Discuss Your Project
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

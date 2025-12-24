<script setup>
import { onMounted, ref } from 'vue'
import VanillaTilt from 'vanilla-tilt'

const projectCards = ref([])

onMounted(() => {
  VanillaTilt.init(projectCards.value, {
    max: 10,
    speed: 400,
    glare: true,
    'max-glare': 0.3,
    scale: 1.02
  })
})

const projects = [
  {
    title: 'KIJANI_FORESTRY_APP',
    description: 'Cross-platform mobile app used by 450+ field users. Integrated with Airtable APIs for offline-first data collection, reducing reporting time by 75%.',
    tags: ['Flutter', 'Airtable API', 'Offline-First', 'Mobile'],
    image: '/Images/project1.png',
    link: '#'
  },
  {
    title: 'AIRTABLE_CRUD_LIB',
    description: 'Open-source Dart library simplifying Airtable API integration. Built to streamline data operations for the Flutter developer community.',
    tags: ['Dart', 'Open Source', 'API Wrapper', 'Package'],
    image: '/Images/project2.png',
    link: 'https://github.com/Katoemma/airtable_crud'
  },
  {
    title: 'VILT_STACK_SYSTEMS',
    description: 'High-performance web applications using Vue, Inertia, Laravel, and Tailwind. Achieved 99% Lighthouse performance scores with modern UX.',
    tags: ['Vue.js', 'Laravel', 'Inertia.js', 'Tailwind'],
    image: '/Images/project3.png',
    link: '#'
  }
]
</script>

<template>
  <section id="projects" class="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4 tracking-widest">
          PROJECT_<span class="text-[#00ff41]">ARCHIVES</span>
        </h2>
        <div class="w-24 h-[2px] bg-[#00ff41] mx-auto shadow-[0_0_10px_#00ff41]"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="project in projects" 
          :key="project.title" 
          ref="projectCards"
          class="group bg-[#0a0a0a] border border-[#00ff41]/20 hover:border-[#00ff41] transition-all duration-300 relative overflow-hidden transform-style-3d"
        >
          <!-- Image Container with Glitch Overlay -->
          <div class="relative overflow-hidden h-48 border-b border-[#00ff41]/20">
            <div class="absolute inset-0 bg-[#00ff41]/10 group-hover:bg-transparent transition-colors z-10"></div>
            <div class="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] pointer-events-none z-20 opacity-50"></div>
            <img :src="project.image" :alt="project.title" class="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500">
          </div>
          
          <div class="p-6 relative">
            <h3 class="text-lg font-bold text-white mb-2 group-hover:text-[#00ff41] transition-colors font-mono tracking-tighter">
              {{ project.title }}
            </h3>
            <p class="text-gray-400 text-sm mb-4 font-mono leading-relaxed border-l border-[#00ff41]/30 pl-3">
              {{ project.description }}
            </p>
            
            <div class="flex flex-wrap gap-2 mb-6">
              <span v-for="tag in project.tags" :key="tag" class="px-2 py-1 text-[10px] font-mono border border-[#00f3ff]/30 text-[#00f3ff] uppercase tracking-wider">
                {{ tag }}
              </span>
            </div>
            
            <a :href="project.link" class="inline-flex items-center text-sm font-bold text-white hover:text-[#00ff41] transition-colors font-mono uppercase tracking-widest group/link">
              <span class="mr-2">[</span> VIEW_SOURCE <span class="ml-2">]</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

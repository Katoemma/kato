<script setup>
import { onMounted, ref } from 'vue'
import VanillaTilt from 'vanilla-tilt'

const skillCards = ref([])

onMounted(() => {
  VanillaTilt.init(skillCards.value, {
    max: 15,
    speed: 400,
    glare: true,
    'max-glare': 0.2,
    scale: 1.05
  })
})

const skills = [
  {
    category: 'LANGUAGES_&_FRAMEWORKS',
    items: [
      { name: 'Laravel', level: 95, color: 'bg-[#ff2d20]' },
      { name: 'Vue.js / Nuxt', level: 90, color: 'bg-[#42b883]' },
      { name: 'Flutter / Dart', level: 85, color: 'bg-[#02569b]' },
      { name: 'TypeScript', level: 80, color: 'bg-[#3178c6]' }
    ]
  },
  {
    category: 'DATABASE_&_API',
    items: [
      { name: 'PostgreSQL / MySQL', level: 90, color: 'bg-[#336791]' },
      { name: 'Supabase / Firebase', level: 85, color: 'bg-[#3ecf8e]' },
      { name: 'RESTful APIs', level: 95, color: 'bg-[#00ff41]' },
      { name: 'Airtable', level: 85, color: 'bg-[#fcb400]' }
    ]
  },
  {
    category: 'DEVOPS_&_TOOLS',
    items: [
      { name: 'Linux / Nginx', level: 80, color: 'bg-[#fcc624]' },
      { name: 'CI/CD Pipelines', level: 75, color: 'bg-[#00f3ff]' },
      { name: 'Git / GitHub', level: 90, color: 'bg-[#ffffff]' },
      { name: 'Figma', level: 85, color: 'bg-[#f24e1e]' }
    ]
  }
]
</script>

<template>
  <section id="skills" class="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-[#050505]/80 backdrop-blur-sm">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4 tracking-widest">
          SYSTEM_<span class="text-[#00f3ff]">CAPABILITIES</span>
        </h2>
        <div class="w-24 h-[2px] bg-[#00f3ff] mx-auto shadow-[0_0_10px_#00f3ff]"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div 
          v-for="category in skills" 
          :key="category.category" 
          ref="skillCards"
          class="bg-[#0a0a0a] border border-[#00f3ff]/20 p-6 relative group hover:border-[#00f3ff]/50 transition-colors duration-300 transform-style-3d"
        >
          <!-- Corner accents -->
          <div class="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#00f3ff] opacity-50 group-hover:opacity-100 transition-opacity"></div>
          <div class="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#00f3ff] opacity-50 group-hover:opacity-100 transition-opacity"></div>
          <div class="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#00f3ff] opacity-50 group-hover:opacity-100 transition-opacity"></div>
          <div class="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#00f3ff] opacity-50 group-hover:opacity-100 transition-opacity"></div>

          <h3 class="text-lg font-bold text-[#00f3ff] mb-6 border-b border-[#00f3ff]/20 pb-2 font-mono tracking-wider">
            {{ category.category }}
          </h3>
          
          <div class="space-y-6">
            <div v-for="skill in category.items" :key="skill.name">
              <div class="flex justify-between mb-2 font-mono text-xs">
                <span class="text-gray-300">{{ skill.name }}</span>
                <span class="text-[#00ff41]">{{ skill.level }}%</span>
              </div>
              <div class="w-full bg-[#1a1a1a] h-2 overflow-hidden relative">
                <!-- Grid background for bar -->
                <div class="absolute inset-0 bg-[linear-gradient(90deg,transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:4px_100%] z-10"></div>
                <div 
                  class="h-full transition-all duration-1000 ease-out relative"
                  :class="skill.color"
                  :style="{ width: `${skill.level}%` }"
                >
                  <div class="absolute right-0 top-0 bottom-0 w-[2px] bg-white shadow-[0_0_5px_white]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

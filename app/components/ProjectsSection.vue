<script setup>
const projects = [
  {
    title: 'Forestry GIS Platform',
    description: 'Polygon management, land analytics, restoration tracking.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475'
  },
  {
    title: 'HR & Operations System',
    description: 'Modular Laravel + Vue platform with shared auth.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71'
  }
]
</script>

<template>
  <section id="projects" class="py-28 bg-[#1f3f2f]">
    <div class="max-w-7xl mx-auto px-6">
      <h2 class="text-4xl font-bold text-white mb-16">
        Selected Projects
      </h2>

      <div class="grid md:grid-cols-2 gap-10">
        <div v-for="project in projects" :key="project.title"
          class="rounded-3xl overflow-hidden bg-[#162e22] shadow-xl group hover:shadow-2xl transition-all duration-300">
          <div class="overflow-hidden">
            <img :src="project.image" :alt="project.title"
              class="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-white">
              {{ project.title }}
            </h3>
            <p class="text-slate-300 mt-2">
              {{ project.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

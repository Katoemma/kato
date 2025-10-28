<script setup lang="ts">
interface Project {
  title: string
  description: string
  tags: string[]
  link?: string
  cover?: string
  year?: string
}

defineProps<{ project: Project }>()
</script>

<template>
  <a :href="project.link || '#'" class="card glass group block overflow-hidden">
    <div class="ratio-16x9">
      <div class="ratio-inner">
        <img :src="project.cover || '/project-default.svg'" alt="" class="h-full w-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" loading="lazy" />
      </div>
    </div>
    <div class="p-5">
      <div class="flex items-start justify-between gap-6">
        <div>
          <h3 class="text-lg font-semibold group-hover:text-white transition-colors">{{ project.title }}</h3>
          <p class="mt-1 text-xs text-slate-400" v-if="project.year">{{ project.year }}</p>
          <p class="mt-2 text-sm text-slate-300">{{ project.description }}</p>
        </div>
        <span class="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-black font-bold transition-transform group-hover:-translate-y-0.5">↗</span>
      </div>
      <div class="mt-4 flex flex-wrap gap-2">
        <span v-for="tag in project.tags" :key="tag" class="rounded-md bg-white/5 px-2.5 py-1 text-xs text-slate-300 border border-white/10">{{ tag }}</span>
      </div>
    </div>
  </a>
  
</template>


<script setup>
useSeoMeta({
  title: 'Kato Emmanuel',
  description: 'Full-Stack Developer & UI/UX Designer building modern, scalable web and mobile apps with Vue, Nuxt, Inertia, Laravel, Tailwind, Flutter, TypeScript, and AI RAG.',
  ogTitle: 'Kato Emmanuel',
  ogDescription: 'Full-Stack Developer & UI/UX Designer building modern, scalable web and mobile apps with Vue, Nuxt, Inertia, Laravel, Tailwind, Flutter, TypeScript, and AI RAG.',
  ogImage: '/og-image.svg',
  ogUrl: 'https://katoemma.website',
  ogSiteName: 'Kato Emmanuel',
  ogType: 'website',
  ogLocale: 'en_US',
  
})
</script>

<template>
  <main class="relative w-full min-h-screen text-white">
    <ThreeBackground />
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
    <ContactSection />
    
    <footer class="py-8 text-center text-gray-500 text-sm relative z-10">
      <p>&copy; {{ new Date().getFullYear() }} Kato Emmanuel. All rights reserved.</p>
    </footer>
  </main>
</template>

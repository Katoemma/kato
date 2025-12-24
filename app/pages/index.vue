<script setup>
useSeoMeta({
  title: 'Kato Emmanuel — Best Software Engineer in Uganda | GIS & Forestry',
  description: 'Top-rated Software Engineer in Uganda specialized in GIS & Forestry software. Expert Flutter, Laravel, Vue.js, & Nuxt developer building scalable solutions.',
  ogTitle: 'Kato Emmanuel — Best Software Engineer in Uganda | GIS & Forestry',
  ogDescription: 'Top-rated Software Engineer in Uganda specialized in GIS & Forestry software. Expert Flutter, Laravel, Vue.js, & Nuxt developer.',
  ogImage: '/og-image.svg',
  ogUrl: 'https://katoemma.website',
  ogSiteName: 'Kato Emmanuel',
  ogType: 'website',
  ogLocale: 'en_US',
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Kato Emmanuel',
        jobTitle: 'Senior Software Engineer',
        url: 'https://katoemma.website',
        image: 'https://katoemma.website/Images/profile.png',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'Uganda'
        },
        sameAs: [
          'https://github.com/katoemma',
          'https://linkedin.com/in/katoemma',
          'https://twitter.com/katoemma'
        ],
        knowsAbout: [
          'Software Engineering',
          'GIS Development',
          'Forestry Software',
          'Flutter',
          'Laravel',
          'Vue.js',
          'Nuxt',
          'Geospatial Analysis',
          'Mobile App Development'
        ],
        description: 'Best Software Engineer in Uganda specializing in GIS, Forestry, and full-stack web/mobile development.'
      })
    }
  ]
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

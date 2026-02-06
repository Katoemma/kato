<script setup>
useSeoMeta({
  title: 'Kato Emmanuel | GIS & Full-Stack Engineer',
  description: 'I design and build modern GIS platforms, data-driven web systems, and scalable SaaS tools for forestry, land restoration, and operations teams.',
  ogTitle: 'Kato Emmanuel | GIS & Full-Stack Engineer',
  ogDescription: 'Building Spatial Systems That Scale. Modern GIS platforms, data-driven web systems, and scalable SaaS tools.',
  ogImage: '/og-image.png',
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
        jobTitle: 'GIS & Full-Stack Engineer',
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
          'GIS Development',
          'Spatial Systems',
          'Full-Stack Engineering',
          'SaaS Development',
          'Laravel',
          'Vue.js',
          'Flutter',
          'PostgreSQL/PostGIS'
        ],
        description: 'GIS & Full-Stack Engineer building modern spatial systems and scalable SaaS tools.'
      })
    }
  ]
})
</script>

<template>
  <div class="relative w-full min-h-screen text-white">
    <NavBar />
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <ProjectsSection />
    <ContactSection />

    <footer class="py-8 bg-black text-center text-slate-400 text-sm">
      © {{ new Date().getFullYear() }} Kato Emmanuel. Built with TailwindCSS.
    </footer>
  </div>
</template>

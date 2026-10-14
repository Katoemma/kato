<script setup lang="ts">
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
  meta: [
    { name: 'theme-color', content: '#E8541A' },
  ],
  link: [
    { rel: 'preconnect', href: 'https://api.fontshare.com' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    {
      rel: 'stylesheet',
      href: 'https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&f[]=satoshi@400,500,700&display=swap',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap',
    },
  ],
})
</script>

<template>
  <div>
    <NavBar />
    <main>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ProjectsSection />
      <ServicesSection />
      <ContactSection />
    </main>
    <FooterSection />
  </div>
</template>

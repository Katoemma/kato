<script setup>
// Comprehensive SEO Meta Tags
useSeoMeta({
  title: 'Kato Emmanuel | GIS Developer & Full-Stack Engineer Uganda',
  description: 'Kato Emmanuel - Expert GIS Developer & Full-Stack Software Engineer based in Uganda. Specializing in spatial systems, Laravel, Vue.js, Flutter, and PostGIS. Building scalable SaaS platforms, GIS mapping solutions, and forestry software for clients worldwide. Available for hire.',

  // Open Graph
  ogTitle: 'Kato Emmanuel | GIS Developer & Full-Stack Engineer Uganda',
  ogDescription: 'Expert GIS Developer & Full-Stack Engineer building spatial systems, SaaS platforms & mobile apps. Hire for your next project - remote or on-site.',
  ogImage: 'https://katoemma.website/og-image.png',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogUrl: 'https://katoemma.website',
  ogSiteName: 'Kato Emmanuel',
  ogType: 'website',
  ogLocale: 'en_US',

  // Twitter
  twitterCard: 'summary_large_image',
  twitterSite: '@katoemma',
  twitterCreator: '@katoemma',
  twitterTitle: 'Kato Emmanuel | GIS Developer & Full-Stack Engineer Uganda',
  twitterDescription: 'Expert GIS Developer & Full-Stack Engineer. Building spatial systems, SaaS platforms & mobile apps for clients worldwide.',
  twitterImage: 'https://katoemma.website/og-image.png',
})

useHead({
  script: [
    // Person Schema
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        '@id': 'https://katoemma.website/#person',
        name: 'Kato Emmanuel',
        givenName: 'Emmanuel',
        familyName: 'Kato',
        jobTitle: 'GIS Developer & Full-Stack Software Engineer',
        url: 'https://katoemma.website',
        image: {
          '@type': 'ImageObject',
          url: 'https://katoemma.website/Images/profile.jpeg',
          width: 400,
          height: 400
        },
        email: 'katoemmy001@gmail.com',
        telephone: '+256778707801',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Gulu City',
          addressRegion: 'Northern Region',
          addressCountry: 'Uganda',
          postalCode: '00000'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 2.7746,
          longitude: 32.2990
        },
        sameAs: [
          'https://github.com/katoemma',
          'https://linkedin.com/in/katoemma',
          'https://twitter.com/katoemma'
        ],
        knowsAbout: [
          'Geographic Information Systems (GIS)',
          'Spatial Data Analysis',
          'Full-Stack Web Development',
          'Laravel PHP Framework',
          'Vue.js',
          'Nuxt.js',
          'Flutter Mobile Development',
          'PostgreSQL PostGIS',
          'SaaS Development',
          'Forestry Software',
          'Land Management Systems',
          'REST API Development',
          'Mobile Application Development',
          'Database Design',
          'Mapbox',
          'Leaflet',
          'Turf.js'
        ],
        hasOccupation: {
          '@type': 'Occupation',
          name: 'Software Engineer',
          occupationLocation: {
            '@type': 'Country',
            name: 'Uganda'
          },
          skills: 'GIS Development, Laravel, Vue.js, Flutter, PostgreSQL, PostGIS, SaaS Development'
        },
        worksFor: {
          '@type': 'Organization',
          name: 'Freelance / Available for Hire'
        },
        description: 'Kato Emmanuel is an expert GIS Developer and Full-Stack Software Engineer based in Gulu City, Uganda. With extensive experience in building spatial systems, SaaS platforms, and mobile applications using Laravel, Vue.js, Flutter, and PostGIS. Available for remote and on-site projects worldwide.',
        alumniOf: {
          '@type': 'EducationalOrganization',
          name: 'Uganda'
        }
      })
    },
    // Professional Service Schema
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        '@id': 'https://katoemma.website/#service',
        name: 'Kato Emmanuel - Software Development Services',
        description: 'Expert GIS development, full-stack web development, mobile app development, and SaaS solutions. Specializing in spatial systems, forestry software, and land management platforms.',
        url: 'https://katoemma.website',
        telephone: '+256778707801',
        email: 'katoemmy001@gmail.com',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Gulu City',
          addressCountry: 'Uganda'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 2.7746,
          longitude: 32.2990
        },
        areaServed: [
          { '@type': 'Country', name: 'Uganda' },
          { '@type': 'Country', name: 'Kenya' },
          { '@type': 'Country', name: 'Tanzania' },
          { '@type': 'Country', name: 'Rwanda' },
          { '@type': 'Continent', name: 'Africa' },
          { '@type': 'Place', name: 'Worldwide' }
        ],
        serviceType: [
          'GIS Development',
          'Full-Stack Web Development',
          'Mobile App Development',
          'SaaS Development',
          'Spatial Data Analysis',
          'Forestry Software Development',
          'Land Management Systems'
        ],
        priceRange: '$$',
        founder: {
          '@id': 'https://katoemma.website/#person'
        }
      })
    },
    // Website Schema
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': 'https://katoemma.website/#website',
        url: 'https://katoemma.website',
        name: 'Kato Emmanuel - GIS Developer & Full-Stack Engineer',
        description: 'Portfolio and services of Kato Emmanuel, expert GIS Developer and Full-Stack Software Engineer in Uganda.',
        publisher: {
          '@id': 'https://katoemma.website/#person'
        },
        inLanguage: 'en-US'
      })
    },
    // FAQ Schema for common questions
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What services does Kato Emmanuel offer?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Kato Emmanuel offers GIS development, full-stack web development (Laravel, Vue.js, Nuxt), mobile app development (Flutter), SaaS platform development, spatial data analysis, and custom software solutions for forestry and land management.'
            }
          },
          {
            '@type': 'Question',
            name: 'Does Kato Emmanuel work with international clients?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, Kato Emmanuel works with clients worldwide. Based in Uganda, he provides remote software development services to companies across Africa, Europe, North America, and globally.'
            }
          },
          {
            '@type': 'Question',
            name: 'What technologies does Kato Emmanuel specialize in?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Kato Emmanuel specializes in Laravel, Vue.js, Nuxt.js, Flutter, PostgreSQL/PostGIS, Mapbox, Leaflet, and Turf.js for GIS applications. He builds scalable SaaS platforms, mobile apps, and spatial data systems.'
            }
          }
        ]
      })
    }
  ],
  link: [
    { rel: 'canonical', href: 'https://katoemma.website' }
  ]
})
</script>

<template>
  <div class="relative w-full min-h-screen text-white">
    <NavBar />

    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
    </main>

    <FooterSection />
  </div>
</template>

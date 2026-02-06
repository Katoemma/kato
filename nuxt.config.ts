// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: 'Kato Emmanuel | GIS Developer & Full-Stack Engineer Uganda',
      titleTemplate: '%s · Kato Emmanuel',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=5' },
        { name: 'description', content: 'Kato Emmanuel - Expert GIS Developer & Full-Stack Software Engineer in Uganda. Specializing in spatial systems, Laravel, Vue.js, Flutter, PostGIS. Building scalable SaaS, mapping platforms & forestry software for clients worldwide.' },
        { name: 'keywords', content: 'GIS Developer Uganda, Full-Stack Engineer Uganda, Software Developer Gulu, Laravel Developer Africa, Vue.js Developer, Flutter Developer Uganda, PostGIS Expert, Spatial Data Engineer, Forestry Software Developer, SaaS Developer, Web Developer Uganda, Mobile App Developer Uganda, GIS Consultant, Mapping Software Developer, Land Management Systems, Hire GIS Developer, Remote Software Engineer Uganda, Best Developer Uganda, Kato Emmanuel' },
        { name: 'author', content: 'Kato Emmanuel' },
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        { name: 'googlebot', content: 'index, follow' },
        { name: 'theme-color', content: '#0f1f17' },

        // Geo targeting
        { name: 'geo.region', content: 'UG' },
        { name: 'geo.placename', content: 'Gulu City, Uganda' },
        { name: 'geo.position', content: '2.7746;32.2990' },
        { name: 'ICBM', content: '2.7746, 32.2990' },

        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:url', content: 'https://katoemma.website' },
        { property: 'og:title', content: 'Kato Emmanuel | GIS Developer & Full-Stack Engineer Uganda' },
        { property: 'og:description', content: 'Expert GIS Developer & Full-Stack Engineer building spatial systems, SaaS platforms & mobile apps. Hire for your next project worldwide.' },
        { property: 'og:image', content: 'https://katoemma.website/og-image.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'Kato Emmanuel - GIS Developer & Full-Stack Engineer' },
        { property: 'og:site_name', content: 'Kato Emmanuel' },

        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@katoemma' },
        { name: 'twitter:creator', content: '@katoemma' },
        { name: 'twitter:title', content: 'Kato Emmanuel | GIS Developer & Full-Stack Engineer Uganda' },
        { name: 'twitter:description', content: 'Expert GIS Developer & Full-Stack Engineer. Building spatial systems, SaaS platforms & mobile apps for clients worldwide.' },
        { name: 'twitter:image', content: 'https://katoemma.website/og-image.png' },

        // LinkedIn specific
        { property: 'article:author', content: 'https://linkedin.com/in/katoemma' }
      ],
      link: [
        { rel: 'canonical', href: 'https://katoemma.website' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon.ico' }
      ]
    }
  },

  components: [
    { path: '~/app/components', pathPrefix: false },
    { path: '~/components', pathPrefix: false }
  ],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  modules: ['@nuxtjs/seo'],

  site: {
    url: 'https://katoemma.website',
    name: 'Kato Emmanuel - GIS Developer & Full-Stack Engineer',
    description: 'Expert GIS Developer & Full-Stack Software Engineer in Uganda. Building spatial systems, SaaS platforms, and mobile applications for clients worldwide.',
    defaultLocale: 'en',
  },

  seo: {
    redirectToCanonicalSiteUrl: true,
  },

  schemaOrg: {
    identity: 'Person',
  },

  sitemap: {
    // Enable strict paths
    strictNuxtContentPaths: true,
    // Add lastmod date
    defaults: {
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: 1.0,
    },
    // Include images in sitemap
    urls: [
      {
        loc: '/',
        lastmod: new Date().toISOString(),
        changefreq: 'weekly',
        priority: 1.0,
        images: [
          {
            loc: 'https://katoemma.website/Images/profile.jpeg',
            title: 'Kato Emmanuel - Software Engineer Profile Photo',
            caption: 'Kato Emmanuel, GIS Developer and Full-Stack Software Engineer based in Uganda'
          },
          {
            loc: 'https://katoemma.website/og-image.png',
            title: 'Kato Emmanuel - GIS Developer and Full-Stack Engineer',
            caption: 'Building Spatial Systems That Scale'
          }
        ]
      }
    ]
  },

  robots: {
    allow: '/',
    sitemap: 'https://katoemma.website/sitemap.xml',
  },

  ogImage: {
    enabled: true,
  },
})
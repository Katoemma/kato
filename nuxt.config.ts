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
      title: 'Kato Emmanuel | GIS & Full-Stack Engineer',
      titleTemplate: '%s · Kato Emmanuel',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
        { name: 'description', content: 'I design and build modern GIS platforms, data-driven web systems, and scalable SaaS tools for forestry, land restoration, and operations teams.' },
        { name: 'keywords', content: 'Kato Emmanuel, GIS Developer, Full-Stack Engineer, Spatial Systems, Laravel, Vue.js, Flutter, SaaS, Uganda' },
        { name: 'theme-color', content: '#0f1f17' },
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Kato Emmanuel | GIS & Full-Stack Engineer' },
        { property: 'og:description', content: 'Building Spatial Systems That Scale. Modern GIS platforms, data-driven web systems, and scalable SaaS tools.' },
        { property: 'og:image', content: '/og-image.png' },
        { property: 'og:site_name', content: 'Kato Emmanuel' },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Kato Emmanuel | GIS & Full-Stack Engineer' },
        { name: 'twitter:description', content: 'Building Spatial Systems That Scale. Modern GIS platforms and scalable SaaS tools.' },
        { name: 'twitter:image', content: '/og-image.png' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
    name: 'Kato Emmanuel',
    description: 'Top-rated Software Engineer in Uganda specialized in GIS & Forestry.',
    defaultLocale: 'en',
  },

  schemaOrg: {
    identity: 'Person',
  },
})
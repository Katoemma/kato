// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
        class: 'dark'
      },
      title: 'Kato Emmanuel — Best Software Engineer in Uganda | GIS & Forestry',
      titleTemplate: '%s · Kato Emmanuel',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
        { name: 'description', content: 'Top-rated Software Engineer in Uganda specialized in GIS & Forestry. Expert Flutter, Laravel, Vue.js, & Nuxt developer building scalable solutions.' },
        { name: 'keywords', content: 'Kato Emmanuel, Best Software Engineer in Uganda, GIS, Forestry, Flutter, Laravel, Vue.js, Nuxt, Software Engineer' },
        { name: 'theme-color', content: '#0b0f19' },
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Kato Emmanuel — Best Software Engineer in Uganda | GIS & Forestry' },
        { property: 'og:description', content: 'Top-rated Software Engineer in Uganda specialized in GIS & Forestry. Expert Flutter, Laravel, Vue.js, & Nuxt developer.' },
        { property: 'og:image', content: '/og-image.png' },
        { property: 'og:site_name', content: 'Kato Emmanuel' },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Kato Emmanuel — Best Software Engineer in Uganda | GIS & Forestry' },
        { name: 'twitter:description', content: 'Top-rated Software Engineer in Uganda specialized in GIS & Forestry. Expert Flutter, Laravel, Vue.js, & Nuxt developer.' },
        { name: 'twitter:image', content: '/og-image.png' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=JetBrains+Mono:wght@400;700&display=swap' },
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
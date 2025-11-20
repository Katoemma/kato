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
      title: 'Katoemma — Full‑Stack Developer & UI/UX Designer',
      titleTemplate: '%s · Katoemma',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
        { name: 'description', content: 'Katoemma — Full-Stack Developer & UI/UX Designer building modern, scalable web and mobile apps with Vue, Nuxt, Inertia, Laravel, Tailwind, Flutter, TypeScript, and AI RAG (LangChain.js + Google Gemini).' },
        { name: 'keywords', content: 'Katoemma, Full-Stack Developer, UI/UX Designer, Vue, Nuxt, Inertia, Laravel, Tailwind, Flutter, TypeScript, RAG, LangChain.js, Google Gemini, VILT' },
        { name: 'theme-color', content: '#0b0f19' },
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Katoemma — Full‑Stack Developer & UI/UX Designer' },
        { property: 'og:description', content: 'Modern, scalable apps with Vue, Nuxt, Laravel, Flutter, and AI RAG.' },
        { property: 'og:image', content: '/og-image.svg' },
        { property: 'og:site_name', content: 'Katoemma' },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Katoemma — Full‑Stack Developer & UI/UX Designer' },
        { name: 'twitter:description', content: 'Modern, scalable apps with Vue, Nuxt, Laravel, Flutter, and AI RAG.' },
        { name: 'twitter:image', content: '/og-image.svg' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=JetBrains+Mono:wght@400;700&display=swap' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
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
    name: 'Katoemma',
    description: 'Full-Stack Developer & UI/UX Designer building modern, scalable web and mobile apps.',
    defaultLocale: 'en',
  },

  schemaOrg: {
    identity: 'Person',
  },
})
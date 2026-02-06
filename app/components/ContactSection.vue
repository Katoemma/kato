<script setup>
const contactMethods = [
  {
    icon: 'email',
    label: 'Email',
    value: 'katoemmy001@gmail.com',
    href: 'mailto:katoemmy001@gmail.com'
  },
  {
    icon: 'phone',
    label: 'Phone',
    value: '+256 778 707 801',
    href: 'tel:+256778707801'
  },
  {
    icon: 'location',
    label: 'Location',
    value: 'Gulu City, Uganda',
    href: null
  }
]
</script>

<template>
  <section id="contact" class="py-32 bg-white">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Main CTA Block -->
      <div class="max-w-4xl mx-auto text-center mb-20">
        <p class="text-orange-600 font-medium uppercase tracking-wide text-sm mb-4">
          Let's Connect
        </p>
        <h2 class="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
          Ready to Build<br />
          <span class="text-slate-500">Something Great?</span>
        </h2>
        <p class="text-xl text-slate-600 max-w-2xl mx-auto mb-10">
          Whether you're planning a GIS platform, SaaS product, or need a skilled engineer for your team — I'd love to
          hear about your project.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="mailto:katoemmy001@gmail.com"
            class="inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full font-medium shadow-lg shadow-orange-600/20 transition-all duration-200">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Send an Email
          </a>
          <a href="https://calendly.com" target="_blank"
            class="inline-flex items-center justify-center gap-2 border-2 border-slate-200 hover:border-slate-300 text-slate-700 px-8 py-4 rounded-full font-medium transition-all duration-200">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Schedule a Call
          </a>
        </div>
      </div>

      <!-- Contact Cards -->
      <div class="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <div v-for="method in contactMethods" :key="method.label"
          class="p-6 bg-slate-50 rounded-2xl text-center hover:bg-slate-100 transition-colors duration-200">
          <!-- Icon -->
          <div class="w-12 h-12 mx-auto mb-4 bg-white rounded-xl flex items-center justify-center shadow-sm">
            <svg v-if="method.icon === 'email'" class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <svg v-if="method.icon === 'phone'" class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <svg v-if="method.icon === 'location'" class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>

          <p class="text-sm text-slate-500 mb-1">{{ method.label }}</p>
          <component :is="method.href ? 'a' : 'p'" :href="method.href" class="font-semibold text-slate-900"
            :class="{ 'hover:text-orange-600 transition-colors': method.href }">
            {{ method.value }}
          </component>
        </div>
      </div>
    </div>
  </section>
</template>

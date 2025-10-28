<template>
  <div>
    <header :class="[
      'sticky top-0 z-50 transition-colors',
      isScrolled
        ? 'backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/40 border-b border-white/10'
        : 'bg-transparent border-transparent'
    ]">
      <div v-if="!isScrolled" class="header-hero-overlay" aria-hidden="true"></div>
      <nav class="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="/" class="flex items-center gap-3">
          <span class="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-black font-bold shadow-sm">K</span>
          <span class="font-semibold tracking-tight">Katoemma</span>
        </a>
        <ul class="hidden md:flex items-center gap-8 text-sm text-slate-300">
          <li><a href="#work" class="link-underline hover:text-white">Work</a></li>
          <li><a href="#stack" class="link-underline hover:text-white">Stack</a></li>
          <li><a href="#about" class="link-underline hover:text-white">About</a></li>
          <li><a href="#contact" class="link-underline hover:text-white">Contact</a></li>
        </ul>
        <div class="flex items-center gap-3">
          <a href="#contact" class="btn btn-ghost text-sm">Let’s talk</a>
          <a href="#" class="btn btn-primary text-sm">Download CV</a>
        </div>
      </nav>
    </header>

    <main>
      <slot />
    </main>

    <footer class="mt-24 border-t border-white/10">
      <div class="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
        <p>© {{ new Date().getFullYear() }} Katoemma. All rights reserved.</p>
        <div class="flex items-center gap-4">
          <a href="#" class="link-underline hover:text-white">GitHub</a>
          <a href="#" class="link-underline hover:text-white">LinkedIn</a>
          <a href="#" class="link-underline hover:text-white">Dribbble</a>
        </div>
      </div>
    </footer>
  </div>
  
</template>

<script setup lang="ts">
const isScrolled = ref(false)

if (process.client) {
  const onScroll = () => {
    isScrolled.value = window.scrollY > 24
  }
  onMounted(() => {
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
  })
  onBeforeUnmount(() => {
    window.removeEventListener('scroll', onScroll)
  })
}
</script>


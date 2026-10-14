<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const activeSection = ref('')

const handleScroll = () => {
  isScrolled.value = window.scrollY > 40
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' }
]
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="isScrolled ? 'bg-[#FAFAF8]/95 backdrop-blur-md border-b border-[#E4E4E7] shadow-sm' : 'bg-transparent'"
  >
    <div class="max-w-7xl mx-auto px-6">
      <nav class="flex items-center justify-between h-16">

        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-2 group">
          <span
            class="w-7 h-7 rounded-md bg-[#D4651A] flex items-center justify-center text-white text-xs font-bold tracking-tight select-none"
          >KE</span>
          <span
            class="text-[#18181B] font-semibold text-sm tracking-wide group-hover:text-[#D4651A] transition-colors duration-200"
          >Kato Emmanuel</span>
        </NuxtLink>

        <!-- Desktop Nav Links -->
        <ul class="hidden md:flex items-center gap-1">
          <li v-for="link in navLinks" :key="link.name">
            <a
              :href="link.href"
              class="relative px-3 py-1.5 text-sm text-[#71717A] hover:text-[#18181B] transition-colors duration-200 rounded-md hover:bg-[#F4F4F2]"
            >
              {{ link.name }}
            </a>
          </li>
        </ul>

        <!-- CTA -->
        <div class="hidden md:flex items-center gap-3">
          <a
            href="/Kato_Emmanuel_CV.pdf"
            download
            class="text-sm text-[#18181B] border border-[#E4E4E7] px-4 py-1.5 rounded-md hover:border-[#D4651A] hover:text-[#D4651A] transition-all duration-200"
          >
            Download CV
          </a>
          <a
            href="#contact"
            class="text-sm bg-[#18181B] text-white px-4 py-1.5 rounded-md hover:bg-[#D4651A] transition-all duration-200"
          >
            Hire Me
          </a>
        </div>

        <!-- Mobile Toggle -->
        <button
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="md:hidden p-2 text-[#18181B] hover:text-[#D4651A] transition-colors"
          aria-label="Toggle menu"
        >
          <svg v-if="!isMobileMenuOpen" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </nav>
    </div>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="isMobileMenuOpen"
        class="md:hidden border-t border-[#E4E4E7] bg-[#FAFAF8]"
      >
        <ul class="flex flex-col px-6 py-4 gap-1">
          <li v-for="link in navLinks" :key="link.name">
            <a
              :href="link.href"
              @click="isMobileMenuOpen = false"
              class="block px-3 py-2.5 text-sm text-[#71717A] hover:text-[#18181B] hover:bg-[#F4F4F2] rounded-md transition-colors"
            >
              {{ link.name }}
            </a>
          </li>
          <li class="pt-3 flex flex-col gap-2 border-t border-[#E4E4E7] mt-2">
            <a
              href="/Kato_Emmanuel_CV.pdf"
              download
              @click="isMobileMenuOpen = false"
              class="block text-center text-sm border border-[#E4E4E7] px-4 py-2 rounded-md text-[#18181B] hover:border-[#D4651A] hover:text-[#D4651A] transition-all"
            >
              Download CV
            </a>
            <a
              href="#contact"
              @click="isMobileMenuOpen = false"
              class="block text-center text-sm bg-[#18181B] text-white px-4 py-2 rounded-md hover:bg-[#D4651A] transition-all"
            >
              Hire Me
            </a>
          </li>
        </ul>
      </div>
    </Transition>
  </header>
</template>

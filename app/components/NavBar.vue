<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 40
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onBeforeUnmount(() => window.removeEventListener('scroll', handleScroll))

const navLinks = [
  { name: 'About',   href: '#about'   },
  { name: 'Work',    href: '#work'    },
  { name: 'Geo',     href: '#geo'     },
  { name: 'Contact', href: '#contact' },
]
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="isScrolled
      ? 'bg-[#E8541A] shadow-[0_4px_24px_rgba(232,84,26,0.25)]'
      : 'bg-transparent'"
  >
    <div class="max-w-[1200px] mx-auto px-6 md:px-10">
      <nav class="flex items-center justify-between h-[68px]">

        <!-- Logo -->
        <a
          href="#"
          class="font-[ClashDisplay] font-extrabold text-[20px] tracking-tight leading-none transition-colors duration-300"
          :class="isScrolled ? 'text-white' : 'text-[#18181B]'"
        >
          KE<span :class="isScrolled ? 'text-white/70' : 'text-[#E8541A]'">.</span>
        </a>

        <!-- Desktop links -->
        <ul class="hidden md:flex items-center gap-9 absolute left-1/2 -translate-x-1/2">
          <li v-for="link in navLinks" :key="link.name">
            <a
              :href="link.href"
              class="relative text-[13.5px] font-[450] transition-colors duration-200 pb-[2px] group"
              :class="isScrolled ? 'text-white/80 hover:text-white' : 'text-[#6B6B65] hover:text-[#18181B]'"
            >
              {{ link.name }}
              <span
                class="absolute bottom-[-2px] left-0 h-[1.5px] w-0 group-hover:w-full rounded-sm transition-all duration-[250ms] ease-out"
                :class="isScrolled ? 'bg-white' : 'bg-[#E8541A]'"
              />
            </a>
          </li>
        </ul>

        <!-- Desktop CTA -->
        <a
          href="/Kato_Emmanuel_CV.pdf"
          download
          class="hidden md:inline-flex items-center gap-2 text-[12.5px] font-semibold px-[18px] py-[9px] rounded-full transition-all duration-200"
          :class="isScrolled
            ? 'bg-white text-[#E8541A] hover:bg-white/90'
            : 'bg-[#F2F1EE] border border-[#E2E2DC] text-[#18181B] hover:bg-[#E8541A] hover:border-[#E8541A] hover:text-white'"
        >
          Download CV
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </a>

        <!-- Mobile toggle -->
        <button
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="md:hidden p-2 transition-colors"
          :class="isScrolled ? 'text-white' : 'text-[#18181B] hover:text-[#E8541A]'"
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

    <!-- Mobile menu -->
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
        class="md:hidden border-t"
        :class="isScrolled
          ? 'border-white/20 bg-[#E8541A]'
          : 'border-[#E2E2DC] bg-[#FAFAF8]'"
      >
        <ul class="flex flex-col px-6 py-4 gap-1">
          <li v-for="link in navLinks" :key="link.name">
            <a
              :href="link.href"
              @click="isMobileMenuOpen = false"
              class="block px-3 py-2.5 text-sm rounded-md transition-colors"
              :class="isScrolled
                ? 'text-white/80 hover:text-white hover:bg-white/10'
                : 'text-[#6B6B65] hover:text-[#18181B] hover:bg-[#F2F1EE]'"
            >
              {{ link.name }}
            </a>
          </li>
          <li class="pt-3 mt-2 border-t" :class="isScrolled ? 'border-white/20' : 'border-[#E2E2DC]'">
            <a
              href="/Kato_Emmanuel_CV.pdf"
              download
              @click="isMobileMenuOpen = false"
              class="flex items-center justify-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-full transition-all"
              :class="isScrolled
                ? 'bg-white text-[#E8541A] hover:bg-white/90'
                : 'bg-[#F2F1EE] border border-[#E2E2DC] text-[#18181B] hover:bg-[#E8541A] hover:border-[#E8541A] hover:text-white'"
            >
              Download CV
            </a>
          </li>
        </ul>
      </div>
    </Transition>
  </header>
</template>

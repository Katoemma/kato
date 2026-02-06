<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const handleScroll = () => {
    isScrolled.value = window.scrollY > 50
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
    <header class="fixed top-4 w-full z-50">
        <div class="max-w-7xl mx-auto px-4">
            <nav class="flex items-center justify-between px-6 py-3 rounded-full
               backdrop-blur-xl bg-white/5 border border-white/10
               shadow-lg shadow-black/30 transition-all duration-300" :class="{ 'bg-white/10': isScrolled }">
                <!-- Logo -->
                <NuxtLink to="/" class="text-white font-semibold tracking-wide">
                    Kato Emmanuel
                </NuxtLink>

                <!-- Desktop Navigation -->
                <ul class="hidden md:flex gap-8 text-sm text-slate-300">
                    <li v-for="link in navLinks" :key="link.name">
                        <a :href="link.href" class="hover:text-white transition-colors duration-200">
                            {{ link.name }}
                        </a>
                    </li>
                </ul>

                <!-- CTA Button -->
                <a href="#contact" class="hidden md:inline-block bg-orange-600 hover:bg-orange-700
                 text-white px-5 py-2 rounded-full text-sm
                 shadow-md shadow-orange-600/30 transition-all duration-200">
                    Hire Me
                </a>

                <!-- Mobile Menu Button -->
                <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="md:hidden p-2 text-white"
                    aria-label="Toggle menu">
                    <svg v-if="!isMobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </nav>

            <!-- Mobile Menu -->
            <Transition enter-active-class="transition duration-200 ease-out"
                enter-from-class="opacity-0 -translate-y-4" enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition duration-150 ease-in" leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 -translate-y-4">
                <div v-if="isMobileMenuOpen"
                    class="md:hidden mt-2 p-4 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/10">
                    <ul class="space-y-4 text-center">
                        <li v-for="link in navLinks" :key="link.name">
                            <a :href="link.href" @click="isMobileMenuOpen = false"
                                class="block text-slate-300 hover:text-white py-2 transition-colors">
                                {{ link.name }}
                            </a>
                        </li>
                        <li>
                            <a href="#contact" @click="isMobileMenuOpen = false" class="inline-block bg-orange-600 hover:bg-orange-700
                       text-white px-6 py-2 rounded-full text-sm
                       shadow-md shadow-orange-600/30 transition-all">
                                Hire Me
                            </a>
                        </li>
                    </ul>
                </div>
            </Transition>
        </div>
    </header>
</template>

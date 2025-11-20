<script setup>
</script>

<template>
  <main class="relative w-full min-h-screen text-white">
    <ThreeBackground />
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
    <ContactSection />
    
    <footer class="py-8 text-center text-gray-500 text-sm relative z-10">
      <p>&copy; {{ new Date().getFullYear() }} Kato Emmanuel. All rights reserved.</p>
    </footer>
  </main>
</template>

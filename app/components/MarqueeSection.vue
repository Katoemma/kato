<template>
  <div class="overflow-hidden border-t border-b border-[#E2E2DC] py-4 bg-[#F2F1EE]">
    <div
      class="flex gap-6 items-center whitespace-nowrap w-max"
      style="animation: marquee 28s linear infinite;"
    >
      <template v-for="_ in 2" :key="_">
        <template v-for="(item, i) in items" :key="i">
          <span class="text-[13px] font-medium text-[#6B6B65] tracking-[0.02em]">{{ item }}</span>
          <span class="text-[#E8541A]">·</span>
        </template>
      </template>
    </div>
  </div>
</template>

<script setup>
const items = [
  'Laravel', 'Vue.js', 'Flutter', 'PostGIS', 'Mapbox',
  'Node.js', 'Nuxt.js', 'PostgreSQL', 'OpenAI', 'Docker',
  'QGIS', 'Leaflet', 'Dart', 'PHP',
]
</script>

<style scoped>
@keyframes marquee {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
</style>

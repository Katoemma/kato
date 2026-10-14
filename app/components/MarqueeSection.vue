<template>
  <div class="relative bg-[#18181B] py-7 overflow-hidden">

    <!-- Left fade mask -->
    <div class="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
      style="background: linear-gradient(to right, #18181B, transparent);" />
    <!-- Right fade mask -->
    <div class="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
      style="background: linear-gradient(to left, #18181B, transparent);" />

    <div class="marquee-track">
      <template v-for="_ in 3" :key="_">
        <span v-for="item in items" :key="item.name" class="marquee-item">
          <span class="marquee-dot" :style="{ background: item.color }" />
          {{ item.name }}
        </span>
      </template>
    </div>
  </div>
</template>

<script setup>
const items = [
  { name: 'Laravel',    color: '#FF2D20' },
  { name: 'Vue.js',     color: '#42B883' },
  { name: 'Flutter',    color: '#027DFD' },
  { name: 'PostGIS',    color: '#336791' },
  { name: 'Mapbox',     color: '#E8541A' },
  { name: 'Node.js',    color: '#83CD29' },
  { name: 'Nuxt.js',    color: '#00DC82' },
  { name: 'PostgreSQL', color: '#336791' },
  { name: 'OpenAI',     color: '#FFFFFF' },
  { name: 'Docker',     color: '#2496ED' },
  { name: 'QGIS',       color: '#589632' },
  { name: 'Leaflet',    color: '#199900' },
  { name: 'Dart',       color: '#0175C2' },
  { name: 'PHP',        color: '#8892BF' },
]
</script>

<style>
.marquee-track {
  display: flex;
  align-items: center;
  width: max-content;
  animation: marquee-scroll 32s linear infinite;
}

.marquee-track:hover {
  animation-play-state: paused;
}

.marquee-item {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 0 36px;
  font-family: 'ClashDisplay', sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: #8A8A80;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  white-space: nowrap;
  border-right: 1px solid #2A2A24;
  transition: color 0.2s ease;
  cursor: default;
}

.marquee-item:hover {
  color: #F5F0EB;
}

.marquee-dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
  opacity: 0.85;
}

@keyframes marquee-scroll {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-33.333%); }
}
</style>

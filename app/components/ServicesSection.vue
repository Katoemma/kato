<template>
  <section id="geo" class="max-w-[1200px] mx-auto px-8 py-24">

    <!-- Section label -->
    <div class="flex items-center gap-4 mb-14">
      <span class="font-[Satoshi] text-[11px] font-bold text-[#E8541A] tracking-[0.1em]">03</span>
      <span class="w-12 h-px bg-[#E2E2DC]" />
      <span class="font-[Satoshi] text-[11px] font-bold text-[#6B6B65] tracking-[0.12em] uppercase">Geospatial</span>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

      <!-- Left: copy -->
      <div>
        <h2
          class="font-[ClashDisplay] font-bold leading-[1.2] tracking-[-0.02em] text-[#18181B] mb-5"
          style="font-size: clamp(28px, 3vw, 38px);"
        >
          Bridging the physical world and the digital.
        </h2>

        <p class="text-[15px] leading-[1.75] text-[#6B6B65] mb-10">
          I design geospatial systems that transform raw geographic data into actionable intelligence —
          from mobile field collection in remote Uganda to interactive web spatial dashboards.
        </p>

        <div class="flex flex-col">
          <div
            v-for="(feat, i) in features" :key="i"
            class="flex items-start gap-5 py-[18px]"
            :class="i === 0 ? 'border-t border-b border-[#E2E2DC]' : 'border-b border-[#E2E2DC]'"
          >
            <span class="font-[Satoshi] text-[11px] font-bold text-[#E8541A] tracking-[0.08em] flex-shrink-0 pt-0.5">
              0{{ i + 1 }}
            </span>
            <div>
              <p class="font-[Satoshi] text-[14px] font-bold text-[#18181B] mb-1">{{ feat.title }}</p>
              <p class="text-[13px] text-[#6B6B65] leading-[1.6]">{{ feat.desc }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Right: Uganda map SVG -->
      <div class="bg-[#F2F1EE] border border-[#E2E2DC] rounded-3xl p-6">
        <svg viewBox="0 0 420 340" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full">
          <defs>
            <pattern id="geo-grid" width="28" height="28" patternUnits="userSpaceOnUse">
              <path d="M 28 0 L 0 0 0 28" fill="none" stroke="rgba(232,84,26,0.07)" stroke-width="0.5" />
            </pattern>
          </defs>
          <rect width="420" height="340" fill="url(#geo-grid)" rx="16" />

          <!-- Uganda outline -->
          <path
            d="M160 50 L200 44 L242 60 L264 92 L274 135 L264 178 L252 208 L222 230 L200 240 L168 228 L148 200 L136 172 L130 140 L136 108 L148 78 Z"
            fill="rgba(232,84,26,0.06)" stroke="rgba(232,84,26,0.4)" stroke-width="1.5" stroke-linejoin="round"
          />

          <!-- Kampala dot -->
          <circle cx="196" cy="192" r="14" fill="rgba(232,84,26,0.1)" />
          <circle cx="196" cy="192" r="5" fill="#E8541A" />
          <text x="214" y="197" fill="#6B6B65" font-size="9" font-family="Inter, sans-serif" font-weight="500">Kampala</text>

          <!-- Dashed line -->
          <line x1="200" y1="95" x2="196" y2="192" stroke="rgba(232,84,26,0.18)" stroke-width="1" stroke-dasharray="4,3" />

          <!-- Field data points -->
          <circle cx="152" cy="120" r="3.5" fill="rgba(232,84,26,0.55)" />
          <circle cx="234" cy="115" r="3.5" fill="rgba(232,84,26,0.55)" />
          <circle cx="172" cy="153" r="3.5" fill="rgba(232,84,26,0.55)" />
          <circle cx="224" cy="158" r="3.5" fill="rgba(232,84,26,0.55)" />
          <circle cx="166" cy="178" r="3.5" fill="rgba(232,84,26,0.55)" />
          <circle cx="244" cy="137" r="3.5" fill="rgba(232,84,26,0.35)" />

          <!-- Compass -->
          <g transform="translate(378, 42)">
            <circle cx="0" cy="0" r="20" fill="rgba(232,84,26,0.05)" stroke="rgba(232,84,26,0.18)" stroke-width="0.8" />
            <text x="0" y="-7" fill="#E8541A" font-size="8" text-anchor="middle" font-family="Syne, sans-serif" font-weight="700">N</text>
            <line x1="0" y1="-4" x2="0" y2="4" stroke="rgba(232,84,26,0.45)" stroke-width="0.8" />
            <line x1="-4" y1="0" x2="4" y2="0" stroke="rgba(232,84,26,0.3)" stroke-width="0.8" />
          </g>

          <!-- Legend -->
          <circle cx="28" cy="308" r="5" fill="#E8541A" />
          <text x="40" y="312" fill="#6B6B65" font-size="9" font-family="Inter, sans-serif">Base Location</text>
          <circle cx="128" cy="308" r="3.5" fill="rgba(232,84,26,0.5)" />
          <text x="140" y="312" fill="#6B6B65" font-size="9" font-family="Inter, sans-serif">Field Data Points</text>

          <!-- Scale bar -->
          <line x1="300" y1="310" x2="368" y2="310" stroke="rgba(232,84,26,0.35)" stroke-width="1" />
          <line x1="300" y1="306" x2="300" y2="314" stroke="rgba(232,84,26,0.35)" stroke-width="1" />
          <line x1="368" y1="306" x2="368" y2="314" stroke="rgba(232,84,26,0.35)" stroke-width="1" />
          <text x="334" y="305" fill="#6B6B65" font-size="8" text-anchor="middle" font-family="Inter, sans-serif">100 km</text>
        </svg>
      </div>

    </div>
  </section>
</template>

<script setup>
const features = [
  { title: 'Spatial Databases',      desc: 'PostGIS, spatial indexing, geospatial queries, coordinate systems.' },
  { title: 'Interactive Mapping',    desc: 'Leaflet, Mapbox, OpenLayers — dynamic, web-based map visualisations.' },
  { title: 'Mobile Field Collection',desc: 'GPS-integrated Flutter apps with offline sync for field teams.' },
  { title: 'Spatial Analytics',      desc: 'GeoJSON, KML, shapefiles — pipelines for geographic decision-making.' },
]
</script>

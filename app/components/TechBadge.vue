<script setup lang="ts">
defineProps<{ label: string }>()
</script>

<template>
  <span class="inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300 transition-colors hover:border-white/25">
    <span class="h-1.5 w-1.5 rounded-full bg-accent mr-2"></span>
    {{ label }}
  </span>
  
</template>


<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: ''
})

const submitForm = () => {
  console.log('Transmission sent:', form.value)
  alert('Transmission received. Stand by for response.')
  form.value = { name: '', email: '', message: '' }
}
</script>

<template>
  <section id="contact" class="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-[#050505]/90 backdrop-blur-sm border-t border-[#00f3ff]/10">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4 tracking-widest">
            SECURE_<span class="text-[#00f3ff]">UPLINK</span>
          </h2>
          <div class="w-24 h-[2px] bg-[#00f3ff] mb-8 shadow-[0_0_10px_#00f3ff]"></div>
          <p class="text-gray-300 text-lg mb-8 font-mono">
            <span class="text-[#00f3ff]">></span> Channel Open.<br>
            <span class="text-[#00f3ff]">></span> Awaiting input for collaboration or inquiry.<br>
            <span class="text-[#00f3ff]">></span> Encryption: ENABLED.
          </p>
          
          <div class="space-y-8">
            <div class="flex items-start gap-4 group">
              <div class="p-3 border border-[#00ff41] bg-[#00ff41]/10 group-hover:bg-[#00ff41]/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#00ff41]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 class="text-gray-400 font-mono text-sm mb-1">EMAIL_FREQUENCY</h3>
                <p class="text-white font-bold tracking-wide">katoemmy001@gmail.com</p>
              </div>
            </div>

            <div class="flex items-start gap-4 group">
              <div class="p-3 border border-[#00f3ff] bg-[#00f3ff]/10 group-hover:bg-[#00f3ff]/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#00f3ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 class="text-gray-400 font-mono text-sm mb-1">BASE_COORDINATES</h3>
                <p class="text-white font-bold tracking-wide">Gulu City, Uganda</p>
              </div>
            </div>

            <div class="flex items-start gap-4 group">
              <div class="p-3 border border-[#ff00ff] bg-[#ff00ff]/10 group-hover:bg-[#ff00ff]/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#ff00ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 class="text-gray-400 font-mono text-sm mb-1">SECURE_LINE</h3>
                <p class="text-white font-bold tracking-wide">+256 778 707 801</p>
              </div>
            </div>
          </div>
        </div>
        
        <form @submit.prevent="submitForm" class="bg-[#0a0a0a] p-8 border border-[#00f3ff]/30 relative">
          <!-- Decorative corners -->
          <div class="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#00f3ff]"></div>
          <div class="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#00f3ff]"></div>

          <div class="space-y-6">
            <div>
              <label for="name" class="block text-xs font-bold text-[#00f3ff] mb-2 uppercase tracking-widest">Identity</label>
              <input 
                v-model="form.name"
                type="text" 
                id="name" 
                class="w-full bg-[#050505] border border-[#333] text-white px-4 py-3 focus:outline-none focus:border-[#00f3ff] focus:shadow-[0_0_10px_#00f3ff/20] transition-all font-mono"
                placeholder="ENTER_NAME"
                required
              >
            </div>
            
            <div>
              <label for="email" class="block text-xs font-bold text-[#00f3ff] mb-2 uppercase tracking-widest">Contact_Freq</label>
              <input 
                v-model="form.email"
                type="email" 
                id="email" 
                class="w-full bg-[#050505] border border-[#333] text-white px-4 py-3 focus:outline-none focus:border-[#00f3ff] focus:shadow-[0_0_10px_#00f3ff/20] transition-all font-mono"
                placeholder="ENTER_EMAIL"
                required
              >
            </div>
            
            <div>
              <label for="message" class="block text-xs font-bold text-[#00f3ff] mb-2 uppercase tracking-widest">Data_Packet</label>
              <textarea 
                v-model="form.message"
                id="message" 
                rows="4" 
                class="w-full bg-[#050505] border border-[#333] text-white px-4 py-3 focus:outline-none focus:border-[#00f3ff] focus:shadow-[0_0_10px_#00f3ff/20] transition-all font-mono"
                placeholder="INPUT_MESSAGE..."
                required
              ></textarea>
            </div>
            
            <button type="submit" class="w-full bg-[#00f3ff]/10 border border-[#00f3ff] text-[#00f3ff] font-bold py-4 px-6 hover:bg-[#00f3ff] hover:text-black transition-all duration-300 uppercase tracking-[0.2em]">
              Transmit_Data
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

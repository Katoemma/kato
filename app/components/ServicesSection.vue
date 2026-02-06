<script setup>
const services = [
    {
        icon: 'GIS',
        title: 'GIS & Spatial Systems',
        description: 'I design and build web-based GIS platforms that allow teams to collect, validate, analyze, and visualize spatial data at scale — even in low-connectivity environments.',
        features: [
            'Polygon & boundary management',
            'Area calculations, overlaps & validation',
            'Satellite imagery & spatial layers',
            'Field-to-dashboard data pipelines'
        ],
        tools: 'Turf.js, Mapbox, Leaflet, PostgreSQL/PostGIS'
    },
    {
        icon: 'SaaS',
        title: 'SaaS & Backend Platforms',
        description: 'I build secure, modular backend systems that support real businesses — from authentication and permissions to reporting, auditing, and integrations.',
        features: [
            'Multi-tenant system architecture',
            'Role-based access & permissions',
            'Data pipelines & audit trails',
            'API-first backend design'
        ],
        tools: 'Laravel, Vue / Inertia, PostgreSQL, Supabase'
    },
    {
        icon: 'App',
        title: 'Mobile & Offline-First Apps',
        description: 'I develop cross-platform mobile and desktop applications that continue working offline and synchronise data safely once connectivity is restored.',
        features: [
            'Offline-first data models',
            'Background sync & conflict resolution',
            'Field data collection workflows',
            'Desktop & mobile parity'
        ],
        tools: 'Flutter, SQLite, REST APIs, Background queues'
    }
]
</script>

<template>
    <section id="services" class="py-32 bg-white text-slate-900 relative overflow-hidden">
        <!-- Subtle background accent -->
        <div class="absolute -top-32 -right-32 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-40"></div>

        <div class="relative max-w-7xl mx-auto px-6">
            <!-- Section header -->
            <div class="max-w-3xl mx-auto text-center mb-20">
                <p class="text-orange-600 font-semibold tracking-wide uppercase mb-3">
                    What I Do
                </p>
                <h2 class="text-4xl md:text-5xl font-bold mb-6">
                    I Build Systems That Work<br class="hidden md:block" />
                    <span class="text-slate-500">In the Real World</span>
                </h2>
                <p class="text-lg text-slate-600">
                    My work focuses on turning complex field operations, spatial data,
                    and business workflows into reliable, scalable digital systems.
                </p>
            </div>

            <!-- Cards -->
            <div class="grid lg:grid-cols-3 gap-10">
                <div v-for="service in services" :key="service.title" class="group p-8 rounded-3xl bg-slate-50 border border-slate-200
                 hover:shadow-xl transition-all duration-300">
                    <div class="mb-6 flex items-center gap-4">
                        <div class="w-12 h-12 rounded-xl bg-[#1f3f2f] text-white
                        flex items-center justify-center font-bold text-sm">
                            {{ service.icon }}
                        </div>
                        <h3 class="text-xl font-semibold">
                            {{ service.title }}
                        </h3>
                    </div>

                    <p class="text-slate-600 leading-relaxed mb-6">
                        {{ service.description }}
                    </p>

                    <ul class="space-y-2 text-sm text-slate-700 mb-6">
                        <li v-for="feature in service.features" :key="feature">
                            • {{ feature }}
                        </li>
                    </ul>

                    <div class="text-sm text-slate-500">
                        Tools: <span class="font-medium">{{ service.tools }}</span>
                    </div>
                </div>
            </div>

            <!-- Bottom CTA -->
            <div class="mt-20 text-center">
                <p class="text-slate-600 mb-6">
                    Need a system that works reliably in the field and scales at headquarters?
                </p>
                <a href="#contact" class="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700
                 text-white px-8 py-4 rounded-xl font-medium shadow-lg transition-all duration-200">
                    Let's Build It
                    <span>→</span>
                </a>
            </div>
        </div>
    </section>
</template>

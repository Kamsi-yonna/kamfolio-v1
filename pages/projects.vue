<template>
    <main class="min-h-screen">
        <div class="mb-6">
            <h1 class="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">Projects</h1>
            <p class="mt-6 text-base text-gray-600 dark:text-gray-400">
                {{ description }}
            </p>

            <div class="grid grid-cols-1 sm:grid-cols- gap-8 mt-14 ">
                <div v-for="(project, index) in projects" :key="index" class="project-card">
                    <NuxtLink :to="project.liveSite" external target="_blank">
                        <UAvatar :alt="project.name" size="md" :src="project.imageUrl"
                            class="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-in-out"
                            :ui="{
                                rounded: 'rounded-none',
                                background: 'bg-gray-100 dark:bg-gray-800',
                                size: {
                                    md: 'h-full w-full',
                                    lg: 'h-full w-full',
                                },
                                placeholder: 'font-bold text-[80px] leading-none text-gray-500 dark:text-grey-100 truncate'
                            }" />
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 transition-opacity duration-300 ease-in-out">
                        </div>
                    </NuxtLink>
                    <h3 class="z-10 mt-3 text-2xl font-bold text-white transition-colors duration-300 ease-in-out">
                        {{ project.name }}</h3>
                    <div class="z-10 gap-y-1 overflow-hidden text-[12px] leading-6 text-gray-300">
                        <span v-for="(category, catIndex) in project.categories" :key="catIndex">
                            {{ category }}<span v-if="catIndex < project.categories.length - 1"> &#x2022; </span>
                        </span>
                    </div>
                </div>
            </div>


            <div
                class="flex justify-center items-center my-12 space-y-1 sm:flex grid grid-cols-1 gap-3 text-gray-900 dark:text-gray-400">
                <NuxtLink class="flex items-end gap-8 p-4 border border-gray-800 rounded-xl hover:border-primary"
                    to="/lab">
                    <span class="text-sm">
                        That's all for now, head over to my lab
                    </span>
                    <Icon class="w-6 h-6" name="heroicons:beaker"></Icon>
                </NuxtLink>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
const description =
    'Discover my projects – a showcase of realistic and accomplished endeavors. Explore a curated collection of works that reflect my expertise and pride in various tech projects developed over the years.'

useSeoMeta({
    title: 'Projects | Kamsiyonna',
    description
})

const projects = [
    {
        imageUrl: '/projects/city-distro_preview.png',
        name: 'City Distro',
        categories: ['webflow', 'UI Development', 'Frontend Development'],
        liveSite: 'https://citydistro.africa/'
    },
    {
        imageUrl: '/projects/carouselling_preview.png',
        name: 'Carouselling',
        categories: ['webflow', 'UI Development', 'Frontend Development'],
        liveSite: 'https://kam-caroselling.netlify.app/'
    },
    {
        imageUrl: '/projects/quicklaw_preview.png',
        name: 'Quicklaw',
        categories: ['Webflow', 'UI Development'],
        liveSite: 'https://quicklaw.webflow.io/'
    },
    {
        imageUrl: '/projects/lytup_preview.png',
        name: 'Lytup',
        categories: ['Webflow', 'UI Development', 'Frontend Development'],
        liveSite: 'https://www.lytup.co/'
    },
    {
        imageUrl: '/projects/ecolabz_preview.png',
        name: 'Ecolabz',
        categories: ['Webflow', 'UI Development'],
        liveSite: 'https://ecolabz.webflow.io/'
    },
    {
        imageUrl: '/projects/fyree-mag_preview.png',
        name: 'Fyree Mag',
        categories: ['Webflow', 'UI Development'],
        liveSite: 'https://fyrre-mag.webflow.io/'
    },
    {
        imageUrl: '/projects/hayes-valley_preview.png',
        name: 'Hayes Valley',
        categories: ['Webflow', 'UI Development'],
        liveSite: 'https://hayes-kamsiyonna.webflow.io/'
    },
    {
        imageUrl: '/projects/horizon-academy_preview.png',
        name: 'Horizon Academy',
        categories: ['HTML/CSS', 'UI Development'],
        liveSite: 'https://kamsi-yonna.github.io/Horizon-Academy/'
    },
];
</script>

<style scoped></style>
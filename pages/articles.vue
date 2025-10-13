<template>
    <main class="min-h-screen">
        <div class="mb-6">
            <h1 class="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">Articles</h1>
            <p class="mt-6 text-base text-gray-600 dark:text-gray-400">
                {{ description }}
            </p>

            <div v-for="(project, id) in displayedProjects" :key="id">
                <NuxtLink class="flex items-end gap-4 group p-2 -m-2 mt-8 rounded-lg" external target="_blank"
                    :to="project.url">
                    <div class="max-w-sm">
                        <h3 class="text-sm">{{ project.name }}</h3>
                        <p class="text-gray-400 text-sm">{{ project.description }}</p>
                    </div>

                    <div
                        class="flex-1 border-b border-dashed border-gray-300 dark:border-gray-800 group-hover:border-gray-700">
                    </div>
                    <UAvatar :alt="project.name" size="md" :src="project.thumbnail"
                        :ui="{ rounded: 'rounded z-10 relative' }" />
                </NuxtLink>
            </div>

            <div
                class="flex justify-center items-center my-24 space-y-1 sm:flex grid grid-cols-1 gap-3 text-gray-900 dark:text-gray-400">
                <NuxtLink class="flex items-end gap-8 p-4 border border-gray-800 rounded-xl hover:border-primary"
                    to="/projects">
                    <span class="text-sm">
                        That's all for now, check out my projects </span>
                    <Icon class="w-6 h-6" name="solar:folder-with-files-outline"></Icon>
                </NuxtLink>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
const description =
    'Explore a diverse collection of articles pertaining to my career insights, programming expertise, and life as I perceive it.'

useSeoMeta({
    title: 'Articles | Kamsiyonna',
    description
})

interface Projects {
    name: string
    // description: string
    thumbnail: string
    status: string
    url: string
}

const displayedProjects = computed(() => {
    return projects.value.slice(0)
})

const projects = ref<Projects[]>([
    {
        name: 'From Blueprints to Bugs: How This Architect Became A Software Engineer.',
        url: 'https://wearecheck.co/thoughts/from-blueprints-to-bugs',
        thumbnail: '/projects/check-utils.png',
        status: 'Active'
    },
    {
        name: 'Nuxt Configuration — A personal approach to configuring my Nuxt projects.',
        url: 'https://medium.com/@etiobikamsi/nuxt-configuration-a-personal-approach-to-configuring-my-nuxt-projects-8ce35f20dd45',
        thumbnail: '/projects/medium-logo.jpeg',
        status: 'Active'
    }
])
</script>
<template>
    <main class="min-h-screen">
        <div class="mb-6">
            <h1 class="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">Lab</h1>
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
                        That's all for now, head over to my project page
                    </span>
                    <Icon class="w-6 h-6" name="solar:folder-with-files-outline"></Icon>
                </NuxtLink>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
const description =
    'Explore my Lab – a creative space for experimental UI integrations, playful API exploration, and various raw projects. These works showcase my personal exploration and passion for innovation in a casual, unpolished form.'

useSeoMeta({
    title: 'Lab | Kamsiyonna',
    description
})

interface Projects {
    name: string
    description: string
    thumbnail: string
    status: string
    url: string
}

const displayedProjects = computed(() => {
    return projects.value.slice(0)
})

const projects = ref<Projects[]>([
    {
        name: 'Guess King',
        url: 'https://guessking.netlify.app/',
        description: "I'm thinking of a number between 1 and 20.Can you guess the number?",
        thumbnail: '/projects/pig.png',
        status: 'Active'
    },
    {
        name: 'Numbre',
        url: 'https://kamsi-yonna.github.io/Numbre/',
        description: 'The goal is to reach a winning score by rolling the dice.',
        thumbnail: '/projects/game_die.png',
        status: 'Active'
    },
    {
        name: 'Gitfinder',
        url: 'https://git-reveal.netlify.app/',
        description: "Leveraging github's API, search a username and see their first commit.",
        thumbnail: '/projects/gitfinder.png',
        status: 'Active'
    },
    {
        name: 'Reciply',
        url: 'https://kam-recipe.netlify.app/',
        description: 'A recipe app developed showcasing advanced fetching methods. (inspired by Daniel Roe)',
        thumbnail: '/projects/recipe.png',
        status: 'Active'
    }
])
</script>

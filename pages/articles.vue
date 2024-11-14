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

            <div class="search-box mt-4">
                <div class="w-full md:w-3/5 mx-auto flex items-center gap-2 p-8">
                    <UAlert :avatar="{
                        src: 'https://media.giphy.com/media/NXOF5rlaSXdAc/giphy.gif',
                        size: '2xl',
                        base: 'flex-shrink-0 self-center'
                    }" :description="noArticlesFound" title="Oops! still in prog.." variant="solid" />
                </div>
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
</script>
<template>
    <div>
        <h2 class="uppercase text-xs font-semibold text-gray-900 dark:text-gray-400 mb-4 sm:mb-2">FIND ME ON</h2>
        <div class="space-y-1 sm:flex grid grid-cols-1 gap-3 text-gray-900 dark:text-gray-400">
            <NuxtLink v-for="link in socialLinks" :key="link.icon"
                class="flex items-end gap-2 p-4 border border-gray-800 rounded-xl hover:border-primary hover:text-primary"
                external target="_blank" :to="link.url">
                <span class="text-sm">
                    {{ link.name }}
                </span>
                <Icon class="w-6 h-6" :name="link.icon"></Icon>
            </NuxtLink>
        </div>
    </div>
</template>

<script lang="ts" setup>
const socialLinks = [
    {
        name: 'Twitter',
        url: 'https://twitter.com/kamsi_yonna',
        icon: 'mdi:twitter'
    },
    {
        name: 'GitHub',
        url: 'https://github.com/kamsi-yonna',
        icon: 'mdi:github'
    },
    {
        name: 'Instagram',
        url: 'https://www.instagram.com/kamsi.yonna/',
        icon: 'mdi:instagram'
    },
    {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/1kamsiyonna/',
        icon: 'mdi:linkedin'
    },
    {
        name: 'Youtube',
        url: 'https://www.youtube.com/@kamsi_yonna',
        icon: 'mdi:youtube'
    }
]
</script>

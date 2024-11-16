<template>
    <div>
        <h2 class="uppercase text-xs font-semibold text-gray-900 dark:text-gray-400 mb-4 sm:mb-2">MY STACK INCLUDES</h2>
        <div class="grid grid-cols-1 gap-3 text-gray-900 dark:text-gray-400">
            <div class="cursor-default grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div v-for="(link, index) in stacks" :key="link.icon"
                    class="flex items-center gap-4 p-4 border border-gray-800 rounded-xl justify-between hover:border-primary hover:text-primary"
                    external target="_blank" :to="link.url">
                    <span class="text-sm">{{ link.name }}</span>
                    <Icon class="w-6 h-6" :name="link.icon"></Icon>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const stacks = [
    {
        name: 'Webflow',
        icon: 'simple-icons:webflow'
    },
    {
        name: 'Nuxt',
        icon: 'mdi:nuxt'
    },
    {
        name: 'Vue.js',
        icon: 'mdi:vuejs'
    },
    {
        name: 'JavaScript',
        icon: 'mdi-language-javascript'
    },
    {
        name: 'TypeScript',
        icon: 'mdi:language-typescript'
    },
    {
        name: 'Tailwind',
        icon: 'mdi:tailwind'
    },
    {
        name: 'Supabase',
        icon: 'tabler:brand-supabase'
    }
];
</script>

<style scoped>
/* Optional styling to enhance the layout */
.grid-cols-4>div:nth-child(n+5) {
    grid-column: span 2;
    /* Adjust column span for items after the fourth */
}
</style>
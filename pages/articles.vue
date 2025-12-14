<template>
  <main class="min-h-screen">
    <div class="mb-6">
      <h1
        class="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100"
      >
        Articles
      </h1>
      <p class="mt-6 text-base text-gray-600 dark:text-gray-400">
        {{ description }}
      </p>

      <div v-for="(project, id) in displayedProjects" :key="id">
        <NuxtLink
          class="flex items-end gap-4 group p-2 -m-2 mt-8 rounded-lg"
          external
          target="_blank"
          :to="project.url"
        >
          <div class="max-w-sm">
            <h3 class="text-sm">{{ project.name }}</h3>
            <p class="text-gray-400 text-sm">{{ project.description }}</p>
          </div>

          <div
            class="flex-1 border-b border-dashed border-gray-300 dark:border-gray-800 group-hover:border-gray-700"
          ></div>
          <UAvatar
            :alt="project.name"
            size="md"
            :src="getFavicon(project.url)"
          />
        </NuxtLink>
      </div>

      <div
        class="flex justify-center items-center my-24 space-y-1 sm:flex grid grid-cols-1 gap-3 text-gray-900 dark:text-gray-400"
      >
        <NuxtLink
          class="flex items-end gap-8 p-4 border border-gray-800 rounded-xl hover:border-primary"
          to="/projects"
        >
          <span class="text-sm">
            That's all for now, check out my projects
          </span>
          <Icon class="w-6 h-6" name="solar:folder-with-files-outline"></Icon>
        </NuxtLink>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
const description =
  "Explore a diverse collection of articles pertaining to my career insights, programming expertise, and life as I perceive it.";

useSeoMeta({
  title: "Articles | Kamsiyonna",
  description,
});

interface Project {
  name: string;
  status: string;
  url: string;
}

const projects = ref<Project[]>([
  {
    name: "From Blueprints to Bugs: How This Architect Became A Software Engineer.",
    url: "https://wearecheck.co/thoughts/from-blueprints-to-bugs",
    status: "Active",
  },
  {
    name: "Nuxt Configuration — A personal approach to configuring my Nuxt projects.",
    url: "https://medium.com/@etiobikamsi/nuxt-configuration-a-personal-approach-to-configuring-my-nuxt-projects-8ce35f20dd45",
    status: "Active",
  },
  {
    name: "The designers way of seeing test.",
    url: "https://onvisualmatters.substack.com/p/the-quiet-work-of-seeing?utm_campaign=post-expanded-share&utm_medium=web&utm_source=ig&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnYR2bFj3Hw2p8E0gqquKennhJX2GbVvv1lspTBvSGNdEWfAV0HCtpzgHfRU0_aem_MmolaVcYefgbxLN33ya18Q&triedRedirect=true",
    status: "Active",
  },
  {
    name: "The designers way of seeing test .",
    url: "https://medium.com/age-of-empathy/the-cure-for-apathy-is-action-a-gardeners-view-of-a-warming-world-7d667aad0fa0",
    status: "Active",
  },
  {
    name: "The designers way of seeing test .",
    url: "https://substack.com/home/post/p-181348169",
    status: "Active",
  },
]);

const displayedProjects = computed(() => projects.value);

const getFavicon = (url: string) => {
  try {
    const domain = new URL(url).hostname;
    return `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
  } catch {
    return "/projects/default-icon.png";
  }
};
</script>

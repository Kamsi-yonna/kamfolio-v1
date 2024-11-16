<template>
    <div class="space-y-6">
        <UTooltip :popper="{ placement: 'right', arrow: 'true' }" text="Myself">
            <img alt="Kamsiyonna Etiobi"
                class="ring-2 border ring-gray-200 border-gray-300 dark:ring-white/10 dark:border-gray-800 hover:ring-4 transition-all duration-300 bg-gray-200 dark:bg-gray-900 rounded-full h-24 w-24 sm:h-24 sm:w-24 object-cover"
                format="webp" placeholder sizes="48px sm:64px" src="/images/profile.jpg" />
        </UTooltip>
        <h1 class="text-xl font-bold tracking-tight text-gray-800 dark:text-gray-100">Hey there!</h1>
        <p class="text-gray-900 dark:text-gray-400 font-light">
            My name is
            <span class="text-primary dark:text-blue animate-pulse">Kamsiyonna</span>
            , a self-motivated & curious developer based in the vibrant city of Lagos, Nigeria.
        </p>
        <p class="text-gray-900 dark:text-gray-400">
            I specialize in creating interesting interfaces and building solutions that are not only functional but also
            enhance user experiences. My goal is to contribute to projects that make a difference and collaborate with
            others to discover innovative approaches to problem-solving.
        </p>
        <p class="text-gray-900 dark:text-gray-400">
            My work is guided by a commitment to user-centered design, where the needs and experiences of users are
            always the top priority. I believe in continuous innovation to stay ahead of trends, fostering collaboration
            to create impactful solutions, and embracing agility to navigate challenges effectively.
        </p>
        <p class="text-gray-900 dark:text-gray-400">
            Outside of programming, I dabble in
            <a class="underline text-primary dark:text-blue" href="https://wearecheck.co/" target="_blank">
                architecture and interior design.<br>
            </a>I enjoy reading, swimming, playing card games, and listening to
            music. I also have a
            penchant for learning random things, which keeps my curiosity alive and fuels my creativity.
        </p>
    </div>
</template>

<script setup></script>
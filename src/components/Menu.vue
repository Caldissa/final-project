<template>
    <div
        class="w-full h-full p-4 md:p-6 flex flex-col gap-4 md:gap-6 border-r-2 bg-primary dark:bg-white/15 border-black/50 dark:border-white/50 text-primary dark:text-white"
    >
        <RouterLink
            to="/"
            class="bg-white dark:bg-primary shadow-lg rounded-full px-3 py-1 justify-between"
        >
            <i class="i-mdi:home w-6 h-6"></i>
            Home
        </RouterLink>
        <RouterLink
            to="/profile"
            class="bg-white dark:bg-primary shadow-lg rounded-full px-3 py-1 text-left"
        >
            <i class="i-mdi:person w-6 h-6"></i>
            Profile
        </RouterLink>
        <a
            href="https://www.prepsportswear.com/college/us/texas/keene/southwestern-adventist-university-knights?schoolid=2062798"
            class="bg-white dark:bg-primary shadow-lg rounded-full px-3 py-1"
        >
            <button class="text-left justify-between">
                <i class="i-mdi:cart w-6 h-6"></i>
                Shop
            </button>
        </a>
        <button
            class="bg-white dark:bg-primary shadow-lg rounded-full px-3 py-1 text-left justify-between"
        >
            <i class="i-mdi:plus w-6 h-6"></i>
            Post
        </button>
        <button
            class="bg-white dark:bg-primary shadow-lg rounded-full px-3 py-1 text-left justify-between"
        >
            <i class="i-mdi:logout w-6 h-6"></i>
            Logout
        </button>
    </div>
</template>

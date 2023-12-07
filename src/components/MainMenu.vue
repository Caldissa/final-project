<template>
    <div class="h-full w-40 p-4 md:p-6 flex flex-col gap-4 md:gap-6">
        <RouterLink
            to="/"
            class="bg-blue-500 text-white rounded-full px-3 justify-between"
            >Home
            <i class="i-mdi:home"></i>
        </RouterLink>
        <RouterLink
            to="/profile"
            class="bg-blue-500 text-white rounded-full px-3 text-left"
        >
            Profile
        </RouterLink>
        <a
            href="https://www.prepsportswear.com/college/us/texas/keene/southwestern-adventist-university-knights?schoolid=2062798"
            class="bg-blue-500 text-white rounded-full px-3"
        >
            <button class="text-left justify-between">
                Shop <i class="i-mdi:cart"></i>
            </button>
        </a>
        <button
            class="bg-blue-500 text-white rounded-full px-3 text-left justify-between"
        >
            Post
            <i class="i-mdi:plus"></i>
        </button>
        <button
            class="!bg-blue-500 text-white rounded-full px-3 text-left justify-between"
        >
            Logout
        </button>
    </div>
</template>

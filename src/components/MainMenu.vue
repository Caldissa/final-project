<template>
    <div class="h-full w-40 p-4 md:p-6 flex flex-col gap-4 md:gap-6">
        <RouterLink
            to="/"
            class="bg-blue-500 text-white rounded-full px-3 py-1 justify-between"
        >
            <i class="i-mdi:home"></i>
            Home
        </RouterLink>
        <RouterLink
            to="/profile"
            class="bg-blue-500 text-white rounded-full px-3 py-1 text-left"
        >
            <i class="i-mdi:profile"></i>
            Profile
        </RouterLink>
        <a
            href="https://www.prepsportswear.com/college/us/texas/keene/southwestern-adventist-university-knights?schoolid=2062798"
            class="bg-blue-500 text-white rounded-full px-3 py-1"
        >
            <button class="text-left justify-between">
                <i class="i-mdi:cart"></i>
                Shop
            </button>
        </a>
        <button
            class="bg-blue-500 text-white rounded-full px-3 py-1 text-left justify-between"
        >
            <i class="i-mdi:plus"></i>
            Post
        </button>
        <button
            class="!bg-blue-500 text-white rounded-full px-3 py-1 text-left justify-between"
        >
            <i class="i-mdi:logout"></i>
            Logout
        </button>
    </div>
</template>

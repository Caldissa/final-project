<template>
    <div class="h-full w-32 p-4 md:p-6 flex flex-col gap-4 md:gap-6">
        <RouterLink to="/" class="bg-blue-500 text-white rounded-full px-3"
            >Home</RouterLink
        >
        <RouterLink
            to="/profile"
            class="bg-blue-500 text-white rounded-full px-3 text-left"
        >
            Profile
        </RouterLink>
        <button class="bg-blue-500 text-white rounded-full px-3 text-left">
            Shop
        </button>
        <button class="bg-blue-500 text-white rounded-full px-3 text-left">
            Post
        </button>
        <button class="!bg-blue-500 text-white rounded-full px-3 text-left">
            Logout
        </button>
    </div>
</template>

<template>
    <div class="h-full p-4 md:p-6 flex flex-col gap-4 md:gap-6">
        <button class="bg-blue-500 text-white rounded-full px-3">Home</button>
        <RouterLink
            to="/profile"
            class="bg-blue-500 text-white rounded-full px-3"
        >
            Profile
        </RouterLink>
        <button class="bg-blue-500 text-white rounded-full px-3">Shop</button>
        <button class="bg-blue-500 text-white rounded-full px-3">Post</button>
        <button class="!bg-blue-500 text-white rounded-full px-3">
            Logout
        </button>
    </div>
</template>

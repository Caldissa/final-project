<template>
    <div class="h-full w-full pt-24">
        <div class="flex flex-row">
            <div class="h-full p-4 md:p-6 flex flex-col gap-4 md:gap-6">
                <button class="bg-blue-500 text-white rounded-full px-3">
                    Home
                </button>
                <button class="bg-blue-500 text-white rounded-full px-3">
                    Profile
                </button>
                <button class="bg-blue-500 text-white rounded-full px-3">
                    Shop
                </button>
                <button class="bg-blue-500 text-white rounded-full px-3">
                    Post
                </button>
                <button class="!bg-blue-500 text-white rounded-full px-3">
                    Logout
                </button>
            </div>
            <div
                class="w-full mx-auto max-w-prose h-full p-4 md:p-6 flex flex-col gap-4 md:gap-6"
            >
                <Post /><Post />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Post from '../components/Post.vue'
</script>

<template>
    <div class="h-full w-full pt-24">
        <div class="flex flex-row">
            <div>
                <Menu></Menu>
            </div>
            <div
                class="w-full mx-auto max-w-prose h-full p-4 md:p-6 flex flex-col gap-4 md:gap-6"
            >
                <Post /><Post />
            </div>
            <div>
                <Activity></Activity>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Post from '../components/Post.vue'
import Menu from '../components/MainMenu.vue'
import Activity from '../components/Activity.vue'
</script>

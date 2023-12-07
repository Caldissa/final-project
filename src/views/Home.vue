<template>
    <div class="h-full w-full pt-24">
        <div class="flex flex-row h-full">
            <div>
                <Menu />
            </div>
            <div
                class="w-full mx-auto max-w-prose h-full p-4 md:p-6 flex flex-col gap-4 md:gap-6"
            >
                <Post /><Post />
            </div>
            <div>
                <Activity />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// import { createPost } from '../firebase'
import Post from '../components/Post.vue'
import Menu from '../components/MainMenu.vue'

const create = async () => {
    let post = {
        id: 'test-post',
        content: 'hello Isaac'
    }
    await createUser(post)
}
import Activity from '../components/Activity.vue'
</script>

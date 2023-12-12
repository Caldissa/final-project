<template>
    <div
        class="w-full flex flex-col border dark:text-white dark:border-white/30 dark:bg-white/10 rounded-lg p-4"
    >
        <h2 class="text-xl">POST TITLE {{ post.email }}</h2>
        <hr class="border border-white my-2" />
        <p v-if="post.content">
            {{ post.content }}
        </p>
        <div class="text-xs py-2">
            {{ dayjs(post.timestamp).format('YYYY-MM-DD hh:mm:ss A') }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { Post } from '../models'
import dayjs from 'dayjs'

defineProps<{
    post: Post
}>()
</script>

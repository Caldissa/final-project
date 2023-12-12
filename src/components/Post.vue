<!--- could redesign post with text area outline -->
<template>
    <div
        class="w-full flex flex-col border dark:text-white dark:border-white/30 dark:bg-white/10 rounded-lg p-4"
    >
        <h2 class="text-xl">{{ post.name }} says...</h2>
        <div class="p-2"></div>
        <p v-if="post.content" class="border border-1 p-3 rounded-md">
            {{ post.content }}
        </p>
        <div class="text-xs py-2 text-right">
            <p v-if="now === dayjs(post.timestamp).format('MM-DD-YYYY')">
                {{ dayjs(post.timestamp).format('hh:mm A') }}
            </p>
            <p v-else>{{ dayjs(post.timestamp).format('MM-DD-YYYY') }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Post } from '../models'
import dayjs from 'dayjs'
const now = dayjs().format('MM-DD-YYYY')

defineProps<{
    post: Post
}>()

//could add pfp too
</script>

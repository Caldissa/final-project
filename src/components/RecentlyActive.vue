<template>
    <div
        class="w-full flex flex-col bg-white text-primary border dark:text-white dark:border-white/30 dark:bg-white/10 rounded-lg p-1 px-3 text-left text-xl align-middle"
    >
        <div>{{ user.firstName }} {{ user.lastName }}</div>
        <div class="text-xs text-right align-bottom">
            <p v-if="now === dayjs(user.timestamp).format('MM-DD-YYYY')">
                {{ dayjs(user.timestamp).format('hh:mm A') }}
            </p>
            <p v-else>{{ dayjs(user.timestamp).format('MM-DD-YYYY') }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { User } from '../models'
import dayjs from 'dayjs'
const now = dayjs().format('MM-DD-YYYY')

defineProps<{
    user: User
}>()
//add profile picture
</script>

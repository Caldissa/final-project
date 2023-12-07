<template>
    <div class="h-full w-full pt-24">
        <div class="flex flex-row h-full">
            <div>
                <Menu></Menu>
            </div>
            <div
                class="text-white w-full mx-auto max-w-prose h-full p-4 md:p-6 flex flex-col gap-4 md:gap-6"
            >
                <div class="flex flex-row w-full justify-between py-5">
                    <p>{username}</p>
                    <button
                        class="bg-white/15 text-white rounded-full px-3 py-1"
                    >
                        Edit Profile <i class="i-mdi:settings w-6 h-6"></i>
                    </button>
                </div>
                <div class="text-right py-5">{user Info}</div>
                <div
                    class="w-full mx-auto text-center border-b-2 border-white/15"
                >
                    Posts
                </div>
                <div class=""></div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import Menu from '../components/MainMenu.vue'
</script>

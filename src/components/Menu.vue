<template>
    <div
        class="w-full h-full p-4 md:p-6 flex flex-col gap-4 md:gap-6 border-r-2 bg-primary dark:bg-white/15 border-black/50 dark:border-white/50 text-primary dark:text-white"
    >
        <RouterLink
            to="/"
            class="bg-white dark:bg-primary shadow-lg rounded-full px-3 py-1 justify-between"
        >
            <i class="i-mdi:home w-6 h-6"></i>
            Home
        </RouterLink>
        <RouterLink
            to="/profile"
            class="bg-white dark:bg-primary shadow-lg rounded-full px-3 py-1 text-left"
        >
            <i class="i-mdi:person w-6 h-6"></i>
            Profile
        </RouterLink>
        <a
            href="https://www.prepsportswear.com/college/us/texas/keene/southwestern-adventist-university-knights?schoolid=2062798"
            target="_blank"
            class="bg-white dark:bg-primary shadow-lg rounded-full px-3 py-1"
        >
            <button class="text-left justify-between">
                <i class="i-mdi:cart w-6 h-6"></i>
                Shop
            </button>
        </a>
        <button
            class="bg-white dark:bg-primary shadow-lg rounded-full px-3 py-1 text-left justify-between"
            @click="open = true"
        >
            <i class="i-mdi:plus w-6 h-6"></i>
            Post
        </button>
        <Teleport to="body">
            <div v-if="open" class="modal w-full justify justify-center">
                <p class="text-center text-white">Hello from the modal!</p>
                <div class="w-full flex flex-col justify-between">
                    <div class="justify-center"><input /></div>
                </div>
                <div class="w-full justify-center flex">
                    <button
                        class="bg-white dark:bg-primary shadow-lg rounded-full px-3 py-1 text-left justify-between text-primary dark:text-white"
                        @click="open = false"
                    >
                        Close
                    </button>
                    <button
                        class="bg-white dark:bg-primary shadow-lg rounded-full px-3 py-1 text-left justify-between text-primary dark:text-white"
                        @click="open = false"
                    >
                        Post
                    </button>
                </div>
            </div>
        </Teleport>
        <button
            class="bg-white dark:bg-primary shadow-lg rounded-full px-3 py-1 text-left justify-between"
        >
            <i class="i-mdi:logout w-6 h-6"></i>
            Logout
        </button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const open = ref(false)

const post = ref<PostType>({
    content: '',
    media: '',
    userId: '',
    timestamp: ''
})
</script>

<style scoped>
.modal {
    position: fixed;
    z-index: 999;
    top: 0%;
    left: 0%;
    width: 100vw;
    height: 100vh;
    background-color: rgb(54, 54, 54);
}
</style>
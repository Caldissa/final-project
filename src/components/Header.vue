<template>
    <header
        class="md:hidden absolute z-20 shadow-lg top-0 w-full h-20 bg-primary p-4 md:px-8 flex justify-between items-center"
    >
        <div class="flex w-full items-end gap-1">
            <h1 class="text-4xl title dark:text-white tracking-tight">
                SWAU·Says
            </h1>
            <div class="mb-3">
                <i class="i-simple-line-icons:bubble text-white h-7 w-7"></i>
            </div>
        </div>
        <button @click="toggleMenu">
            <i class="i-mdi:menu text-white h-8 w-8 sm:h-10 sm:w-10"></i>
        </button>
        <div
            id="hamburger"
            class="hidden md:hidden absolute w-[50vw] z-20 top-[100%] right-0"
        >
            <div
                class="ml-auto rounded-bl-md bg-black border-l-2 border-b-2 border-white/50"
            >
                <Menu />
            </div>
        </div>
    </header>
    <div
        v-if="open"
        id="bg-shade"
        class="absolute top-0 w-full right-0 h-100vh bg-black/70 w-full h-full"
    ></div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import Menu from './Menu.vue'
import SlideUp from '../composables/slideUp'
import SlideDown from '../composables/slideDown'

const open = ref(false)

const toggleMenu = () => {
    const ham = document.getElementById('hamburger')
    if (ham) {
        console.log('found')

        if (open.value) {
            SlideUp(ham, 'flex')
            open.value = false
        } else {
            SlideDown(ham, 'flex')
            open.value = true
        }
    } else {
        console.log('lost')
    }
}
</script>

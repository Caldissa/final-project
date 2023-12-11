<template>
    <div class="min-h-screen grid grid-rows-[minmax(0,1fr)_auto] w-full">
        <Header />
        <div class="h-full w-full pt-22 md:pt-0">
            <RouterView />
        </div>
    </div>
</template>

<script setup lang="ts">
import Header from './components/Header.vue'
</script>

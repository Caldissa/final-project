<template>
    <div class="min-h-screen grid grid-rows-[minmax(0,1fr)_auto] w-full">
        <Header />
        <RouterView />
    </div>
</template>

<script setup lang="ts">
import Header from './components/Header.vue'
</script>

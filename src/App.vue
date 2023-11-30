<template>
    <div class="min-h-screen grid grid-rows-[minmax(0,1fr)_auto] w-full">
        <Header />
        <RouterView />
        <Footer />
    </div>
</template>

<script setup lang="ts">
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

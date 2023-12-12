<template>
    <div
        class="h-screen overflow-y-hidden grid grid-rows-[minmax(0,1fr)_auto] w-full"
    >
        <Header />
        <div class="h-full w-full pt-20 md:pt-0">
            <div
                class="grid md:grid-cols-[1fr_3fr] lg:grid-cols-[1fr_4fr_1fr] w-full h-full"
            >
                <div class="hidden md:flex">
                    <Menu />
                </div>
                <div class="w-full flex mx-auto overflow-y-scroll">
                    <div
                        class="w-full mx-auto max-w-prose h-full md:px-6 md:py-2 xl:py-4 flex flex-col gap-4 md:gap-6"
                    >
                        <Title />
                        <div class="p-4">
                            <RouterView />
                        </div>
                    </div>
                </div>
                <div class="hidden lg:flex">
                    <Activity />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Header from './components/Header.vue'
import Title from './components/Title.vue'
import Menu from './components/Menu.vue'
import Activity from './components/Activity.vue'
</script>

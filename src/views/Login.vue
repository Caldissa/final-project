<!-- need to add signup stuff and format; make sure mobile is good -->
<template>
    <div class="grid gap-4">
        <div
            class="flex w-full text-primary dark:text-white justify-center items-end border-b-4 border-black dark:border-primary pb-4 gap-1"
        >
            <h1 class="text-6xl title tracking-tight">SWAU·Says</h1>
            <div class="mb-4">
                <i
                    class="i-simple-line-icons:bubble h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12"
                ></i>
            </div>
        </div>
        <input v-model="email" type="text" placeholder="email" />
        <input v-model="password" type="password" placeholder="password" />
        <button
            class="bg-primary rounded-lg hover:bg-primary-light mx-auto py-2 px-4 text-white transition duration-200 ease-in-out"
            @click="login"
        >
            Login
        </button>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import dayjs from 'dayjs'

const router = useRouter()
const email = ref('')
const password = ref('')

const login = async () => {
    sessionStorage.setItem('ss_email', email.value)
    sessionStorage.setItem('ss_date', dayjs().format())
    router.push('/')
}
</script>

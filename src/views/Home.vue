<template>
    <div
        class="grid md:grid-cols-[1fr_3fr] lg:grid-cols-[1fr_4fr_1fr] w-full h-full"
    >
        <div class="hidden md:flex">
            <Menu />
        </div>
        <div class="w-full flex mx-auto">
            <div
                class="w-full mx-auto max-w-prose h-full p-4 md:px-6 md:py-2 xl:py-4 flex flex-col gap-4 md:gap-6"
            >
                <div
                    class="hidden md:flex w-full text-primary dark:text-white justify-center items-end border-b-4 border-black dark:border-primary pb-4 gap-1"
                >
                    <h1 class="text-6xl title tracking-tight">SWAU·Says</h1>
                    <div class="mb-4">
                        <i
                            class="i-simple-line-icons:bubble h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12"
                        ></i>
                    </div>
                </div>
                <Post /><Post />
                <button @click="create">Create User</button>
            </div>
        </div>
        <div class="hidden lg:flex">
            <Activity />
        </div>
    </div>
</template>

<script setup lang="ts">
import Post from '../components/Post.vue'
import Menu from '../components/Menu.vue'
import Activity from '../components/Activity.vue'
import { Post as PostType } from '../models'
import { ref } from 'vue'

// the relevant methods
import { collection, addDoc } from 'firebase/firestore'
// the firestore instance
import { db } from '../firebase/init.ts'
import dayjs from 'dayjs'

const post = ref<PostType>({
    content: '',
    media: '',
    userId: '',
    timestamp: ''
})

const create = async () => {
    const colRef = collection(db, 'posts')
    const dataObj = {
        content: "Hi, Isaac. You're late",
        user: 'kaylaanderson',
        dateCreated: dayjs().format()
    }

    // create document and return reference to it
    const docRef = await addDoc(colRef, dataObj)

    // access auto-generated ID with '.id'
    console.log('Document was created with ID:', docRef.id)
}
</script>

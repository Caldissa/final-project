<template>
    <div class="h-full w-full pt-24">
        <div class="flex flex-row h-full">
            <div>
                <Menu />
            </div>
            <div
                class="w-full mx-auto max-w-prose h-full p-4 md:p-6 flex flex-col gap-4 md:gap-6"
            >
                <Post /><Post />
                <button @click="create">Create User</button>
            </div>
            <div>
                <Activity />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Post from '../components/Post.vue'
import Menu from '../components/MainMenu.vue'
import Activity from '../components/Activity.vue'

// the relevant methods
import { collection, addDoc } from 'firebase/firestore'
// the firestore instance
import { db } from '../firebase/init.ts'
import dayjs from 'dayjs'

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

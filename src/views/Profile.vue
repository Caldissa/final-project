<template>
    <div
        class="text-white w-full mx-auto max-w-prose h-full p-4 md:p-6 flex flex-col gap-4 md:gap-6"
    >
        <div class="flex flex-row w-full justify-between py-5">
            <div>{{ fName }} {{ lName }}</div>
            <div>{{ email }}</div>
            <!-- <button class="bg-white/15 text-white rounded-full px-3 py-1">
                Edit Profile <i class="i-mdi:settings w-6 h-6"></i>
            </button> -->
        </div>
        <!-- <div class="text-right py-5">{user Info}</div> -->
        <div class="w-full mx-auto text-center border-b-2 border-white/15">
            Posts
        </div>
        <div class="">
            <Post v-for="post in posts" :key="post.timestamp" :post="post" />
        </div>
    </div>
</template>
<script setup lang="ts">
import Post from '../components/Post.vue'
import { Post as PostType } from '../models'
import { onMounted, ref } from 'vue'
import { collection, query, getDocs, where, orderBy } from 'firebase/firestore'
import { db } from '../firebase/init.ts'

const posts = ref<PostType[]>([])

// const email = sessionStorage.getItem('ss_email')
const fName = ref('')
const lName = ref('')
const email = ref('jswena@swau.edu')

const getUser = async () => {
    const q = query(
        collection(db, 'users'),
        where('email', '==', sessionStorage.getItem('ss_email'))
    )

    // const q = query(
    //     collection(db, 'users'),
    //     where('email', '==', sessionStorage.getItem('ss_email'))
    // )

    const querySnapshot = await getDocs(q)

    const doc = querySnapshot.docs.pop()
    fName.value = doc?.get('firstName')
    lName.value = doc?.get('lastName')
    email.value = doc?.get('email')
}

const getPosts = async () => {
    const q = query(
        collection(db, 'posts'),
        where('email', '==', sessionStorage.getItem('ss_email')),
        // orderBy('timestamp', 'desc')
    )

    const querySnapshot = await getDocs(q)

    querySnapshot.forEach((doc) => {
        posts.value.push(doc.data() as PostType)
    })
}

onMounted(() => {
    getUser()
    getPosts()
})
</script>

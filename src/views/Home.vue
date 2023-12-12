<!-- remove get post; clean up formatting on posts; make sure mobile is good -->
<template>
    <div class="grid gap-4">
        <Post v-for="post in posts" :key="post.timestamp" :post="post" />
    </div>
</template>

<script setup lang="ts">
import Post from '../components/Post.vue'
import { Post as PostType } from '../models'
import { onMounted, ref } from 'vue'
import { collection, query, getDocs, orderBy } from 'firebase/firestore'
import { db } from '../firebase/init.ts'

const posts = ref<PostType[]>([])

const get = async () => {
    const q = query(collection(db, 'posts'), orderBy('timestamp', 'desc'))

    const querySnapshot = await getDocs(q)

    querySnapshot.forEach((doc) => {
        posts.value.push(doc.data() as PostType)
    })
}

onMounted(() => {
    get()
})
</script>

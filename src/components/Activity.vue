<template>
    <div
        class="bg-primary dark:bg-white/15 text-white w-full h-full border-l-2 border-transparent dark:border-white/50"
    >
        <div
            class="p-4 text-2xl text-center border-b-2 border-white/40 bg-primary"
        >
            <p>Recently Active</p>
        </div>
        <div class="p-4 md:p-6 flex flex-col gap-4 md:gap-6">
            <User v-for="user in users" :key="user.timestamp" :user="user" />
        </div>
    </div>
</template>
<script setup lang="ts">
import User from '../components/RecentlyActive.vue'
import { onMounted, ref } from 'vue'
import { collection, query, getDocs, orderBy } from 'firebase/firestore'
import { db } from '../firebase/init.ts'
import { User as UserType } from '../models'
const users = ref<UserType[]>([])

const get = async () => {
    const q = query(collection(db, 'users'), orderBy('timestamp', 'desc'))

    const querySnapshot = await getDocs(q)

    querySnapshot.forEach((doc) => {
        console.log(doc.id, ' => ', doc.data())
        users.value.push(doc.data() as UserType)
    })

    console.log('users', users.value)
}

onMounted(() => {
    get()
})
</script>

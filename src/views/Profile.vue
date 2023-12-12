<template>
    <div
        class="text-white w-full mx-auto max-w-prose h-full p-4 md:p-6 flex flex-col gap-4 md:gap-6"
    >
        <div
            class="flex flex-row w-full justify-between py-5 text-3xl text-primary dark:text-white"
        >
            <div>{{ fName }} {{ lName }}</div>
            <!-- <div>{{ email }}</div> -->
        </div>
        <div class="relative w-full">
            <div
                class="flex flex-col text-xl text-black shadow-md shadow-primary dark:shadow-sm dark:shadow-white dark:text-white dark:bg-white/10 rounded-lg m-1"
            >
                <Bio />
            </div>
            <div class="absolute -top-3 -right-3">
                <button
                    class="bg-primary rounded-full dark:bg-primary p-2 items-center justify-center shadow-lg text-sm"
                    @click="open = true"
                >
                    <i class="i-mdi:pencil w-6 h-6 align-middle"></i>
                </button>
            </div>
        </div>
        <div
            class="w-full mx-auto text-center text-black dark:text-white border-b-2 border-black/50 dark:border-white/20"
        >
            Your Activity
        </div>
        <div class="grid gap-4 text-black dark:text-white">
            <Post v-for="post in posts" :key="post.timestamp" :post="post" />
        </div>

        <Teleport to="body">
            <div v-if="open" class="modal flex">
                <div class="bg-black w-min m-auto rounded-md">
                    <div class="bg-white/30 w-min m-auto p-4 rounded-md">
                        <p class="text-center text-white">Bio</p>
                        <div class="flex flex-col justify-center p-5">
                            <div class="justify-center flex">
                                <textarea
                                    id="bio"
                                    v-model="content"
                                    rows="5"
                                    cols="33"
                                    maxlength="150"
                                    placeholder="Tell people about yourself..."
                                    class="text-sm m-2 px-2 py-1 rounded-md"
                                />
                            </div>
                            <p class="pr-2 text-right text-white">
                                {{ content.length }}/150
                            </p>
                        </div>
                        <div
                            class="mx-auto w-full grid grid-cols-2 justify-center"
                        >
                            <button
                                class="bg-white dark:bg-primary shadow-lg rounded-full mx-5 py-1 text-center justify-between text-primary dark:text-white"
                                @click="updateBio(), (open = false)"
                            >
                                Update
                            </button>
                            <button
                                class="bg-white dark:bg-primary shadow-lg rounded-full mx-5 py-1 text-center justify-between text-primary dark:text-white"
                                @click="open = false"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Teleport>
    </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
import Bio from '../components/Bio.vue'
import Post from '../components/Post.vue'
import { Post as PostType } from '../models'
import { onMounted, ref } from 'vue'
import {
    collection,
    query,
    getDocs,
    where,
    setDoc,
    doc
} from 'firebase/firestore'
import { db } from '../firebase/init.ts'
import dayjs from 'dayjs'

const router = useRouter()
const content = ref('')
const posts = ref<PostType[]>([])

// const email = sessionStorage.getItem('ss_email')
const open = ref(false)
const fName = ref('')
const lName = ref('')
const email = ref('')

const updateBio = async () => {
    console.log('called update bio')
    const q = query(
        collection(db, 'users'),
        where('email', '==', sessionStorage.getItem('ss_email'))
    )
    const querySnapshot = await getDocs(q)
    const userDoc = querySnapshot.docs.pop()
    if (userDoc?.exists()) {
        console.log('userdoc', userDoc)
        await setDoc(
            doc(db, 'users', userDoc.id),
            { bio: content.value },
            { merge: true }
        )
        router.go(0)
    } else {
        // console.log('//user yelled at for needing to sign up')
    }
}

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
    // docID.value = doc?.get()
}

const getPosts = async () => {
    const q = query(
        collection(db, 'posts'),
        where('email', '==', sessionStorage.getItem('ss_email'))
    )

    const querySnapshot = await getDocs(q)

    querySnapshot.forEach((doc) => {
        posts.value.push(doc.data() as PostType)
    })

    posts.value.sort((postA, postB) => {
        const timeA = dayjs(postA.timestamp)
        const timeB = dayjs(postB.timestamp)
        if (timeA.isBefore(timeB)) {
            return 1
        } else if (timeA.isAfter(timeB)) {
            return -1
        } else {
            return 0
        }
    })
}

onMounted(() => {
    getUser()
    getPosts()
})
</script>

<style scoped>
.modal {
    position: fixed;
    z-index: 999;
    top: 0%;
    left: 0%;
    width: 100vw;
    height: 100vh;
    background-color: rgba(50, 50, 50, 0.7);
}
</style>

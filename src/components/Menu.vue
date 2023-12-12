<!-- make sure mobile is good -->
<template>
    <div
        class="w-full h-full p-4 md:p-6 flex flex-col gap-4 md:gap-6 md:border-r-2 bg-primary dark:bg-white/15 border-black/50 dark:border-white/50 text-primary dark:text-white"
    >
        <RouterLink to="/" class="buttons">
            <i class="i-mdi:home w-6 h-6"></i>
            <p>Home</p>
        </RouterLink>
        <RouterLink to="/profile" class="buttons">
            <i class="i-mdi:person w-6 h-6"></i>
            <p>Profile</p>
        </RouterLink>
        <a
            href="https://www.prepsportswear.com/college/us/texas/keene/southwestern-adventist-university-knights?schoolid=2062798"
            target="_blank"
            class="buttons"
        >
            <i class="i-mdi:cart w-6 h-6"></i>
            <p>Shop</p>
        </a>
        <button class="buttons" @click="open = true">
            <i class="i-mdi:plus w-6 h-6"></i>
            <p>Post</p>
        </button>
        <button class="buttons" @click="logout()">
            <i class="i-mdi:logout w-6 h-6"></i>
            <p>Logout</p>
        </button>
        <Teleport to="body">
            <div v-if="open" class="modal flex">
                <div class="bg-black w-min m-auto rounded-md">
                    <div class="bg-white/30 w-min m-auto p-4 rounded-md">
                        <p class="text-center text-white">Create Post</p>
                        <div class="flex flex-col justify-center text-end p-5">
                            <div class="justify-center flex">
                                <textarea
                                    id="saying"
                                    v-model="content"
                                    rows="5"
                                    cols="33"
                                    maxlength="500"
                                    placeholder="What's on your mind..."
                                    class="text-sm m-2 px-2 py-1 rounded-md"
                                />
                            </div>
                            <p class="pr-2 text-white">
                                {{ content.length }}/500
                            </p>
                        </div>
                        <div
                            class="mx-auto w-full grid grid-cols-2 justify-center"
                        >
                            <button
                                class="bg-white dark:bg-primary shadow-lg rounded-full mx-5 py-1 text-center justify-between text-primary dark:text-white"
                                @click="create(), (open = false)"
                            >
                                Post
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
import { ref } from 'vue'
import {
    collection,
    addDoc,
    query,
    getDocs,
    where,
    setDoc,
    doc
} from 'firebase/firestore'
import { db } from '../firebase/init.ts'
import dayjs from 'dayjs'
import { Post as PostType } from '../models'
import { useRouter } from 'vue-router'

const router = useRouter()
const open = ref(false)
const content = ref('')
const media = ref('')

const create = async () => {
    const q = query(
        collection(db, 'users'),
        where('email', '==', sessionStorage.getItem('ss_email'))
    )
    const querySnapshot = await getDocs(q)
    const obj = querySnapshot.docs.pop()
    const pfp = obj?.get('profilePic') || '' //default here

    const post = ref<PostType>({
        content: content.value,
        media: media.value,
        email: sessionStorage.getItem('ss_email') || '',
        name: obj?.get('firstName') + ' ' + obj?.get('lastName') || '',
        profilePic: pfp,
        timestamp: dayjs().format()
    })
    const colRef = collection(db, 'posts')

    const docRef = await addDoc(colRef, post.value)

    // console.log('Document was created with ID:', docRef.id)

    router.go(0)
}

const logout = async () => {
    const q = query(
        collection(db, 'users'),
        where('email', '==', sessionStorage.getItem('ss_email'))
    )
    const querySnapshot = await getDocs(q)
    const userDoc = querySnapshot.docs.pop()
    if (userDoc?.exists) {
        setDoc(
            doc(db, 'users', userDoc.id),
            { timestamp: dayjs().format() },
            { merge: true }
        )
    }
    sessionStorage.clear()
    router.push('/login')
}
</script>

<style scoped>
.buttons {
    @apply flex bg-white dark:bg-primary shadow-lg rounded-full p-3 justify-center text-center items-center gap-2 hover:dark:bg-primary-light text-lg;
}
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

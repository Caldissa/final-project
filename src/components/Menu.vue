<!-- need to connect create button to method and test; also make sure mobile is good -->
<template>
    <div
        class="w-full h-full p-4 md:p-6 flex flex-col gap-4 md:gap-6 md:border-r-2 bg-primary dark:bg-white/15 border-black/50 dark:border-white/50 text-primary dark:text-white"
    >
        <!-- reformat buttons -->
        <RouterLink
            to="/"
            class="bg-white dark:bg-primary shadow-lg rounded-full px-3 py-3 justify-between"
        >
            <i class="i-mdi:home w-6 h-6"></i>
            Home
        </RouterLink>
        <RouterLink
            to="/profile"
            class="bg-white dark:bg-primary shadow-lg rounded-full px-3 py-3 text-left"
        >
            <i class="i-mdi:person w-6 h-6"></i>
            Profile
        </RouterLink>
        <a
            href="https://www.prepsportswear.com/college/us/texas/keene/southwestern-adventist-university-knights?schoolid=2062798"
            target="_blank"
            class="bg-white dark:bg-primary shadow-lg rounded-full px-3 py-3"
        >
            <button class="text-left justify-between">
                <i class="i-mdi:cart w-6 h-6"></i>
                Shop
            </button>
        </a>
        <button
            class="bg-white dark:bg-primary shadow-lg rounded-full px-3 py-3 text-left justify-between"
            @click="open = true"
        >
            <i class="i-mdi:plus w-6 h-6"></i>
            Post
        </button>
        <Teleport to="body">
            <div v-if="open" class="modal flex">
                <div class="bg-black w-min m-auto rounded-md">
                    <div class="bg-white/30 w-min m-auto p-4 rounded-md">
                        <p class="text-center text-white">Saying</p>
                        <div class="flex flex-col justify-center p-5">
                            <div class="justify-center flex">
                                <textarea
                                    id="saying"
                                    rows="5"
                                    cols="33"
                                    placeholder="What's on your mind..."
                                    class="text-sm m-2 px-2 py-1 rounded-md"
                                />
                            </div>
                        </div>
                        <div
                            class="mx-auto w-full grid grid-cols-2 justify-center"
                        >
                            <button
                                class="bg-white dark:bg-primary shadow-lg rounded-full mx-5 py-1 text-center justify-between text-primary dark:text-white"
                                @click="open = false"
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
        <button
            class="bg-white dark:bg-primary shadow-lg rounded-full px-3 py-3 text-left justify-between"
        >
            <i class="i-mdi:logout w-6 h-6"></i>
            Logout
        </button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { collection, addDoc, query, getDocs, where } from 'firebase/firestore'
import { db } from '../firebase/init.ts'
import dayjs from 'dayjs'
import { Post as PostType } from '../models'

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
        name: obj?.get('firstName') + '' + obj?.get('lastName') || '',
        profilePic: pfp,
        timestamp: dayjs().format()
    })
    const colRef = collection(db, 'posts')

    const docRef = await addDoc(colRef, post.value)

    console.log('Document was created with ID:', docRef.id)
}
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

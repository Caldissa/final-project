<!-- need to add signup stuff and format; make sure mobile is good -->
<template>
    <div class="absolute z-100 left-0 top-0 h-screen w-screen bg-white">
        <div
            class="flex dark:bg-black/80 h-full w-full justify-center items-center p-4"
        >
            <div
                class="shadow-lg w-lg bg-primary dark:bg-white/10 grid gap-2 border-2 dark:border-white/30 p-4 rounded-md text-white"
                @keyup.enter="keyUpHandler"
            >
                <div
                    class="flex w-full text-white justify-center items-end border-b-4 border-black dark:border-primary pb-4 gap-1"
                >
                    <h1 class="text-4xl md:text-6xl title tracking-tight">
                        SWAU·Says
                    </h1>
                    <div class="mb-4">
                        <i
                            class="i-simple-line-icons:bubble h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12"
                        ></i>
                    </div>
                </div>
                <div class="grid gap-2 py-4">
                    <div
                        ref="nameDiv"
                        class="hidden text-black grid-cols-2 gap-2"
                    >
                        <input
                            v-model="firstName"
                            type="text"
                            placeholder="First Name"
                        />
                        <input
                            v-model="lastName"
                            type="text"
                            placeholder="Last Name"
                        />
                    </div>
                    <input
                        v-model="email"
                        type="text"
                        placeholder="Email"
                        class="text-black"
                        required
                    />
                    <input
                        v-model="password"
                        type="password"
                        placeholder="Password"
                        class="text-black"
                        required
                    />
                    <div ref="passVerify" class="hidden text-black">
                        <input
                            v-model="verifyPass"
                            type="password"
                            placeholder="Retype Password"
                        />
                    </div>
                </div>
                <div
                    v-if="!showSignUp"
                    class="w-full grid justify-center text-center"
                >
                    <button
                        class="bg-white hover:bg-gray-200 text-primary dark:bg-primary rounded-lg hover:dark:bg-primary-light mx-auto py-2 px-4 dark:text-white transition duration-200 ease-in-out"
                        @click="login"
                    >
                        Log In
                    </button>
                    <p>or</p>
                    <button
                        class="hover:text-gray-200 dark:hover:text-primary-light underline transition duration-200 ease-in-out"
                        @click="toggleButtons"
                    >
                        Sign Up
                    </button>
                </div>
                <div v-else class="w-full grid justify-center text-center">
                    <button
                        class="bg-white hover:bg-gray-200 text-primary dark:bg-primary rounded-lg dark:hover:bg-primary-light mx-auto py-2 px-4 dark:text-white transition duration-200 ease-in-out"
                        @click="signUp"
                    >
                        Sign Up
                    </button>
                    <p>or</p>
                    <button
                        class="hover:text-gray-200 dark:hover:text-primary-light underline transition duration-200 ease-in-out"
                        @click="toggleButtons"
                    >
                        Log In
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import dayjs from 'dayjs'
import {
    collection,
    query,
    getDocs,
    where,
    addDoc,
    setDoc,
    doc
} from 'firebase/firestore'
import { db } from '../firebase/init.ts'
import { User } from '../models'
import slideDown from '../composables/slideDown'
import slideUp from '../composables/slideUp'

const emit = defineEmits(['reload'])

const router = useRouter()
const firstName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
const verifyPass = ref('')
const showSignUp = ref(false)

const nameDiv = ref<HTMLElement | null>(null)
const passVerify = ref<HTMLElement | null>(null)

const toggleButtons = () => {
    if (nameDiv.value && passVerify.value) {
        if (showSignUp.value) {
            // if sign up is visible
            showSignUp.value = false
            slideUp(nameDiv.value, 'grid', 500)
            slideUp(passVerify.value, 'grid', 500)
        } else {
            // if login is visible
            showSignUp.value = true
            slideDown(nameDiv.value, 'grid', 500)
            slideDown(passVerify.value, 'grid', 500)
        }
    } else {
        console.log('could not find buttons')
    }
}

const keyUpHandler = async () => {
    console.log('in method')
    if (showSignUp.value) {
        signUp()
    } else {
        login()
    }
}

const login = async () => {
    const q = query(collection(db, 'users'), where('email', '==', email.value))
    const querySnapshot = await getDocs(q)
    const userDoc = querySnapshot.docs.pop()
    if (userDoc?.exists()) {
        if (userDoc?.get('password') == password.value) {
            setDoc(
                doc(db, 'users', userDoc.id),
                { timestamp: dayjs().format() },
                { merge: true }
            )
            sessionStorage.setItem('ss_email', email.value)
            sessionStorage.setItem('ss_date', dayjs().format())
            emit('reload')
            router.push('/')
        } else {
            // console.log(
            //     '//user needs to be yelled at to enter the correct password'
            // )
        }
    } else {
        // console.log('//user yelled at for needing to sign up')
    }
}

const signUp = async () => {
    if (password.value == verifyPass.value) {
        const q = query(
            collection(db, 'users'),
            where('email', '==', email.value)
        )
        const querySnapshot = await getDocs(q)
        const userDoc = querySnapshot.docs.pop()
        if (userDoc?.exists()) {
            console.log('//yell at user that acc exists')
        } else {
            const user = ref<User>({
                email: email.value,
                firstName: firstName.value,
                lastName: lastName.value,
                password: password.value,
                profilePic: '', // need basic pfp
                bio: 'Tell people about yourself...',
                timestamp: dayjs().format()
            })
            const colRef = collection(db, 'users')

            const docRef = await addDoc(colRef, user.value)

            console.log('Document was created with ID:', docRef.id)

            sessionStorage.setItem('ss_email', email.value)
            sessionStorage.setItem('ss_date', dayjs().format())
            router.push('/')
        }
    } else {
        console.log('//user needs to be yelled at to match passwords')
    }
}
</script>

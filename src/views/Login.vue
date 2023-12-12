<!-- need to add signup stuff and format; make sure mobile is good -->
<template>
    <div class="absolute left-0 top-0 h-screen w-screen bg-white">
        <div class="flex bg-black/80 h-full w-full justify-center items-center">
            <div
                class="shadow-lg w-lg dark:bg-white/10 grid gap-2 border-2 border-white/30 p-4 rounded-md dark:text-white"
            >
                <Title />
                <div ref="nameDiv" class="hidden grid-cols-2 gap-2">
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
                <input v-model="email" type="text" placeholder="Email" />
                <input
                    v-model="password"
                    type="password"
                    placeholder="Password"
                />
                <div ref="passVerify" class="hidden">
                    <input
                        v-model="verifyPass"
                        type="password"
                        placeholder="Retype Password"
                    />
                </div>
                <div
                    v-if="!showSignUp"
                    class="w-full grid justify-center text-center"
                >
                    <button
                        class="bg-primary rounded-lg hover:bg-primary-light mx-auto py-2 px-4 text-white transition duration-200 ease-in-out"
                        @click="login"
                    >
                        Log In
                    </button>
                    <p>or</p>
                    <button
                        class="hover:text-primary-light underline"
                        @click="toggleButtons"
                    >
                        Sign Up
                    </button>
                </div>
                <div v-else class="w-full grid justify-center text-center">
                    <button
                        class="bg-primary rounded-lg hover:bg-primary-light mx-auto py-2 px-4 text-white transition duration-200 ease-in-out"
                        @click="signUp"
                    >
                        Sign Up
                    </button>
                    <p>or</p>
                    <button
                        class="hover:text-primary-light underline"
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
import { collection, query, getDocs, where, addDoc } from 'firebase/firestore'
import { db } from '../firebase/init.ts'
import { User } from '../models'
import Title from '../components/Title.vue'
import slideDown from '../composables/slideDown'
import slideUp from '../composables/slideUp'

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

const login = async () => {
    const q = query(collection(db, 'users'), where('email', '==', email.value))
    const querySnapshot = await getDocs(q)
    const doc = querySnapshot.docs.pop()
    if (doc?.exists()) {
        if (doc?.get('password') == password.value) {
            sessionStorage.setItem('ss_email', email.value)
            sessionStorage.setItem('ss_date', dayjs().format())
            router.push('/')
        } else {
            console.log(
                '//user needs to be yelled at to enter the correct password'
            )
        }
    } else {
        console.log('//user yelled at for needing to sign up')
    }
}

const signUp = async () => {
    if (password.value == verifyPass.value) {
        const q = query(
            collection(db, 'users'),
            where('email', '==', email.value)
        )
        const querySnapshot = await getDocs(q)
        const doc = querySnapshot.docs.pop()
        if (doc?.exists()) {
            console.log('//yell at user that acc exists')
        } else {
            const user = ref<User>({
                email: email.value,
                firstName: firstName.value,
                lastName: lastName.value,
                password: password.value,
                profilePic: '', // need basic pfp
                bio: '',
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

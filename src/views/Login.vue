<!-- need to add signup stuff and format; make sure mobile is good -->
<template>
    <div class="grid gap-4">
        <div
            class="flex w-full text-primary dark:text-white justify-center items-end border-b-4 border-black dark:border-primary pb-4 gap-1"
        >
            <h1 class="text-6xl title tracking-tight">SWAU·Says</h1>
            <div class="mb-4">
                <i
                    class="i-simple-line-icons:bubble h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12"
                ></i>
            </div>
        </div>
        <div>
            <input
                v-if="showSignUp"
                v-model="firstName"
                type="text"
                placeholder="First Name"
            />
            <input
                v-if="showSignUp"
                v-model="lastName"
                type="text"
                placeholder="Last Name"
            />
        </div>
        <input v-model="email" type="text" placeholder="Email" />
        <input v-model="password" type="password" placeholder="Password" />
        <input
            v-if="showSignUp"
            v-model="verifyPass"
            type="password"
            placeholder="Retype Password"
        />
        <button
            v-if="!showSignUp"
            class="bg-primary rounded-lg hover:bg-primary-light mx-auto py-2 px-4 text-white transition duration-200 ease-in-out"
            @click="login"
        >
            Login
        </button>
        <span v-if="!showSignUp">or</span>
        <button @click="signUp">Sign Up</button>
        <button v-if="showSignUp" @click="showSignUp = false">Back</button>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import dayjs from 'dayjs'
import { collection, query, getDocs, where } from 'firebase/firestore'
import { db } from '../firebase/init.ts'

const router = useRouter()
const firstName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
const verifyPass = ref('')
const showSignUp = ref(false)

const login = async () => {
    const q = query(
        collection(db, 'users'),
        where('email', '==', sessionStorage.getItem(email.value))
    )
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => {
        if (
            doc.exists() &&
            querySnapshot.docs.pop()?.get('password') == password.value
        ) {
            sessionStorage.setItem('ss_email', email.value)
            sessionStorage.setItem('ss_date', dayjs().format())
            router.push('/')
        } else {
            //user needs to be yelled at to enter the correct password
        }
    })
}

const signUp = async () => {
    if (showSignUp.value == false) {
        showSignUp.value = true
    } else {
        //logic
    }
}
//make sure to verify pass first
</script>

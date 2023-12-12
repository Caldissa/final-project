<template>
    <div class="p-3 text-left align-top break-words">{{ bio }}</div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { collection, query, getDocs, where } from 'firebase/firestore'
import { db } from '../firebase/init.ts'

const fName = ref('')
const lName = ref('')
const email = ref('')
const bio = ref('')

const getUser = async () => {
    const q = query(
        collection(db, 'users'),
        where('email', '==', sessionStorage.getItem('ss_email'))
    )

    const querySnapshot = await getDocs(q)

    const doc = querySnapshot.docs.pop()
    fName.value = doc?.get('firstName')
    lName.value = doc?.get('lastName')
    email.value = doc?.get('email')
    bio.value = doc?.get('bio')
}

onMounted(() => {
    getUser()
})
</script>

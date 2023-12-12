<template>
    <div class="flex flex-col">
        <h1>logo here</h1>
        <input v-model="email" type="text" placeholder="email" />
        <input v-model="password" type="password" placeholder="password" />
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
const password = ref('')
</script>

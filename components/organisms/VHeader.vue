<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import { storeToRefs } from 'pinia'
import jwt_decode from 'jwt-decode'

const { authenticateUser, logOut } = useAuthStore() // use authenticateUser action from  auth store
const token = useCookie('token')
const { authenticated } = storeToRefs(useAuthStore()) // make authenticated state reactive with storeToRefs

const user = ref({
    username: 'kminchelle',
    password: '0lelplR',
})

const login = async () => {
    await authenticateUser(user.value) // call authenticateUser and pass the user object
    // redirect to homepage if user is authenticated
    if (authenticated) {
        console.log(authenticated)
    }
}
</script>
<template>
    <header class="shadow-sm z-30 bg-white flex flex-col gap-4">
        <button>get data</button>

        <button @click="login">login</button>
        <button @click="logOut">logout</button>
        <p>authenticated:{{ authenticated }}</p>
        <p v-if="token">
            {{ JSON.stringify(jwt_decode(token, { header: true })) }}
        </p>
    </header>
</template>

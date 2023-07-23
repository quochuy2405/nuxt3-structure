<script setup lang="ts">
import { Login } from '@/components/templates'
definePageMeta({
    layoutTransition: {
        name: 'layout',
    },
    layout: 'slot',
})

const onLogin = () => {
    console.log('on login')
}

const props = { onLogin }
</script>
<template>
    <Suspense>
        <Login v-bind="props" />
    </Suspense>
</template>

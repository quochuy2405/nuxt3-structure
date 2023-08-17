<script setup lang="ts">
definePageMeta({
    layout: 'default',
    layoutTransition: {
        name: 'layout',
    },
})
definePageMeta({
    middleware: 'auth',
})
</script>
<template><div>Login</div></template>

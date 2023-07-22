<script setup lang="ts">
definePageMeta({
    // layout: 'default',
    layoutTransition: {
        name: 'slide-in',
    },
})
</script>
<template>
    <div class="bg-blue-500 h-screen w-screen">
        <NuxtLink to="/login">login</NuxtLink>
    </div>
</template>

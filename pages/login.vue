<script setup lang="ts">
definePageMeta({
    layoutTransition: {
        name: 'slide-in',
    },
    layout: 'slot',
})
</script>
<template>
    <div class="h-screen w-screen bg-black text-white">
        <div class="h-36">
            <img src="@/assets/svg/logo.svg" class="w-full h-full" alt="Logo" />
        </div>
        <h1 class="font-semibold">Design faster and plan to scale.</h1>
    </div>
</template>

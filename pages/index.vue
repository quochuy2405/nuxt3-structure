<script setup lang="ts">
import { VButton } from '@/components/atoms'
import { VProductSider, VSlideShow } from '@/components/organisms'

definePageMeta({
    layout: 'default',
    layoutTransition: {
        name: 'layout',
    },
})
</script>
<template>
    <VSlideShow />
    <div
        class="w-screen h-[60vh] overflow-x-hidden flex relative mt-1 flex-col justify-end"
    >
        <img
            src="/img/JACKET4-1.png"
            class="w-full h-full object-cover absolute"
        />
        <div
            class="flex flex-col justify-end items-center p-4 h-full w-full z-10"
        >
            <VButton
                href="/"
                type="submit"
                mode="default"
                class="!bg-white !rounded-full text-black !font-semibold !w-fit !py-3 px-10 z-10"
            >
                Shop clothing
            </VButton>
        </div>
    </div>
    <div class="flex items-center justify-center p-4 flex-col gap-2">
        <h1 class="heading">Trending Products</h1>
        <p class="text-center">
            Here’s some of our most popular products people are in love with.
        </p>
    </div>

    <VProductSider />

    <div class="flex items-center justify-center p-4 flex-col gap-2">
        <h1 class="heading">You Must Have</h1>
        <p class="text-center">
            Find the top most popular items in Umino best sellers.
        </p>
    </div>
    <VProductSider />
</template>

<script setup lang="ts">
import { debounce } from 'lodash'
import { useCart } from '@/stores/nuxtStore'
const tabs = [
    {
        label: 'Home',
        router: '/',
    },
]
const scrollPosition = ref(0)
const classTopHeader = computed(() => ({
    'fade-bottom fixed w-full top-0 ': scrollPosition.value !== 0,
}))
const cart = useCart()
onMounted(() => {
    scrollPosition.value = window.scrollY
    window.addEventListener('scroll', () => {
        scrollPosition.value = window.scrollY
    })
})
</script>
<template>
    <header class="shadow-sm z-30 bg-white" :class="classTopHeader">
        <div class="w-full h-9 bg-black px-6 hidden"></div>
        <div class="w-full h-16 flex items-center px-6 justify-between">
            <div>
                <Icon name="iconoir:menu" class="h-6 w-6 font-semibold" />
            </div>
            <div class="w-16 h-10">
                <img src="@/assets/svg/logo.svg" />
            </div>
            <div class="hidden">
                <NuxtLink
                    v-for="tab in tabs"
                    :key="tab.router"
                    to="/contact"
                    target="_blank"
                >
                    {{ tab.label }}
                </NuxtLink>
            </div>
            <div>
                <div class="w-fit h-fit relative">
                    <span
                        class="bg-red-600 text-[10px] font-semibold text-white w-4 h-4 absolute flex items-center justify-center rounded-full -right-1/3"
                        >{{ cart.count || 0 }}</span
                    >
                    <Icon name="iconoir:simple-cart" class="h-6 w-6" />
                </div>
            </div>
        </div>
    </header>
</template>

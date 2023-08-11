<script setup lang="ts">
import { VButton } from '../atoms'

const sliders = [
    {
        title: {
            t1: 'Online',
            t2: 'Limited Edition',
        },
        description: "So soft, you don't want to take it off.",
        router: '/',
        textButton: 'Shop now',
        url: '/img/JACKET3-1.png',
    },
    {
        title: {
            t1: 'Online2',
            t2: 'Limited Edition',
        },
        description: "So soft, you don't want to take it off.",
        router: '/',
        textButton: 'Shop',
        url: '/img/JACKET3-2.png',
    },
    {
        title: {
            t1: 'Online2',
            t2: 'Limited Edition',
        },
        description: "So soft, you don't want to take it off.",
        router: '/',
        textButton: 'Shop',
        url: '/img/JACKET4-2.png',
    },
    {
        title: {
            t1: 'Online5',
            t2: 'Limited Edition',
        },
        description: "So soft, you don't want to take it off.",
        router: '/',
        textButton: 'Shop',
        url: '/img/JACKET4-1.png',
    },
]

const sliderPosition = ref(0)
const fadeIn = ref(true)

const sliderStyle = computed(() => ({
    transform: `translateX(${sliderPosition.value}vw)`,
}))
const sliderClass = computed(() => ({
    'fade-top': fadeIn.value,
}))
const sliderImage = computed(() => ({
    fade: fadeIn.value,
}))

const moveSliderLeft = () => {
    fadeIn.value = false
    setTimeout(() => {
        fadeIn.value = true
        if (-sliderPosition.value / 100 >= sliders.length - 1) {
            sliderPosition.value = 0
            return
        }
        sliderPosition.value -= 100
    }, 100)
}

onMounted(() => {
    const time = setInterval(() => {
        moveSliderLeft()
    }, 5000)

    onUnmounted(() => {
        clearInterval(time) // Clear the interval when the component is unmounted
    })
})
</script>
<template>
    <div class="w-screen min-h-[70vh] overflow-x-hidden flex">
        <div class="w-fit flex">
            <div
                v-for="slider in sliders"
                class="w-screen h-full relative"
                :style="sliderStyle"
            >
                <img
                    :src="slider.url"
                    class="w-full h-full absolute object-cover"
                    :class="sliderImage"
                />
                <div class="p-4 flex justify-center flex-col gap-2 h-full">
                    <div class="text-4xl font-medium">
                        <h1 :class="sliderClass">
                            {{ slider.title.t1 }}
                        </h1>
                        <h1 :class="sliderClass" style="animation-delay: 0.6s">
                            {{ slider.title.t2 }}
                        </h1>
                    </div>
                    <p
                        class="font-medium"
                        :class="sliderClass"
                        style="animation-delay: 0.9s"
                    >
                        {{ slider.description }}
                    </p>
                    <div :class="sliderClass" style="animation-delay: 1.2s">
                        <VButton
                            :href="slider.router"
                            type="submit"
                            mode="default"
                            class="!bg-[#111111] !rounded-full text-white !w-fit !py-3 px-10 min-w-[160px] uppercase"
                        >
                            {{ slider.textButton }}
                        </VButton>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.slider-container {
    display: flex;
    transition: transform 0.3s ease-in-out;
}
</style>

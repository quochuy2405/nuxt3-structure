<script setup lang="ts">
import { VProduct } from '../molecules'
const sliderPosition = ref(0)

const sliderStyle = computed(() => ({
    transform: `translateX(calc(${sliderPosition.value}vw/2)`,
}))

const moveSliderLeft = () => {
    setTimeout(() => {
        if (-sliderPosition.value / 100 >= 5 - 1) {
            sliderPosition.value = 0
            return
        }
        sliderPosition.value -= 100
    }, 100)
}

onMounted(() => {
    const time = setInterval(() => {
        moveSliderLeft()
    }, 3000)

    onUnmounted(() => {
        clearInterval(time) // Clear the interval when the component is unmounted
    })
})
</script>
<template>
    <div class="w-screen">
        <div
            class="flex flex-nowrap w-fit transition-all ease-out"
            :style="sliderStyle"
        >
            <div class="w-fit flex">
                <VProduct v-for="product in [1, 2, 3, 4, 5]" />
            </div>
        </div>
    </div>
</template>

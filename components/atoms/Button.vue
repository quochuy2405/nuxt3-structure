<script setup lang="ts">
interface Props {
    title?: string
    href?: string
}

const { href, ...props } = withDefaults(defineProps<Props>(), {
    title: 'hello',
})
</script>

<template>
    <NuxtLink :to="href">
        <button
            v-bind="props"
            class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
        >
            <slot />
        </button>
    </NuxtLink>
</template>

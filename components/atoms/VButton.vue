<script setup lang="ts">
interface Props {
    title?: string
    href?: string
    mode?: 'default' | 'primary' | 'dark'
    outline?: boolean
    class?: string
    wFull?: boolean
}

const {
    href,
    mode = 'default',
    outline,
    wFull,
    ...props
} = withDefaults(defineProps<Props>(), {})
const className = reactive({
    'bg-gradient-to-r from-cyan-500 to-blue-500 text-white': mode === 'primary',
    'bg-gradient-to-r from-gray-500 to-black-500': mode === 'dark',
    '!bg-transparent text-white': !!outline,
    'py-2 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-md border border-gray-200 focus:z-10 focus:ring-2 focus:ring-gray-200 w-full':
        true,
    [props.class || '']: props.class,
})
</script>

<template>
    <NuxtLink :to="href" :class="{ 'w-full': wFull }">
        <button v-bind="props" :class="className">
            <slot />
        </button>
    </NuxtLink>
</template>

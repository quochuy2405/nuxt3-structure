<script setup lang="ts">
interface Props {
    vModel?: string
    class?: string
    control?: any
    name: string
    title?: string
}

const { title, vModel, control, name, ...props } = withDefaults(
    defineProps<Props>(),
    {},
)
const className = computed(() => ({
    'border-red-500 focus:border-red-500': control?.$error,
    'border-[#42d392]': !control?.$invalid,
    [props.class]: !!props.class,
}))

const emit = defineEmits(['update:modelValue'])
const updateValue = (event: any) => {
    emit('update:modelValue', event.target.value)
}
</script>

<template>
    <!-- Some code -->
    <div class="relative pb-1 mb-4 h-fit w-full">
        <label :v-if="!!title" for="email" class="text-sm leading-7">{{
            title
        }}</label>
        <div class="relative flex items-center">
            <input
                v-model="vModel"
                type="text"
                :name="name"
                placeholder="e.g. example@email.com"
                class="bg-opacity-20 w-full rounded border border-gray-600 bg-transparent px-3 leading-8 text-gray-100 outline-none transition-colors duration-200 ease-in-out placeholder:text-gray-500 placeholder:font-semibold text-sm focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-transparent flex-1 pr-6 py-1.5"
                :class="className"
                @input="updateValue"
            />
            <!-- The icon is going to render but the name of the icon it will depend on the validation output and the color as well -->
            <Icon
                :v-if="!control?.$invalid || !!control?.$error"
                class="absolute hidden h-4 w-4 right-2 text-xl text-green-500"
                :class="{
                    'text-green-500': !control?.$invalid,
                    'text-yellow-500': control?.$error,
                    '!hidden': !!control?.$invalid && !control?.$error,
                }"
                :name="`heroicons-solid:${
                    !control?.$error ? 'check-circle' : 'exclamation'
                }`"
            />
        </div>
        <span
            class="absolute bottom-0 text-xs text-red-500 translate-y-[100%]"
            v-if="control.$error"
            >{{ control.$errors[0].$message }}</span
        >
    </div>

    <!-- Some code -->
</template>

<script setup lang="ts">
import { Register } from '@/components/templates'
import {
    required,
    email,
    sameAs,
    minLength,
    helpers,
} from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'
export interface RegisterForm {
    email: string
    password: string
    confirmPassword: string
}
definePageMeta({
    layoutTransition: {
        name: 'layout',
    },
    layout: 'slot',
})
const formData = reactive({
    email: '',
    password: '',
    confirmPassword: null,
})

const rules = computed(() => {
    return {
        email: {
            required: helpers.withMessage(
                'The email field is required',
                required,
            ),
            email: helpers.withMessage('Invalid email format', email),
        },
        password: {
            required: helpers.withMessage(
                'The password field is required',
                required,
            ),
            minLength: minLength(6),
        },
        confirmPassword: {
            required: helpers.withMessage(
                'The password confirmation field is required',
                required,
            ),
            sameAs: helpers.withMessage(
                "Passwords don't match",
                sameAs(formData.password),
            ),
        },
    }
})

const control = useVuelidate(rules, formData)

const submitForm = () => {
    control.value.$validate()
    if (!control.value.$error) {
        //    Some code
    }
}

const props = { control, formData, submitForm }
</script>
<template>
    <section class="container mx-auto px-5 py-24 text-gray-400">
        <form
            @submit.prevent="submitForm"
            class="mx-auto mt-10 flex w-full flex-col rounded-lg bg-[#242424] bg-opacity-50 p-8 shadow-lg md:mt-0 md:w-1/2 lg:w-2/6"
        >
            <h2 class="mb-5 text-lg font-medium text-[#aac8e4]">Register</h2>

            <!-- Email input -->
            <div class="relative mb-4">
                <label for="email" class="text-sm leading-7 text-gray-400"
                    >Email</label
                >
                <div class="relative">
                    <input
                        v-model="formData.email"
                        type="text"
                        id="email"
                        name="email"
                        placeholder="e.g. example@email.com"
                        class="w-full rounded border border-gray-600 bg-transparent bg-opacity-20 py-1 px-3 text-base leading-8 text-gray-100 outline-none transition-colors duration-200 ease-in-out placeholder:text-gray-500 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-transparent"
                        :class="{
                            'border-red-500 focus:border-red-500':
                                control.email.$error,
                            'border-[#42d392] ': !control.email.$invalid,
                        }"
                        @change="control.email.$touch"
                        autocomplete="off"
                    />
                    <Icon
                        v-if="!control.email.$invalid || control.email.$error"
                        class="absolute right-2 h-full text-xl text-green-500"
                        :class="{
                            'text-green-500': !control.email.$invalid,
                            'text-yellow-500': control.email.$error,
                        }"
                        :name="`heroicons-solid:${
                            !control.email.$error
                                ? 'check-circle'
                                : 'exclamation'
                        }`"
                    />
                </div>
                <span
                    class="text-xs text-red-500"
                    v-if="control.email.$error"
                    >{{ control.email.$errors[0].$message }}</span
                >
            </div>

            <!-- Password input -->
            <div class="relative mb-4">
                <label for="password" class="text-sm leading-7 text-gray-400"
                    >Password</label
                >
                <div class="relative">
                    <input
                        v-model="formData.password"
                        type="password"
                        id="password"
                        name="password"
                        class="w-full rounded border border-gray-600 bg-transparent bg-opacity-20 py-1 px-3 text-base leading-8 text-gray-100 outline-none transition-colors duration-200 ease-in-out focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-transparent"
                        :class="{
                            ' border-red-500 focus:border-red-500':
                                control.password.$error,
                            'border-[#42d392]': !control.password.$invalid,
                        }"
                        @change="control.password.$touch"
                    />
                    <Icon
                        v-if="
                            !control.password.$invalid ||
                            control.password.$error
                        "
                        class="absolute right-2 h-full text-xl text-green-500"
                        :class="{
                            'text-green-500': !control.password.$invalid,
                            'text-yellow-500': control.password.$error,
                        }"
                        :name="`heroicons-solid:${
                            !control.password.$error
                                ? 'check-circle'
                                : 'exclamation'
                        }`"
                    />
                </div>
                <span
                    class="text-xs text-red-500"
                    v-if="control.password.$error"
                    >{{ control.password.$errors[0].$message }}</span
                >
            </div>

            <button
                type="submit"
                class="rounded border-0 bg-blue-500 py-2 px-8 font-bold text-[#213547] transition-colors duration-500 hover:bg-blue-600 focus:outline-none"
            >
                Submit
            </button>
        </form>
    </section>
    <Register v-bind="{ ...props }" />
</template>

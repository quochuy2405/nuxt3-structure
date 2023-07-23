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
const formData = reactive<RegisterForm>({
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

const { value: control } = useVuelidate(rules, formData)

const submitForm = () => {
    control.$validate()
    if (!control.$error) {
        console.log(formData)
        console.log(control)
    }
}
const props = { control, formData, submitForm }
</script>
<template>
    <Register v-bind="{ ...props }" />
</template>

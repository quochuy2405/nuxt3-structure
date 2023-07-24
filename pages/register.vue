<script setup lang="ts">
import { Register } from '@/components/templates'
import { useVuelidate } from '@vuelidate/core'
import { rules } from '@/resolvers/register.rule'
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

const control = useVuelidate(rules(formData), formData)

const submitForm = () => {
    control.value.$validate()
    if (!control.value.$error) {
        //    Some code
    }
}

const props = { control, formData, submitForm }
</script>
<template>
    <Register v-bind="{ ...props }" />
</template>

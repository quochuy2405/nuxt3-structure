<script setup lang="ts">
import { VTable } from '@/components/atoms'

definePageMeta({
    layout: 'default',
    layoutTransition: {
        name: 'layout',
    },
})
type Person = {
    firstName: string
    lastName: string
    age: number
    visits: number
    status: string
    progress: number
}

const defaultData: Person[] = [
    {
        firstName: 'tanner',
        lastName: 'linsley',
        age: 24,
        visits: 100,
        status: 'In Relationship',
        progress: 50,
    },
]

const columns = [
    {
        header: 'firstName',
        accessorKey: 'firstName',
        size: 140,
    },
    {
        header: 'lastName',
        accessorKey: 'lastName',
        size: 0,
    },
    {
        header: 'age',
        accessorKey: 'age',
        size: 120,
    },
]

const data = useState<Person[]>('data', () => defaultData)

const propsTable = { data, columns }
</script>
<template>
    <div>
        <VTable v-bind="{ ...propsTable }" />
    </div>
</template>

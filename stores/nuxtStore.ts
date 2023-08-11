import { defineStore } from 'pinia'

export const useCart = defineStore('cart', {
    // arrow function recommended for full type inference
    state: () => {
        return {
            count: 0,
            products: [],
        }
    },
})

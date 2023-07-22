// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    css: ['@/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    app: {
        pageTransition: {
            name: 'page',
            mode: 'default', // default
        },
        layoutTransition: {
            name: 'layout',
            mode: 'default', // default
        },
    },
})

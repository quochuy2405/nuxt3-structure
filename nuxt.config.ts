// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    css: ['@/assets/css/main.css'],
    modules: ['nuxt-icon', '@pinia/nuxt'],
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
        head: {
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap',
                },
            ],
        },
    },
})

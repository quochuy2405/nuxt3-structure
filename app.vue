<template>
    <div>
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
    transition: all 0.4s;
    transform: scale(1);
}
.page-enter-from,
.page-leave-to {
    opacity: 0;
    transform: scale(2);
}

.layout-enter-active {
    transition: all 0.1s ease-in-out;
}
.layout-leave-active {
    transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
    transform: scale(2);
}
.layout-enter-from,
.layout-leave-to {
    opacity: 0;
    transform: scale(0.5);
}
</style>

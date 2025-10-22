<template>
    <div class="bg-primary-400">
        <USeparator />
        <UContainer>
            <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div class="md:flex md:justify-between">
                    <div class="mb-6 md:mb-0">
                        <ULink to="/" class="flex items-center text-white">
                            <Icon name="lydflor:blomst" size="20" class="me-3" />
                            <Icon name="lydflor:text" size="25"/>
                        </ULink>
                    </div>
                </div>
                <USeparator class="mt-10 mb-7"/>
                <div class="sm:flex sm:items-center sm:justify-between">
                    <span class="text-sm sm:text-center text-dimmed">© 2026 <ULink
                            to="/" class="hover:underline">Lyd:Flor</ULink>. All Rights Reserved.
                    </span>
                    <div class="flex mt-4 sm:justify-center sm:mt-0 gap-3">
                        <ULink to="https://www.instagram.com/lydflorfestival/" target="_blank">
                            <Icon name="lucide:instagram" size="20"/>
                        </ULink>
                        <ULink to="https://www.facebook.com/lydflorfestival/" target="_blank">
                            <Icon name="lucide:facebook" size="20"/>
                        </ULink>
                    </div>
                </div>
            </div>
        </UContainer>
    </div>
</template>
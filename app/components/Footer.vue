<template>
    <div class="bg-primary-400">
        <USeparator />
        <UContainer>
            <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div class="md:flex md:justify-between">
                    <div class="mb-6 md:mb-0">
                        <ULink to="/" class="flex items-center">
                            <Icon name="lydflor:logo-test" size="25" class="me-3" />
                            <Icon name="lydflor:text" size="25"/>
                        </ULink>
                    </div>
                    <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2">
                        <div>
                            <h2 class="mb-6 text-sm font-black uppercase text-inverted">FØLG OS
                            </h2>
                            <ul>
                                <li class="mb-4">
                                    <ULink class="font-light text-dimmed">Facebook</ULink>
                                </li>
                                <li>
                                    <ULink class="font-light text-dimmed">Instagram</ULink>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 class="mb-6 text-sm font-black uppercase text-inverted">Legal</h2>
                            <ul>
                                <li class="mb-4">
                                    <ULink class="font-light text-dimmed">Privatlivspolitik</ULink>
                                </li>
                                <li>
                                    <ULink class="font-light text-dimmed">Vilkår og betingelser</ULink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <USeparator class="mt-10 mb-7"/>
                <div class="sm:flex sm:items-center sm:justify-between">
                    <span class="text-sm sm:text-center text-dimmed">© 2026 <ULink
                            to="/" class="hover:underline">Lyd:flor</ULink>. All Rights Reserved.
                    </span>
                    <div class="flex mt-4 sm:justify-center sm:mt-0 gap-3">
                        <ULink>
                            <Icon name="lucide:instagram" size="20"/>
                        </ULink>
                        <ULink>
                            <Icon name="lucide:facebook" size="20"/>
                        </ULink>
                    </div>
                </div>
            </div>
        </UContainer>
    </div>
</template>
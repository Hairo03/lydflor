<script setup>
import { ref } from 'vue';

useHead({
    script: [
        {
            src: 'https://www.google.com/recaptcha/api.js',
            async: true,
            defer: true,
            type: 'text/javascript'
        }
    ]
})


const url =
    'https://script.google.com/macros/s/AKfycbzj-gVQKKOeFqdwOCuu6SszMGljIz1gV9-gAtmkSRK8C4YP_4dl64dpIBndhHNg0x21/exec';

const loading = ref(false);

const handleSubmit = async (event) => {
    event.preventDefault();
    loading.value = true;

    // Get reCAPTCHA token
    const recaptchaToken = window.grecaptcha.getResponse();
    if (!recaptchaToken) {
        alert('Bekræft venligst at du ikke er en robot.');
        loading.value = false;
        return;
    }

    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    // Add reCAPTCHA token under the correct key
    data.gCaptchaResponse = recaptchaToken;

    try {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain;charset=utf-8',
            },
            body: JSON.stringify(data),
        });
        const result = await res.json();
        console.log('Successful', result);
        form.reset();
        window.grecaptcha.reset(); // Reset reCAPTCHA for next submission
    } catch (err) {
        console.log('err', err);
    } finally {
        loading.value = false;
    }
};
</script>

<template>
    <form id="volunteer-form" @submit.prevent="handleSubmit">
        <div class="flex flex-col space-y-4 w-full">
            <UFormField label="Fulde navn" required size="xl">
                <UInput name="name" type="text" required class="w-full" :ui="{ base: 'placeholder:text-neutral-700' }" placeholder="Fulde navn"/>
            </UFormField>
            <div class="flex space-x-4 w-full">
                <UFormField label="Email" required size="xl" class="w-full">
                    <UInput name="email" type="email" required class="w-full" :ui="{ base: 'placeholder:text-neutral-700' }" placeholder="Email"/>
                </UFormField>
                <UFormField label="Telefonnummer" required size="xl" class="w-full">
                    <UInput name="phone-number" type="tel" required class="w-full" :ui="{ base: 'placeholder:text-neutral-700' }" placeholder="Telefonnummer"/>
                </UFormField>
            </div>
            <div class="flex space-x-4 w-full">
                <UFormField label="Størrelse på t-shirt" required size="xl" class="w-full">
                    <UInput name="shirt-size" type="text" required class="w-full" :ui="{ base: 'placeholder:text-neutral-700' }" placeholder="Størrelse på t-shirt"/>
                </UFormField>
            </div>
            <UFormField label="Har du en ven du meget gerne vil have en vagt med? Hvis ja, skriv deres fulde navn:"
                size="xl">
                <UInput name="preferred-friend" type="text" class="w-full" :ui="{ base: 'placeholder:text-neutral-700' }" placeholder="Fulde navn på ven"/>
            </UFormField>
            <UFormField label="Skriv lidt om dig selv - hvad kan du byde ind med?" required size="xl">
                <UTextarea name="about-yourself" type="text" required class="w-full" :ui="{ base: 'placeholder:text-neutral-700' }" placeholder="Skriv her..."/>
            </UFormField>
            <UFormField label="Har du allergier, er du veganer eller er der andet vi skal være opmærksomme på?"
                size="xl" class="w-full">
                <UInput name="allergies" type="text" class="w-full" :ui="{ base: 'placeholder:text-neutral-700' }" placeholder="Allergier, kostvaner eller andet"/>
            </UFormField>
            <div class="g-recaptcha" data-sitekey="6LcLZGAsAAAAAM3jqsN5R2A5ALHULwLy9chVJ_Bu"></div>
            <UButton type="submit" class="mt-4 w-1/2 sm:w-1/3 justify-center h-20 text-xl" :loading="loading" size="xl">Ansøg nu</UButton>
        </div>
    </form>
</template>

<style scoped></style>
<script setup>
import { ref } from 'vue';

const url =
    'https://script.google.com/macros/s/AKfycbwkYzQYWwZyPmgY5ND-Fyy262-bXA3NJIgnHrr9_kh5p6bmlAd_v_0sAkCNR5XXReyI/exec';

const loading = ref(false);

const handleSubmit = async (event) => {
    event.preventDefault();
    loading.value = true;

    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

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
    } catch (err) {
        console.log('err', err);
    } finally {
        loading.value = false;
    }
};
</script>

<template>
    <form id="volunteer-form" @submit.prevent="handleSubmit">
        <div class="flex-col space-y-4">
            <UFormField label="Navn" required size="xl">
                <UInput name="name" type="text" required />
            </UFormField>
            <UFormField label="Email" required size="xl">
                <UInput name="email" type="email" required />
            </UFormField>
            <UFormField label="Telefonnummer" required size="xl">
                <UInput name="phone-number" type="tel" required />
            </UFormField>
            <UFormField label="Størrelse på t-shirt" required size="xl">
                <UInput name="shirt-size" type="text" required />
            </UFormField>
            <UFormField label="Har du en ven du meget gerne vil have en vagt med? Hvis ja, skriv deres fulde navn:" size="xl">
                <UInput name="preferred-friend" type="text" />
            </UFormField>
            <UFormField label="Skriv lidt om dig selv - hvad kan du byde ind med?" required size="xl">
                <UTextarea name="about-yourself" type="text" required />
            </UFormField>
            <UFormField label="Har du allergier, er du veganer eller er der andet vi skal være opmærksomme på?" size="xl">
                <UInput name="allergies" type="text" />
            </UFormField>
            <UButton type="submit" class="mt-4" :loading="loading" size="xl">Send</UButton>
        </div>
    </form>
</template>

<style scoped></style>
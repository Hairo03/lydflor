<template>
  <div class="flex flex-col h-screen justify-between">
    <Navbar />
    <u-container class="mb-auto">
        <slot />
    </u-container>
    <Footer/>
  </div>
</template>
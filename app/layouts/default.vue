<template>
  <div class="flex flex-col h-screen justify-between ">
    <Navbar class="w-screen fixed top-0 z-50"/>
    <div class="mb-auto relative">
        <slot />
    </div>
    <Footer />
  </div>
</template>
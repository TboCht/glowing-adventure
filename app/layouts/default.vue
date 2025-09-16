<template>
  <div class="flex flex-col h-screen">
    <header class="p-4 border-b border-2 border-[#EEE8E4]">
      <img src="/edumapperLogo.svg" alt="logo" class="" />
    </header>
    <main class="p-4 md:p-6 max-w-screen-xl w-full mx-auto h-full">
      <slot />
    </main>
  </div>
</template>

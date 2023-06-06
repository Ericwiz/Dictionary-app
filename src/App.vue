<script setup> 
import DictionaryFooter from './components/DictionaryFooter.vue'
</script>

<template>
  <main  class="w-[60%] mx-auto pt-10 h-full">
    <router-view />
    <DictionaryFooter />
  </main>
</template>
<!-- eslint-disable vue/no-mutating-props -->
<script setup>
import { onMounted, ref} from 'vue';
// import { useRouter } from 'vue-router'
import { themeChange } from 'theme-change'
onMounted(() => {
      themeChange(false)
    })

    defineEmits(['searchWord'])

    const inputVal = ref('')
    // const router = useRouter()

    // const searchWord = () => {
    // if (inputVal.value) {
    //     router.push({ name: 'WordView', params: { word: inputVal.value } })
    // }
    // }

</script>

<template>
    <div class="flex justify-between">
        <div>
            <svg class="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M17.5 14.33c.79 0 1.63.08 2.5.24v1.5c-.62-.16-1.46-.24-2.5-.24c-1.9 0-3.39.33-4.5.99v-1.69c1.17-.53 2.67-.8 4.5-.8M13 12.46c1.29-.53 2.79-.79 4.5-.79c.79 0 1.63.07 2.5.23v1.5c-.62-.16-1.46-.24-2.5-.24c-1.9 0-3.39.34-4.5.99m4.5-3.65c-1.9 0-3.39.32-4.5 1V9.84c1.23-.56 2.73-.84 4.5-.84c.79 0 1.63.08 2.5.23v1.55c-.74-.19-1.59-.28-2.5-.28m3.5 8V7c-1.04-.33-2.21-.5-3.5-.5c-2.05 0-3.88.5-5.5 1.5v11.5c1.62-1 3.45-1.5 5.5-1.5c1.19 0 2.36.16 3.5.5m-3.5-14c2.35 0 4.19.5 5.5 1.5v14.56c0 .12-.05.24-.16.35c-.11.09-.23.17-.34.17c-.11 0-.19-.02-.25-.05c-1.28-.69-2.87-1.03-4.75-1.03c-2.05 0-3.88.5-5.5 1.5c-1.34-1-3.17-1.5-5.5-1.5c-1.66 0-3.25.36-4.75 1.07c-.03.01-.07.01-.12.03c-.04.01-.08.02-.13.02c-.11 0-.23-.04-.34-.12a.475.475 0 0 1-.16-.35V6c1.34-1 3.18-1.5 5.5-1.5c2.33 0 4.16.5 5.5 1.5c1.34-1 3.17-1.5 5.5-1.5Z"/></svg>
        </div>
        <select data-choose-theme class="cursor-pointer select max-w-xs">
            <option value="dark">dark</option>
            <option value="light">light</option>
            <option value="synthwave">synthwave</option>
            <option value="cyberpunk">cyberpunk</option>
            <option value="night">night</option>
            <option value="coffee">coffee</option>
            <option value="luxury">luxury</option>
            <option value="retro">retro</option>
        </select>
    </div>

    <div class="py-10  flex flex-col sm:flex-row gap-4">
        <input type="text" v-model="inputVal" placeholder="search word" class="input input-bordered w-full" />

        <router-link v-if="inputVal" @click="$emit('searchWord')" :to="{name: 'WordView', params: {word: inputVal || undefined}}" class="btn btn-secondary btn-sm sm:btn-md">
            Search 
        </router-link>

        <!-- <button v-if="inputVal" :disabled="!inputVal" class="btn btn-secondary" @click="searchWord">
            Search word
        </button>
        {{ word }} -->
        <div v-else class="btn btn-danger max-xs:hidden">
            enter a word to activate search
        </div> 
    </div>
</template>
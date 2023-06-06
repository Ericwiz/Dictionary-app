<script setup>
import DictionaryHeader from '../components/DictionaryHeader.vue';
import { onMounted, ref, watchEffect} from 'vue';
import axios from 'axios';

    const props = defineProps(['word'])


    const words = ref([])


   onMounted(() =>
    {
    {
    axios.get('https://api.dictionaryapi.dev/api/v2/entries/en/' + props.word)
    .then(res => {
      console.log(res.data)
      words.value = res.data
    })
    .catch(err => console.log(err))
}
   }
)
const searchWord = ref(function() {
            {
                axios.get('https://api.dictionaryapi.dev/api/v2/entries/en/' + props.word)
                .then(res => {
                console.log(res.data)
                words.value = res.data
                words.value = words.value.slice(0, 1)
                // for(let word of words.value) {
                //     console.log(word.phonetics)
                // }
                })
                .catch(err => console.log(err))
        }
   })

   watchEffect(() => {
    searchWord.value()
   })

//    const audioPlayer = ref(null)

//    const playAudio = function() {
//     audioPlayer.value.play()
//    }
</script>

<template>
    <div>
        <DictionaryHeader @search-word="searchWord()"  />
        <Suspense>
           <template #default>
                <div v-for="word in words" :key="word">
                <div class="flex justify-between">
                    <h1 class="sm:text-3xl md:text-5xl text-2xl pb-2">{{word.word}}</h1>

                    <div class="lg:block hidden" v-for="phonetic in word.phonetics.slice(0, 1)" :key="phonetic">
                        <audio controls class="text-2xl">
                            <source :src="phonetic.audio" type="audio/mpeg">
                        </audio>
                    </div>
                </div>
                <span class="text text-secondary">{{ word.phonetic }}</span>

               <div class="pt-6">
                <div v-for="meaning in word.meanings" :key="meaning" class="">
                    <div class="divider font-bold font-sans sm:text-lg">{{ meaning.partOfSpeech }}</div>
                    <h1 class="sm:text-2xl text-lg font-light font-mono italic">meaning</h1>
                    <ul v-for="definition in meaning.definitions" :key="definition" class="">
                        <li class="list-disc py-4 max-sm:text-sm">{{ definition.definition }}</li>
                    </ul>

                    <div class="py-3">
                        <p class="inline-block italic pr-2">synonyms:</p>
                        <template v-for="synonym in meaning.synonyms.slice(0, 3).join(', ')" :key="synonym">
                        <span v-if="synonym" class="font-sans">{{synonym}}</span>
                        <span v-else>''</span>
                    </template>
                    </div>
                </div>
               </div>

               <div class="pt-3">
                <p>Source</p>
                <a :href="word.sourceUrls[0]" class="italic underline">{{ word.sourceUrls[0]}}</a>
               </div>
                </div>
           </template>

            <template #fallback>
                loading..........
            </template>
        </Suspense>
    </div>
</template>

<style scoped>

</style>
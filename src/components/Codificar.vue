<template>
    <div>
        <div class="flex flex-col items-start space-y-2">
            <div class="flex flex-col items-start w-full">
                <label for="text" class="text-lg font-medium leading-6 text-gray-900">Tepextopo a codificar:</label>
                <input type="text" name="text" id="text"
                    v-model="userInput"
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                    placeholder="Charmander -> Chaparmapandeper" />
            </div>
            <p> <span class="text-sm font-medium leading-6 text-gray-900">Texto codificado:</span> <i>{{ convertedText }}</i></p>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { convertToP } from '../utils/p'; 

const userInput = ref(''); 
const convertedText = ref('');

watch(userInput, (newValue) => {
    convertedText.value = convertToP(newValue);
});

</script>
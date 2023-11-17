<template>
    <h1 class="text-3xl font-semibold">
        🎇 Wepelcopome bapack!
    </h1>
    <header class="bg-white mt-4">
        <nav class="mx-auto flex max-w-7xl items-center justify-center gap-x-6 p-6 lg:px-8" aria-label="Global">
            <div class="flex gap-x-12 bg-gray-100 py-3 px-5 rounded-xl">
                <div v-for="item in navigation" :key="item.name" 
                    :class="{ 'bg-white rounded-lg': item.selected }"
                    @click="selectTab(item)">
                    <a :href="item.href" class="text-sm font-semibold leading-6 text-gray-900 flex gap-1 py-2 px-4">
                        <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
                        {{ item.name }} -- {{ item.selected }}
                    </a>
                </div>
            </div>
        </nav>
    </header>
</template>

<script setup>
import { ref } from 'vue';
import { LanguageIcon, ClipboardIcon } from '@heroicons/vue/24/outline';

const navigation = ref([
    { name: 'Codificar', href: '#', icon: LanguageIcon, selected: false },
    { name: 'Decodificar', href: '#', icon: LanguageIcon, selected: false }
]);

const selectTab = (selectedItem) => {
    navigation.value.forEach(item => {
        item.selected = 
            item === selectedItem ?
                true
            :   false
    });
};
</script>


<script setup lang="ts">
import { Head } from '@inertiajs/vue3'

interface Character {
  id: number
  name: string
  colors: string[],
  description: string,
  hardness: string
}

defineProps<{
  characters: Character[]
}>()
</script>

<template>
  <!-- Define o título da aba no navegador -->
  <Head title="Lista de Personagens" />

  <div class="container mx-auto p-6">
    <h1 class="text-2xl font-bold mb-4">Personagens</h1>

    <!--Exibir em formato json-->
    <!-- Exibe a lista caso existam registros -->
    <ul v-if="characters.length > 0" class="space-y-2">
      <li 
        v-for="character in characters" 
        :key="character.id"
        class="p-4 border rounded-lg shadow-sm bg-white dark:bg-gray-800"
      >
        <span class="informacoes-characters">
            <span class="font-semibold">{{ character.name }}</span>
            <span v-for="color in character.colors">{{ color }}</span>
            <span>{{ character.hardness ? character.hardness : "-" }}</span>
            <span>{{ character.description }}</span>
        </span>
      </li>
    </ul>

    <!-- Mensagem para lista vazia -->
    <p v-else class="text-gray-500">
      Nenhum personagem cadastrado no momento.
    </p>
  </div>
</template>
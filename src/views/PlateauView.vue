<template>
<main>
  <h2>vue plateau</h2>
  <ul>
    <li v-for="(q, key) in datas" :class="test(q.theme)" >{{key+1}} {{q.theme}} </li>
  </ul>
</main>

</template>

<script setup>
import { ref, computed } from 'vue'
import GameStarter from '../components/GameStarter.vue'
import { useGameStore } from '../stores/game'
const gameStore = useGameStore()
const classes = { 
  // "occurence_json" : nomClasse
  'theme-theorie': "Théorie",
  "Domestique" : "theme-domestique",
  "Économique" : "theme-eco",
  "Publique / politique" : "theme-public_politique"
}
const test = (el) => {
  switch (el) {
    case "Théorie":
      return 'théorie'
      break
    default: 
    return 'check'
    break

  }
}

const datas = gameStore.datasApi


</script>

<style>

</style>
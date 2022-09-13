<template>
<section>
  <input type="text" class="name" placeholder="Joueur/équipe 1" v-model="newUser"><button @click="addUser">+</button>
  <input type="text" class="name" placeholder="Joueur/équipe 2">
  <!-- <input type="text" class="name" placeholder="Joueur/équipe 3" v-if="playerCount > 2"> -->

  <p v-for="(member, key) in members" :key="key">{{member}}</p>

</section>
<button @click="addInput"> + </button>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useGameStore } from '../stores/game'
const gameStore = useGameStore()

const members = ["test1","test2", "test3"]
gameStore.addMembers(members)

const listMembers = computed( () => { return gameStore.allPlayers})

const newUser=ref('')

const addUser = () => {
  gameStore.addMember(newUser.value)
}

// let playerCount = 2

// const addInput = () => {
//   playerCount <= 4 && playerCount++
//   console.log(playerCount)
// }

// const availableColors = ["red", "blue", "green", "yellow", "orange"]
console.log(listMembers)
</script>

<style scoped>
input {
  margin: 2rem;
}
</style>
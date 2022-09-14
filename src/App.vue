<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
import { useGameStore } from './stores/game'
const gameStore = useGameStore()


const data = gameStore.getDatasApi()


</script>

<template>
    <header>
      <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
    </div>
      <nav>
        <RouterLink to="/" class="router-link">Home</RouterLink>
        <RouterLink to="/dice" class="router-link">Dice</RouterLink>
        <RouterLink to="/player" class="router-link">Joueur</RouterLink>
        <RouterLink to="/plateau" class="router-link">Plateau</RouterLink>
        <RouterLink to="/question" class="router-link">Question</RouterLink>
      </nav>
      
    
   
</header>
  <RouterView />
  <footer>©epegra 2022</footer>
</template>

<style scoped>
.router-link {
  padding: 0 1rem;
}

.router-link-active {
  background: #c0c0c0;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

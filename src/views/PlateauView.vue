<template>
<GameStarter />

</template>

<script setup>
import { ref, computed } from 'vue'
import GameStarter from '../components/GameStarter.vue'
import { useGameStore } from '../stores/game'
const gameStore = useGameStore()

</script>

<style>

</style>
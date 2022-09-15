<template>
<button @click="dice" ref="diceButton">Lancer le dé</button>
<p>Résultat du dé: {{result}}</p>
</template>

<script setup>
  import { ref } from 'vue'
  const diceButton=ref('')

  let result = ref('lancer le dé')
  
const dice = () => {
  const rand = Math.floor(Math.random()*6) +1
  diceButton.value.classList.toggle('coucou')
  switch (rand) {
    case 5:
      result.value = "?"
      break
    case 6:
      result.value = ":("
      break
    default:
      result.value = rand
  }
}
</script>

<style>
  .coucou {
    background: red;
  }

</style>
<template>
<h1>Et je jette le dééééé...</h1>
<button @click="dice">{{ result || 'bah jette dukon'}}</button>
<small style="display:block">(le résultat est dans la console pour l'instant)</small>
</template>

<script setup>
  import { ref, reactive } from 'vue'

  let result = reactive('')
  
const dice = () => {
  const rand = Math.floor(Math.random()*6) +1
  switch (rand) {
    case 5:
      result = "?"
      break
    case 6:
      result = ":("
      break
    default:
      result = rand
  }
  console.log(result)
}
</script>

<style>

</style>
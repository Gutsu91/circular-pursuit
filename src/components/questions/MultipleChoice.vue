<template>
  <section>
    <h2>Composant choix multiple</h2>
    <p>Lorsqu'un pancake tombe dans la neige avant le 31 décembre, on dit :</p>

    <div class="answers">
      <label><input type="checkbox" ref="answerA" name="question" id="answerA" />A. Que c'est un pancake qui est tombé dans la neige avant le 31 décembre</label>
      <label><input type="checkbox" ref="answerB" name="question" id="answerB" />B. Que c'est une Kipa surgelée</label>
      <label><input type="checkbox" ref="answerC" name="question" id="answerC" />C. Que c'est un frizby comestible</label>
      <label><input type="checkbox" ref="answerD" name="question" id="answerD" />D. La réponse D</label>
    </div>

    <button @click="checkAnswer"> Valider </button>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const answerA = ref('')
const answerB = ref('')
const answerC = ref('')
const answerD = ref('')


const checkAnswer = () => {
  answerA.value.checked && answerB.value.checked 
  ? alert(`c'est gagné`)
  : alert(`c'est perdu`)
}



</script>

<style>

.answers {
  display: flex;
  flex-direction: column;
  text-align: left;
}

</style>
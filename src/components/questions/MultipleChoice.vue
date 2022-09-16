<template>
  <section>
    <div class="answers">
      <label :for="'answer'+i" v-for="(a,i) in props.qresponse.answers" >
        <input type="checkbox" :name="'answer'+i" :id="'answer'+i" v-model="pickedAnswer" :value="a" />{{a}}</label>

      <label v-for="(a,i) in props.qresponse.validAnswers">{{a}}</label>

    </div>

    <button @click="checkAnswer"> Valider </button>
  </section>
</template>

<script setup>
import { ref, defineProps } from 'vue'

const props = defineProps(['qresponse'])
const answer = props.qresponse.validAnswers
const pickedAnswer = ref([])


const checkAnswer = () => {
  JSON.stringify(pickedAnswer.value.sort()) === JSON.stringify(answer.sort())
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
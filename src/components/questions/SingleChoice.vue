<template>
  <section>
    <div class="answers">
      <label :for="'answer'+i"  v-for="(a, i) in props.qresponse.answers" >
        <input type="radio" name="question" :id="'answer'+i" :value="a" v-model="pickedAnswer" />{{a}}  </label>
      <br />
      <label v-for="(a,i) in props.qresponse.validAnswers">{{a}}</label>
    </div>

    <!-- <p v-for="(a, i) in props.qresponse.answers">{{i+1}}. {{a}}</p> -->
    

    <button @click="checkAnswer"> Valider </button>
  </section>
</template>

<script setup>
import { ref, defineProps } from 'vue'

const props = defineProps(['qresponse'])
const answer = props.qresponse.validAnswers
const pickedAnswer = ref()

const checkAnswer = () => {
  pickedAnswer.value === answer[0]
  ? alert(`gagné`)
  : alert(`perdu`)
}


</script>

<style>

.answers {
  display: flex;
  flex-direction: column;
  text-align: left;
}

</style>
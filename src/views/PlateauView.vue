<template>
<main>
  <h2>vue plateau</h2>
  <div>
    <p>Au tour de X de jouer</p>
    <ThrowDice />
  </div>

  <ul class="board" v-if="randDatas.length > 0">
    <li class="cell start">Départ</li>
    <li v-for="(q, key) in randDatas" :class="test(q.theme)" class="cell">
      <a href="" @click.prevent="question(key, q.number)" class="cell">{{key+1}} // {{q.number}}</a>
      <Teleport to="body">
        <div v-if="open === key" class="modal">
        <div class="modal--inner">
          <span @click="closeModal" class="modal--close">✕</span>
            <h3>{{q.question}}</h3>
            <QuestionType :qtype="q.qtype" :qnumber="q.number" :qresponse="q.response" :qchallenge="q.challenge" />
        </div>
        <div class="answerWrapper">
          
        </div>
        </div>
      </Teleport>

    </li>
    <li class="cell end">Arrivée</li>
  </ul>
  <p v-if="randDatas.length === 0">Le plateau n'a pas chargé. Êtes-vous bien passé par l'ajout de joueur ? </p>
</main>

</template>

<script setup>
import { ref, computed } from 'vue'
import GameStarter from '../components/GameStarter.vue'
import { useGameStore } from '../stores/game'
import ThrowDice from '../components/ThrowDice.vue'
import QuestionView from './QuestionView.vue'
import Ordre from '../components/questions/Ordre.vue'
import Classement from '../components/questions/Classement.vue'
import Association from '../components/questions/Association.vue'
import MultipleChoice from '../components/questions/MultipleChoice.vue'
import SingleChoice from '../components/questions/SingleChoice.vue'
import QuestionType from '../components/questions/QuestionType.vue'


let open = ref()
const question = (i, j) => {
  // console.log(randDatas[i].qtype)
  // console.log(gameStore.datasApi[j-1].question)
  console.log(gameStore.datasApi[j-1])
  open.value = i
  // console.log(open.value)
  document.querySelector('#coucou').style.position = 'fixed'
  document.querySelector('#coucou').style.overflowY = 'hidden'
}

const closeModal = () => {
  open.value = null
  
}

const gameStore = useGameStore()

const test = (el) => {
  switch (el) {
    case "Théorie":
      return 'theme-theory'
      break;
    case "Domestique":
      return "theme-dom"
      break;
    case "Économique":
      return "theme-eco"
      break
    case "Publique / politique" :
      return "theme-pol"
      break
    default: 
    return 'check'
    break

  }
}


const datas = gameStore.datasApi

const shuffle = (array) => {
  const newArray = [...array]
  const l = newArray.length

  for (let start = 0; start < l; start++) {
    const randPos = Math.floor((newArray.length - start) * Math.random())
    const randItem = newArray.splice(randPos, 1)

    newArray.push(...randItem)
  }
  return newArray
}


const randDatas = shuffle(datas)

</script>

<style lang="scss">
.theme {
  &-theory{
    background-color:grey;
  }
  &-eco {
    background-color:green;
  }
  &-pol {
    background-color:blue;
  }
  &-dom {
    background-color:orange
  }
}

.start,
.end{
  background-color: black;
}

.start {
  grid-column-start: span 3;
}

.end {
  grid-column-end: span 3;
}

.board {
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: 10rem;
  width: 100%;
  grid-auto-flow: row;
  padding-inline-start: 0;
  gap: 3px;
}

.cell {
  color:whitesmoke;
  // width: 8rem;
  // height: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    filter:brightness(1.5);
  }
  font-size: 3rem;
}



details[open] {
  background-color:black;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  position: absolute;
  z-index: 42;
  pointer-events: none;
}

summary::marker {
  content:"";
}

details[open] summary {
  visibility: hidden;
}

details[open]::after{
  content: "x";
  position: absolute;
  right: 4rem;
  border: 3px solid white;
  padding: 0.7rem;
  border-radius: 50px;
}

details[open] summary::marker {
  color:red;
  display: none;
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
}

.question{
  top: 10rem;
  left: 10rem;
  right: 10rem;
  position: absolute;
  line-height: 3rem;
}

a.cell {
  width: 100%;
  height: 100%;
}

.modal {
  position: fixed;
  background-color:rgba(0, 0, 0, 0.8);
  height: 100vh;
  width: 100vw;
  top: 0;
  color: white;
  z-index:1;
  overflow-x:hidden;
  overflow-y: hidden;
  &--inner {
    width: 80%;
    height: 80%;
    position: absolute;
    top: 10%;
    left: 10%;
    background-color: white;
    color: black;
  }
  &--close {
    display: block;
    position: absolute;
    top: 1rem;
    right: 1rem;
    padding: 0.3rem 0.7rem;
    border: 1px solid;
    border-radius: 2rem;
    color: red;
    z-index:90001;
  }
}

</style>
<template>
<main>
  <h2>vue plateau</h2>
  <div>
    <p>Au tour de X de jouer</p>
    <button>coucou</button>
  </div>

  <ul class="board">
    <li class="cell start">Départ</li>
    <li v-for="(q, key) in randDatas" :class="test(q.theme)" class="cell">
      {{key+1}}
    </li>
    <li class="cell end">Arrivée</li>
  </ul>
</main>

</template>

<script setup>
import { ref, computed } from 'vue'
import GameStarter from '../components/GameStarter.vue'
import { useGameStore } from '../stores/game'



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

console.log(shuffle(datas))

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

</style>
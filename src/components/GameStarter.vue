<template>
<section>
  
  
    <div class="fieldsWrapperWrapper">
      <div class="fieldWrapper">
        <input type="checkbox" checked="checked" disabled/>
        <input type="text" class="name" placeholder="Joueur/équipe 1" v-model="newUser1" />
        <button @click="addUser" class="buttonAddPlayer">+</button>
      </div>
      <div class="fieldWrapper">
        <input type="checkbox" checked="checked" disabled />
        <input type="text" class="name" placeholder="Joueur/équipe 2" v-model="newUser2" />
        <button @click="addUser" class="buttonAddPlayer">+</button>
      </div>
      <div class="fieldWrapper">
        <input type="checkbox" :v-model="checkboxUser3" @click="unlockInput3"  ref="checkboxUser3" data-id="checkboxUser3" />
        <input type="text" class="name" placeholder="Joueur/équipe 3" :v-model="newUser3" disabled="true" ref="newUser3" />
        <button @click="addUser" class="buttonAddPlayer">+</button>
      </div>
      <div class="fieldWrapper">
        <input type="checkbox"  :v-model="checkboxUser4" @click="unlockInput4" ref="checkboxUser4" data-id="checkboxUser4"/>
        <input type="text" class="name" placeholder="Joueur/équipe 4" :v-model="newUser4" disabled="true" ref="newUser4"/>
        <button @click="addUser" class="buttonAddPlayer">+</button>
      </div>
      <div class="fieldWrapper">
        <input type="checkbox"  @click="unlockInput5" ref="checkboxUser5" data-id="checkboxUser5" />
        <input type="text" class="name" placeholder="Joueur/équipe 5" :v-model="newUser5" disabled="true" ref="newUser5"/>
        <button @click="addUser" class="buttonAddPlayer">+</button>
      </div>
  
    </div>
    <button @click="addUsers"> + </button>
  
    <div v-if="listMembers.length >= 0">
      <p v-for="(member, key) in listMembers" :key="key">{{key+1}}. {{member.name}}</p>
    </div>
    
  
</section>

</template>

<script setup>
import { ref, computed } from 'vue'
import { useGameStore } from '../stores/game'
const gameStore = useGameStore()


const checkboxUser3 = ref('')
const checkboxUser4 = ref('')
const checkboxUser5 = ref('')


const newUser1=ref('')
const newUser2=ref('')
const newUser3 = ref('')
const newUser4 = ref('')
const newUser5 = ref('')

const unlockInput3 = (ev) => {
  checkboxUser3.value.toggleAttribute("checked")
  newUser3.value.toggleAttribute("disabled")
  
}

const unlockInput4 = (ev) => {
  checkboxUser4.value.toggleAttribute("checked")
  newUser4.value.toggleAttribute("disabled")
  
}

const unlockInput5 = (ev) => {
  checkboxUser5.value.toggleAttribute("checked")
  newUser5.value.toggleAttribute("disabled")
  
}


const startGame = () => {
  alert(`démarrer la partie`)
}

const members = ["",""]
gameStore.addMembers(members)

const listMembers = computed( () => { return gameStore.allPlayers})



const addUser = () => {
  gameStore.addMember(newUser1.value)
  newUser1.value = ""
}

const addUsers = () => {
  gameStore.addMember({name: newUser1.value})
  gameStore.addMember({name: newUser2.value})
  // newUser3.value.length > 0 && gameStore.addMember({name: newUser3.value})
  console.log(newUser3)
  gameStore.addMember({name: newUser4.value})
  gameStore.addMember({name: newUser5.value})
  
  newUser1.value = ""
  newUser2.value = ""
  newUser3.value = ""
  newUser4.value = ""
  newUser5.value = ""
}

// const availableColors = ["red", "blue", "green", "yellow", "orange"]
console.log(listMembers)
</script>

<style scoped>
input {
  margin: 1rem 0.2rem;
}

.fieldsWrapperWrapper {
  font-size: inherit
}

.fieldWrapper {
  font-size: inherit;
}

.buttonAddPlayer {
  padding: 4.8px 9.6px;
}
</style>
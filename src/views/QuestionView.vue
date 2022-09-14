<template>

<nav class="nav-comp">
  <button @click="displayAssoc">afficher l'association</button>
  <button @click="displayClassement">Afficher le classement</button></nav>
  <component :is="activeComponent"></component>
</template>

<script setup>
  import { ref } from 'vue'
  import Classement from '../components/questions/classement.vue'
  import Association from '../components/questions/Association.vue'

  const activeComponent = ref(Classement)

  const displayAssoc = () => {
    activeComponent.value = Association
  }

  const displayClassement = () => {
    activeComponent.value = Classement
  }
  
  

</script>

<style>
.nav-comp {
  margin-top:3rem;
}
.nav-comp button {
  margin-right: 1rem;
}
</style>
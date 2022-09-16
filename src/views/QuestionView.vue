<template>

<nav class="nav-comp">
  <button v-for="(_, tab) in tabs" :key="tab" :class="['tab-button', {active: activeComponent === tab }]" @click="activeComponent = tab">{{tab}}</button>

  <button @click="questionType">AHHHHHHHH !</button>

</nav>
  
  

  <main>
    <component :is="tabs[activeComponent]"></component>
  </main>
</template>

<script setup>
  import { ref, defineProps } from 'vue'
  import Classement from '../components/questions/classement.vue'
  import Association from '../components/questions/Association.vue'
  import MultipleChoice from '../components/questions/MultipleChoice.vue'
  import SingleChoice from '../components/questions/SingleChoice.vue'
  import Ordre from '../components/questions/Ordre.vue'


  const props = defineProps(['qtype', 'qnumber'])
  const questionType = () => {
    console.log(props.qtype)
  }
  
  const correspondance = [{challenge:''}, {ordre:''}, {classement:''},{formUnique:''},{formMultiple:''},{liaison:''}]
  

  const activeComponent = ref('Ordre')
  const tabs = {
    Classement, Association, MultipleChoice, SingleChoice, Ordre
  }

  const displayAssoc = () => {
    activeComponent.value = Association
  }

  const displayClassement = () => {
    activeComponent.value = Classement
  }
  
  const displayRank = () => {
    activeComponent.value = Ordre
  }

  const displayMulti = () => {
    activeComponent.value = MultipleChoice
  }

  const displaySingle = () => {
    activeComponent.value = SingleChoice
  }

</script>

<style>
.nav-comp {
  margin-top:3rem;
}
.nav-comp button {
  margin: 1rem;
}
</style>
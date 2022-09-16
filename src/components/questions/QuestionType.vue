<template>

<!-- {{props.qnumber}}
{{props.qresponse.answers}} -->
<!-- <p v-for="(a, i) in props.qresponse.answers">{{i+1}}. {{a}}</p> -->
<Association v-if="(props.qtype=='liaison')" :qresponse="qresponse"></Association>
<Classement v-if="(props.qtype=='classement')" />
<MultipleChoice v-if="(props.qtype=='form-multiple')" :qresponse="qresponse" />
<SingleChoice v-if="(props.qtype=='form-unique')" :qresponse="qresponse" />
<Ordre v-if="(props.qtype=='ordre')" />
<Challenge  v-if="(props.qtype=='challenge')" />

</template>

<script setup>
import { ref, defineProps } from 'vue'
import Association from './Association.vue';
import Classement from './Classement.vue';
import MultipleChoice from './MultipleChoice.vue';
import SingleChoice from './SingleChoice.vue';
import Ordre from './Ordre.vue';
import Challenge from './Challenge.vue';

const props = defineProps(['qtype', 'qnumber', 'qresponse', 'qchallenge'])


</script>

<style>

</style>
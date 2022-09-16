<template>

  <div v-for="(a, i) in props.qresponse.answers2" id="yes-drop" :data-value="a" class="drag-drop drag-drop-assoc" >{{a}}</div>

<section class="section-wrapper-assoc">
  <div id="outer-dropzone" class="dropzone dropzone-assoc" v-for="(a, i) in props.qresponse.answers1">
    <div id="inner-dropzone" class="dropzone inner-dropzone-assoc" :data-container="'answer'+i+1">{{a}}</div>

  </div>
<!-- 
  <div id="outer-dropzone" class="dropzone dropzone-assoc">
    <div id="inner-dropzone" class="dropzone inner-dropzone-assoc" data-container="answerA">Avant 1960</div>
   </div>
  
   <div id="outer-dropzone" class="dropzone">
    
    <div id="inner-dropzone" class="dropzone inner-dropzone-assoc" data-container="answerB">
      Entre 1960 et 1980
    </div>
   </div>
  
   <div id="outer-dropzone" class="dropzone">
    <div id="inner-dropzone" class="dropzone inner-dropzone-assoc" data-container="answerC">Entre 1980 et 2000</div>
   </div>
  
  
     <div id="outer-dropzone" class="dropzone">
      <div id="inner-dropzone" class="dropzone inner-dropzone-assoc" data-container="answerD">Depuis 2000</div>
     </div> -->
  
</section>

   <button @click="checkAnswer">Valider</button>
</template>

<script setup>
import interact from 'interactjs'
import { ref,defineProps } from 'vue'

const props = defineProps(['qresponse'])

const answer1 = ref([])
const answer2 = ref([])
const answer3 = ref([])
const answer4 = ref([])


const checkAnswer = () => {
  answer1.value.includes('4') && answer2.value.includes('4') && answer3.value.includes('9') && answer4.value.includes('26')
  ? alert(`c'est gagné`)
  : alert(`c'est perdu`)
  console.log(answer1.value)
  console.log(answer2.value)
  console.log(answer3.value)
  console.log(answer4.value)
}
// target elements with the "draggable" class
interact('.draggable')
  .draggable({
    // enable inertial throwing
    inertia: true,
    // keep the element within the area of it's parent
    modifiers: [
      interact.modifiers.restrictRect({
        restriction: 'parent',
        endOnly: true
      })
    ],
    // enable autoScroll
    autoScroll: true,

    listeners: {
      // call this function on every dragmove event
      move: dragMoveListener,

      // call this function on every dragend event
      end (event) {
        var textEl = event.target.querySelector('p')

        textEl && (textEl.textContent =
          'moved a distance of ' +
          (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +
                     Math.pow(event.pageY - event.y0, 2) | 0))
            .toFixed(2) + 'px')
      }
    }
  })

function dragMoveListener (event) {
  var target = event.target
  // keep the dragged position in the data-x/data-y attributes
  var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
  var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

  // translate the element
  target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'

  // update the posiion attributes
  target.setAttribute('data-x', x)
  target.setAttribute('data-y', y)
}

// this function is used later in the resizing and gesture demos
window.dragMoveListener = dragMoveListener

/* The dragging code for '.draggable' from the demo above
 * applies to this demo as well so it doesn't have to be repeated. */

// enable draggables to be dropped into this
interact('.dropzone').dropzone({
  // only accept elements matching this CSS selector
  accept: '#yes-drop',
  // Require a 75% element overlap for a drop to be possible
  overlap: 0.75,

  // listen for drop related events:

  ondropactivate: function (event) {
    // add active dropzone feedback
    event.target.classList.add('drop-active')
  },
  ondragenter: function (event) {
    var draggableElement = event.relatedTarget
    var dropzoneElement = event.target

    // feedback the possibility of a drop
    dropzoneElement.classList.add('drop-target')
    draggableElement.classList.add('can-drop')
  },
  ondragleave: function (event) {
    // remove the drop feedback style
    event.target.classList.remove('drop-target')
    event.relatedTarget.classList.remove('can-drop')
  },
  ondrop: function (event) {
    const dragedElement = event.dragEvent.currentTarget.dataset.value
    const container = event.currentTarget.dataset.container 
    console.log(dragedElement)
    // console.log(`${dragedElement} a été mis dans ${container}`)
    switch(container) {
        case 'answer1':
          console.log(`${dragedElement} a été mis dans ${container}`)
          if(answer2.value === dragedElement) { answer2.value = []}
          if(answer3.value === dragedElement) { answer3.value = []}
          if(answer4.value === dragedElement) { answer4.value = []}
          answer1.value.push(dragedElement)
          console.log(answer1.value)
          break
        case 'answer2':
         console.log(`${dragedElement} a été mis dans ${container}`)
          if(answer1.value === dragedElement) { answer1.value = []}
          if(answer3.value === dragedElement) { answer3.value = []}
          if(answer4.value === dragedElement) { answer4.value = []}
          answer2.value.push(dragedElement)
          break
        case 'answer3':
          console.log(`${dragedElement} a été mis dans ${container}`)
          if(answer2.value === dragedElement) { answer2.value = []}
          if(answer1.value === dragedElement) { answer1.value = []}
          if(answer4.value === dragedElement) { answer4.value = []}
          answer3.value.push(dragedElement)
          break
        case 'answer4':
          console.log(`${dragedElement} a été mis dans ${container}`)
          if(answer2.value === dragedElement) { answer2.value = []}
          if(answer3.value === dragedElement) { answer3.value = []}
          if(answer1.value === dragedElement) { answer1.value = []}
          answer4.value.push(dragedElement)
          break

    }
  },
  ondropdeactivate: function (event) {
    // remove active dropzone feedback
    event.target.classList.remove('drop-active')
    event.target.classList.remove('drop-target')
  }
})

interact('.drag-drop')
  .draggable({
    inertia: true,
    modifiers: [
      interact.modifiers.restrictRect({
        restriction: 'parent',
        endOnly: true
      })
    ],
    autoScroll: true,
    // dragMoveListener from the dragging demo above
    listeners: { move: dragMoveListener }
  })

</script>

<style>

</style>
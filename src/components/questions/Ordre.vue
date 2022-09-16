<template>
  <section>
    <div id="yes-drop" class="drag-drop" data-value="La Russie">La Russie</div>
    <div id="yes-drop" class="drag-drop" data-value="La Chine">La Chine</div>
    <div id="yes-drop" class="drag-drop" data-value="Les États-Unis">Les États-Unis</div>
    <div id="yes-drop" class="drag-drop" data-value="L'Union européenne">L'Union européenne</div>
    <div id="yes-drop" class="drag-drop" data-value="L'Inde">L'Inde</div>

<section class="dropzone-wrapper dropzone-order">
  <div id="outer-dropzone" class="dropzone" data-id="container">
    <div id="inner-dropzone" class="dropzone" data-index="0">#1</div>
    <div id="inner-dropzone" class="dropzone" data-index="1">#2</div>
    <div id="inner-dropzone" class="dropzone" data-index="2">#3</div>
    <div id="inner-dropzone" class="dropzone" data-index="3">#4</div>
    <div id="inner-dropzone" class="dropzone" data-index="4">#5</div>
   </div>
</section>


 <button @click="checkAnswer"> Valider </button>
  </section>
</template>

<script setup>
import interact from "interactjs"

const answer = ['','','','','']

const checkAnswer = () => {
  answer[0] === "Les États-Unis" && answer[1] === "La Chine" && answer[2] === "L'Inde" && answer[3] === "L'Union européenne" & answer[4] === "La Russie" 
  ? alert(`C'est gagné`)
  : alert(`C'est perdu`)
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
    const i = parseInt(event.currentTarget.dataset.index)
    answer.splice(i, 1, dragedElement)
    // switch (i) {
    //   case 0:
    //     console.log(`${dragedElement} a été placé en ${i}`)
    //     answer.push()
    //     break
    //   case 1:
    //     console.log(`${dragedElement} a été placé en ${i}`)
    //     break
    //   case 2:
    //     console.log(`${dragedElement} a été placé en ${i}`)
    //     break
    //   case 3:
    //     console.log(`${dragedElement} a été placé en ${i}`)
    //     break
    //   case 4:
    //     console.log(`${dragedElement} a été placé en ${i}`)
    //     break
    // }
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
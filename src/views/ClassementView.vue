<template>

  <div id="yes-drop" class="drag-drop" data-value="airBnB"> airBnB </div>
  <div id="yes-drop" class="drag-drop" data-value="Blablacar"> Blablacar </div>
  <div id="yes-drop" class="drag-drop" data-value="Wikipedia"> Wikipedia </div>
  <div id="yes-drop" class="drag-drop" data-value="Uber Eats"> Uber Eats </div>
  <div id="yes-drop" class="drag-drop" data-value="Vinted"> Vinted </div>
  <div id="yes-drop" class="drag-drop" data-value="Paysans artisans"> Paysans artisans </div>
  <div id="yes-drop" class="drag-drop" data-value="New B"> New B </div>
  <div id="yes-drop" class="drag-drop" data-value="La ruche qui dit oui"> La ruche qui dit oui </div>
  
  <div id="outer-dropzone" class="dropzone">
    ⬇️ Économie collaborative de plateforme ⬇️
    <div id="inner-dropzone" class="dropzone" data-container="plateforme"></div>
   </div>
   <div id="outer-dropzone3" class="dropzone dropzone-between"> 
    <div id="inner-dropzone" class="dropzone dropzone-between" data-container="between"></div></div>
   <div id="outer-dropzone2" class="dropzone" >
    ⬇️ Économie sociale et solidaire ⬇️
    <div id="inner-dropzone" class="dropzone" data-container="solidaire"></div>
   </div>
   <button ref="validate" @click="checkAnswer"> Valider </button>
  </template>
  
  <script setup>
  import interact from 'interactjs'
  import { ref } from 'vue'
  
  /* The dragging code for '.draggable' from the demo above
   * applies to this demo as well so it doesn't have to be repeated. */
  const validate = ref(true)
  const plateforme = []
  const solidaire = []
  const between = []


  const checkAnswer = () => {
    plateforme.includes('airBnB') 
    && plateforme.includes('Uber Eats') 
    && plateforme.includes('Vinted') 
    && between.includes('Blablacar') 
    && solidaire.includes('Wikipedia') 
    && solidaire.includes('Paysans artisans') 
    && solidaire.includes('New B') 
    && solidaire.includes('La ruche qui dit oui')
    ? alert(`C'est gagné`)
    : alert(`c'est perdu`)
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
      // draggableElement.textContent = 'Dragged in'
    },
    ondragleave: function (event) {
      // remove the drop feedback style
      event.target.classList.remove('drop-target')
      event.relatedTarget.classList.remove('can-drop')
      // event.relatedTarget.textContent = 'Dragged out'
    },
    ondrop: function (event) {
      // event.relatedTarget.textContent = 'Dropped'
      // console.log(event.dragEvent.currentTarget.dataset.value + " a été placé dans " + event.currentTarget.dataset.container)
      // console.log(event.currentTarget.dataset.container)
     

      const dragedElement = event.dragEvent.currentTarget.dataset.value
      switch (event.currentTarget.dataset.container) {
        case 'between':
          if (between.includes(event.dragEvent.currentTarget.dataset.value)) {
            return
          } else {
          if(solidaire.includes(dragedElement)) {
            solidaire.splice(solidaire.findIndex((element) => element === dragedElement), 1)
          }
          if(plateforme.includes(dragedElement)) {
            plateforme.splice(plateforme.findIndex( (element) => element === dragedElement), 1)
          }
          console.log(dragedElement + " a été placé dans between")
          between.push( dragedElement)
          console.log("between : [" + between + "]")
          console.log("solidaire : [" + solidaire + "]")
          console.log("plateforme : [" + plateforme +"]")
          }
          break
        case 'plateforme':
          if(plateforme.includes(dragedElement)) {
            return
          } else {
            if(between.includes(dragedElement)) {
              between.splice(between.findIndex((element) => element === dragedElement), 1)
            }
            if(solidaire.includes(dragedElement)) {
            solidaire.splice(solidaire.findIndex((element) => element === dragedElement), 1)
            }
            console.log(dragedElement + " a été placé dans plateforme")
            plateforme.push(dragedElement)
            console.log("between : [" + between + "]")
            console.log("solidaire : [" + solidaire + "]")
            console.log("plateforme : [" + plateforme +"]")
          }
          break
        case 'solidaire':
          if (solidaire.includes(dragedElement)) {
            return
          } else {
          if(plateforme.includes(dragedElement)) {
            plateforme.splice(plateforme.findIndex( (element) => element === dragedElement), 1)
          }
          if(between.includes(dragedElement)) {
            between.splice(between.findIndex((element) => element === dragedElement), 1)
          }
          console.log(dragedElement + " a été placé dans solidaire")
          solidaire.push(dragedElement)
          console.log("between : [" + between + "]")
          console.log("solidaire : [" + solidaire + "]")
          console.log("plateforme : [" + plateforme +"]")
        }
          break
      }
      /* tentative pour réactiver bouton avec :disabled="!isActive" comme attribut (nécessite de déclarer const isActive=ref(false)*/
      // console.log(isActive.value)
      // solidaire.length + plateforme.length + between.length >= 1 && isActive.value === true
      // console.log(isActive.value)

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
    #outer-dropzone {
    height: 140px;
  }
  
  #inner-dropzone {
    height: 80px;
  }
  
  .dropzone {
    background-color: #bfe4ff;
    border: dashed 4px transparent;
    border-radius: 4px;
    margin: 10px auto 30px;
    padding: 10px;
    width: 80%;
    transition: background-color 0.3s;
  }
  
  .dropzone-between {
    border: dashed 4px transparent;
    border-radius: 4px;
    margin: 10px auto 30px;
    padding: 10px;
    width: 80%;
    transition: background-color 0.3s;
    background-color: #fff;
  }
  
  .drop-active {
    border-color: #aaa;
  }
  
  .drop-target {
    background-color: #29e;
    border-color: #fff;
    border-style: solid;
  }
  
  .drag-drop {
    display: inline-block;
    min-width: 40px;
    padding: 2em 0.5em;
    margin: 1rem 0 0 1rem;
  
    color: #fff;
    background-color: #29e;
    border: solid 2px #fff;
  
    touch-action: none;
    transform: translate(0px, 0px);
  
    transition: background-color 0.3s;
  }
  
  .drag-drop.can-drop {
    color: #000;
    background-color: #4e4;
  }
  </style>
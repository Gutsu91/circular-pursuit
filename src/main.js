import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import router from './routeur'

const app = createApp(App)

app.use(router)
app.use(createPinia())
app.mount('#app')

Array.prototype.shuffle = function () {
  let input = this;
  for (let i = input.length - 1; i >= 0; i--) {
    let randomindex = Math.floor(Math.random() * (i + 1));
    let itemAtIndex = input[randomIndex]

    input[randomIndex] = input[i]
    input[i] = itemAtIndex
  }

  return input
}
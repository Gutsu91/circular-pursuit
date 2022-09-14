import { createRouter, createWebHistory } from 'vue-router'
import ClassementView from '../views/ClassementView.vue'
import HomeView from '../views/HomeView.vue'
import DiceView from '../views/DiceView.vue'
import PlayerView from '../views/PlayerView.vue'
import PlateauView from '../views/PlateauView.vue'
import QuestionView from '../views/QuestionView.vue'





const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta : {
      title: 'Lancer une partie',
      content: 'Ceci est un serious game de type expérimental'
    }
  },
  {
    path: '/classement',
    name:"classement",
    component: ClassementView,
    meta : {
      title: 'Vue Classement'
    }
   },
   {
    path: '/dice',
    name:"dice",
    component: DiceView,
    meta : {
      title: 'Vue Dice'
    }
   },
   {
    path: "/player",
    name: "player",
    component: PlayerView,
    meta : {
      title: 'Vue Player'
    }
   },
   {
    path: "/plateau",
    name:"plateau",
    component: PlateauView,
    meta: {
      title: "Vue Plateau"
    }
   },
   {
    path: "/question",
    name: "question",
    component: QuestionView,
    meta: {
      title: "Vue Question"
    }
   }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes })

router.beforeEach((to, from, next) => {
 document.title = `Circular machin | ${to.meta.title}`
 next()
})

export default router

import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useGameStore = defineStore ( {
  id: 'game',
  state: () => ({
    players: ref(["test"]),
    datasApi: ref([])
  }),
  getters: {
    allPlayers: (state) => {
      return state.players
    },
    allDatasApi: (state) => {
      return state.datasApi
    }
  },
  actions: {
    addMembers(members) {
      this.players = [... members]
    },
    addMember(member) {
      this.players.push(member)
    },
    addMember1(member) {
      this.players.splice(0, 1, member)
    },
    addMember2(member) {
      this.players.splice(1, 1, member)
    },
    //fetch
     async getDatasApi() {
      const response = await axios.get('https://killer-cepegra.xyz/cockpit-ingrwf10/api/content/items/questions?sort=%7Bnumber%3A%22asc%22%7D')
      const results = [... response.data]
      results.forEach( (el) => {
        el.used = 'false'
      })
      this.datasApi = [... results]
    }
  }
})
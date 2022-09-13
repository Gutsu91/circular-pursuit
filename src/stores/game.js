import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useGameStore = defineStore ( {
  id: 'game',
  state: () => ({
    players: ref(["test"
                ])
  }),
  getters: {
    allPlayer: (state) => {
      return state.players
    }
  },
  actions: {
    addMembers(members) {
      this.players = [... members]
    },
    addMember(member) {
      this.players.push(member)
    }
  }
})
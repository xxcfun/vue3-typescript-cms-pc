import { createStore } from 'vuex'
import { IRootState } from '@/store/types'
import login from './login/login'

const store = createStore<IRootState>({
  state() {
    return {
      name: 'xuanxuan',
      age: 26
    }
  },
  mutations: {
    changName(state) {
      console.log(state)
    }
  },
  getters: {},
  actions: {},
  modules: {
    login
  }
})

export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}

export default store

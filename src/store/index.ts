import { createStore, Store, useStore as useVuexStore } from 'vuex'
import { IRootState, IStoreType } from '@/store/types'
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

export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store

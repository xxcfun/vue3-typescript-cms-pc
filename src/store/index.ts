import { createStore, Store, useStore as useVuexStore } from 'vuex'
import { IRootState, IStoreType } from '@/store/types'
import login from './login/login'
import system from './main/system/system'
import product from './main/product/product'
import { getPageListData } from '@/service/main/system/system'

const store = createStore<IRootState>({
  state() {
    return {
      name: 'xuanxuan',
      age: 26,
      entireDepartment: [],
      entireRole: []
    }
  },
  mutations: {
    changeEntireDepartment(state, departmentList) {
      state.entireDepartment = departmentList
    },
    changeEntireRole(state, roleList) {
      state.entireRole = roleList
    }
  },
  getters: {},
  actions: {
    async getInitialDataAction({ commit }) {
      // 请求部门和角色数据
      const departmentResult = await getPageListData('/department/list', {
        offset: 0,
        size: 1000
      })
      const { list: departmentList } = departmentResult.data
      const roleResult = await getPageListData('/role/list', {
        offset: 0,
        size: 1000
      })
      const { list: roleList } = roleResult.data
      // 保存数据
      commit('changeEntireDepartment', departmentList)
      commit('changeEntireRole', roleList)
    }
  },
  modules: {
    login,
    system,
    product
  }
})

export function setupStore() {
  store.dispatch('login/loadLocalLogin')
  store.dispatch('getInitialDataAction')
}

export function useStore(): Store<IStoreType> {
  return useVuexStore()
}

export default store

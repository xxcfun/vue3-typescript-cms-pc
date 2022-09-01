import { Module } from 'vuex'

import {
  getCategoryGoodsCount,
  getCategoryGoodsSale,
  getCategoryGoodsFavor,
  getAddressGoodsSale
} from '@/service/main/analysis/dashboard'

import { IRootState } from '@/store/types'
import { IDashboardState } from '@/store/main/analysis/types'

const dashboardModule: Module<IDashboardState, IRootState> = {
  namespaced: true,
  state() {
    return {
      categoryGoodsCount: [],
      categoryGoodsSale: [],
      categoryGoodsFavor: [],
      addressGoodsSale: []
    }
  },
  mutations: {
    changeCategoryGoodsCount(state, categoryGoodsCount: any[]) {
      state.categoryGoodsCount = categoryGoodsCount
    },
    changeCategoryGoodsSale(state, categoryGoodsSale: any[]) {
      state.categoryGoodsSale = categoryGoodsSale
    },
    changeCategoryGoodsFavor(state, categoryGoodsFavor: any[]) {
      state.categoryGoodsFavor = categoryGoodsFavor
    },
    changeAddressGoodsSale(state, addressGoodsSale: any[]) {
      state.addressGoodsSale = addressGoodsSale
    }
  },
  getters: {},
  actions: {
    async getDashboardDataAction({ commit }) {
      const categoryCountResult = await getCategoryGoodsCount()
      commit('changeCategoryGoodsCount', categoryCountResult.data)

      const categorySaleResult = await getCategoryGoodsSale()
      commit('changeCategoryGoodsSale', categorySaleResult.data)

      const categoryFavorResult = await getCategoryGoodsFavor()
      commit('changeCategoryGoodsFavor', categoryFavorResult.data)

      const addressGoodsResult = await getAddressGoodsSale()
      commit('changeAddressGoodsSale', addressGoodsResult.data)
    }
  }
}

export default dashboardModule

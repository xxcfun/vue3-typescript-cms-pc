<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="7">
        <xx-card title="分类商品数量（饼图）">
          <pie-echart :pieData="categoryGoodsCount" />
        </xx-card>
      </el-col>
      <el-col :span="10">
        <xx-card title="不同城市商品销量">
          <map-echart :mapData="addressGoodsSale" />
        </xx-card>
      </el-col>
      <el-col :span="7">
        <xx-card title="分类商品数量（玫瑰图）">
          <rose-echart :roseData="categoryGoodsCount" />
        </xx-card>
      </el-col>
    </el-row>

    <el-row :gutter="10" class="content-row">
      <el-col :span="12">
        <xx-card title="分类商品的销量">
          <line-echart v-bind="categoryGoodsSale" />
        </xx-card>
      </el-col>
      <el-col :span="12">
        <xx-card title="分类商品的收藏量">
          <bar-echart v-bind="categoryGoodsFavor" />
        </xx-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'

import XxCard from '@/base-ui/card'
import { PieEchart, RoseEchart, LineEchart, BarEchart, MapEchart } from '@/components/page-echarts'

export default defineComponent({
  name: 'dashboard',
  components: {
    XxCard,
    PieEchart,
    RoseEchart,
    LineEchart,
    BarEchart,
    MapEchart
  },
  setup() {
    const store = useStore()
    // 请求数据
    store.dispatch('dashboard/getDashboardDataAction')

    // 获取数据
    // 分类商品数量（饼图） / 分类商品数量（玫瑰图）
    const categoryGoodsCount = computed(() => {
      return store.state.dashboard.categoryGoodsCount.map((item: any) => {
        return { name: item.name, value: item.goodsCount }
      })
    })

    // 分类商品销量
    const categoryGoodsSale = computed(() => {
      const xLabels: string[] = []
      const values: any[] = []
      const categoryGoodsSale = store.state.dashboard.categoryGoodsSale
      for (const item of categoryGoodsSale) {
        xLabels.push(item.name)
        values.push(item.goodsCount)
      }

      return { xLabels, values }
    })

    // 分类商品的收藏量
    const categoryGoodsFavor = computed(() => {
      const xLabels: string[] = []
      const values: any[] = []
      const categoryGoodsFavor = store.state.dashboard.categoryGoodsFavor
      for (const item of categoryGoodsFavor) {
        xLabels.push(item.name)
        values.push(item.goodsFavor)
      }

      return { xLabels, values }
    })

    // 不同城市商品销量
    const addressGoodsSale = computed(() => {
      return store.state.dashboard.addressGoodsSale.map((item: any) => {
        return { name: item.address, value: item.count }
      })
    })

    return {
      categoryGoodsCount,
      categoryGoodsSale,
      categoryGoodsFavor,
      addressGoodsSale
    }
  }
})
</script>

<style scoped>
.content-row {
  margin-top: 15px;
}
</style>

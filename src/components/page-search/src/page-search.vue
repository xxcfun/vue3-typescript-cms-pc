<template>
  <div class="page-search">
    <xx-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h3 class="header">高级检索</h3>
      </template>
      <template #footer>
        <div class="header-btns">
          <el-button icon="RefreshRight" @click="handleResetClick">重置</el-button>
          <el-button icon="Search" type="primary" @click="handleQueryClick">搜索</el-button>
        </div>
      </template>
    </xx-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import XxForm from '@/base-ui/form'

export default defineComponent({
  name: 'page-search',
  props: {
    searchFormConfig: {
      type: Object,
      required: true
    }
  },
  components: {
    XxForm
  },
  emits: ['resetBtnClick', 'queryBtnClick'],
  setup(props, { emit }) {
    // 双向绑定的属性应该是由配置文件的field来决定
    const formItems = props.searchFormConfig?.formItems ?? []
    const formOriginData: any = {}
    for (const item of formItems) {
      formOriginData[item.field] = ''
    }

    const formData = ref(formOriginData)

    // 重置操作 逐个重置formData里面的值
    const handleResetClick = () => {
      for (const key in formOriginData) {
        formData.value[`${key}`] = formOriginData[key]
      }
      emit('resetBtnClick')
    }

    // 搜索操作
    const handleQueryClick = () => {
      emit('queryBtnClick', formData.value)
    }

    return {
      formData,
      handleResetClick,
      handleQueryClick
    }
  }
})
</script>

<style scoped lang="less">
.page-search {
  .header {
    color: #333333;
    text-align: left;
    padding: 0 0 0 20px;
    margin: 10px 0;
  }

  .header-btns {
    text-align: right;
    padding: 0 30px 20px 0;
  }
}
</style>

<template>
  <div class="page-search">
    <xx-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h3 class="header">高级检索</h3>
      </template>
      <template #footer>
        <div class="header-btns">
          <el-button
            ><el-icon><RefreshRight /></el-icon>重置</el-button
          >
          <el-button type="primary"
            ><el-icon><Search /></el-icon>搜索</el-button
          >
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
  setup() {
    const formData = ref({
      id: '',
      name: '',
      password: '',
      sport: '',
      createTime: ''
    })
    return {
      formData
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

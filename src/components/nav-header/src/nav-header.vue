<template>
  <div class="nav-header">
    <el-icon class="fold-menu" @click="handleFoldClick">
      <template v-if="isFold">
        <Expand />
      </template>
      <template v-else>
        <Fold />
      </template>
    </el-icon>
    <div class="content">
      <xx-breadcrumb :breadcrumbs="breadcrumbs" />
      <user-info />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { useStore } from '@/store'
import userInfo from './cpns/user-info.vue'
import XxBreadcrumb from '@/base-ui/breadcrumb'
import { useRoute } from 'vue-router'
import { pathMapBreadcrumbs } from '@/utils/map-menus'

export default defineComponent({
  components: {
    userInfo,
    XxBreadcrumb
  },
  emits: ['foldChange'],
  setup(prop, { emit }) {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }

    // 面包屑的数组
    const store = useStore()
    const breadcrumbs = computed(() => {
      const userMenus = store.state.login.userMenus
      const route = useRoute()
      const currentPath = route.path
      return pathMapBreadcrumbs(userMenus, currentPath)
    })

    return {
      isFold,
      handleFoldClick,
      breadcrumbs
    }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  width: 100%;
  display: flex;

  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }

  .content {
    display: flex;
    padding: 0 20px;
    justify-content: space-between;
    flex: 1;
    align-items: center;
  }
}
</style>

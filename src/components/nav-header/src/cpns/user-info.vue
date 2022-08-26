<template>
  <div class="user-info">
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar
          size="small"
          src="https://upload.jianshu.io/users/upload_avatars/20794016/a6dca44e-cce7-48b5-b53e-0773fc29d5b7.png?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240"
        ></el-avatar>
        <span>{{ name }}</span>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>用户信息</el-dropdown-item>
          <el-dropdown-item>系统管理</el-dropdown-item>
          <el-dropdown-item divided @click="handleExitClick">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'
import { useRouter } from 'vue-router'
import localCache from '@/utils/cache'

export default defineComponent({
  name: 'user-info',
  setup() {
    const store = useStore()
    const router = useRouter()
    const name = computed(() => store.state.login.userInfo.name)

    const handleExitClick = () => {
      localCache.deleteCache('token')
      router.push('/main')
    }

    return {
      name,
      handleExitClick
    }
  }
})
</script>

<style scoped lang="less">
.el-dropdown-link {
  display: flex;
  align-items: center;
  cursor: pointer;

  span {
    padding-left: 10px;
  }
}
</style>

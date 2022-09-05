<template>
  <div class="login-phone">
    <el-form label-width="70px" :rules="rules" :model="phone" ref="formRef">
      <el-form-item label="手机号" prop="number">
        <el-input v-model="phone.number" />
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <div class="code">
          <el-input v-model="phone.code" />
          <el-button type="primary" class="button">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { rules } from '../config/phone-config'
import { ElForm } from 'element-plus/lib/components'

export default defineComponent({
  setup() {
    const phone = reactive({
      number: '',
      code: ''
    })

    const formRef = ref<InstanceType<typeof ElForm>>()

    const loginAction = () => {
      console.log('手机号登录模块待完善，目前没有具体相关功能')
    }

    return {
      phone,
      rules,
      formRef,
      loginAction
    }
  }
})
</script>

<style scoped>
.code {
  display: flex;
}
.button {
  margin-left: 10px;
}
</style>

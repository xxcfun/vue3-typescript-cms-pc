<template>
  <div class="user">
    <xx-form v-bind="searchFormConfig" />
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import XxForm from '@/base-ui/form'
import { searchFormConfig } from '@/views/main/system/user/config/search.config'

export default defineComponent({
  name: 'user',
  components: {
    XxForm
  },
  setup() {
    return {
      searchFormConfig
    }
  }
})
</script>

<style scoped></style>

import { createApp } from 'vue'
import { globalRegister } from '@/global'
import 'normalize.css'
import '@/assets/css/index.less'

import xxRequest from '@/service'

import App from './App.vue'

import router from '@/router'
import store from '@/store'

createApp(App).use(globalRegister).use(store).use(router).mount('#app')

xxRequest.request({
  url: '/home/multidata',
  method: 'GET',
  headers: {},
  interceptors: {
    requestInterceptor: (config) => {
      console.log('单独请求的config')
      if (config && config.headers) config.headers['token'] = '123'
      return config
    },
    responseInterceptor: (res) => {
      console.log('单独响应的response')
      return res
    }
  }
})

interface DataType {
  data: any
  returnCode: string
  success: boolean
}

xxRequest
  .get<DataType>({
    url: '/home/multidata',
    showLoading: false
  })
  .then((res) => {
    console.log(res.data)
    console.log(res.returnCode)
    console.log(res.success)
  })

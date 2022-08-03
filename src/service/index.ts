// service 统一出口
import XXRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'
import { XXRequestConfig } from './request/type'
import localCache from '@/utils/cache'

const xxRequest = new XXRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config: XXRequestConfig) => {
      // 携带token的拦截
      const token = localCache.getCache('token')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    requestInterceptorCache: (error) => {
      return error
    },
    responseInterceptor: (res) => {
      return res
    },
    responseInterceptorCache: (error) => {
      return error
    }
  }
})

export default xxRequest

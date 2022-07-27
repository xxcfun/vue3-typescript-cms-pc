// service 统一出口
import XXRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'
import { XXRequestConfig } from './request/type'

const xxRequest = new XXRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config: XXRequestConfig) => {
      // 携带token的拦截
      const token = ''
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      console.log('请求的拦截')
      return config
    },
    requestInterceptorCache: (error) => {
      console.log('请求错误的拦截')
      return error
    },
    responseInterceptor: (res) => {
      console.log('响应的拦截')
      return res
    },
    responseInterceptorCache: (error) => {
      console.log('响应错误的拦截')
      return error
    }
  }
})

export default xxRequest

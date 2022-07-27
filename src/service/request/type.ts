import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface XXRequestInterceptors<T = AxiosResponse> {
  // 请求拦截
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCache?: (error: any) => any
  // 响应拦截
  responseInterceptor?: (res: T) => T
  responseInterceptorCache?: (error: any) => any
}

export interface XXRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: XXRequestInterceptors<T>
  showLoading?: boolean
  headers?: any
}

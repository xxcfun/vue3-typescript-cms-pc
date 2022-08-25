import { ILoginState } from '@/store/login/types'
import { ISystemState } from '@/store/main/system/types'
import { IProductState } from '@/store/main/product/types'

export interface IRootState {
  name: string
  age: number
  entireDepartment: any[]
  entireRole: any[]
}

export interface IRootWithModule {
  login: ILoginState
  system: ISystemState
  product: IProductState
}

// 交叉类型
export type IStoreType = IRootState & IRootWithModule

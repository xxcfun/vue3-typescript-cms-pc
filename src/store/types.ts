import { ILoginState } from '@/store/login/types'
import { ISystemState } from '@/store/main/system/types'
import { IProductState } from '@/store/main/product/types'
import { IDashboardState } from '@/store/main/analysis/types'

export interface IRootState {
  name: string
  age: number
  entireDepartment: any[]
  entireRole: any[]
  entireMenu: any[]
}

export interface IRootWithModule {
  login: ILoginState
  system: ISystemState
  product: IProductState
  dashboard: IDashboardState
}

// 交叉类型
export type IStoreType = IRootState & IRootWithModule

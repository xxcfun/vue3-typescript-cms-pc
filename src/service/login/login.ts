import xxRequest from '@/service'

import { IAccount, ILoginResult, IDataType } from '@/service/login/types'

enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/', // 用法：/users/{id}
  UserMenus = '/role/' // 用法：/role/{id}/menu
}

export function accountLoginRequest(account: IAccount) {
  return xxRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}

export function requestUserInfoById(id: number) {
  return xxRequest.get<IDataType>({
    url: LoginAPI.LoginUserInfo + id,
    showLoading: false
  })
}

export function requestUserMenusByRoleId(id: number) {
  return xxRequest.get<IDataType>({
    url: LoginAPI.UserMenus + id + '/menu',
    showLoading: false
  })
}

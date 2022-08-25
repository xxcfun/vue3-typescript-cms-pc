import xxRequest from '@/service'

import { IDataType } from '@/service/types'

// 获取列表数据请求
export function getPageListData(url: string, queryInfo: any) {
  return xxRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}

// 删除数据请求
export function deletePageData(url: string) {
  return xxRequest.delete<IDataType>({
    url: url
  })
}

// 创建数据请求
export function createPageData(url: string, createData: any) {
  return xxRequest.post<IDataType>({
    url: url,
    data: createData
  })
}

// 更改数据请求
export function editPageData(url: string, editData: any) {
  return xxRequest.patch<IDataType>({
    url: url,
    data: editData
  })
}

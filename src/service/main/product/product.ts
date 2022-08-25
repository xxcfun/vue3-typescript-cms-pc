import xxRequest from '@/service'

import { IDataType } from '@/service/types'

export function getPageListData(url: string, queryInfo: any) {
  return xxRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}

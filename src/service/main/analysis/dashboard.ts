import xxRequest from '@/service'

enum Dashboard {
  categoryGoodsCount = '/goods/category/count',
  categoryGoodsSale = '/goods/category/sale',
  categoryGoodsFavor = '/goods/category/favor',
  addressGoodsSale = '/goods/address/sale'
}

export function getCategoryGoodsCount() {
  return xxRequest.get({
    url: Dashboard.categoryGoodsCount
  })
}
export function getCategoryGoodsSale() {
  return xxRequest.get({
    url: Dashboard.categoryGoodsSale
  })
}
export function getCategoryGoodsFavor() {
  return xxRequest.get({
    url: Dashboard.categoryGoodsFavor
  })
}
export function getAddressGoodsSale() {
  return xxRequest.get({
    url: Dashboard.addressGoodsSale
  })
}

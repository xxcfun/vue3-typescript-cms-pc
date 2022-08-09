import { RouteRecordRaw } from 'vue-router'

export function mapMenusToRouters(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []
  // 1.先去加载默认所有的routes
  const allRoutes: RouteRecordRaw[] = []
  // 加载路由文件
  const routeFiles = require.context('../router/main', true, /\.ts/)
  console.log(routeFiles.keys())
  // 遍历生成映射文件
  routeFiles.keys().forEach((key) => {
    const route = require('../router/main' + key.split('.')[1])
    allRoutes.push(route.default)
  })
  console.log(allRoutes)

  // 2.根据菜单获取需要添加的routes
  const _recurseGetRoute = (menus: any) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => {
          return route.path === menu.url
        })
        if (route) routes.push(route)
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }

  _recurseGetRoute(userMenus)

  return routes
}

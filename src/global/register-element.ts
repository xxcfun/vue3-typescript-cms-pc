import { App } from 'vue'
import 'element-plus/theme-chalk/index.css'
import { ElButton, ElTable } from 'element-plus/lib'

const components = [ElButton, ElTable]

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}

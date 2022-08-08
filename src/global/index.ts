import { App } from 'vue'
import registerElement from './register-element'
import registerElementIcons from './register-element-icons'

export function globalRegister(app: App): void {
  app.use(registerElement).use(registerElementIcons)
}

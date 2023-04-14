import { App } from 'vue'

import components  from './components'

export * from './components'

export * from './context-menu'
export * from './custom-modal'

export default {
    install: (app: App) => {
        Object.values(components).forEach((comp) => {
            console.log('components', comp.name, 123456, comp)
            app.component(comp.name, comp)
        })
    }
}
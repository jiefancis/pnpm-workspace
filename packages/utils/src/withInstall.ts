import { App } from 'vue'
import type { AppContext, Plugin } from 'vue'

export type SFCWithInstall<T> = T & Plugin

export const withInstall = <T>(comp: T) => {

    (comp as SFCWithInstall<T>).install = (app: App): void => {
        app.component(comp.name, comp)
    }

    return comp as SFCWithInstall<T>
}


  
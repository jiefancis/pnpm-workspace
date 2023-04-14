import { withInstall } from '@apollojie/utils'
import contextMenu from './src/context-menu.vue'

export * from './src/context-menu'

export const ContextMenu = withInstall(contextMenu)
export default ContextMenu


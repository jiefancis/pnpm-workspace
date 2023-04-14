// GlobalComponents for Volar
declare module '@vue/runtime-core' {
    export interface GlobalComponents {
      CustomModal: typeof import('@apollojie/components')['CustomModal']
      ContextMenu: typeof import('@apollojie/components')['ContextMenu']
    }
  
  }

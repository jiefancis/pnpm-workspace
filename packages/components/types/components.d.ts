declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    ContextMenu: typeof import('@apollojie/components')['ContextMenu']
    CustomModal: typeof import('@apollojie/components')['CustomModal']
  }
}
export {};

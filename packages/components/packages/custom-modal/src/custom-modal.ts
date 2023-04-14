import { Prop } from 'vue'
import { ExtractPropTypes } from 'vue'

export interface Axis {
    x: number
    y: number
  }
  
export interface ContextMenuItem {
    label: string
    icon?: string
    disabled?: boolean
    handler?: (...arg: any) => any
    divider?: boolean
    children?: ContextMenuItem[]
}
export interface Options {
    event: MouseEvent
    icon?: string
    styles?: any
    items?: ContextMenuItem[]
}
  
export interface Instance extends Props {
    $el: HTMLDivElement
}
  
export type Props = {
    resolve: (...arg: any) => void
    event: MouseEvent
    icon?: string
    styles?: any
    items: ContextMenuItem[]
    customEvent: MouseEvent
    axis: Axis
    width: number
    showIcon?: boolean
}

export const contextMenuProps = {
    width: {
      type: Number,
      default: 180,
    },
    customEvent: {
      type: Object,
      default: null,
    } as Prop<Event>,
    // 样式
    styles: {
      type: Object,
      default: null,
    } as Prop<any>,
    showIcon: {
      // 是否显示icon
      type: Boolean,
      default: true,
    } as Prop<boolean>,
    axis: {
      // 鼠标右键点击的位置
      type: Object,
      default() {
        return { x: 0, y: 0 }
      },
    } as Prop<Axis>,
    items: {
      // 最重要的列表，没有的话直接不显示
      type: Array,
      default() {
        return []
      },
    } as Prop<ContextMenuItem[]>,
    resolve: {
      type: Function,
      default: null,
    } as Prop<any>,
}
  
export type ContextMenuProps = ExtractPropTypes<typeof contextMenuProps>
import { PropType, ExtractPropTypes } from 'vue'
export const aCustomModalProps = {
    title: {
      type: String as PropType<string>,
      default: '标题',
    },
    visible: {
      // 弹出显隐
      type: Boolean as PropType<boolean>,
      default: false,
    },
    destroyOnClose: {
      // 关闭后销毁
      type: Boolean as PropType<boolean>,
      default: false,
    },
    footer: {
      type: String,
      default: 'I am footer',
    },
    confirmLoading: {
      // 确定按钮 loading
      type: Boolean as PropType<boolean>,
      default: false,
    },
    centered: {
      // 垂直居中展示 Modal
      type: Boolean as PropType<boolean>,
      default: false,
    },
}

export type ACustomModalProps = ExtractPropTypes<typeof aCustomModalProps>
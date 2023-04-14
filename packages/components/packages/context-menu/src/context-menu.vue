<template>
    <template v-if="destroyOnClose && !visible"></template>
    <template v-else>
      <teleport to="body">
        <div ref="modalRootRef" class="ant-modal-root custom-modal">
          <transition key="mask" v-bind="maskTransitionProps">
            <div v-show="visible" class="ant-modal-mask"></div>
          </transition>
          <transition key="dialog" v-bind="dialogTransitionProps">
            <div v-if="visible" ref="modalWrapRef" class="ant-modal-wrap">
              <div ref="dragRef" class="ant-modal">
                <div class="ant-modal-content">
                  <div ref="titleRef" class="ant-modal-header">
                    <span class="ant-modal-title">{{ title }}</span>
                    <div class="ant-modal-operate">
                      <button
                        ref="minRef"
                        type="button"
                        class="min"
                        title="最小化"
                      ></button>
                      <button
                        ref="maxRef"
                        type="button"
                        class="max"
                        title="最大化"
                      ></button>
                      <button
                        ref="revertRef"
                        type="button"
                        class="revert"
                        title="还原"
                      ></button>
                      <button
                        type="button"
                        class="close"
                        title="关闭"
                        @click="closeModal"
                      ></button>
                    </div>
                  </div>
                  <div ref="resizeLRef" class="resizeL"></div>
                  <div ref="resizeTRef" class="resizeT"></div>
                  <div ref="resizeRRef" class="resizeR"></div>
                  <div ref="resizeBRef" class="resizeB"></div>
                  <div ref="resizeLTRef" class="resizeLT"></div>
                  <div ref="resizeTRRef" class="resizeTR"></div>
                  <div ref="resizeBRRef" class="resizeBR"></div>
                  <div ref="resizeLBRef" class="resizeLB"></div>
                  <div ref="modalBody" class="ant-modal-body">
                    <slot>
                      ① 窗口可以拖动；<br />
                      ② 窗口可以通过八个方向改变大小；<br />
                      ③ 窗口可以最小化、最大化、还原、关闭；<br />
                      ④ 限制窗口最小宽度/高度。
                    </slot>
                  </div>
                  <div
                    v-if="footer != null"
                    ref="modalFooter"
                    class="ant-modal-footer"
                  >
                    <slot name="footer">
                      <div>
                        <a-button @click="closeModal">取 消</a-button>
                        <a-button
                          type="primary"
                          :loading="confirmLoading"
                          @click="closeModal"
                          >确 认</a-button
                        >
                      </div>
                    </slot>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </teleport>
    </template>
  </template>
  
  <script lang="ts">
  import { defineComponent, PropType, SetupContext, Transition } from 'vue'
  import { Button } from 'ant-design-vue'
  import useModal from './useModal'
  import { aCustomModalProps } from './context-menu'
  
  export default defineComponent({
    name: 'ContextMenu',
    components: {
      Transition,
      AButton: Button,
    },
    props: aCustomModalProps,
    emits: ['update:visible'],
    setup(props, ctx: any) {
      return useModal(props, ctx)
    },
  })
  </script>
  
  <style lang="less">
  @import './style';
  </style>
  
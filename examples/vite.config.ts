import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // build: {
  //   rollupOptions: {
  //     external: (id: string) => {
  //       return (
  //         /^ant-design-vue/.test(id) ||
  //         /^@apollojie\/components/.test(id)
  //       )
  //     }
  //   }
  // }
})

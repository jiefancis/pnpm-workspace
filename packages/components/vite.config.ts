import { defineConfig } from 'vite'
import { resolve, join } from 'path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import dts from 'vite-plugin-dts'

const r = (path: string) => resolve(__dirname, path)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    dts({
      entryRoot: "packages",
      tsConfigFilePath: './tsconfig.json',
      outputDir: 'dist',
      aliasesExclude: ["@apollojie/utils"]
    })
  ],
  resolve: {
    alias: [
      { find: /^@apollojie\/utils/, replacement: join(__dirname, '../utils/src/index.ts') },
    ]
  },
  build: {
    lib: {
      entry: r('./packages/index'),
      fileName: 'b-ui',
      name: 'BUI'
    },
    rollupOptions: {
      external(id: string){
        return (
          /^vue/.test(id) ||
          /^ant-design-vue/.test(id) || 
          /^@apollojie\/utils/.test(id)
        );
      },
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})

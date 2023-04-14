import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
    plugins: [
        dts({
            entryRoot: "src",
            outputDir: 'dist',
            tsConfigFilePath: './tsconfig.json'
        })
    ],
    build: {
        lib: {
            entry: 'src/index.ts',
            name: 'BuiUtils',
            fileName: 'bui-utils'
        }
    }
})
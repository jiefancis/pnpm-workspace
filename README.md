1. 目录结构
  - examples 调试
  - packages
    - components 组件编写
    - utils 工具库
    


  


1. npm包的样式文件也需要在pakeage.json中显式导出，不会有会报错！！！

[plugin:vite:import-analysis] Missing "./dist/style.css" export in "penk-ui" package
You can also disable this overlay by setting server.hmr.overlay to false in vite.config.js.


2. No matching export in "node_modules/.store/vue@3.2.47/node_modules/vue/dist/vue.runtime.esm-bundler.js" for import "default"

3. Cannot assign to "e" because it is a constant

4. "export 'default' (imported as 'T1') was not found in 'vue'


5. 声明文件，在项目打包时，提示找不到声明文件
package.json 
"typings": "index.d.ts",是否有效



6. 
https://juejin.cn/post/7156585981611606047#heading-3
只能供js项目使用
没有按需加载

## pnpm monorepo

7. @apollojie/utils
在packages/components package.json中指定 @apollojie/utils包版本 = 1.0.1，而不是本地版本时，重新install会自动更新为workspace:1.0.1。

8. vite-plugin-dts生成的.d.ts文件中引用的@apollojie/utils的路径转成了相对路径，如何不转？

aliasesExclude  设置在转换别名时哪些路径需要排除

dts({
      entryRoot: "packages",
      tsConfigFilePath: './tsconfig.json',
      outputDir: 'dist',
      aliasesExclude: ["@apollojie/utils"]
      
    })


9. tsconfig.json在根目录下与在各个项目下的配置

根目录

{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "strict": true,
    "jsx": "preserve",
    "moduleResolution": "Node",
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "importHelpers": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "resolveJsonModule": true,
    "sourceMap": true,
    "useDefineForClassFields": true,
    "baseUrl": ".",
    "lib": ["ESNext", "DOM"],
    "paths": {
      // 内部模块都指向 src/index.ts, 会有更好的代码跳转体验. "@editor/*": ["packages/editor/src/*"],
      "@apollojie/utils": ["packages/utils/src"]
    },
    "types": [
      "node",
      "vite/client",
    ],
  },
  "exclude": [
    "**/dist/**/*",
    "**/node_modules/**/*",
  ],
}



## 项目
{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "baseUrl": "../..",
  },
}

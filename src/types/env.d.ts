/// <reference types="vite/client" />

/// .vue文件声明类型
declare module '*.vue' {
  import { ComponentOptions } from 'vue'
  const componentOptions: ComponentOptions
  export default componentOptions
}

interface ImportMetaEnv {
  VITE_APP_TITLE: string
  VITE_APP_PORT: number
  VITE_APP_BASE_API: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VITE_API_URL: string
    readonly AMAZON_BASE_API: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
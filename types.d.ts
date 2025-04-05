declare global {
    interface ImportMeta {
        readonly env: {
            VITE_APP_API_BASE_URL: string
        }
    }
}

export {};
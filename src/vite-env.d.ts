/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_NEWS_API_KEY: string;
    // add more environment variables here if needed
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  
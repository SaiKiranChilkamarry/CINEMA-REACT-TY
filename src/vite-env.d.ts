/// <reference types="vite/client" />
interface ImportMetaEnv {
  VITE_API_KEY: string;  // This will be your custom environment variable
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

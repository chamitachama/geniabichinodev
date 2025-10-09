import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
    tsconfigPaths(),
  
  ],
  alias: {
    "@": path.resolve(__dirname, "./src"),
    "@components": path.resolve(__dirname, "./src/components"),
    "@pages": path.resolve(__dirname, "./src/pages"),
  },
})

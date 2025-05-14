import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "node:path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@asset": path.resolve(__dirname, "./src/asset"),
      "@component": path.resolve(__dirname, "./src/component"),
      "@store": path.resolve(__dirname, "./src/store"),
      "@page": path.resolve(__dirname, "./src/page"),
    },
  },
  plugins: [react()],
});
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwind from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwind(), // este plugin integra tailwind con Vite y hace el build/purge correcto
  ],
});

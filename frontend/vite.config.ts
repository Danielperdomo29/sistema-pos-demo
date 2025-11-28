import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // no añadimos postcss/tailwind aquí porque usamos CDN Tailwind (dev quickstart).
});

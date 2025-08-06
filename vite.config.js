import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vercel from "vite-plugin-vercel";
import path from "path";

export default defineConfig({
  plugins: [react(), vercel()],
  server: {
    port: 5173,
    host: true, // optional: makes it accessible over LAN if needed
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

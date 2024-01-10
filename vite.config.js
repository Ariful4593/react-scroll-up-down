import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";


// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: new URL(
        "./src/index.js",
        import.meta.url
      ).pathname,
      name: "uilibrary",
      fileName: "index",
    },
    rollupOptions: {
      external: ["react"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
  plugins: [react()],
});

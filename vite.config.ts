
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

console.log('Loading Vite configuration...');

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  console.log(`Building for mode: ${mode}`);
  
  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
      mode === 'development' &&
      componentTagger(),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      sourcemap: true,
    },
    // Explicitly define dependencies to ensure they're properly installed
    optimizeDeps: {
      include: ['react', 'react-dom', 'react-router-dom', '@tanstack/react-query', 'posthog-js']
    },
    // Enhanced error logging
    customLogger: {
      error: (msg) => {
        console.error(`[vite error] ${msg}`);
        return true;
      }
    }
  };
});

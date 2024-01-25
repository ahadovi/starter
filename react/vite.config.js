import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import viteEnvironmentPlugin from 'vite-plugin-environment';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react(),
    viteEnvironmentPlugin({
      __dirname: true
    })
  ],
  server: {
    host: true,
    strictPort: true,
    port: 4003
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
});

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Production build config for the ADMIN panel (admin.sensongrid.com)
export default defineConfig({
  plugins: [react()],
  envDir: '.',
  define: {
    // Override VITE_ADMIN_PREFIX to empty string for subdomain routing
    'import.meta.env.VITE_ADMIN_PREFIX': JSON.stringify(''),
  },
  build: {
    outDir: 'dist-admin',
    emptyOutDir: true,
    rollupOptions: {
      input: path.resolve(__dirname, 'index-admin.html'),
    },
  },
})

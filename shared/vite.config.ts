import path from "path"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
import { NativeFederationTypeScriptRemote } from '@module-federation/native-federation-typescript/vite'

// Module federation configuration
const federationConfig = {
  name: 'shared',
  filename: 'remoteEntry.js',
  remotes: {},
  exposes: {
    './Header': './src/export-header.ts',
    './Sidebar': './src/export-sidebar.ts',
    './types': './src/exports/types.ts',
    './theme': './src/exports/theme.ts',
  },
  shared: ['react', 'react-dom'],
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation(federationConfig),
    NativeFederationTypeScriptRemote({
      moduleFederationConfig: federationConfig,
    })
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 4173,
    cors: true,
    fs: {
      strict: false,
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  preview: {
    port: 4173,
    proxy: {
      '^/assets/@mf-types\\.zip$': {
        target: 'http://localhost:4173',
        changeOrigin: true,
        rewrite: () => '/@mf-types.zip',
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})

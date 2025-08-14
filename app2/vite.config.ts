import { defineConfig } from 'vite'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import federation from '@originjs/vite-plugin-federation'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import { resolve } from 'node:path'
import { NativeFederationTypeScriptHost } from '@module-federation/native-federation-typescript/vite'

// Module federation configuration
const federationConfig = {
  name: 'app2',
  filename: 'remoteEntry.js',
  remotes: {
    shared: 'http://localhost:4173/assets/remoteEntry.js',
  },
  exposes: {},
  shared: ['react', 'react-dom'],
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite({ autoCodeSplitting: true }),
    viteReact(),
    tailwindcss(),
    federation(federationConfig),
    NativeFederationTypeScriptHost({
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
    port: 3001,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})

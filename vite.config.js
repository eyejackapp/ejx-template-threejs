import { defineConfig } from 'vite';
import mkcert from 'vite-plugin-mkcert';

export default defineConfig({
  base: '',
  server: {
    https: true,
    port: 3000,
  },
  plugins: [mkcert()],
  assetsInclude: ['**/*.bin', '**/*.gltf', '**/*.jpg', '**/*.hdr'],
  build: {
    target: "esnext",
    minify: false,
    rollupOptions: {
      external: ['@eyejackapp/ejx-lib'],
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
        globals: {
          '@eyejackapp/ejx-lib': 'eyejack',
        }
      }
    },
  },
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';
import vitePluginRequire from 'vite-plugin-require';

export default defineConfig({
  plugins: [react(), viteTsconfigPaths(), svgrPlugin(), vitePluginRequire()],
  assetsInclude: ['**/*.docx'],
  server: {
    open: true,
  },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import legacyPlugin from "@vitejs/plugin-legacy";
import styleImport, { AntdResolve } from "vite-plugin-style-import";
import tsconfigPaths from "vite-tsconfig-paths";
// import eslintPlugin from 'vite-plugin-eslint';
import resolveExternalsPlugin from "vite-plugin-resolve-externals";

export default defineConfig({
  base: "./", // index.html文件所在位置
  root: "./", // js导入的资源路径，src
  plugins: [
    tsconfigPaths(), // 使用tsconfig中的path路径
    react(),
    legacyPlugin({
      // 支持多个浏览器版本，但是包的体积也会增加
      targets: [
        "Android > 39",
        "Chrome >= 60",
        "Safari >= 10.1",
        "iOS >= 10.3",
        "Firefox >= 54",
        "Edge >= 15",
      ],
    }),
    styleImport({
      resolves: [AntdResolve()],
      // antd按需加载
      libs: [
        {
          libraryName: "antd",
          esModule: true,
          resolveStyle: (name) => `antd/es/${name}/style/css.js`,
        },
      ],
    }),
    resolveExternalsPlugin({
      "react-router-dom": "react-router-dom",
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript
        javascriptEnabled: true,
      },
    },
  },
  server: { host: "0.0.0.0", port: 3344 },
  build: {
    minify: "terser", // 是否进行压缩,boolean | 'terser' | 'esbuild',默认使用terser
    manifest: false, // 是否产出maifest.json
    sourcemap: false, // 是否产出soucemap.json
    outDir: "build", // 产出目录
  },
});

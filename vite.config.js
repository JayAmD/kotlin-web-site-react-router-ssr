import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, transformWithEsbuild } from "vite";

export default defineConfig({
  ssr: {
    noExternal: [/^@rescui\//, /^@jetbrains\/kotlin-web-site-ui/],
  },
  plugins: [
    {
      name: "jsx-in-js-for-static-app-files",
      async transform(code, id) {
        if (/\/app\/static\/js\/.*\.js$/.test(id)) {
          return transformWithEsbuild(code, id, {
            loader: "jsx",
            jsx: "automatic",
          });
        }
      },
    },
    reactRouter(),
    tailwindcss(),
  ],
});

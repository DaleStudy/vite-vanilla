import { defineConfig } from "vite";

/** @type {import('vite').UserConfig} */
export default defineConfig(({ mode }) => {
  return {
    base: mode === "production" ? "/vite-vanilla/" : "/",
  };
});

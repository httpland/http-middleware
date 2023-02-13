import { BuildOptions } from "https://deno.land/x/dnt@0.33.1/mod.ts";

export const makeOptions = (version: string): BuildOptions => ({
  test: false,
  shims: {},
  compilerOptions: { lib: ["esnext", "dom"] },
  typeCheck: true,
  entryPoints: ["./mod.ts"],
  outDir: "./npm",
  package: {
    name: "@httpland/http-middleware",
    version,
    description: "HTTP middleware specification",
    keywords: [
      "http",
      "middleware",
      "http-middleware",
      "handler",
      "http-handler",
      "next",
      "request",
      "response",
    ],
    license: "MIT",
    homepage: "https://github.com/httpland/http-middleware",
    repository: {
      type: "git",
      url: "git+https://github.com/httpland/http-middleware.git",
    },
    bugs: {
      url: "https://github.com/httpland/http-middleware/issues",
    },
    sideEffects: false,
    type: "module",
    publishConfig: { access: "public" },
  },
  packageManager: "pnpm",
});

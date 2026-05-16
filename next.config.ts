import type { NextConfig } from "next";

/**
 * Для GitHub Pages нужен статический экспорт.
 * Под project-page (https://user.github.io/<repo>/) задайте basePath при сборке:
 *   NEXT_BASE_PATH=/<repo> npm run build
 * Готовая статика окажется в папке `out/`.
 */
const basePath = process.env.NEXT_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  images: { unoptimized: true },
};

export default nextConfig;

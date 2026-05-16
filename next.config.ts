import type { NextConfig } from "next";

// Статический экспорт для GitHub Pages (репозиторий MrNovoseltsev/Gastronom1).
const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    loader: "custom",
    loaderFile: "./src/shared/lib/imageLoader.ts",
  },
  basePath: "/Gastronom1",
  trailingSlash: true,
};

export default nextConfig;

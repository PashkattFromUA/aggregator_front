/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.abcrypto.io",
        port: "",
        pathname: "/storage/items/images/**",
      },
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgo: true, // Включение оптимизации SVG
            svgoConfig: {
              plugins: [
                // Убедитесь, что список плагинов не пуст и корректный
                { name: "preset-default" }, // Используйте стандартные настройки
                { name: "removeViewBox", active: false }, // Сохраните viewBox
              ],
            },
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;

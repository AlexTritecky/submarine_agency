/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;
module.exports = {
  webpack: (config, { isServer }) => {
    // Add support for MP4 files
    config.module.rules.push({
      test: /\.(MP4|mp4|mov|webm)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            publicPath: "/_next",
            name: "static/media/[name].[hash].[ext]",
          },
        },
      ],
    });

    // Important: return the modified config
    return config;
  },
};

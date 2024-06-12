/** @type {import('next').NextConfig} */
// next.config.mjs
import withPlugins from 'next-compose-plugins';
import path from 'path'
const nextConfig = {
  reactStrictMode: true,
  // 你可以在这里添加其他 Next.js 配置
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(scss|sass)$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            // 可以在这里配置sass-loader的选项
          },
        },
      ],
    }),
    config.module.rules.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    })
 
    return config;
  },
};
export default nextConfig

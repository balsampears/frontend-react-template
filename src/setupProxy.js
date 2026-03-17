const { createProxyMiddleware } = require('http-proxy-middleware');

/**
 * 开发环境代理配置
 * 将 /api 请求转发到后端，重启 dev server 后生效
 */
module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: process.env.PROXY_TARGET || 'http://localhost:8080',
      changeOrigin: true,
    })
  );
};

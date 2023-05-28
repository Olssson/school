const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    [
      '/api/login',
      "/api/users",
      "/api/post/tome",
      "/api/post/sendedbyme",
      "/api/admin",
      '/api/mailbox',
      '/api/adminlogin',
      '/api/users',
    ],
    createProxyMiddleware({
      target: 'http://localhost:8080',
      changeOrigin: true,
    })
  );
};
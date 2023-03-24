const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    [
      '/api/login',
      "/api/users",
      "/api/posts",
      "/api/admin",
      '/api/mailbox',
      '/api/adminlogin',
      
    ],
    createProxyMiddleware({
      target: 'http://localhost:8080',
      changeOrigin: true,
    })
  );
};
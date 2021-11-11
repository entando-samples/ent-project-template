const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/entando-template-api/api',
        createProxyMiddleware({
            target: 'http://localhost:8081',
            pathRewrite: {
                '^/entando-template-api/api': '/api', // remove base path
            },
            changeOrigin: true,
        })
    );
};

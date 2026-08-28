const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://178.105.184.173:8081',
            changeOrigin: true,

            pathRewrite: (path) => {
                return `/api${path}`;
            },
        })
    );
};
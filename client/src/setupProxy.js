const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/v1/auth/google", {
      target: "http://localhost:5000",
    })
  );
  app.use(
    createProxyMiddleware("/v1/auth/*", {
      target: "http://localhost:5000",
    })
  );
  app.use(
    createProxyMiddleware("/v1/*", {
      target: "http://localhost:5000",
    })
  );
  app.use(
    createProxyMiddleware("/v1/users/*", {
      target: "http://localhost:5000",
    })
  );
};

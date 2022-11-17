var proxy = {
  "/delay": {
    "target": "https://flash-the-slow-api.herokuapp.com",
    "secure": false,
    "changeOrigin": true
  }
};

module.exports = proxy;

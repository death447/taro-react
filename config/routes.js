const routesTransform = require("../routesTransform");

const routes = [
  {
    title: "首页",
    path: "pages/home/index",
  },
  {
    title: "我的",
    path: "pages/personal/index",
  },
];

module.exports = routesTransform(routes);

import routes from "../config/routes";

export default {
  pages: routes.pages,
  subPackages: routes.subPackages,
  tabBar: {
    selectedColor: "#1E58F0",
    borderStyle: "white",
    color: "#b7bbc6",
    list: [
      {
        text: "首页",
        pagePath: "pages/home/index",
        iconPath: "assets/images/home.png",
        selectedIconPath: "assets/images/home_on.png",
      },
      {
        text: "我的",
        pagePath: "pages/personal/index",
        iconPath: "assets/images/personal.png",
        selectedIconPath: "assets/images/personal_on.png",
      },
    ],
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  permission: {
    "scope.userLocation": {
      desc: "你的位置信息将用于小程序展示",
    },
  },
}

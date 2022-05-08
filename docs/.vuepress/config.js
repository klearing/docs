
const headConf = require("./config/headConf")
const pluginsConf = require("./config/pluginsConf")
// const navConf = require("./config/navConf")
const nav = require("./nav")
// const sidebarConf=require("./config/sidebarConf")



module.exports = {
  base: "/docs/",
  title: "全栈攻城狮",
  description: "全栈、前端、后端、工程师",
  head: headConf,
  plugins: pluginsConf,
  themeConfig: {
    logo: "/assets/img/hero.png",
    lastUpdated: "更新时间",
    nav: nav,
    //数组形式侧边栏
    /**sidebar: [
      "",
      "about",
      {
        title: "美丽的CSS", // 必要的
        path: "/css/", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1, // 可选的, 默认值是 1
        children: ["/css/c-aaa","/css/c-bbb","/css/c-ccc"],
      },
    ], */
    //对象形式
  },
};

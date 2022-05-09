const headConf = require("./config/headConf");
const pluginsConf = require("./config/pluginsConf");
// const navConf = require("./config/navConf")
const nav = require("./nav");
// const sidebarConf=require("./config/sidebarConf")

module.exports = {
  base: "/docs/",
  title: "全栈攻城狮",
  description: "全栈、前端、后端、工程师",
  head: headConf,
  // theme: "reco",
  plugins: pluginsConf,
  themeConfig: {
    logo: "/assets/img/hero.png",
    lastUpdated: "更新时间",
    nav: nav,
  },
  // themeConfig: {
  //   // 博客配置
  //   blogConfig: {
  //     category: {
  //       location: 2, // 在导航栏菜单中所占的位置，默认2
  //       text: "Category", // 默认文案 “分类”
  //     },
  //     tag: {
  //       location: 3, // 在导航栏菜单中所占的位置，默认3
  //       text: "Tag", // 默认文案 “标签”
  //     },
  //     socialLinks: [
  //       // 信息栏展示社交信息
  //       { icon: "reco-github", link: "https://github.com/recoluan" },
  //       { icon: "reco-npm", link: "https://www.npmjs.com/~reco_luan" },
  //     ],
  //     nav: [{ text: "TimeLine", link: "/timeline/", icon: "reco-date" }],
  //   },
  // },
  markdown: {
    lineNumbers: true,
  },
};

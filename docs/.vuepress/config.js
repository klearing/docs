const moment = require("moment");
moment.locale("zh-cn");

module.exports = {
  base: "/docs/",
  title: "全栈攻城狮",
  description: "全栈、前端、后端、工程师",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["meta", { name: "author", content: "全栈攻城狮" }],
    [
      "meta",
      {
        name: "Keywords",
        content: "个人博客，全栈攻城狮，前端，后端，javascript，java",
      },
    ],
  ],
  plugins: {
    "@vuepress/last-updated": {
      transformer: (timestamp) => moment(timestamp).format("LLLL"),
    },
    "@vssue/vuepress-plugin-vssue": {
      // 设置 `platform` 而不是 `api`
      platform: "github-v4",
      // 其他的 Vssue 配置
      owner: "klearing",
      repo: "docs",
      clientId: "f294a234914859676a47",
      clientSecret: "e0dd285b5d7ebc6c006709fee1a1492ab8fa5349",
      autoCreateIssue: true,
    },
  },
  themeConfig: {
    logo: "/assets/img/hero.png",
    lastUpdated: "更新时间",
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/about" },
      {
        text: "Languages",
        items: [
          {
            text: "Group1",
            items: [
              { text: "Home", link: "/" },
              { text: "Guide", link: "/about" },
            ],
          },
          {
            text: "Group2",
            items: [
              { text: "Home", link: "/" },
              { text: "Guide", link: "/about" },
            ],
          },
        ],
      },
      { text: "External", link: "https://google.com" },
    ],
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
    sidebar: {
      "/css/": ["c-aaa", "c-bbb", "c-ccc"],
    },
  },
};

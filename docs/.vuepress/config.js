module.exports = {
  title:"全栈攻城狮",
  description:"全栈、前端、后端、工程师",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'author', content: '全栈攻城狮' }],
    ['meta', { name: 'Keywords', content: '个人博客，全栈攻城狮，前端，后端，javascript，java' }]
  ],
  themeConfig: {
    logo: "/assets/img/hero.png",
    lastUpdated: '更新时间',
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
    sidebar:{
        "/css/":[
            "c-aaa","c-bbb","c-ccc"
        ]
    }
  },
}; 

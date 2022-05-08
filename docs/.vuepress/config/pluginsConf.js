const moment = require("moment");
moment.locale("zh-cn");
const secret = require("./secret")

module.exports = {
  "@vuepress/last-updated": {
    transformer: (timestamp) => moment(timestamp).format("LLLL"),
  },
  "@vssue/vuepress-plugin-vssue": {
    // 设置 `platform` 而不是 `api`
    platform: "github-v4",
    // 其他的 Vssue 配置
    owner: "klearing",
    repo: "docs",
    clientId: secret.clientId,
    clientSecret: secret.clientSecret,
    autoCreateIssue: true,
  },
  "@vuepress/back-to-top": true,
  "@vuepress/google-analytics": {
    ga: secret.ga,
  },
};

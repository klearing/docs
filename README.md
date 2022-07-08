1. 上面导航栏自己写 nav.js
2. 侧边导航栏的顺序如何控制

修改完后直接git add .
再git commit -m""
再yarn deploy或者npm run deploy进行部署
再 git push origin main 推送到github上

git密码：大小写
公司电脑无法部署，无法执行bash命令
因此公司电脑修改完后直接直接git push origin main上去
在自己电脑上git pull origin main，然后就可以部署了
open_ssl和time_out错误都是网络连接错误，连热点可以解决这一问题
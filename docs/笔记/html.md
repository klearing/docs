---
title: html
---
## 目录
[[toc]]

## 1.html、body、document和window
### <u>1.html</u>
1. html是文档的根元素，它包包括两个唯一的子元素body和head。
2. 在rem适配时，通过html元素的font-size来进行适配
3. 通过document.documentElement来获取
### <u>2.body</u>
1. body元素包含了文档的可见内容
2. 通过document.body可以进行获取
3. 给body设置背景色，就算什么都没有，也会占满整个浏览器可视窗口
### <u>3.document</u>
1. document 是window的子属性，可以通过document获取到html元素和body元素
### <u>4.window</u>
1. 保存着DOM、BOM等内容，包括browser、navigator、location等
----- 
## 2. 
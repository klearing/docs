---
title: html
---


## 目录
[[toc]]

## 只用二级标题

## 图片

<img :src="$withBase('/favicon.ico')" alt="favicon" class="custom">
 
 ![favicon](/favicon.ico)

## 你好，one
[Home](/) <!-- 跳转到根部的 README.md -->

<!-- [foo](/foo/) 跳转到 foo 文件夹的 index.html -->

<!-- [foo heading](./#heading) 跳转到 foo/index.html 的特定标题位置 -->

<!-- [bar - three](../bar/three.md) 具体文件可以使用 .md 结尾（推荐） -->

<!-- [bar - four](../bar/four.html)  也可以用 .html -->


### 表格
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |


### 链接
[百度一下，你就知道](http://www.baidu.com)


### Emoji
:tada: :100:

[更多emoji](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json)

### 自定义容器
::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个详情块，在 IE / Edge 中不生效
:::

::: danger STOP
危险区域，禁止通行
:::

::: details 点击查看代码
```js
console.log('你好，VuePress！')
```
:::

### 代码块中的行高亮
``` js {1,3-4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
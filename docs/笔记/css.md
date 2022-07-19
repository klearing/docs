---
title: css
autoPrev: html
---

## 目录
[[toc]]

## 1.各种height等值的含义
### 1.offsetWidth
当前对象的宽度，width+padding+margin
::: tip
与el.style.width的区别
1. el.style.width返回值除了数字外还有单位
2. 如设置为百分比单位，el.style.width返回百分比，而offsetWidth则返回宽度值
3. 若未给HTML指定过width的style（class中给定不算），则style.width返回的是空字符串
:::

### 2.offsetLeft
当前对象到其父级左边的距离
::: tip
1. 不能对其进行赋值，赋值需要通过el.style.left
2. 始终返回距离（与offsetWidth类似）
:::

### 3.scrollWidth
元素内容区高度的值

### 4.scrollTop
被卷曲的头部

### 5.clientWidth
元素的内部宽度，包括内边距，但不包括滚动条、边距和外边框

### 6.clientLeft
表示元素左边框的宽度

### 7.mousemove事件相关

![favicon](/height.png)

#### 1.e.offsetY
鼠标距离带有定位的父元素内边框的距离

#### 2.e.clientY
鼠标距离客户端可视区域的垂直距离

#### 3.e.pageY
相对于整个页面来说

#### 4.e.screenX
相对于当前电脑屏幕

## 2.结构伪类选择器
```js
/*
*整体思路：选择ul的第几个子元素li
*/
<ul>
    <li></li>
    <li></li>
    <li></li>
</ul>

ul li:first-child {}
```
1. **first-child/last-child**
2. **nth-child(1)/nth-last-child(1)**
3. **nth-child(2n/even)/nth-child(2n+1/odd)**
4. **nth-child(-n+i)**   &nbsp;  <u>前i项子元素，n从0到-i</u>  
   **nth-child(n+i)**    &nbsp;  <u>后i项子元素</u>
5. **nth-of-type(n)**  &nbsp; <u>匹配特定第几个给定子元素</u>
::: tip
1. 如ul li:nth-child(3), nth-child如果匹配到的ul的第三个子元素不是li，那么相当于没有匹配上
:::





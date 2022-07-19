---
title: vue
---

## 目录
[[toc]]

## 1. 动态类和动态属性
### 动态类
#### 1.对象写法
```js
/**
*1.v-bind和普通的class共存
*/
<div :class = "{active: isActive, 'class1'}"></div>

/**
*2.绑定的数据不必定义在模板中
*/
<div :class = "classObj"></div>
data() {
    return {
        classObj: {active : true, static : false}
    };
};

/**
 * 3. 可以直接绑定计算属性
 */
<div :class = "classObj"></div>
data() {
    return {
        isActive: false;
        flag: '1';
    },
    computed: {
        classObj() { 
            return {
                active : this.isActive;
                static : this.flag === '1'? true: false
            };
        };
    };
};
```
#### 2.数组写法
```js
<div :class = "[isActive, isSort]"><div>
data() {
    return {
        isActive: 'active',
        isSort: 'sort'
    };
}
```
#### 3.数组和对象结合
```js
<div :class = "[{active: isActive}, 'class1']"></div>
```
::: tip
如何判断何时需要加引号？
1. 作为变量时，不加引号
2. 作为对象的key时，不加引号
:::

### 动态属性
#### 1.对象写法
```js
<div :style = {fontColor: color, font-size: fSize + 'px'}></div>
```
#### 2.数组写法
```js
<div :style = [baseStyles, overRidingStyles]></div>
```
::: tip
1. style中注意加单位（class中不需要）
2. 开发中尽量不要用行内样式，不好维护
::: 





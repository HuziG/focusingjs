<a href="./README-en.md">English Doc</a>

## 项目介绍

FocusingJs 是一款可植入的沉浸式阅读插件，易用，开源

[//]: # ([试试看]&#40;https://spacingjs.com&#41;)

[//]: # (![]&#40;screenshot.png&#41;)

兼容常见的 PC 浏览器：Chrome，Firefox，Safar，Edge，QQ 浏览器，IE11

简单两行代码，即可实现简约的阅读器功能

![这是图片](https://raw.githubusercontent.com/HuziG/focusingjs/master/assets/cn.gif)

### 支持 CodePen 体验

[![CodePen](https://img.shields.io/badge/-CodePen-000000?style=for-the-badge&logo=CodePen&logoColor=ffffff)](https://codepen.io/huzig/pen/qBVWezR?editors=1112)

## 安装和使用

### npm
安装
```
npm i focusingjs --save
```
使用
```js
<div id="#article"> 文章内容 ...... </div>

// 入口文件引入 css 样式文件
import 'focusingjs/dist/focusingjs.min.css'

import FocusingJs from 'focusingjs'

const fs = new FocusingJs('#article')

fs.open()
```

### cdn
```html
<div id="#article"> 文章内容 ...... </div>

<link
    rel="stylesheet"
    type="text/css"
    href="https://cdn.jsdelivr.net/gh/HuziG/focusingjs/cdn/dist/focusingjs.min.css"
/>

<script
    type="text/javascript"
    src="https://cdn.jsdelivr.net/gh/HuziG/focusingjs/cdn/dist/focusingjs.min.js"
></script>

<script type="text/javascript">
  const fs = new FocusingJs('#article')

  fs.open()
</script>  
```

### ⚠️ 在 ssr 渲染模式下使用，react 框架看这里

插件中涉及到了浏览器的 **window** 属性 ， 在 react 的生命周期中 render() 阶段负责创建虚拟 dom 等等操作，
render 及之前的阶段，并没有将组件渲染为实际的dom节点，所以**无法获取**浏览器 window 对象，需要改善写法，如下

```js
// react class
componentDidMount()
{
  const fs = new FocusingJs('#id')
  fs.open()
}

// react hook
useEffect(() => {
  const fs = new FocusingJs('#id')
  fs.open()
}, [])
```


[//]: # (# 安装视频)

[//]: # (可以通过视频，更加直观地去学习使用)

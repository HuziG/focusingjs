## 项目介绍

FocusingJs 是一款可植入的沉浸式阅读插件，易用，开源

[//]: # ([试试看]&#40;https://spacingjs.com&#41;)

[//]: # (![]&#40;screenshot.png&#41;)

兼容常见的 PC 浏览器：Chrome，Firefox，Safar，Edge，QQ 浏览器，IE11

暂不支持移动端，后续开放

## 安装和使用

### npm
安装
```
npm i focusingjs --save
```
使用
```js
// 在 main.js 中引入 css 样式文件
import 'focusingjs.min.css'

// 在需要调用的文件，引入 focusingjs
import FocusingJs from 'focusingjs'

const fs = new FocusingJs('#id')

fs.open()
```

### cdn
```html
// 引入样式文件
<link 
    rel="stylesheet" 
    type="text/css" 
    href="https://cdn.jsdelivr.net/gh/HuziG/focusingjs@main/cdn/dist/focusingjs.min.css"
/>

// 引入 js 文件
<script 
    type="text/javascript" 
    src="https://cdn.jsdelivr.net/gh/HuziG/focusingjs@main/cdn/dist/focusingjs.min.js"
></script>

<script type="text/javascript">
const fs = new FocusingJs('#id')

fs.open()
</script>  
```

### ⚠️ 在 ssr 渲染模式下使用

插件中涉及到了浏览器的 window 属性 ， 在 react的生命周期中 render() 阶段负责创建虚拟 dom 等等操作，
render 及之前的阶段，并没有将组件渲染为实际的dom节点，所以无法获取浏览器 window 对象，需要改善写法

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

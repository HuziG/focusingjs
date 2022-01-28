<a href="./README.md">中文文档</a>

## What is FocusingJs ?

FocusingJs is an implantable, immersive reading plugin, easy to use, and open source

compatible PC browser：Chrome，Firefox，Safar，Edge，IE11

Two lines of simple code for implement minimalist reader functionality

![example image](https://raw.githubusercontent.com/HuziG/focusingjs/master/assets/en.gif)

### Support CodePen Trying

[![CodePen](https://img.shields.io/badge/-CodePen-000000?style=for-the-badge&logo=CodePen&logoColor=ffffff)](https://codepen.io/huzig/pen/xxPxBdj)

## Install & Using

### npm
install
```
npm i focusingjs --save
```
use
```js
<div id="#article"> content ...... </div>

// enter file import css
import 'focusingjs/dist/focusingjs.min.css'

import FocusingJs from 'focusingjs'

const fs = new FocusingJs('#article')

fs.open()
```

### cdn
```html
<div id="#article"> content ...... </div>

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

### ⚠️ under ssr render mode

the plugin involve **window** attribue ， in react life, the render() need to create som dom，
before the render ，it has no put the component render to actual dom，so the plugin cant get the browser **window** object，then we neet to change our methods，look these

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

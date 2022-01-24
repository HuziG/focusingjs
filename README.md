# FocusingJs

<!-- Badge -->
![MIT License](https://img.shields.io/badge/License-MIT-blue)

# 项目介绍

FocusingJs 是一款可植入的沉浸式阅读插件，易用，开源 

[//]: # ([试试看]&#40;https://spacingjs.com&#41;)

[//]: # (![]&#40;screenshot.png&#41;)

兼容常见的 PC 浏览器：Chrome，Firefox，Safar，Edge，QQ 浏览器，IE11

暂不支持移动端，后续开放

# 安装和使用

### npm

```
npm i focusingjs --save
```

安装后

```
// 在 main.js 中引入 css 样式文件
import 'focusingjs.min.css'

// 在需要调用的文件，引入 focusingjs
import FocusingJs from 'focusingjs'

const fs = new FocusingJs('#id')

fs.open()
```

### cdn

```
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/HuziG/focusingjs@master/cdn/dist/focusingjs.min.css"/>

<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/HuziG/focusingjs@master/cdn/dist/focusingjs.min.css"></script>
<script type="text/javascript">
const fs = new FocusingJs('#id')

fs.open()
</script>  
```

[//]: # (# 安装视频)

[//]: # (可以通过视频，更加直观地去学习使用)

# 参与开发工作
想加入合作，可在 issues 提出

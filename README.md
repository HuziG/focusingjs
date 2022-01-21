# install plugin

use npm
````
npm install --save focusingjs
````

use cdn
```
// 引入 css
<link rel="stylesheet" type="text/css" href="focusingjs.css"/>
```

# use plugin

npm 
```
import focusingjs from 'focusingjs'

const ins = focusingjs('#id')

// open the read mode
ins.open() 

// close the readmode
ins.close() 
```

cdn
```
const ins = new FocusingJs('#article')

// open the read mode
ins.open() 

// close the readmode
ins.close() 
```

# docs

发布教程：

https://blog.csdn.net/u014302759/article/details/77946892

npm 发布地址：

https://www.npmjs.com/package/focusingjs

# todos

1. 正式版修整
2. 文件组织
3. 代码压缩

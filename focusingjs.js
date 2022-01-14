class FocusingJs {
  static LOCALSTORAGE_KEY = 'focusingjs_style'

  constructor (id) {
    this.id = id

    this.styleObj = {
      backgroundColor: '', // - 背景色
      lineHight: '', // - 行高
      fontSize: '', // - 字体大小
      color: '', // 字体颜色
      letterSpacing: '', // - 字间距
      width: '' // - 版幅宽度
    }

    // this.init()
  }

  init () {
    // 不存在容器
    if (document.querySelectorAll('focusingjs').length === 0) {
      const htmlDom = document.querySelectorAll('html')[0]
      const newDiv = document.createElement("focusing-js")
      newDiv.className = 'focusingjs-container'
      newDiv.innerHTML = '<div class="main-container"></div>'
      htmlDom.appendChild(newDiv)
    }

    this.focusingJs = document.querySelectorAll('focusing-js')[0]
    this.focusingJsContainer = document.querySelectorAll('focusing-js .main-container')[0]
  }

  /**
   * 开启专注
   */
  open () {
    // this.checkLocalStyle()
    this.toggleContainerShow('open')
    const content = document.querySelectorAll(this.id)[0]
    this.focusingJsContainer.innerHTML = content.innerHTML
  }

  /**
   * 关闭模式
   */
  close () {
    // localStorage.setItem('focusingjs_style', this.styleObj)
    this.toggleContainerShow('close')
  }

  /**
   * 切换专注容器展示
   * @param state 关闭: 'close' 开启: 'open'
   */
  toggleContainerShow(state) {
    this.focusingJsContainer.style.opacity = state === 'close' ? '0' : '1'
  }

  /**
   检测本地样式存储
   */
  checkLocalStyle () {
    const localStyleData = localStorage.getItem(FocusingJs.LOCALSTORAGE_KEY)

    if (localStyleData) {
      this.styleObj = checkValue(localStyleData)
    }

    const that = this

    /**
     * 检测存储数据完整性
     * @param value 本地参数
     * @returns {*} 设置样式属性值
     */
    function checkValue (value) {
      value = JSON.parse(value)

      let returnValue

      try {
        returnValue = {
          backgroundColor: value.backgroundColor,
          lineHight: value.lineHight,
          fontSize: value.fontSize,
          color: value.color,
          letterSpacing: value.letterSpacing,
          width: value.width
        }
      } catch (e) {
        // 清除本地存储
        localStorage.removeItem(FocusingJs.LOCALSTORAGE_KEY)
        returnValue = that.getDefaultStyle()
      }

      return returnValue
    }
  }

  /**
   * 获取默认样式
   * @returns {{backgroundColor: string, color: string, lineHight: string, width: string, letterSpacing: string, fontSize: string}}
   */
  getDefaultStyle () {
    return {
      backgroundColor: '#eeeeee',
      lineHight: '8rem',
      fontSize: '3rem',
      color: '#333333',
      letterSpacing: '0.5rem',
      width: '0 30%'
    }
  }

  /**
   * 修改样式
   * @param styleKey 修改样式
   * @param value 修改值
   */
  static changeStyle (styleKey, value) {
    this.focusingJs = document.querySelectorAll('focusing-js')[0]
    this.focusingJs.style[styleKey] = value
    this.styleObj[styleKey] = value
  }
}

/**
 * 修改阅读背景色
 * @param el 当前元素
 * @param bc 背景色
 * @param tc 文字颜色
 */
function changeBc(el, bc, tc) {
  FocusingJs.changeStyle('backgroundColor', bc)
  FocusingJs.changeStyle('color', tc)

  const blocks = document.querySelectorAll('focusing-js .main-color-container .block')
  blocks.forEach(item => {
    item.innerHTML = 'Aa'
  })

  el.innerHTML = `<span style="color: #17A34A">-</span>`
}

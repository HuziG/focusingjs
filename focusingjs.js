class FocusingJs {
  static LOCALSTORAGE_KEY = 'focusingjs_style'

  constructor (id) {
    this.id = id

    this.styleObj = {
      bgc: '', // - 背景色
      lineHight: '', // - 行高
      fontSize: '', // - 字体大小
      fontColor: '', // 字体颜色
      letterSpacing: '', // - 字间距
      containerWidth: '' // - 版幅宽度
    }

    this.init()
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
          bgc: value.bgc,
          lineHight: value.lineHight,
          fontSize: value.fontSize,
          fontColor: value.fontColor,
          letterSpacing: value.letterSpacing,
          containerWidth: value.containerWidth
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
   * 设置默认样式
   * @returns {{lineHight: string, letterSpacing: string, fontSize: string, fontColor: string, bgc: string, containerWidth: string}}
   */
  getDefaultStyle () {
    return {
      bgc: '#eeeeee',
      lineHight: '8rem',
      fontSize: '3rem',
      fontColor: '#333333',
      letterSpacing: '0.5rem',
      containerWidth: '0 30%'
    }
  }
}

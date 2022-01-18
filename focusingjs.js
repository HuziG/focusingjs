import { getTemplate } from './template'

class FocusingJs {
  static LOCALSTORAGE_KEY = 'focusingjs_style'

  constructor (id) {
    this.id = id
    this.styleObj = {
      backgroundColor: '',
      lineHeight: '',
      fontSize: '',
      color: '',
      letterSpacing: '',
      fontWeight: '',
      width: ''
    }

    this.init()
    this.initSlider()
    this.checkLocalStyle()
  }

  init () {
    // 不存在容器
    if (document.querySelectorAll('focusingjs').length === 0) {
      const htmlDom = document.querySelectorAll('html')[0]

      // const newDiv = document.createElement("focusing-js")
      // newDiv.className = 'focusingjs-container'
      // newDiv.innerHTML = '<div class="main-container"></div>'

      const newDiv = document.createElement("div")
      newDiv.innerHTML = getTemplate()

      htmlDom.appendChild(newDiv)
    }

    this.focusingJs = document.querySelectorAll('focusing-js')[0]
    this.focusingJsContainer = document.querySelectorAll('focusing-js .main-container')[0]

    // this.initSlider()
  }

  initSlider() {
    try{
      const lineHeightSlider = document.querySelector('focusing-js #lineHeight-slider'),
        widthSlider = document.querySelector('focusing-js #width-slider'),
        fontSizeSlider = document.querySelector('focusing-js #fontSize-slider'),
        letterSpacingSlider = document.querySelector('focusing-js #letterSpacing-slider'),
        fontWeightSlider = document.querySelector('focusing-js #fontWeight-slider')

      createSlider([lineHeightSlider, widthSlider, letterSpacingSlider, fontWeightSlider, fontSizeSlider], {
        start: 0,
        step: 20,
        behaviour: 'snap',
        connect: [true, false],
        range: {
          'min': 0,
          'max': 100
        }
      })

      const lineHeightStep = { 0: '3rem', 20: '4rem', 40: '5rem', 60: '6rem', 80: '7rem', 100: '8rem' },
        widthStep = { 0: '100%', 20: '90%', 40: '85%', 60: '80%', 80: '70%', 100: '60%' },
        fontSizeStep = { 0: '1rem', 20: '1.5rem', 40: '2rem', 60: '2.5rem', 80: '3rem', 100: '3.5rem' },
        letterSpacingStep = { 0: '0.5rem', 20: '0.7rem', 40: '0.9rem', 60: '1.1rem', 80: '1.3rem', 100: '1.5rem' },
        fontWeightStep = { 0: 300, 20: 400, 40: 500, 60: 600, 80: 700, 100: 800 }

      const that = this

      setSliderStep(lineHeightSlider, this.styleObj.lineHeight ,lineHeightStep)
      setSliderStep(widthSlider, this.styleObj.width, widthStep)
      setSliderStep(fontSizeSlider, this.styleObj.fontSize, fontSizeStep)
      setSliderStep(letterSpacingSlider, this.styleObj.letterSpacing, letterSpacingStep)
      setSliderStep(fontWeightSlider, this.styleObj.fontWeight, fontWeightStep)

      lineHeightSlider.noUiSlider.on('slide', function(e) {
        handleSetStyle('lineHeight', e, lineHeightStep)
      });
      widthSlider.noUiSlider.on('slide', function(e) {
        handleSetStyle('width', e, widthStep)
      });
      fontSizeSlider.noUiSlider.on('slide', function(e) {
        handleSetStyle('fontSize', e, fontSizeStep)
      });
      letterSpacingSlider.noUiSlider.on('slide', function(e) {
        handleSetStyle('letterSpacing', e, letterSpacingStep)
      });
      fontWeightSlider.noUiSlider.on('slide', function(e) {
        handleSetStyle('fontWeight', e, fontWeightStep)
      });

      /**
       * 设置样式
       * @param styleKey 样式名
       * @param e 进度值
       * @param value 样式映射值
       */
      function handleSetStyle(styleKey, e, value) {
        e = Math.ceil(e[0])
        that.changeStyle(styleKey, value[e])
      }

      /**
       * 创建进度条实例
       * @param eles 元素
       * @param obj 进度条配置
       */
      function createSlider(eles, obj) {
        eles.forEach(ele => {
          noUiSlider.create(ele, obj);
        })
      }

      /**
       * 设置进度条进度
       * @param slider 进度条实例
       * @param e 值
       * @param value 映射值
       */
      function setSliderStep(slider, e, value) {
        const newValue = {}
        for (let key in value) {
          newValue[value[key]] = key
        }
        slider.noUiSlider.set(newValue[e]);
      }
    } catch (e) {
      console.error('initSlider', e)
    }
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
      this.setStyle()
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
          lineHeight: value.lineHeight,
          fontSize: value.fontSize,
          fontWeight: value.fontWeight,
          color: value.color,
          letterSpacing: value.letterSpacing,
          width: value.width
        }
      } catch (e) {
        localStorage.removeItem(FocusingJs.LOCALSTORAGE_KEY)
        returnValue = that.getDefaultStyle()
      }

      return returnValue
    }
  }

  setStyle() {
    for (let key in this.styleObj) {
      this.changeStyle(key, this.styleObj[key])
    }
  }

  /**
   * 获取默认样式
   * @returns {{backgroundColor: string, color: string, lineHeight: string, width: string, letterSpacing: string, fontSize: string}}
   */
  getDefaultStyle () {
    return {
      backgroundColor: '#D1BFEB',
      lineHeight: '8rem',
      fontSize: '2.5rem',
      color: '#333333',
      letterSpacing: '0.5rem',
      fontWeight: 500,
      width: '85%'
    }
  }

  /**
   * 修改样式
   * @param styleKey 修改样式
   * @param value 修改值
   */
  changeStyle (styleKey, value) {
    let el
    if (['backgroundColor', 'color'].includes(styleKey)) {
      el = document.querySelectorAll('focusing-js')[0]
    } else {
      el = document.querySelectorAll('focusing-js .main-container')[0]
    }
    el.style[styleKey] = value
    this.styleObj[styleKey] = value
  }

  saveSetting () {
    localStorage.setItem(FocusingJs.LOCALSTORAGE_KEY, JSON.stringify(this.styleObj))
  }
}

/**
 * 修改阅读背景色
 * @param el 当前元素
 * @param bc 背景色
 * @param tc 文字颜色
 */
function changeBc(el, bc, tc) {
  focusingJsIns.changeStyle('backgroundColor', bc)
  focusingJsIns.changeStyle('color', tc)

  const blocks = document.querySelectorAll('focusing-js .main-color-container .block')
  blocks.forEach(item => {
    item.innerHTML = 'Aa'
  })

  el.innerHTML = `<span style="color: #17A34A">-</span>`
}

/**
 * 切换控制显示与隐藏
 * @param state 显示：inline-block 隐藏：none
 */
function toggleEditShow(state) {
  const maskEle = document.querySelectorAll('focusing-js .edit-container-mask')[0],
    editEle = document.querySelectorAll('focusing-js .edit-container')[0]

  handle(state)

  function handle(state) {
    maskEle.style.display = state
    editEle.style.display = state
  }

  focusingJsIns.saveSetting()
}

/**
 * 绑定进度条 change 事件
 *
 * 获取回调结果
 *
 * 设置样式 changeStyle
 */

/**
 * 开启专注
 *
 * 获取本地配置信息
 *  y 获取配置信息，设置样式
 *  n 获取默认配置信息，设置样式
 *
 * 再次开启专注
 */

/**
 * 退出专注模式
 *
 * 获取样式对象信息
 *
 * 缓存到本地
 */

/**
 * 20220117
 *
 * 头部菜单 fixed
 *
 * 字体方案
 */

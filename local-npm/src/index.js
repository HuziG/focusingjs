const noUiSlider = require('nouislider')

const FocusingJsTemplate = `
  <link rel="preload" href="//at.alicdn.com/t/font_3143830_bfpbyskko9i.woff2" as="font" type="font/woff2"
      crossOrigin="anonymous">
  <link rel="stylesheet" href="//at.alicdn.com/t/font_3143830_bfpbyskko9i.css">
  <focusing-js>
      <span
        class="iconfont icon-arrowleft"
        style="position: fixed;left: 2rem;top: 1.5rem;font-size: 2rem;cursor: pointer"
        onClick="top.FocusingJsExitMode()"
      ></span>
      <span
        class="iconfont icon-setting"
        style="position: fixed;right: 1.5rem;top: 1.5rem;font-size: 2rem;cursor: pointer"
        onClick="top.FocusingJsToggleEditShow('inline-block')"
      ></span>

      <div class="fs-main-container heti heti--poetry"></div>

      <div class="fs-edit-container-mask" onClick="top.FocusingJsToggleEditShow('none')"></div>

      <div class="fs-edit-container">
        <div style="position: relative">
          <span
            class="iconfont icon-close"
            style="position: absolute;right: 1.2rem;top: 1.2rem;font-size: 1.5rem;cursor: pointer;color: #333333 !important;"
            onClick="top.FocusingJsToggleEditShow('none')"
          ></span>
        </div>

        <div class="fs-main-color-wrapper">
          <div class="fs-label">主题色</div>
          <div class="fs-main-color-container">
            <div onClick="top.FocusingJsChangeBc(this, '#9DD2DC', '#333333')" class="fs-block"
                 style="background-color: #9DD2DC; color: #333333;">Aa
            </div>
            <div onClick="top.FocusingJsChangeBc(this, '#F0D592', '#333333')" class="fs-block"
                 style="background-color: #F0D592; color: #333333;">Aa
            </div>
            <div onClick="top.FocusingJsChangeBc(this, '#D1BFEB', '#333333')" class="fs-block"
                 style="background-color: #D1BFEB; color: #333333;">Aa
            </div>
            <div onClick="top.FocusingJsChangeBc(this, '#FCF5ED', '#333333')" class="fs-block"
                 style="background-color: #FCF5ED; color: #333333;">Aa
            </div>
            <div onClick="top.FocusingJsChangeBc(this, '#F5F5F5', '#333333')" class="fs-block"
                 style="background-color: #F5F5F5; color: #333333;">Aa
            </div>
            <div onClick="top.FocusingJsChangeBc(this, '#363B3F', '#eeeeee')" class="fs-block"
                 style="background-color: #363B3F; color: #eeeeee;">Aa
            </div>
            <div onClick="top.FocusingJsChangeBc(this, '#222222', '#cccccc')" class="fs-block"
                 style="background-color: #222222; color: #cccccc;">Aa
            </div>
          </div>
        </div>

        <div id="fs-slider-container">
          <div class="fs-slider-item">
            <div class="fs-label">字体大小</div>
            <div id="fs-fontSize-slider"></div>
          </div>
          <div class="fs-slider-item">
            <div class="fs-label">行间距</div>
            <div id="fs-lineHeight-slider"></div>
          </div>
          <div class="fs-slider-item">
            <div class="fs-label">版面宽度</div>
            <div id="fs-width-slider"></div>
          </div>
          <div class="fs-slider-item">
            <div class="fs-label">字间距</div>
            <div id="fs-letterSpacing-slider"></div>
          </div>
          <div class="fs-slider-item">
            <div class="fs-label">字体粗细</div>
            <div id="fs-fontWeight-slider"></div>
          </div>
        </div>

      </div>
    </focusing-js>
  `
const LOCALSTORAGE_KEY = 'focusingjs_style'

class FocusingJs {
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

    this.initMethod()
    this.init()
  }

  initMethod() {
    top.FocusingJsIns = null

    top.FocusingJsChangeBc = function (el, bc, tc) {
      top.FocusingJsIns.changeStyle('backgroundColor', bc)
      top.FocusingJsIns.changeStyle('color', tc)

      const blocks = document.querySelectorAll('focusing-js .fs-main-color-container .fs-block')
      blocks.forEach(item => {
        item.innerHTML = 'Aa'
      })

      el.innerHTML = `<span style="color: #17A34A">-</span>`
    }

    top.FocusingJsToggleEditShow = function (state) {
      const maskEle = document.querySelectorAll('focusing-js .fs-edit-container-mask')[0],
        editEle = document.querySelectorAll('focusing-js .fs-edit-container')[0]

      handle(state)

      function handle (state) {
        maskEle.style.display = state
        editEle.style.display = state
      }

      top.FocusingJsIns.saveSetting()
    }

    top.FocusingJsInit = function () {
      top.FocusingJsIns.init()
    }

    top.FocusingJsExitMode = function () {
      top.FocusingJsIns.close()
    }
  }

  init () {
    top.FocusingJsIns = this

    // 不存在容器
    if (document.querySelectorAll('focusingjs').length === 0) {
      const htmlDom = document.querySelectorAll('html')[0]
      const newDiv = document.createElement("div")
      newDiv.innerHTML = FocusingJsTemplate
      htmlDom.appendChild(newDiv)

      this.checkLocalStyle()
      this.setStyle()

      setTimeout(() => {
        this.initSlider()
      }, 300)
    }

    this.focusingJsContainer = document.querySelectorAll('focusing-js .fs-main-container')[0]
    this.focusingJs = document.querySelectorAll('focusing-js')[0]
  }

  initSlider() {
    try{
      const that = this
      const lineHeightSlider = document.querySelector('focusing-js #fs-lineHeight-slider'),
        widthSlider = document.querySelector('focusing-js #fs-width-slider'),
        fontSizeSlider = document.querySelector('focusing-js #fs-fontSize-slider'),
        letterSpacingSlider = document.querySelector('focusing-js #fs-letterSpacing-slider'),
        fontWeightSlider = document.querySelector('focusing-js #fs-fontWeight-slider')

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

      const lineHeightStep = { 0: '3rem', 20: '4.5rem', 40: '6rem', 60: '7.5rem', 80: '9rem', 100: '10rem' },
        widthStep = { 0: '90%', 20: '80%', 40: '75%', 60: '70%', 80: '65%', 100: '60%' },
        fontSizeStep = { 0: '1rem', 20: '1.5rem', 40: '2rem', 60: '2.5rem', 80: '3rem', 100: '3.5rem' },
        letterSpacingStep = { 0: '0.5rem', 20: '0.7rem', 40: '0.9rem', 60: '1.1rem', 80: '1.3rem', 100: '1.5rem' },
        fontWeightStep = { 0: 300, 20: 400, 40: 500, 60: 600, 80: 700, 100: 800 }

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

      function handleSetStyle(styleKey, e, value) {
        e = Math.ceil(e[0])
        that.changeStyle(styleKey, value[e])
      }

      function createSlider(eles, obj) {
        eles.forEach(ele => {
          noUiSlider.create(ele, obj);
        })
      }

      function setSliderStep(slider, e, value) {
        const newValue = {}
        for (let key in value) {
          newValue[value[key]] = key
        }
        slider.noUiSlider.set(newValue[e]);
      }
    } catch (e) {
      console.error('initSlider error', e)
    }
  }

  open () {
    top.FocusingJsIns = this

    this.toggleContainerShow('open')
    const content = document.querySelectorAll(this.id)[0]
    this.focusingJsContainer.innerHTML = content.innerHTML

    this.lockBody(true)
  }

  close () {
    this.lockBody(false)
    this.toggleContainerShow('close')
  }

  lockBody(lock) {
    const body = document.querySelectorAll('body')[0]
    if (lock) {
      this.originBodyStyle = body.style
      body.style.overflow = 'hidden'
    } else {
      body.style = this.originBodyStyle
    }
  }

  toggleContainerShow(state) {
    const mapValue = {
      'close': {
        'opacity': 0,
        'zIndex': -1
      },
      'open': {
        'opacity': 1,
        'zIndex': 9999999
      }
    }

    this.focusingJs.style.opacity = mapValue[state].opacity
    this.focusingJs.style.zIndex = mapValue[state].zIndex
  }

  checkLocalStyle () {
    const localStyleData = localStorage.getItem(LOCALSTORAGE_KEY)

    if (localStyleData) {
      this.styleObj = checkValue(localStyleData)
    } else {
      this.styleObj = this.getDefaultStyle()
    }

    const that = this

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
        localStorage.removeItem(LOCALSTORAGE_KEY)
        returnValue = that.getDefaultStyle()
      }

      return returnValue
    }
  }

  setStyle() {
    for (let key in this.styleObj) {
      this.changeStyle(key, this.styleObj[key])

      if (key === 'backgroundColor') {
        setDefaultBg(this.styleObj[key])
      }
    }

    function setDefaultBg(value) {
      const index = ['#9DD2DC', '#F0D592', '#D1BFEB', '#FCF5ED', '#F5F5F5', '#363B3F', '#222222']
        .findIndex(v => v === value)
      const blocks = document.querySelectorAll('focusing-js .fs-main-color-container .fs-block')
      blocks[index].innerHTML = `<span style="color: #17A34A">-</span>`
    }
  }

  getDefaultStyle () {
    return {
      backgroundColor: '#D1BFEB',
      lineHeight: '7.5rem',
      fontSize: '2.5rem',
      color: '#333333',
      letterSpacing: '0.5rem',
      fontWeight: 500,
      width: '80%'
    }
  }

  changeStyle (styleKey, value) {
    let el
    if (['backgroundColor', 'color'].includes(styleKey)) {
      el = document.querySelectorAll('focusing-js')[0]
    } else {
      el = document.querySelectorAll('focusing-js .fs-main-container')[0]
    }
    el.style[styleKey] = value
    this.styleObj[styleKey] = value
  }

  saveSetting() {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(this.styleObj))
  }
}


module.exports = FocusingJs

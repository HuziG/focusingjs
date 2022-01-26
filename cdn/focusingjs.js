
const FocusingJsTemplate = `
  <link rel="preload" href="//at.alicdn.com/t/font_3143830_bfpbyskko9i.woff2" as="font" type="font/woff2"
      crossOrigin="anonymous">
  <link rel="stylesheet" href="//at.alicdn.com/t/font_3143830_bfpbyskko9i.css">
  <focusing-js>
      <span
        class="iconfont icon-arrowleft"
        style="position: fixed;left: 2rem;top: 1.5rem;font-size: 2rem;cursor: pointer"
        onClick="FocusingJsExitMode()"
      ></span>
      <span
        class="iconfont icon-setting"
        style="position: fixed;right: 1.5rem;top: 1.5rem;font-size: 2rem;cursor: pointer"
        onClick="FocusingJsToggleEditShow('inline-block')"
      ></span>

      <div class="fs-main-container"></div>

      <div class="fs-edit-container-mask" onClick="FocusingJsToggleEditShow('none')"></div>

      <div class="fs-edit-container">
        <div style="position: relative">
          <span
            class="iconfont icon-close"
            style="position: absolute;right: 1.2rem;top: 1.2rem;font-size: 1.5rem;cursor: pointer;color: #333333 !important;"
            onClick="FocusingJsToggleEditShow('none')"
          ></span>
        </div>

        <div class="fs-main-color-wrapper">
          <div class="fs-label">主题色</div>
          <div class="fs-main-color-container">
            <div onClick="FocusingJsChangeBc(this, '#9DD2DC', '#333333')" class="fs-block"
                 style="background-color: #9DD2DC; color: #333333;">Aa
            </div>
            <div onClick="FocusingJsChangeBc(this, '#F0D592', '#333333')" class="fs-block"
                 style="background-color: #F0D592; color: #333333;">Aa
            </div>
            <div onClick="FocusingJsChangeBc(this, '#D1BFEB', '#333333')" class="fs-block"
                 style="background-color: #D1BFEB; color: #333333;">Aa
            </div>
            <div onClick="FocusingJsChangeBc(this, '#FCF5ED', '#333333')" class="fs-block"
                 style="background-color: #FCF5ED; color: #333333;">Aa
            </div>
            <div onClick="FocusingJsChangeBc(this, '#F5F5F5', '#333333')" class="fs-block"
                 style="background-color: #F5F5F5; color: #333333;">Aa
            </div>
            <div onClick="FocusingJsChangeBc(this, '#363B3F', '#eeeeee')" class="fs-block"
                 style="background-color: #363B3F; color: #eeeeee;">Aa
            </div>
            <div onClick="FocusingJsChangeBc(this, '#222222', '#cccccc')" class="fs-block"
                 style="background-color: #222222; color: #cccccc;">Aa
            </div>
          </div>
        </div>

        <div id="fs-slider-container">
          <div class="fs-slider-item">
            <div class="fs-label">字体大小</div>
            <input class="fs-slider" id="fs-fontSize-slider" type="range" value="" min="0" max="100" step="20">
          </div>
          <div class="fs-slider-item">
            <div class="fs-label">行间距</div>
            <input class="fs-slider" id="fs-lineHeight-slider" type="range" value="" min="0" max="100" step="20">
          </div>
          <div class="fs-slider-item">
            <div class="fs-label">版面宽度</div>
            <input class="fs-slider" id="fs-width-slider" type="range" value="" min="30" max="100">
          </div>
          <div class="fs-slider-item">
            <div class="fs-label">字间距</div>
            <input class="fs-slider" id="fs-letterSpacing-slider" type="range" value="" min="0" max="100" step="20">
          </div>
          <div class="fs-slider-item">
            <div class="fs-label">字体粗细</div>
            <input class="fs-slider" id="fs-fontWeight-slider" type="range" value="" min="0" max="100" step="20">
          </div>
        </div>
      </div>
    </focusing-js>
  `

let curFocusingJsIns = null

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
  }

  init () {
    // 不存在容器
    if (document.querySelectorAll('focusingjs').length === 0) {
      // this.insertJs()
      const htmlDom = document.querySelectorAll('html')[0]
      const newDiv = document.createElement("div")
      newDiv.innerHTML = FocusingJsTemplate
      htmlDom.appendChild(newDiv)

      this.checkLocalStyle()
      this.setStyle()
    }

    curFocusingJsIns = this

    this.focusingJsContainer = document.querySelectorAll('focusing-js .fs-main-container')[0]
    this.focusingJs = document.querySelectorAll('focusing-js')[0]
  }

  // insertJs() {
  //   const head= document.getElementsByTagName('body')[0];
  //   const script= document.createElement('script');
  //   script.type= 'text/javascript';
  //   script.src= 'https://cdn.bootcdn.net/ajax/libs/noUiSlider/15.5.0/nouislider.min.js';
  //   script.onload = FocusingJsLoadSlider
  //   head.appendChild(script);
  // }

  open () {
    curFocusingJsIns = this

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
    const opacityValue = {
      'close': 0,
      'open': 1
    }
    const zIndexValue = {
      'close': -1,
      'open': 9999999
    }
    this.focusingJs.style.opacity = opacityValue[state]
    this.focusingJs.style.zIndex = zIndexValue[state]
  }

  checkLocalStyle () {
    const localStyleData = localStorage.getItem(FocusingJs.LOCALSTORAGE_KEY)

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
        localStorage.removeItem(FocusingJs.LOCALSTORAGE_KEY)
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

    this.setSlider()

    function setDefaultBg (value) {
      const index = ['#9DD2DC', '#F0D592', '#D1BFEB', '#FCF5ED', '#F5F5F5', '#363B3F', '#222222']
        .findIndex(v => v === value)
      const blocks = document.querySelectorAll('focusing-js .fs-main-color-container .fs-block')
      blocks[index].innerHTML = `<span style="color: #17A34A">-</span>`
    }
  }

  setSlider() {
    const lineHeightSlider = document.querySelector('focusing-js #fs-lineHeight-slider'),
      widthSlider = document.querySelector('focusing-js #fs-width-slider'),
      fontSizeSlider = document.querySelector('focusing-js #fs-fontSize-slider'),
      letterSpacingSlider = document.querySelector('focusing-js #fs-letterSpacing-slider'),
      fontWeightSlider = document.querySelector('focusing-js #fs-fontWeight-slider')

    const that = this

    lineHeightSlider.addEventListener('input', (event) => {
      handleSetStyle('lineHeight', Number(event.target.value), lineHeightStep)
    });
    widthSlider.addEventListener('input', (event) => {
      handleSetStyle('width', Number(event.target.value) + '%')
    });
    fontSizeSlider.addEventListener('input', (event) => {
      handleSetStyle('fontSize', Number(event.target.value), fontSizeStep)
    });
    letterSpacingSlider.addEventListener('input', (event) => {
      handleSetStyle('letterSpacing', Number(event.target.value), letterSpacingStep)
    });
    fontWeightSlider.addEventListener('input', (event) => {
      handleSetStyle('fontWeight', Number(event.target.value), fontWeightStep)
    });

    const lineHeightStep = { 0: '3rem', 20: '4.5rem', 40: '6rem', 60: '7.5rem', 80: '9rem', 100: '10rem' },
      fontSizeStep = { 0: '1rem', 20: '1.5rem', 40: '2rem', 60: '2.5rem', 80: '3rem', 100: '3.5rem' },
      letterSpacingStep = { 0: '0.5rem', 20: '0.7rem', 40: '0.9rem', 60: '1.1rem', 80: '1.3rem', 100: '1.5rem' },
      fontWeightStep = { 0: 300, 20: 400, 40: 500, 60: 600, 80: 700, 100: 800 }

    setSliderStepValue(lineHeightSlider, this.styleObj.lineHeight ,lineHeightStep)
    setSliderStepValue(fontSizeSlider, this.styleObj.fontSize, fontSizeStep)
    setSliderStepValue(letterSpacingSlider, this.styleObj.letterSpacing, letterSpacingStep)
    setSliderStepValue(fontWeightSlider, this.styleObj.fontWeight, fontWeightStep)
    setWidthSliderValue(widthSlider, this.styleObj.width)

    function setSliderStepValue(slider, e, value) {
      const newValue = {}
      for (let key in value) {
        newValue[value[key]] = key
      }
      slider.setAttribute('value', newValue[e]);
    }
    function setWidthSliderValue(slider, value) {
      // substr: 60% => 60
      slider.setAttribute('value', value.substr(0, value.length - 1));
    }

    function handleSetStyle(styleKey, e, value) {
      that.changeStyle(styleKey, value ? value[e] : e)
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

  saveSetting () {
    localStorage.setItem(FocusingJs.LOCALSTORAGE_KEY, JSON.stringify(this.styleObj))
  }
}

function FocusingJsChangeBc(el, bc, tc) {
  curFocusingJsIns.changeStyle('backgroundColor', bc)
  curFocusingJsIns.changeStyle('color', tc)

  const blocks = document.querySelectorAll('focusing-js .fs-main-color-container .fs-block')
  blocks.forEach(item => {
    item.innerHTML = 'Aa'
  })

  el.innerHTML = `<span style="color: #17A34A">-</span>`
}

function FocusingJsToggleEditShow(state) {
  const maskEle = document.querySelectorAll('focusing-js .fs-edit-container-mask')[0],
    editEle = document.querySelectorAll('focusing-js .fs-edit-container')[0]

  handle(state)

  function handle(state) {
    maskEle.style.display = state
    editEle.style.display = state
  }

  curFocusingJsIns.saveSetting()
}

// function FocusingJsLoadSlider() {
//   curFocusingJsIns.initSlider()
// }

function FocusingJsExitMode() {
  curFocusingJsIns.close()
}

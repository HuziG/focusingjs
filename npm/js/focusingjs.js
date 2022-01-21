console.log('focusingjs.js')

/**
 * 修改阅读背景色
 * @param el 当前元素
 * @param bc 背景色
 * @param tc 文字颜色
 */
top.FocusingJsChangeBc = function (el, bc, tc) {
  top.FocusingJsIns.changeStyle('backgroundColor', bc)
  top.FocusingJsIns.changeStyle('color', tc)

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
top.FocusingJsToggleEditShow = function (state) {
  const maskEle = document.querySelectorAll('focusing-js .edit-container-mask')[0],
    editEle = document.querySelectorAll('focusing-js .edit-container')[0]

  handle(state)

  function handle(state) {
    maskEle.style.display = state
    editEle.style.display = state
  }

  top.FocusingJsIns.saveSetting()
}

// function FocusingJsLoadSlider() {
//   top.FocusingJsIns.initSlider()
// }

top.FocusingJsInit = function () {
  top.FocusingJsIns.init()
}

top.FocusingJsExitMode = function () {
  top.FocusingJsIns.close()
}

const FocusingTemplate =
  `
  <link rel="preload" href="//at.alicdn.com/t/font_3143830_bfpbyskko9i.woff2" as="font" type="font/woff2"
      crossOrigin="anonymous">
  <link rel="stylesheet" href="//at.alicdn.com/t/font_3143830_bfpbyskko9i.css">
  <link rel="stylesheet" type="text/css" href="nouislider.min.css"/>
  <focusing-js class="focusingjs-container">
      <span
        class="iconfont icon-arrowleft"
        style="position: absolute;left: 2rem;top: 1.5rem;font-size: 2rem;cursor: pointer"
        onClick="exitMode()"
      ></span>
      <span
        class="iconfont icon-setting"
        style="position: absolute;right: 1.5rem;top: 1.5rem;font-size: 2rem;cursor: pointer"
        onClick="toggleEditShow('inline-block')"
      ></span>

      <div class="main-container"></div>

      <div class="edit-container-mask" onClick="toggleEditShow('none')"></div>

      <div class="edit-container edit-container-enter-ani">
        <div style="position: relative">
          <span
            class="iconfont icon-close"
            style="position: absolute;right: 1.2rem;top: 1.2rem;font-size: 1.5rem;cursor: pointer;color: #333333 !important;"
            onClick="toggleEditShow('none')"
          ></span>
        </div>

        <div class="main-color-wrapper">
          <div class="label">主题色</div>
          <div class="main-color-container">
            <div onClick="changeBc(this, '#9DD2DC', '#333333')" class="block"
                 style="background-color: #9DD2DC; color: #333333;">
              <span style="color: #17A34A">-</span>
            </div>
            <div onClick="changeBc(this, '#F0D592', '#333333')" class="block"
                 style="background-color: #F0D592; color: #333333;">Aa
            </div>
            <div onClick="changeBc(this, '#D1BFEB', '#333333')" class="block"
                 style="background-color: #D1BFEB; color: #333333;">Aa
            </div>
            <div onClick="changeBc(this, '#FCF5ED', '#333333')" class="block"
                 style="background-color: #FCF5ED; color: #333333;">Aa
            </div>
            <div onClick="changeBc(this, '#F5F5F5', '#333333')" class="block"
                 style="background-color: #F5F5F5; color: #333333;">Aa
            </div>
            <div onClick="changeBc(this, '#363B3F', '#eeeeee')" class="block"
                 style="background-color: #363B3F; color: #eeeeee;">Aa
            </div>
            <div onClick="changeBc(this, '#222222', '#cccccc')" class="block"
                 style="background-color: #222222; color: #cccccc;">Aa
            </div>
          </div>
        </div>

        <div id="slider-container">
          <div class="slider-item">
            <div class="label">字体大小</div>
            <div id="fontSize-slider"></div>
          </div>
          <div class="slider-item">
            <div class="label">行间距</div>
            <div id="lineHeight-slider"></div>
          </div>
          <div class="slider-item">
            <div class="label">版面宽度</div>
            <div id="width-slider"></div>
          </div>
          <div class="slider-item">
            <div class="label">字间距</div>
            <div id="letterSpacing-slider"></div>
          </div>
          <div class="slider-item">
            <div class="label">字体粗细</div>
            <div id="fontWeight-slider"></div>
          </div>
        </div>

      </div>
    </focusing-js>
  `

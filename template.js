export const getTemplate = () => {
  return `
  <link rel="preload" href="//at.alicdn.com/t/font_3143830_bfpbyskko9i.woff2" as="font" type="font/woff2"
      crossOrigin="anonymous">
  <link rel="stylesheet" href="//at.alicdn.com/t/font_3143830_bfpbyskko9i.css">
    <link rel="stylesheet" type="text/css" href="focusingjs.css"/>
    <link rel="stylesheet" type="text/css" href="nouislider.min.css"/>
    <focusing-js className="focusingjs-container">
      <span className="iconfont icon-shezhi"></span>

      <span
        className="iconfont icon-arrowleft"
        style="position: absolute;left: 2rem;top: 1.5rem;font-size: 2rem;cursor: pointer"
      ></span>
      <span
        className="iconfont icon-setting"
        style="position: absolute;right: 1.5rem;top: 1.5rem;font-size: 2rem;cursor: pointer"
        onClick="toggleEditShow('inline-block')"
      ></span>

      <div className="main-container">
        <h1>出师表</h1>

        <p>
          先帝创业未半而中道崩殂，今天下三分，益州疲弊，此诚危急存亡之秋也。然侍卫之臣不懈于内，忠志之士忘身于外者，盖追先帝之殊遇，欲报之于陛下也。诚宜开张圣听，以光先帝遗德，恢弘志士之气，不宜妄自菲薄，引喻失义，以塞忠谏之路也。
        </p>
        <p>
          宫中府中，俱为一体；陟罚臧否，不宜异同。若有作奸犯科及为忠善者，宜付有司论其刑赏，以昭陛下平明之理；不宜偏私，使内外异法也。
        </p>
        <p>
          侍中、侍郎郭攸之、费祎、董允等，此皆良实，志虑忠纯，是以先帝简拔以遗陛下：愚以为宫中之事，事无大小，悉以咨之，然后施行，必能裨补阙漏，有所广益。
        </p>
        <p>
          将军向宠，性行淑均，晓畅军事，试用于昔日，先帝称之曰能，是以众议举宠为督。愚以为营中之事，悉以咨之，必能使行阵和睦，优劣得所。
        </p>
        <p>
          亲贤臣，远小人，此先汉所以兴隆也；亲小人，远贤臣，此后汉所以倾颓也。先帝在时，每与臣论此事，未尝不叹息痛恨于桓、灵也。侍中、尚书、长史、参军，此悉贞良死节之臣，愿陛下亲之信之，则汉室之隆，可计日而待也。
        </p>
        <p>
          臣本布衣，躬耕于南阳，苟全性命于乱世，不求闻达于诸侯。先帝不以臣卑鄙，猥自枉屈，三顾臣于草庐之中，咨臣以当世之事，由是感激，遂许先帝以驱驰。后值倾覆，受任于败军之际，奉命于危难之间，尔来二十有一年矣。
        </p>
        <p>
          先帝知臣谨慎，故临崩寄臣以大事也。受命以来，夙夜忧叹，恐托付不效，以伤先帝之明；故五月渡泸，深入不毛。今南方已定，兵甲已足，当奖率三军，北定中原，庶竭驽钝，攘除奸凶，兴复汉室，还于旧都。此臣所以报先帝而忠陛下之职分也。至于斟酌损益，进尽忠言，则攸之、祎、允之任也。
        </p>
        <p>
          愿陛下托臣以讨贼兴复之效，不效，则治臣之罪，以告先帝之灵。若无兴德之言，则责攸之、祎、允等之慢，以彰其咎；陛下亦宜自谋，以咨诹善道，察纳雅言，深追先帝遗诏。臣不胜受恩感激。
        </p>
        <p>
          今当远离，临表涕零，不知所言。
        </p>
        <p>
          先帝创业未半而中道崩殂，今天下三分，益州疲弊，此诚危急存亡之秋也。然侍卫之臣不懈于内，忠志之士忘身于外者，盖追先帝之殊遇，欲报之于陛下也。诚宜开张圣听，以光先帝遗德，恢弘志士之气，不宜妄自菲薄，引喻失义，以塞忠谏之路也。
        </p>
        <p>
          宫中府中，俱为一体；陟罚臧否，不宜异同。若有作奸犯科及为忠善者，宜付有司论其刑赏，以昭陛下平明之理；不宜偏私，使内外异法也。
        </p>
        <p>
          侍中、侍郎郭攸之、费祎、董允等，此皆良实，志虑忠纯，是以先帝简拔以遗陛下：愚以为宫中之事，事无大小，悉以咨之，然后施行，必能裨补阙漏，有所广益。
        </p>
        <p>
          将军向宠，性行淑均，晓畅军事，试用于昔日，先帝称之曰能，是以众议举宠为督。愚以为营中之事，悉以咨之，必能使行阵和睦，优劣得所。
        </p>
        <p>
          亲贤臣，远小人，此先汉所以兴隆也；亲小人，远贤臣，此后汉所以倾颓也。先帝在时，每与臣论此事，未尝不叹息痛恨于桓、灵也。侍中、尚书、长史、参军，此悉贞良死节之臣，愿陛下亲之信之，则汉室之隆，可计日而待也。
        </p>
        <p>
          臣本布衣，躬耕于南阳，苟全性命于乱世，不求闻达于诸侯。先帝不以臣卑鄙，猥自枉屈，三顾臣于草庐之中，咨臣以当世之事，由是感激，遂许先帝以驱驰。后值倾覆，受任于败军之际，奉命于危难之间，尔来二十有一年矣。
        </p>
        <p>
          先帝知臣谨慎，故临崩寄臣以大事也。受命以来，夙夜忧叹，恐托付不效，以伤先帝之明；故五月渡泸，深入不毛。今南方已定，兵甲已足，当奖率三军，北定中原，庶竭驽钝，攘除奸凶，兴复汉室，还于旧都。此臣所以报先帝而忠陛下之职分也。至于斟酌损益，进尽忠言，则攸之、祎、允之任也。
        </p>
        <p>
          愿陛下托臣以讨贼兴复之效，不效，则治臣之罪，以告先帝之灵。若无兴德之言，则责攸之、祎、允等之慢，以彰其咎；陛下亦宜自谋，以咨诹善道，察纳雅言，深追先帝遗诏。臣不胜受恩感激。
        </p>
        <p>
          今当远离，临表涕零，不知所言。
        </p>
      </div>

      <div className="edit-container-mask" onClick="toggleEditShow('none')">
      </div>

      <div className="edit-container edit-container-enter-ani">
        <div style="position: relative">
      <span
        className="iconfont icon-close"
        style="position: absolute;right: 1.2rem;top: 1.2rem;font-size: 1.5rem;cursor: pointer;color: #333333 !important;"
        onClick="toggleEditShow('none')"
      ></span>
        </div>

        <div className="main-color-wrapper">
          <div className="label">主题色</div>
          <div className="main-color-container">
            <div onClick="changeBc(this, '#9DD2DC', '#333333')" className="block"
                 style="background-color: #9DD2DC; color: #333333;">
              <span style="color: #17A34A">-</span>
            </div>
            <div onClick="changeBc(this, '#F0D592', '#333333')" className="block"
                 style="background-color: #F0D592; color: #333333;">Aa
            </div>
            <div onClick="changeBc(this, '#D1BFEB', '#333333')" className="block"
                 style="background-color: #D1BFEB; color: #333333;">Aa
            </div>
            <div onClick="changeBc(this, '#FCF5ED', '#333333')" className="block"
                 style="background-color: #FCF5ED; color: #333333;">Aa
            </div>
            <div onClick="changeBc(this, '#F5F5F5', '#333333')" className="block"
                 style="background-color: #F5F5F5; color: #333333;">Aa
            </div>
            <div onClick="changeBc(this, '#363B3F', '#eeeeee')" className="block"
                 style="background-color: #363B3F; color: #eeeeee;">Aa
            </div>
            <div onClick="changeBc(this, '#222222', '#cccccc')" className="block"
                 style="background-color: #222222; color: #cccccc;">Aa
            </div>
          </div>
        </div>

        <div id="slider-container">
          <div className="slider-item">
            <div className="label">字体大小</div>
            <div id="fontSize-slider"></div>
          </div>
          <div className="slider-item">
            <div className="label">行间距</div>
            <div id="lineHeight-slider"></div>
          </div>
          <div className="slider-item">
            <div className="label">版面宽度</div>
            <div id="width-slider"></div>
          </div>
          <div className="slider-item">
            <div className="label">字间距</div>
            <div id="letterSpacing-slider"></div>
          </div>
          <div className="slider-item">
            <div className="label">字体粗细</div>
            <div id="fontWeight-slider"></div>
          </div>
        </div>

      </div>
    </focusing-js>
    <script src="nouislider.js"></script>
    <script src="focusingjs.js"></script>
  `
}

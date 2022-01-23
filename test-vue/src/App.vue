<template>
  <div>
    <div id="app">
      <img alt="Vue logo" src="./assets/logo.png">

      2、操引兵十五万，分三队而行。于路又连接刘延告急文书，操先提五万军亲临白马，靠土山紥住。遥望山前平川旷野之地，颜良前部精兵十万，排成阵势。操骇然，回顾吕布旧将宋宪曰：“吾闻汝乃吕布部下猛将，今可与颜良一战。”宋宪领诺，绰枪上马，直出阵前。颜良横刀立马于门旗下；见宋宪马至，良大喝一声，纵马来迎。战不三合，手起刀落，斩宋宪于阵前。曹操大惊曰：“真勇将也！”魏续曰：“杀我同伴，愿去报仇！”操许之。续上马持矛，径出阵前，大骂颜良。良更不打话，交马一合，照头一刀，劈魏续于马下。操曰：“今谁敢当之？”徐晃应声而出，与颜良战二十合，败归本阵。诸将栗然。曹操收军，良亦引军退去。

      3、操引关公朝见献帝，帝命为偏将军。公谢恩归宅。操次日设大宴，会众谋臣武士，以客礼待关公，延之上座；又备绫锦及金银器皿相送。关公都送与二嫂收贮。关公自到许昌，操待之甚厚：小宴三日，大宴五日；又送美女十人，使侍关公。关公尽送入内门，令伏侍二嫂。却又三日一次于内门外躬身施礼，动问二嫂安否。二夫人回问皇叔之事毕，曰“叔叔自便”，关公方敢退回。操闻之，又叹服关公不已。
    </div>

    <div>
      <button @click="open">Open Mode</button>
    </div>
  </div>
</template>

<script>
import FocusingJs from 'focusingjs'

export default {
  name: 'App',
  mounted () {
    this.$nextTick(() => {
      const ins = new FocusingJs('#app')
      this.ins = ins
    })
  },
  methods:{
    open() {
      this.ins.open()
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

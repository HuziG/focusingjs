<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">

    <h1>hello </h1>

    <p>hello world</p>

    <button @click="open">Open Mode</button>
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

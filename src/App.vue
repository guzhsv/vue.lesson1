<template>
  <div id="app">
    <h1> {{message}} </h1>
    <calc/>
  </div>
</template>

<script>
import calc from './components/calc.vue'

export default {
  name: 'App',
  components: {
    calc
  },
  data () {
    return {
      message: 'Калькулятор'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.calc {
  margin: 20px;
}

.indent{
  margin-right:10px;
}

</style>

<template>
  <div id="app">
    <construction/>
  </div>
</template>

<script>
import Construction from './components/Construction.vue'

export default {
  name: 'Wilant.be',
  components: {
    Construction
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
